"use strict"

var _ = require("lodash")
var stringify = require('fast-stable-stringify');

var parallel = require('fastparallel')({
    released: released,
    results: false
})

function publishEach(client, packets) {
    console.log("publishEach")
    parallel(client, publish, packets, function donePublishing() {
        console.log("All Packets Published")
    })
}

function released () {
    console.log("Parallel released")
}

function publish(packet, callback) {
    console.log("publish")
    if (_.isPlainObject(packet.payload)) {
        packet.payload = stringify(packet.payload)
    }
    this.publish(packet.topic, packet.payload, {
        qos: packet.qos || 0,
        retain: false
    }, function publishCallback() {
        console.log("Published: ", packet.payload)
        callback()
    });
}

module.exports = publishEach