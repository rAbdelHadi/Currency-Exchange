angular.module('app', []).directive('validNumber', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            if(!ngModelCtrl) {
                return;
            }

            ngModelCtrl.$parsers.push(function(val) {
                if (angular.isUndefined(val)) {
                    var val = '';
                }
                var clean = val.replace(/[^0-9\.]/g, '');
                var decimalCheck = clean.split('.');

                if(!angular.isUndefined(decimalCheck[1])) {
                    decimalCheck[1] = decimalCheck[1].slice(0,4);
                    clean =decimalCheck[0] + '.' + decimalCheck[1];
                }

                if (val !== clean) {
                    ngModelCtrl.$setViewValue(clean);
                    ngModelCtrl.$render();
                }
                return clean;
            });

            element.bind('keypress', function(event) {
                if(event.keyCode === 32) {
                    event.preventDefault();
                }
            });
        }
    };
})
.controller('appCtrl', [
        '$scope', '$http',
        function ($scope, $http) {

            var fillUSDRates = function () {
                $http.get("http://localhost:4000/api/getRates?currency=USD").success(function (usdRates) {
                    debugger;
                    $scope.usdRates = usdRates;
                }).error(function (e) {
                    alert('cant load USD Rates');
                });
            };

            $scope.getConvertedValue = function(){
                if($scope.fromCurrency && $scope.toCurrency && $scope.value && $scope.value != "."){
                    var url = "http://localhost:4000/api/convert?fromCurrency="+$scope.fromCurrency+"&&toCurrency="+$scope.toCurrency+"&&value="+$scope.value;
                    $http.get(url).success(function (usdRates) {
                        $scope.convertedValue = usdRates;
                    }).error(function (e) {
                        $scope.convertedValue = "";
                        alert('cant convert value');
                    });
                }else{
                    $scope.convertedValue = "";
                }
            };


            fillUSDRates();


        }]);