"use strict"

var packetSchema = {
    id: "/packetSchema",
    type: "object",
    properties: {
        type: {
            type: ["string"]
        },
        payload: {
            type: ["string", "object"]
        }
    }
}

module.exports = packetSchema