/*************************************************************
 *
 *	Created By: Nguyen Minh Tri - UR81HC
 *  Created Date: 21-10-2015
 *	Description: add comment header
 *	
 *	Modified By: Nguyen Minh Tri - UR81HC
 *	Modified Date: 21-10-2015
 *	Description: controller for sign in, navigation
 *
 *************************************************************/

angular.module("GlobalModule").controller("mainController", mainController);
mainController.$inject = ['$scope'];

function mainController($scope) {

    "use strict";

    $scope.isLogged = false;


}
