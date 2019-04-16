var OperationHelper = require("apac").OperationHelper;
const FkHelper = require("./Flipkart/FlipkartHelper.js");
const fs = require("fs");
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

  getResult(userQuery, callback) {
    let rawdata = fs.readFileSync("./dummydata/data.json");
    let student = JSON.parse(rawdata);
    callback(student);

    // this.callApi(userQuery).then(totalResponse => {
    //   console.log(totalResponse);
    //   callback(totalResponse);
    // });
  }

  callApi(userQuery) {
    return new Promise(resolve => {
      this.getFlipkartResult(userQuery).then(flipkartResponse => {
        this.getAmazonResult(userQuery).then(amazonResponse => {
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

      if (fk) {
        fk.products.forEach(element => {
          var ele = {
            id: element.productBaseInfoV1.productId,
            title: element.productBaseInfoV1.title,
            price: element.productBaseInfoV1.maximumRetailPrice.amount,
            image: element.productBaseInfoV1.imageUrls["200x200"],
            offerPrice: element.productBaseInfoV1.flipkartSpecialPrice.amount,
            productUrl: element.productBaseInfoV1.productUrl,
            discountPercentage: element.productBaseInfoV1.discountPercentage
          };

          fkObject.push(ele);
        });
      }
      console.log(azResponse);
      console.log(fkResponse);
      if (azResponse) {
        azResponse.ItemSearchResponse.Items.Item.forEach(element => {
          orgPrice =
            element.ItemAttributes.ListPrice.FormattedPrice + "".slice(3);
          offPrice =
            element.OfferSummary.LowestNewPrice.FormattedPrice + "".slice(3);
          console.log(orgPrice, offPrice);
          var azEle = {
            title: element.ItemAttributes.Title,
            price: orgPrice,
            image: element.MediumImage.URL,
            offerPrice: offPrice,
            productUrl: element.DetailPageURL,
            discountPercentage:
              element.Offers.TotalOffers > 0
                ? element.Offers.Offer.OfferListing.PercentageSaved
                : 0
          };
          azObject.push(azEle);
        });
      }
      if (azObject.length !== 0 || fkObject.length !== 0) {
        const allObj = azObject.concat(fkObject);
        resolve(allObj);
      }
    });
  }

  getAmazonResult(userQuery) {
    return new Promise(resolve => {
      this.opHelper.execute(
        "ItemSearch",
        {
          SearchIndex: "All",
          Keywords: userQuery,
          ResponseGroup: "ItemAttributes,Offers,Images"
        },
        function(err, results) {
          resolve(results);
        }
      );
    });
  }
  getFlipkartResult(userQuery) {
    return new Promise(resolve => {
      this.flipkart.execute("ItemSearch", { query: userQuery }, response => {
        resolve(response);
      });
    });
  }
};
