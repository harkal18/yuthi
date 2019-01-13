import request = require('request');
import OnGetRequestListenerModule = require("../interfaces/OnGetRequestListener");
import ConstantsModule = require("../utils/Constants");


export class SendGetRequest {

    onGetRequestListener: OnGetRequestListenerModule.OnGetRequestListener | undefined;

    setGetRequestListener(onGetRequestListener: OnGetRequestListenerModule.OnGetRequestListener) {
        this.onGetRequestListener = onGetRequestListener;
    }

    send(url: string): void {

        if (this.onGetRequestListener != null) {
            this.onGetRequestListener.onStart();
        }

        request.get({ url: url }, (error, response, body) => {
            if (error) {

                if (this.onGetRequestListener != null) {
                    this.onGetRequestListener.onError(error);
                }

            } else {

                if (response.statusCode === ConstantsModule.Constants.RESPONSE_OK) {

                    if (this.onGetRequestListener != null) {
                        this.onGetRequestListener.onEnd();
                        this.onGetRequestListener.onComplete(ConstantsModule.Constants.RESPONSE_OK, body);
                    }

                } else {

                    if (this.onGetRequestListener != null) {
                        this.onGetRequestListener.onEnd();
                        this.onGetRequestListener.onComplete(response.statusCode, "null");
                    }

                }

            }
        });

    }

}