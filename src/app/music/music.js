angular.module('SuperApp.music', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('music', {
      url: '/music',
      views: {
        main: {
          controller: 'AudioPlayerCtrl',
          templateUrl: 'music/templates/music.tpl.html'
        }
      },
      data: { pageTitle: 'Audio Player' }
    });
})

.controller('AudioPlayerCtrl', function($scope, $sce) {

  $scope.playlist = {
    tracks: [
      {url: 'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Call%20to%20Adventure.mp3'},
      {url: 'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Junkyard%20Tribe.mp3'},
      {url: 'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Vanes.mp3'},
      {url: 'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Rising.mp3'}
    ]
  };

  $scope.setTrack = function(t) {
    $scope.currentTrack = $sce.trustAsResourceUrl(t);
  };

  $scope.addTrack = function() {
    $scope.playlist.tracks.push({ url: $scope.playlist.newTrack });
    $scope.playlist.newTrack = '';
  };

  $scope.removeTrack = function(url) {
    var tracks = $scope.playlist.tracks,
        length = tracks.length;

    for(var i = 0; i < length; i++) {
      if(tracks[i].url === url) {
        tracks.splice(i, 1);
      }
    }
  };

});
