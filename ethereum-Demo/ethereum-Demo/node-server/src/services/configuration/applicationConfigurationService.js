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
'use strict';

const fs = require('fs'),
    NodeRSA = require('node-rsa');

var privateKey = fs.readFileSync(__dirname+'/../../../config/rsa_keys/id_rsa','utf8');

module.exports = (function() {

	return {
		authServerBaseUrl : process.argv[2],
		ethereumUrl : process.argv[3],
		mapperContractAddress : process.argv[4],
		jwtExpirationTime : process.argv[5],
        httpsOptions: {
            key: fs.readFileSync(__dirname+'/../../../config/certs/server.key'),
            cert: fs.readFileSync(__dirname+'/../../../config/certs/server.crt')
        },
        rsaKeys : {
            //publicKey : fs.readFileSync('./config/rsa_keys/id_rsa.pub','utf8'),
            publicKey : new NodeRSA(privateKey).exportKey('pkcs8-public-pem'),//generates public key from a private one
            privateKey : privateKey
        }
	}
})();
