angular.module('video-player')

.component('videoPlayer', {
  bindings:{
    video: '<',
    currentVideo: '<'
  },

  templateUrl: 'src/templates/videoPlayer.html'

});
