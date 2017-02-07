"use strict"

let jsonschema = require("jsonschema")
let validator = new jsonschema.Validator
let packetSchema = require("./packetSchema")
let completeSchema = require("./completeSchema")

validator.addSchema(packetSchema, "/packetSchema")

function validateJSON(jsonObj) {
    let valid = validator.validate(jsonObj, completeSchema).valid
    if (!valid) {
        console.log("Please validate the JSON is correct.")
    }
    return valid
}