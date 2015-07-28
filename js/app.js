var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {

//declare all variavles in controller that you are trying to use
  var main = this;
main.barcodeList = [];
//artificially populating barcode list, but would normally populate it through user inputs
main.barcodeList.push({code: "https://i.imgur.com/8zee1HF.png"});
main.barcodeList.push({code: "https://i.imgur.com/EyqUGIU.png"});
main.barcodeList.push({code: "https://i.imgur.com/VUo4uSz.png"});
main.barcodeList.push({code: "https://worldbarcodes.com/wp-content/uploads/2011/07/sample-jpg.jpg"});

console.log(main.barcodeList);
});

app.directive('scanResults', function() {
  return {
     restrict: 'AEC',
    template: '<div ng-repeat="barcode in main.barcodeList"> <h4 >barcode</h4> <img ng-src="{{barcode.code}}"/> </div> <br>',
  };
});