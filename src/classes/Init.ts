import ConstantsModule = require("../utils/Constants");

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

export class Init {

    init(): void {
        clear();
        console.log(
            chalk.hex(ConstantsModule.Constants.FAMENUN_GREEN)(
                figlet.textSync('Yuthi', { horizontalLayout: 'full' })
            )
        );

        console.log(
            chalk.underline.hex(ConstantsModule.Constants.FAMENUN_GREEN_LIGHT_SHADE_1)('v1.0.0')
        );

        console.log(
            chalk.hex(ConstantsModule.Constants.FAMENUN_GREEN_LIGHT_SHADE_2)("send HTTP request using cli")
        );

        console.log(
            chalk.hex(ConstantsModule.Constants.YELLOW)("Run " + chalk.underline.hex(ConstantsModule.Constants.GREEN)('yuthi help') + " for usuage guide. or visit " + chalk.underline.hex(ConstantsModule.Constants.GREEN)('https://yuthi.famenun.com/'))
        );
    }

}