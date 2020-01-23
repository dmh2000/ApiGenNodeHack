// import the client factory
const { apigClientFactory, document } = require("./src/api-sdk");

// set the hostname in the substitute document object
document.hostname = process.env.AWS_API_HOSTNAME;

// create an api client per the AWS documentation
const apigClient = apigClientFactory.newClient({
  accessKey: process.env.AWS_ACCESS_KEY, // get your access id and secret key from environment
  secretKey: process.env.AWS_SECRET_KEY // or wherever you want
});

// execute a GET from one of the methods of the apigClient. it returns a Promise
apigClient
  .goGet() // this function is the standard one provided by the API SDK client created above
  .then(result => {
    // handle resolved promise
    console.log(result.status);
    console.log(result.data);
  })
  .catch(error => {
    // handle rejected promise
    console.log(error);
  });
