"use strict"

var completeSchema = {
    id: "/completeSchema",
    type: "object",
    properties: {
        packetArray: {
            "type": "array",
            "items": {
                "anyOf": [
                    {
                        "$ref": "/packetSchema"
                    },
                    {
                        "type": "string"
                    }
                ]
            }
        }
    }
}

module.exports = completeSchema