angular.module('trippyApp')
  .controller('TripDetailCtrl', function($scope) {
    $scope.trip = { 
      id: 1,
      name: 'Richmond Rave',
      description: 'Not very fun',
      members: [
        { id: 3, name: 'Cory' },
        { id: 4, name: 'Michael'}
      ]
    };

    $scope.removeMember = function(member) {
      var index = $scope.trip.members.indexOf(member);
      $scope.trip.members.splice(index, 1);
    };

    $scope.addMember = function(member) {
      $scope.trip.members.push(member);
    };
});