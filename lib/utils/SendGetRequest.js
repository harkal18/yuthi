"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require("request");
var ConstantsModule = require("../utils/Constants");
var SendGetRequest = /** @class */ (function () {
    function SendGetRequest() {
    }
    SendGetRequest.prototype.setGetRequestListener = function (onGetRequestListener) {
        this.onGetRequestListener = onGetRequestListener;
    };
    SendGetRequest.prototype.send = function (url) {
        var _this = this;
        if (this.onGetRequestListener != null) {
            this.onGetRequestListener.onStart();
        }
        request.get({ url: url }, function (error, response, body) {
            if (error) {
                if (_this.onGetRequestListener != null) {
                    _this.onGetRequestListener.onError(error);
                }
            }
            else {
                if (response.statusCode === ConstantsModule.Constants.RESPONSE_OK) {
                    if (_this.onGetRequestListener != null) {
                        _this.onGetRequestListener.onEnd();
                        _this.onGetRequestListener.onComplete(ConstantsModule.Constants.RESPONSE_OK, body);
                    }
                }
                else {
                    if (_this.onGetRequestListener != null) {
                        _this.onGetRequestListener.onEnd();
                        _this.onGetRequestListener.onComplete(response.statusCode, "null");
                    }
                }
            }
        });
    };
    return SendGetRequest;
}());
exports.SendGetRequest = SendGetRequest;
