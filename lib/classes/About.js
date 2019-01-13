"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConstantsModule = require("../utils/Constants");
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var About = /** @class */ (function () {
    function About() {
    }
    About.prototype.init = function () {
        clear();
        console.log(chalk.hex(ConstantsModule.Constants.FAMENUN_GREEN)(figlet.textSync('Yuthi', { horizontalLayout: 'full' })));
        this.addLineBreaks(3);
        console.log(chalk.underline.hex(ConstantsModule.Constants.YELLOW)("ABOUT"));
        this.addLineBreaks(2);
        this.showData("Version : ", "1.0.0");
        this.showData("Application : ", "you can send HTTP requests to an API without any browser just using cli and can save a lot of time.");
        this.showData("Help command : ", "yuthi help");
        this.showData("Developer : ", "Har Kal");
        this.showData("Email : ", "harkal@famenun.com");
        this.showData("Website : ", "https:yuthi.famenun.com");
    };
    About.prototype.showData = function (tag, data) {
        console.log(chalk.hex(ConstantsModule.Constants.YELLOW)(tag + chalk.underline.hex(ConstantsModule.Constants.GREEN)(data)));
    };
    About.prototype.addLineBreaks = function (count) {
        for (var i = 0; i < count; i++) {
            console.log();
        }
    };
    return About;
}());
exports.About = About;
