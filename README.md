# ApiGenNodeHack

A nasty hack that lets you use an AWS generated API SDK for javascript in node instead of browser.

Scenario: you have an AWS Lambda function exposing a REST API, and you want to use it as a backend
for you Node application. But wait, surprise, its pretty involved to make the properly signed
requests to the Lambda function using Node. If you are using Java, Android, Browser Javascript,
Ruby or IOS, the AWS API service will conveniently generate the client code you need to access
the Lambda function. Javascript you say? Can't I use the Javascript API it generates in my Node app?
Well, no. Not right off at least. You see, the Javascript client SDK AWS generates assumes it will run
in a browser, not Node. So as is you can't just add it to your Node app.

Here are some of the problems:

- the files it generates are intended to be added using \<script\> elements. They are not built as normal Node modules you can just **require**
- a bit of the code it generates uses browser resources that won't work in Node without a lot of fiddling.
- see the src/apiGateway-js-sdk/README.md in this repo for the usage instructions it generates. You'll see it is all about the browser.

However, with a bit of uncomplicated hacking, you can adapt these files to include in your Node app, without actually
editing any of the files. Using them as is.

This hack assumes you have some prior knowledge of the following:

- you know how to create a simple AWS lambda function with a REST interface.
- you know how to create an API gateway for that lambda function
- you know how to generate a client Javascript API SDK for that lambda function
- I added some links to the AWS docs for that. See below.
- if you haven't done all that before, plan on an hour or four to figure all that out and set it up

## Setup

1. Create an AWS Lambda function with a REST interface
   - https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html
2. Use the API Gateway service to create a api gateway for your Lambda function
   - https://docs.aws.amazon.com/apigateway/
3. Test it using the AWS API test support
   - https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-call-api.html
4. Generate a Javascript API SDK for the REST API and download it (as a zip or tar file)
   - https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-generate-sdk-javascript.html
5. Create a node.js skeleton app in a directory of your choice
   - you probably want to use 'npm init' for this
6. Create a 'src' directory in your node app.
7. Unzip the downloaded API SDK into the 'src' directory

## The Hack

All it takes are a few simple steps to get this working in a Node app. Since the files are intended to be added inline in a browser as scripts, why not just concatenate them all together into a single file?

- see the script _include.sh (linux)_ or _include.cmd (windows)_ in this repo. All I did was 'cat' all the files together in the order they are listed in the apiGateway SDK README.md file.
- the files are not Node _require_ friendly, so I am just adding them all together. This resolves the dependencies between the files themselves.
- one catch, don't include the _axios.standalone.js_ file. It was uncooperative about running under node. Instead of that, use npm to install the normal Node axios in your node app.
  - npm install --save-dev axios
- you will see that I also added a file _src\\semicolon.js_ in between catting the actual files. This is to be sure that the scripts don't run up against each other and accidentally cause some problem if any of the files don't end with a semicolon or a linefeed.
- at the beginning of the files I include a _prefix.js_ which is used to add any code needed before the inlined SDK files are encountered. You should not have to change it but take a look and feel free
- at the end of the files I add a _suffix.js_ file which contains some scaffold code to allow your main application to get at the API gateway functions.
- the 'include.sh' script recreates an 'api-sdk.js' each time it is run

Gotchas that needed to be fixed. There were only two:

- as mentioned above, the axios standalone file did not work, so instead just require axios in 'prefix.js' and that seems to be enough for that.
- the sigV4Client.js files assumes it is running in a browser and it creates and uses an anchor element to parse a URL and extract the hostname. That is fixed by adding a simple dummy document object in 'prefix.js' that handles what the sgiV4Client.js file wants. It is exported in _suffix.js_ so it is accessible in the

## Usage

As is, these files and the two include scripts were enough without modification for the Javascript API SDK I generated for my lambda function.

- add a one time call to _include.sh or include.cmd_ in your build process to create the blob of files from the sdk
- add the Access ID, Secret Key and Endpoint Hostname to the shell environment or make it available to the program some other way. see _credentials.sh or credentials.cmd_ files for an example.
- use the exported apigClientFactory as you would in a browser environment. see _src/apigateway-js-sdk/README.md_ for the AWS provided instructions on usage
- the _index.js_ file in this repo has the simplest example of usage. You could require _/src/api-sdk.js_ and use it anywhere that made sense.

## Example Index.js

_index.js_

    // import the client factory and document object
    const { apigClientFactory, document } = require("./src/api-sdk");

    // set the hostname in the substitute document object
    document.hostname = process.env.AWS_API_HOSTNAME;

    // create an api client per the AWS documentation
    const apigClient = apigClientFactory.newClient({
        accessKey: process.env.AWS_ACCESS_KEY, // get your access id and secret key from environmentdefined in prefix.js
        secretKey: process.env.AWS_SECRET_KEY // or wherever you want
    });

    // execute a GET from one of the methods of the apigClient
    // it returns a Promise
    apigClient
    .goGet() // this function is the standard one provided by the API SDK client created above
    .then(result => {
        console.log(result.status);
        console.log(result.data);
    })
    .catch(error => {
        console.log(error);
    });

### Output

    >npm start
      > apigennodehack@1.0.0 start F:\projects\go\ApiGenNodeHack
      > node index.js

      200
      Hello In Go !
