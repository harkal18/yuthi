import request = require('request');
import OnPostRequestListenerModule = require("../interfaces/OnPostRequestListener");
import ConstantsModule = require("../utils/Constants");
import { json } from 'body-parser';


export class SendPostRequest {

    onPostRequestListener: OnPostRequestListenerModule.OnPostRequestListener | undefined;

    setGetRequestListener(onPostRequestListener: OnPostRequestListenerModule.OnPostRequestListener) {
        this.onPostRequestListener = onPostRequestListener;
    }

    send(url: string, params: string): void {

        if (this.onPostRequestListener != null) {
            this.onPostRequestListener.onStart();
        }

        request.post({ url: url, form: this.getJsonOfParams(params) }, (error, response, body) => {
            if (error) {

                if (this.onPostRequestListener != null) {
                    this.onPostRequestListener.onError(error);
                }

            } else {

                if (response.statusCode === ConstantsModule.Constants.RESPONSE_OK) {

                    if (this.onPostRequestListener != null) {
                        this.onPostRequestListener.onEnd();
                        this.onPostRequestListener.onComplete(ConstantsModule.Constants.RESPONSE_OK, body);
                    }

                } else {

                    if (this.onPostRequestListener != null) {
                        this.onPostRequestListener.onEnd();
                        this.onPostRequestListener.onComplete(response.statusCode, "null");
                    }

                }

            }
        });

    }

    getJsonOfParams(prmstr: string): JSON {

        let arrayOfParams: Array<Array<string>> = this.getArrayOfParams(prmstr);

        let json: any = {};
        for (let i = 0; i < arrayOfParams.length; i++) {
            let param: string = arrayOfParams[i][0];
            let value: string = arrayOfParams[i][1];
            json[param] = value;
        }
        return json;
    }

    getArrayOfParams(prmstr: string): Array<Array<string>> {
        let params = [];
        let prmarr = prmstr.split(",");
        for (let i = 0; i < prmarr.length; i++) {
            let tmparr = prmarr[i].split("=");
            let param = [];
            param.push(tmparr[0]);
            param.push(tmparr[1]);
            params.push(param);
        }
        return params;
    }

}