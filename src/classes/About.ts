import ConstantsModule = require("../utils/Constants");

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

export class About {

    init(): void {
        clear();
        console.log(
            chalk.hex(ConstantsModule.Constants.FAMENUN_GREEN)(
                figlet.textSync('Yuthi', { horizontalLayout: 'full' })
            )
        );

        this.addLineBreaks(3);

        console.log(
            chalk.underline.hex(ConstantsModule.Constants.YELLOW)("ABOUT")
        );

        this.addLineBreaks(2);

        this.showData("Version : ", "1.0.0");
        this.showData("Application : ", "you can send HTTP requests to an API without any browser just using cli and can save a lot of time.");
        this.showData("Help command : ", "yuthi help");
        this.showData("Developer : ", "Har Kal");
        this.showData("Email : ", "harkal@famenun.com");
        this.showData("Website : ", "https:yuthi.famenun.com");

    }

    showData(tag: string, data: string): void {

        console.log(
            chalk.hex(ConstantsModule.Constants.YELLOW)(tag + chalk.underline.hex(ConstantsModule.Constants.GREEN)(data))
        );
    }

    addLineBreaks(count: number): void {
        for (let i = 0; i < count; i++) {
            console.log();
        }
    }

}