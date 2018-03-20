/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 Auth0, Inc. <support@auth0.com> (http://auth0.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
'use strict'

const Q = require('q'),
    request = require('request'),
    applicationConfigurationService = require('./configuration/applicationConfigurationService.js');


module.exports = (function init() {
    return {
        sendPost : function sendPost(body, endpoint) {
            var deferred = Q.defer();
            var url = applicationConfigurationService.authServerBaseUrl + endpoint;
            console.log("Sending POST to " + url);
            request({
                url: url,
                method: "POST",
                json: true,
                body: body
            }, function (error, response, body) {
                if (error) {
                    console.log("POST response error " + JSON.stringify(error));
                    deferred.reject(error);
                } else if(response.statusCode != 200) {
                    console.log("POST response failed, response body: " + JSON.stringify(body));
                    deferred.reject(new Error(JSON.stringify(body)));
                } else {
                    console.log("POST response " + JSON.stringify(response) + " " + JSON.stringify(body));
                    deferred.resolve(body);
                }
            });
            return deferred.promise;
        }
    };
})();
