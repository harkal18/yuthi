"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConstantsModule = require("../utils/Constants");
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var Init = /** @class */ (function () {
    function Init() {
    }
    Init.prototype.init = function () {
        clear();
        console.log(chalk.hex(ConstantsModule.Constants.FAMENUN_GREEN)(figlet.textSync('Yuthi', { horizontalLayout: 'full' })));
        console.log(chalk.underline.hex(ConstantsModule.Constants.FAMENUN_GREEN_LIGHT_SHADE_1)('v1.0.4'));
        console.log(chalk.hex(ConstantsModule.Constants.FAMENUN_GREEN_LIGHT_SHADE_2)("send HTTP request using cli"));
        console.log(chalk.hex(ConstantsModule.Constants.YELLOW)("Run " + chalk.underline.hex(ConstantsModule.Constants.GREEN)('yuthi help') + " for usuage guide. or visit " + chalk.underline.hex(ConstantsModule.Constants.GREEN)('https://yuthi.famenun.com/')));
    };
    return Init;
}());
exports.Init = Init;
