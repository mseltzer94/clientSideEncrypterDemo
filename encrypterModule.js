var app = angular.module('clientSideDataEncrypter', ['mdo-angular-cryptography']);

app.controller("EncrypterController", function($scope, $crypto) {
      $scope.encrypt = function(){
        $scope.encrypted=$crypto.encrypt($scope.input,$scope.secret);
        $scope.encryptedInput =  $scope.encrypted;
        $scope.encryptedSecret = $scope.secret;
      }
      $scope.decrypt = function(){
        $scope.decrypted=$crypto.decrypt($scope.encryptedInput,$scope.encryptedSecret);
      }
      $scope.formEncryptVerify = function(){
        return ($scope.input == undefined || $scope.secret == undefined);
      }
      $scope.formUnencryptVerify = function(){
        return ($scope.encryptedInput == undefined || $scope.encryptedSecret == undefined);
      }
  } );
