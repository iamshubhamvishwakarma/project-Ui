var OperationHelper = require("apac").OperationHelper;
const FkHelper = require("./Flipkart/FlipkartHelper.js");

module.exports = class SearchHelper {
  constructor(props) {
    //Amazon
    this.opHelper = new OperationHelper({
      awsId: "AKIAIJ65MOX2EFD7HIOA",
      awsSecret: "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",
      assocId: "shubham75-21"
    });

    //Flipkart
    this.flipkart = new FkHelper({
      token: "17748532a2fb4d76abd3de669d2cec37",
      assocId: "suubhamvg"
    });
  }

  getResult(callback) {
    this.callApi().then(totalResponse => {
      console.log(totalResponse);
      callback(totalResponse);
    });
  }

  callApi() {
    return new Promise(resolve => {
      this.getFlipkartResult().then(flipkartResponse => {
        this.getAmazonResult().then(amazonResponse => {
          this.combineResult(flipkartResponse, amazonResponse).then(
            allResponse => {
              resolve(allResponse);
            }
          );
        });
      });
    });
  }
  combineResult(fkResponse, azResponse) {
    return new Promise(resolve => {
      var fkObject = [];
      var azObject = [];
      var fk = JSON.parse(fkResponse);

      var az = JSON.parse(JSON.stringify(azResponse));
      fk.products.forEach(element => {
        var ele = {
          title: element.productBaseInfoV1.title,
          price: element.productBaseInfoV1.maximumRetailPrice.amount,
          image: element.productBaseInfoV1.imageUrls["200x200"],
          offerPrice: element.productBaseInfoV1.flipkartSpecialPrice.amount,
          productUrl: element.productBaseInfoV1.productUrl,
          discountPercentage: element.productBaseInfoV1.discountPercentage
        };
        az.ItemSearchResponse.Items.Item.forEach(azElement => {
          var azEle = {
            title: element.ItemAttributes.ListPrice.Title,
            price: element.ItemAttributes.ListPrice.FormattedPrice,
            image: element.productBaseInfoV1.imageUrls["200x200"],
            offerPrice: element.ItemAttributes.OfferSummary.LowestNewPrice.FormattedPrice,
            productUrl: element.DetailPageURL,
            discountPercentage: element.ItemAttributes.Offers.Offer.OfferListing.PercentageSaved
          };
        });
        fkObject.push(ele);
      });
      resolve();
    });
  }

  getAmazonResult() {
    return new Promise(resolve => {
      this.opHelper.execute(
        "ItemSearch",
        {
          SearchIndex: "All",
          Keywords: "asus zenfone",
          ResponseGroup: "ItemAttributes,Offers"
        },
        function(err, results) {
          resolve(results);
        }
      );
    });
  }
  getFlipkartResult() {
    return new Promise(resolve => {
      this.flipkart.execute("ItemSearch", { query: "asus" }, response => {
        resolve(response);
      });
    });
  }
};
