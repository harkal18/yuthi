"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SendGetRequestModule = require("../utils/SendGetRequest");
var ConstantsModule = require("../utils/Constants");
var chalk = require('chalk');
var CLI = require('clui');
var Spinner = CLI.Spinner;
var Get = /** @class */ (function () {
    function Get() {
    }
    Get.prototype.init = function (url) {
        var current = this;
        var progressbar = new Spinner(chalk.hex(ConstantsModule.Constants.YELLOW)("waiting for the response ..."));
        var initTime;
        var endTime;
        var sendGetRequest = new SendGetRequestModule.SendGetRequest();
        sendGetRequest.setGetRequestListener({
            onStart: function () {
                progressbar.start();
                initTime = Date.now();
            },
            onError: function (error) {
                progressbar.stop();
                current.logError(error);
            },
            onEnd: function () {
                progressbar.stop();
                endTime = Date.now();
            },
            onComplete: function (statusCode, response) {
                var timeTaken = endTime - initTime;
                current.logResponse(statusCode, response, timeTaken);
            }
        });
        sendGetRequest.send(url);
    };
    Get.prototype.logError = function (error) {
        console.log(chalk.underline.hex(ConstantsModule.Constants.RED)("Error") +
            chalk.hex(ConstantsModule.Constants.YELLOW)(" : " + error));
    };
    Get.prototype.logResponse = function (statusCode, response, timeTaken) {
        if (statusCode === ConstantsModule.Constants.RESPONSE_OK) {
            console.log(chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Status Code") +
                chalk.hex(ConstantsModule.Constants.GREEN)(" : " + statusCode));
            console.log(chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Response") +
                chalk.hex(ConstantsModule.Constants.GREEN)(" : " + response));
            console.log(chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Time Taken") +
                chalk.hex(ConstantsModule.Constants.GREEN)(" : " + timeTaken + " ms"));
        }
        else {
            console.log(chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Status Code") +
                chalk.hex(ConstantsModule.Constants.RED)(" : " + statusCode));
            console.log(chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Response") +
                chalk.hex(ConstantsModule.Constants.RED)(" : " + response));
            console.log(chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Time Taken") +
                chalk.hex(ConstantsModule.Constants.GREEN)(" : " + timeTaken + " ms"));
        }
    };
    return Get;
}());
exports.Get = Get;
