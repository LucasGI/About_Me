var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
// BITCOIN CODE API:
$(document).ready(function() {
  bitcoinprices.init({

      // Where we get bitcoinaverage data 
      url: "https://api.bitcoinaverage.com/ticker/all",

      // Which of bitcoinaverages value we use to present prices 
      marketRateVariable: "24h_avg",

      // Which currencies are in shown to the user 
      currencies: ["BTC", "USD", "EUR", "CNY"],

      // Special currency symbol artwork 
      symbols: {
          "BTC": "<i class='fa fa-btc'></i>"
      },

      // Which currency we show user by the default if 
      // no currency is selected 
      defaultCurrency: "BTC",

      // How the user is able to interact with the prices 
      ux : {
          // Make everything with data-btc-price HTML attribute clickable 
          clickPrices : true,

          // Build Bootstrap dropdown menu for currency switching 
          menu : true,

          // Allow user to cycle through currency choices in currency: 

          clickableCurrencySymbol:  true
      },

      // Allows passing the explicit jQuery version to bitcoinprices. 
      // This is useful if you are using modular javascript (AMD/UMD/require()), 
      // but for most normal usage you don't need this 
      jQuery: jQuery,

      // Price source data attribute 
      priceAttribute: "data-btc-price",

      // Price source currency for data-btc-price attribute. 
      // E.g. if your shop prices are in USD 
      // but converted to BTC when you do Bitcoin 
      // checkout, put USD here. 
      priceOrignalCurrency: "BTC"

  });
});
function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }