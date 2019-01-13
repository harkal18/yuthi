"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var ConstantsModule = require("../utils/Constants");
var SendPostRequest = /** @class */ (function () {
    function SendPostRequest() {
    }
    SendPostRequest.prototype.setGetRequestListener = function (onPostRequestListener) {
        this.onPostRequestListener = onPostRequestListener;
    };
    SendPostRequest.prototype.send = function (url, params) {
        var _this = this;
        if (this.onPostRequestListener != null) {
            this.onPostRequestListener.onStart();
        }
        request.post({ url: url, form: this.getJsonOfParams(params) }, function (error, response, body) {
            if (error) {
                if (_this.onPostRequestListener != null) {
                    _this.onPostRequestListener.onError(error);
                }
            }
            else {
                if (response.statusCode === ConstantsModule.Constants.RESPONSE_OK) {
                    if (_this.onPostRequestListener != null) {
                        _this.onPostRequestListener.onEnd();
                        _this.onPostRequestListener.onComplete(ConstantsModule.Constants.RESPONSE_OK, body);
                    }
                }
                else {
                    if (_this.onPostRequestListener != null) {
                        _this.onPostRequestListener.onEnd();
                        _this.onPostRequestListener.onComplete(response.statusCode, "null");
                    }
                }
            }
        });
    };
    SendPostRequest.prototype.getJsonOfParams = function (prmstr) {
        var arrayOfParams = this.getArrayOfParams(prmstr);
        var json = {};
        for (var i = 0; i < arrayOfParams.length; i++) {
            var param = arrayOfParams[i][0];
            var value = arrayOfParams[i][1];
            json[param] = value;
        }
        return json;
    };
    SendPostRequest.prototype.getArrayOfParams = function (prmstr) {
        var params = [];
        var prmarr = prmstr.split(",");
        for (var i = 0; i < prmarr.length; i++) {
            var tmparr = prmarr[i].split("=");
            var param = [];
            param.push(tmparr[0]);
            param.push(tmparr[1]);
            params.push(param);
        }
        return params;
    };
    return SendPostRequest;
}());
exports.SendPostRequest = SendPostRequest;
