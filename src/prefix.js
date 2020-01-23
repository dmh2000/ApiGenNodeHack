// instead of including the axios from the apiGateway sdk
// just 'npm install --save axios' and require it
const axios = require("axios");

// patch for document in sigV4Client.js:line 182
// sigV4Client.js uses one instance of document.createElement('a')
// to use as a parser to extract the hostname of a URL.
// this object substitutes for the missing 'document' object.
// it needs to create an object that has a createElement method
// that returns an object simulating the browser 'document' object
// wth only the hostname and href fields exposed.
// this object is added to the 'exports' in suffix.js
const document = {
  hostname: "",
  createElement: function() {
    return {
      href: "",
      hostname: function() {
        // your user program needs to set document.hostname to the AWS endpoint.
        // you could hardcode the hostname here but this way you don't have
        // to execute the 'include.sh' every time you modify this file.
        return hostname;
      }
    };
  }
};
