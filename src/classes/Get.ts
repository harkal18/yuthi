import SendGetRequestModule = require("../utils/SendGetRequest");
import ConstantsModule = require("../utils/Constants");

const chalk = require('chalk');
const CLI = require('clui');
const Spinner = CLI.Spinner;

export class Get {

    init(url: string): void {

        let current = this;

        let progressbar = new Spinner(chalk.hex(ConstantsModule.Constants.YELLOW)("waiting for the response ..."));
        let initTime: number;
        let endTime: number;

        let sendGetRequest = new SendGetRequestModule.SendGetRequest();
        sendGetRequest.setGetRequestListener({
            onStart(): void {
                progressbar.start();
                initTime = Date.now();
            },
            onError(error: string): void {
                progressbar.stop();
                current.logError(error);
            },
            onEnd(): void {
                progressbar.stop();
                endTime = Date.now();
            },
            onComplete(statusCode: number, response: any): void {

                let timeTaken = endTime - initTime;

                current.logResponse(statusCode, response, timeTaken);

            }
        });
        sendGetRequest.send(url);

    }

    logError(error: string) {
        console.log(
            chalk.underline.hex(ConstantsModule.Constants.RED)("Error") +
            chalk.hex(ConstantsModule.Constants.YELLOW)(" : " + error)
        );
    }

    logResponse(statusCode: number, response: any, timeTaken: number): void {
        if (statusCode === ConstantsModule.Constants.RESPONSE_OK) {
            console.log(
                chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Status Code") +
                chalk.hex(ConstantsModule.Constants.GREEN)(" : " + statusCode)
            );

            console.log(
                chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Response") +
                chalk.hex(ConstantsModule.Constants.GREEN)(" : " + response)
            );

            console.log(
                chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Time Taken") +
                chalk.hex(ConstantsModule.Constants.GREEN)(" : " + timeTaken + " ms")
            );
        } else {
            console.log(
                chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Status Code") +
                chalk.hex(ConstantsModule.Constants.RED)(" : " + statusCode)
            );

            console.log(
                chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Response") +
                chalk.hex(ConstantsModule.Constants.RED)(" : " + response)
            );

            console.log(
                chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Time Taken") +
                chalk.hex(ConstantsModule.Constants.GREEN)(" : " + timeTaken + " ms")
            );
        }

    }

}