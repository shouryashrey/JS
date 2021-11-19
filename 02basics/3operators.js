var listPrice = 999;
var sellPrice = 734.67;

var discountedPercentage = (listPrice - sellPrice) / listPrice * 100;

console.log(discountedPercentage);
var dp = Math.round(discountedPercentage);

console.log(dp);
