(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('topSpotsCtrl', topSpotsCtrl);

    topSpotsCtrl.$inject = ['TopSpotsFactory'];

    /* @ngInject */
    function topSpotsCtrl($http) {
        var vm = this;



        vm.getTopSpots = function(){
          TopSpotsFactory.getTopSpots().then(function(response){
            console.log("success")
          })
        }
    }
})();
