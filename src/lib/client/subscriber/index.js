"use strict"

function subscribe (client, topics) {
    client.subscribe(topics, function () {
        console.log("Subscribed successfully to ", topics)
    })
    client.on("message", function(topic, message) {
        console.log("Message Received on ", topic, "with message - ", message.toString(), "\n")
    })
}

module.exports = subscribe