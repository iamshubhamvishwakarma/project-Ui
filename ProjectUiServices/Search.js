var OperationHelper = require("apac").OperationHelper;
const FkHelper = require("./Flipkart/FlipkartHelper.js");

//Amazon
var opHelper = new OperationHelper({
  awsId: "AKIAIJ65MOX2EFD7HIOA",
  awsSecret: "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",
  assocId: "shubham75-21"
});

//Flipkart
var flipkart = new FkHelper({
  token: "17748532a2fb4d76abd3de669d2cec37",
  assocId: "suubhamvg"
});

flipkart.execute("ItemSearch", { query: "asus" }, response => {
  console.log(response);
});

opHelper.execute(
  "ItemSearch",
  {
    SearchIndex: "Books",
    Keywords: "harry potter",
    ResponseGroup: "ItemAttributes,Offers"
  },
  function(err, results) {
    // you can add a third parameter for the raw xml response, "results" here are currently parsed using xml2js
    console.log(results);
    console.log(err);
  }
);
