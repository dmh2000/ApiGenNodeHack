@REM Windows version of concatenator
erase src\api-sdk.js
type nul >src/api-sdk.js
@echo "don't include axios standalone : type src\apiGateway-js-sdk\lib\axios\dist\axios.standalone.js >> src\api-sdk.js"
type src\prefix.js >>src\api-sdk.js
type src\semicolon.js >> src\api-sdk.js
type src\apiGateway-js-sdk\lib\CryptoJS\rollups\hmac-sha256.js >> src\api-sdk.js
type src\semicolon.js >> src\api-sdk.js
type src\apiGateway-js-sdk\lib\CryptoJS\rollups\sha256.js >> src\api-sdk.js
type src\semicolon.js >> src\api-sdk.js
type src\apiGateway-js-sdk\lib\CryptoJS\components\hmac.js >> src\api-sdk.js
type src\semicolon.js >> src\api-sdk.js
type src\apiGateway-js-sdk\lib\CryptoJS\components\enc-base64.js >> src\api-sdk.js
type src\semicolon.js >> src\api-sdk.js
type src\apiGateway-js-sdk\lib\url-template\url-template.js >> src\api-sdk.js
type src\semicolon.js >> src\api-sdk.js
type src\apiGateway-js-sdk\lib\apiGatewayCore\sigV4Client.js >> src\api-sdk.js
type src\semicolon.js >> src\api-sdk.js
type src\apiGateway-js-sdk\lib\apiGatewayCore\apiGatewayClient.js >> src\api-sdk.js
type src\semicolon.js >> src\api-sdk.js
type src\apiGateway-js-sdk\lib\apiGatewayCore\simpleHttpClient.js >> src\api-sdk.js
type src\semicolon.js >> src\api-sdk.js
type src\apiGateway-js-sdk\lib\apiGatewayCore\utils.js >> src\api-sdk.js
type src\semicolon.js >> src\api-sdk.js
type src\apiGateway-js-sdk\apigClient.js >> src\api-sdk.js
type src\semicolon.js >> src\api-sdk.js
type src\suffix.js >>src\api-sdk.js


