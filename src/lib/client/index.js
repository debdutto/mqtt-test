var mqtt = require("mqtt")
var publisher = require("./publisher")
var subscriber = require("./subscriber")
var config = require('../../config')
var _ = require('lodash')

function startClient(params) {
    if (!options) {
        console.log("Please specify options object")
        return
    }
    var client;
    if (params.url) {
        client = mqtt.connect(params.url, params.options)
    } else {
        client = mqtt.connect(params.options)
    }
    client.on(config.mqtt.connectStatus, handleConnect)

    function handleConnect(connack) {
        if (params.publish && _.isEmpty(params.packets)) {
            publisher(client, params.packets)
        }

        if (params.subscribe && _.isEmpty(params.topics)) {
            subscriber(client, params.topics)
        }
    }
}
