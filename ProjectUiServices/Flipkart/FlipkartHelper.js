var https = require("https");

const HOST = "affiliate-api.flipkart.net";

module.exports = class FlipkartHelper {
  constructor(params) {
    params = params || {};

    //Check require params
    if (typeof params.token === undefined) {
      throw new Error("missing Flipkart Token");
    }
    if (typeof params.assocId === undefined) {
      throw new Error("Missing Associate tracking id ");
    }

    //set instance variables from params
    this.token = params.token;
    this.assocId = params.assocId;
  }
  execute(operation, params, callback) {
    var request = https.request(this.getOption(params.query), res => {
      res.setEncoding("utf8");
      var responseStr = "";
      res.on("data", data => {
        responseStr += data;
      });
      res.on("error", error => {
        console.log("error", error);
      });
      res.on("end", () => {
       // console.log(responseStr);
        callback(responseStr);
      });
    });
    request.end();
  }

  getOption(query) {
    return {
      host: HOST,
      path: "/affiliate/1.0/search.json?query=" + encodeURI(query),
      method: "GET",
      headers: this.getHeaders()
    };
  }
  getHeaders() {
    return {
      "Fk-Affiliate-Id": this.assocId,
      "Fk-Affiliate-Token": this.token
    };
  }
};
