var express = require("express");
var cors = require('cors')
var app = express();
app.use(cors())
app.get("/api/sites", (req, res) => {
  let sites = [
    {
      name: "AMAZON",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "FLIPKART",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },

    {
      name: "SNAPDEAL",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "AJIO",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://firebasestorage.googleapis.com/v0/b/fir-webapp-a5b95.appspot.com/o/sites%2Fsnapdeal.png?alt=media&token=5c731fe3-541c-42cd-85b4-ab6299c943aa"
      },
      id: "1234"
    },
    {
      name: "PAYTM",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://firebasestorage.googleapis.com/v0/b/fir-webapp-a5b95.appspot.com/o/sites%2Fpaytm.png?alt=media&token=8bc00977-9bda-47d4-95d2-1501446f8246"
      },
      id: "1234"
    },
    {
      name: "MYNTRA",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "JOBANG",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://firebasestorage.googleapis.com/v0/b/fir-webapp-a5b95.appspot.com/o/sites%2Fjabong1.png?alt=media&token=490c7512-443b-4d45-95a8-dc7f9ae6298c"
      },
      id: "1234"
    },
    {
      name: "AMAZON",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "EBAY",
      link: "https://www.amazon.com",
      image: { isImage: "false", image: "fab fa-ebay" },
      id: "1234"
    },
    {
      name: "AMAZON",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "FLIPKART",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },

    {
      name: "SNAPDEAL",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "AJIO",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://firebasestorage.googleapis.com/v0/b/fir-webapp-a5b95.appspot.com/o/sites%2Fsnapdeal.png?alt=media&token=5c731fe3-541c-42cd-85b4-ab6299c943aa"
      },
      id: "1234"
    },
    {
      name: "PAYTM",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://firebasestorage.googleapis.com/v0/b/fir-webapp-a5b95.appspot.com/o/sites%2Fpaytm.png?alt=media&token=8bc00977-9bda-47d4-95d2-1501446f8246"
      },
      id: "1234"
    },
    {
      name: "MYNTRA",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "JOBANG",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://firebasestorage.googleapis.com/v0/b/fir-webapp-a5b95.appspot.com/o/sites%2Fjabong1.png?alt=media&token=490c7512-443b-4d45-95a8-dc7f9ae6298c"
      },
      id: "1234"
    },
    {
      name: "AMAZON",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "EBAY",
      link: "https://www.amazon.com",
      image: { isImage: "false", image: "fab fa-ebay" },
      id: "1234"
    },
    {
      name: "AMAZON",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "FLIPKART",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },

    {
      name: "SNAPDEAL",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "AJIO",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://firebasestorage.googleapis.com/v0/b/fir-webapp-a5b95.appspot.com/o/sites%2Fsnapdeal.png?alt=media&token=5c731fe3-541c-42cd-85b4-ab6299c943aa"
      },
      id: "1234"
    },
    {
      name: "PAYTM",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://firebasestorage.googleapis.com/v0/b/fir-webapp-a5b95.appspot.com/o/sites%2Fpaytm.png?alt=media&token=8bc00977-9bda-47d4-95d2-1501446f8246"
      },
      id: "1234"
    },
    {
      name: "MYNTRA",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "JOBANG",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://firebasestorage.googleapis.com/v0/b/fir-webapp-a5b95.appspot.com/o/sites%2Fjabong1.png?alt=media&token=490c7512-443b-4d45-95a8-dc7f9ae6298c"
      },
      id: "1234"
    },
    {
      name: "AMAZON",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "EBAY",
      link: "https://www.amazon.com",
      image: { isImage: "false", image: "fab fa-ebay" },
      id: "1234"
    },
    {
      name: "AMAZON",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "FLIPKART",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },

    {
      name: "SNAPDEAL",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "AJIO",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://firebasestorage.googleapis.com/v0/b/fir-webapp-a5b95.appspot.com/o/sites%2Fsnapdeal.png?alt=media&token=5c731fe3-541c-42cd-85b4-ab6299c943aa"
      },
      id: "1234"
    },
    {
      name: "PAYTM",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://firebasestorage.googleapis.com/v0/b/fir-webapp-a5b95.appspot.com/o/sites%2Fpaytm.png?alt=media&token=8bc00977-9bda-47d4-95d2-1501446f8246"
      },
      id: "1234"
    },
    {
      name: "MYNTRA",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "JOBANG",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://firebasestorage.googleapis.com/v0/b/fir-webapp-a5b95.appspot.com/o/sites%2Fjabong1.png?alt=media&token=490c7512-443b-4d45-95a8-dc7f9ae6298c"
      },
      id: "1234"
    },
    {
      name: "AMAZON",
      link: "https://www.amazon.com",
      image: {
        isImage: "true",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg"
      },
      id: "1234"
    },
    {
      name: "EBAY",
      link: "https://www.amazon.com",
      image: { isImage: "false", image: "fab fa-ebay" },
      id: "1234"
    }
  ];
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sites));
});
app.get("/api/todays-deal", (req, res) => {
  let offers = [
    {
      name: " Asus Zenfone Max Pro M2 (Titanium, 64 Gb) (4 Gb Ram)",
      id: "1234",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg",
      source: "Amazon",
      price: "12000"
    },
    {
      name: " Asus Zenfone Max Pro M2 (Titanium, 64 Gb) (4 Gb Ram)",
      id: "1234",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg",
      source: "Amazon",
      price: "12000"
    },
    {
      name: " Asus Zenfone Max Pro M2 (Titanium, 64 Gb) (4 Gb Ram)",
      id: "1234",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg",
      source: "Amazon",
      price: "12000"
    },
    {
      name: " Asus Zenfone Max Pro M2 (Titanium, 64 Gb) (4 Gb Ram)",
      id: "1234",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg",
      source: "Amazon",
      price: "12000"
    },
    {
      name: " Asus Zenfone Max Pro M2 (Titanium, 64 Gb) (4 Gb Ram)",
      id: "1234",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg",
      source: "Amazon",
      price: "12000"
    },
    {
      name: " Asus Zenfone Max Pro M2 (Titanium, 64 Gb) (4 Gb Ram)",
      id: "1234",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg",
      source: "Amazon",
      price: "12000"
    },
    {
      name: " Asus Zenfone Max Pro M2 (Titanium, 64 Gb) (4 Gb Ram)",
      id: "1234",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg",
      source: "Amazon",
      price: "12000"
    },
    {
      name: " Asus Zenfone Max Pro M2 (Titanium, 64 Gb) (4 Gb Ram)",
      id: "1234",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ptzNC8r8L._SL1500_.jpg",
      source: "Amazon",
      price: "12000"
    }
  ];
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(offers));
});

app.get("/api/tranding-deal", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sites));
});
app.get("/api/giftcard", (req, res) => {
  let giftcards = [
    {
      title: "amazon.com",
      price: "5000",
      background: "#000",
      icon: "fab fa-amazon"
    },
    {
      title: "ebay.com",
      price: "5000",
      background: "#000",
      icon: "fab fa-ebay"
    },
    {
      title: "amazon.com",
      price: "5000",
      background: "#000",
      icon: "fab fa-amazon"
    },
    {
      title: "amazon.com",
      price: "5000",
      background: "#000",
      icon: "fab fa-amazon"
    },
    {
      title: "amazon.com",
      price: "5000",
      background: "#000",
      icon: "fab fa-amazon"
    },
    {
      title: "amazon.com",
      price: "5000",
      background: "#000",
      icon: "fab fa-amazon"
    },
    {
      title: "amazon.com",
      price: "5000",
      background: "#000",
      icon: "fab fa-amazon"
    },
    {
      title: "amazon.com",
      price: "5000",
      background: "#000",
      icon: "fab fa-amazon"
    }
  ];
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(giftcards));
});

app.listen(3000);
