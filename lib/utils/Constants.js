"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.validateUrl = function (url) {
        var pattern = new RegExp('^(https?:\/\/)?' + // protocol
            '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|' + // domain name
            '((\d{1,3}\.){3}\d{1,3}))' + // OR ip (v4) address
            '(\:\d+)?(\/[-a-z\d%_.~+]*)*' + // port and path
            '(\?[;&a-z\d%_.~+=-]*)?' + // query string
            '(\#[-a-z\d_]*)?$', 'i'); // fragment locater
        if (!pattern.test(url)) {
            alert("Please enter a valid URL.");
            return false;
        }
        else {
            return true;
        }
    };
    Constants.FAMENUN_GREEN = "#1DF2A1";
    Constants.FAMENUN_GREEN_LIGHT_SHADE_1 = "#5DE1B5";
    Constants.FAMENUN_GREEN_LIGHT_SHADE_2 = "#70CCA9";
    Constants.FAMENUN_GREEN_LIGHT_SHADE_3 = "#ABE0CC";
    Constants.WHITE = "#FFFFFF";
    Constants.RED = "#FF0000";
    Constants.BLUE = "#00FF00";
    Constants.GREEN = "#0000FF";
    Constants.YELLOW = "#FBFF00";
    Constants.RESPONSE_OK = 200;
    return Constants;
}());
exports.Constants = Constants;
