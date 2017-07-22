angular.module('video-player')

.controller('SearchCtrl', function(youTube) {
    this.searchClick = () => {
      youTube.search(this.input, (data) => {
        this.result(data);
      });
    };
})




.component('search', {
  bindings:{
    service: '<',
    result:'<'
  },

  controller:'SearchCtrl',
  templateUrl: 'src/templates/search.html'

});
