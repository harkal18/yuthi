export class Constants {

    static FAMENUN_GREEN = "#1DF2A1";
    static FAMENUN_GREEN_LIGHT_SHADE_1 = "#5DE1B5";
    static FAMENUN_GREEN_LIGHT_SHADE_2 = "#70CCA9";
    static FAMENUN_GREEN_LIGHT_SHADE_3 = "#ABE0CC";

    static WHITE = "#FFFFFF";
    static RED = "#FF0000";
    static BLUE = "#00FF00";
    static GREEN = "#0000FF";
    static YELLOW = "#FBFF00";

    static RESPONSE_OK = 200;

    static validateUrl(url: string) {
        let pattern = new RegExp('^(https?:\/\/)?' + // protocol
            '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|' + // domain name
            '((\d{1,3}\.){3}\d{1,3}))' + // OR ip (v4) address
            '(\:\d+)?(\/[-a-z\d%_.~+]*)*' + // port and path
            '(\?[;&a-z\d%_.~+=-]*)?' + // query string
            '(\#[-a-z\d_]*)?$', 'i'); // fragment locater
        if (!pattern.test(url)) {
            alert("Please enter a valid URL.");
            return false;
        } else {
            return true;
        }
    }

}