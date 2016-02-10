'use strict';

/**
 * @ngdoc function
 * @name trippyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trippyApp
 */
angular.module('trippyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.trips = [
		{
			id:1,
			name:'Lake Tahoe',
			description:'Ski by the lake',
		},
		{
			id:2,
			name:'Lassen',
			description:'See stars by the lake',
		}
	];

	$scope.addTrip = function(trip){
		$scope.trips.push(trip);
	};

  });



