#!/bin/sh
# remove preexisting api-sdk.js
rm src\api-sdk.js
# create an empty file
touch src\api-sdk.js
echo "don't include axios standalone : cat src\apiGateway-js-sdk\lib\axios\dist\axios.standalone.js >> src\api-sdk.js"
# add the prefix file that helps 'modularize' the package
cat src\prefix.js >>src\api-sdk.js
# add a semicolon on a line by itself to separate the files just in case
cat src\semicolon.js >> src\api-sdk.js
# concatenate all the files generated by AWS API Javascript SDK
cat src\apiGateway-js-sdk\lib\CryptoJS\rollups\hmac-sha256.js >> src\api-sdk.js
cat src\semicolon.js >> src\api-sdk.js
cat src\apiGateway-js-sdk\lib\CryptoJS\rollups\sha256.js >> src\api-sdk.js
cat src\semicolon.js >> src\api-sdk.js
cat src\apiGateway-js-sdk\lib\CryptoJS\components\hmac.js >> src\api-sdk.js
cat src\semicolon.js >> src\api-sdk.js
cat src\apiGateway-js-sdk\lib\CryptoJS\components\enc-base64.js >> src\api-sdk.js
cat src\semicolon.js >> src\api-sdk.js
cat src\apiGateway-js-sdk\lib\url-template\url-template.js >> src\api-sdk.js
cat src\semicolon.js >> src\api-sdk.js
cat src\apiGateway-js-sdk\lib\apiGatewayCore\sigV4Client.js >> src\api-sdk.js
cat src\semicolon.js >> src\api-sdk.js
cat src\apiGateway-js-sdk\lib\apiGatewayCore\apiGatewayClient.js >> src\api-sdk.js
cat src\semicolon.js >> src\api-sdk.js
cat src\apiGateway-js-sdk\lib\apiGatewayCore\simpleHttpClient.js >> src\api-sdk.js
cat src\semicolon.js >> src\api-sdk.js
cat src\apiGateway-js-sdk\lib\apiGatewayCore\utils.js >> src\api-sdk.js
cat src\semicolon.js >> src\api-sdk.js
cat src\apiGateway-js-sdk\apigClient.js >> src\api-sdk.js
cat src\semicolon.js >> src\api-sdk.js
# add the suffix file that exports the needed methods from the package
cat src\suffix.js >>src\api-sdk.js


