import InitModule = require('./Init');
import AboutModule = require('./About');
import GetModule = require('./Get');
import PostModule = require('./Post');
import ConstantsModule = require("../utils/Constants");
import fs = require('fs');

const chalk = require('chalk');

const COMMAND_INIT = "init";
const COMMAND_HELP = "help";
const COMMAND_GET = "get";
const COMMAND_POST = "post";
const COMMAND_HISTORY = "history";
const COMMAND_ABOUT = "about";

const FLAG_HELP: string = "--help";
const FLAG_HELP_SHORT: string = "-h";

export class RunCommand {

    init(command: string[]): void {

        let secondArgument = command[2];
        let thirdArgument: string;
        let fourthArgument: string;

        switch (secondArgument) {
            case COMMAND_INIT:
                new InitModule.Init().init();
                break;
            case COMMAND_HELP:
                this.printHelpFile();
                break;
            case COMMAND_GET:
                thirdArgument = command[3];
                if (thirdArgument !== undefined) {
                    if (thirdArgument === FLAG_HELP || thirdArgument === FLAG_HELP_SHORT) {
                        console.log(
                            chalk.underline.hex(ConstantsModule.Constants.GREEN)("Info") +
                            chalk.hex(ConstantsModule.Constants.GREEN)(" : You can send a get request to a specific url using this command. ")
                        );
                        console.log(chalk.hex(ConstantsModule.Constants.YELLOW)("For example, give command like this => "));
                        console.log(chalk.underline.hex(ConstantsModule.Constants.GREEN)("'yuthi get http://yourdomain.com/address?param=value'"));
                    } else {
                        new GetModule.Get().init(thirdArgument);
                    }
                } else {
                    console.log(
                        chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Warning") +
                        chalk.hex(ConstantsModule.Constants.YELLOW)(" : Please provide a valid url. ")
                    );
                    console.log(chalk.hex(ConstantsModule.Constants.YELLOW)("For example, give command like this => "));
                    console.log(chalk.underline.hex(ConstantsModule.Constants.YELLOW)("'yuthi get http://yourdomain.com/address?param=value'"));
                }
                break;
            case COMMAND_POST:
                thirdArgument = command[3];
                if (thirdArgument !== undefined) {
                    if (thirdArgument === FLAG_HELP || thirdArgument === FLAG_HELP_SHORT) {
                        console.log(
                            chalk.underline.hex(ConstantsModule.Constants.GREEN)("Info") +
                            chalk.hex(ConstantsModule.Constants.GREEN)(" : You can send a post request to a specific url using this command. ")
                        );
                        console.log(chalk.hex(ConstantsModule.Constants.YELLOW)("For example, give command like this => "));
                        console.log(chalk.underline.hex(ConstantsModule.Constants.GREEN)("'yuthi post http://yourdomain.com/address param1=val1,param2=val2'"));
                    } else {

                        fourthArgument = command[4];

                        new PostModule.Post().init(thirdArgument, fourthArgument);
                    }
                } else {
                    console.log(
                        chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Warning") +
                        chalk.hex(ConstantsModule.Constants.YELLOW)(" : Please provide a valid url. ")
                    );
                    console.log(chalk.hex(ConstantsModule.Constants.YELLOW)("For example, give command like this => "));
                    console.log(chalk.underline.hex(ConstantsModule.Constants.YELLOW)("'yuthi post http://yourdomain.com/address param1=val1,param2=val2'"));
                }
                break;
            case COMMAND_HISTORY:
                console.log(
                    chalk.underline.hex(ConstantsModule.Constants.YELLOW)("Feature Unavailable") +
                    chalk.hex(ConstantsModule.Constants.YELLOW)(" : This feature will be available soon. ")
                );
                break;
            case COMMAND_ABOUT:
                new AboutModule.About().init();
                break;
            case undefined:
                new AboutModule.About().init();
        }

    }

    showError(error: string) {
        console.log(
            chalk.underline.hex(ConstantsModule.Constants.RED)("Error : " + chalk.hex(ConstantsModule.Constants.RED)(error) + " Please use " + chalk.underline.hex(ConstantsModule.Constants.YELLOW)("'--help'") + " or " + chalk.underline.hex(ConstantsModule.Constants.YELLOW)("'--h'") + " frag to know about a command")
        );
    }

    printHelpFile(): void {

        console.log("");
        console.log("");
        console.log("");

        console.log(
            chalk.underline.hex(ConstantsModule.Constants.YELLOW)("FUNCTIONAL COMMANDS")
        );

        console.log("");
        console.log("");
        console.log("");

        //get request
        console.log(
            chalk.underline.hex(ConstantsModule.Constants.FAMENUN_GREEN)("yuthi get <url with params>") +
            chalk.hex(ConstantsModule.Constants.FAMENUN_GREEN_LIGHT_SHADE_1)(" : By following this syntax you can send a get request to a url. ")
        );
        console.log(chalk.hex(ConstantsModule.Constants.YELLOW)("For example, give command like this => "));
        console.log(chalk.underline.hex(ConstantsModule.Constants.YELLOW)("'yuthi get http://yourdomain.com/address?param1=val1&param2=val2'"));

        console.log("");

        //post request
        console.log(
            chalk.underline.hex(ConstantsModule.Constants.FAMENUN_GREEN)("yuthi post <url> <parms with values seperated by commas and without space>") +
            chalk.hex(ConstantsModule.Constants.FAMENUN_GREEN_LIGHT_SHADE_1)(" : By following this syntax you can send a post request to a url. ")
        );
        console.log(chalk.hex(ConstantsModule.Constants.YELLOW)("For example, give command like this => "));
        console.log(chalk.underline.hex(ConstantsModule.Constants.YELLOW)("'yuthi post http://yourdomain.com/address param1=val1,param2=val2'"));


        console.log("");
        console.log("");
        console.log("");

        console.log(
            chalk.underline.hex(ConstantsModule.Constants.YELLOW)("FUNCTIONAL FLAGS")
        );

        console.log("");
        console.log("");
        console.log("");

        //get request
        console.log(
            chalk.underline.hex(ConstantsModule.Constants.FAMENUN_GREEN)("-h or --help") +
            chalk.hex(ConstantsModule.Constants.FAMENUN_GREEN_LIGHT_SHADE_1)(" : Use this flag with any command to get more information about it. ")
        );
        console.log(chalk.hex(ConstantsModule.Constants.YELLOW)("For example, give command like this => "));
        console.log(chalk.underline.hex(ConstantsModule.Constants.YELLOW)("'yuthi get --help"));



    }

}