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
  var player = document.getElementById('audioPlayerId');

  $scope.mimeType = 'audio/mpeg';
  $scope.playlist = {
    tracks: [
      {url: 'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Call%20to%20Adventure.mp3'},
      {url: 'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Junkyard%20Tribe.mp3'},
      {url: 'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Vanes.mp3'},
      {url: 'http://incompetech.com/music/royalty-free/mp3-royaltyfree/Rising.mp3'}
    ]
  };

  $scope.currentTrack = $sce.trustAsResourceUrl($scope.playlist.tracks[0].url);

  $scope.setTrack = function(t) {
    $scope.currentTrack = $sce.trustAsResourceUrl(t);
  };

  $scope.$watch('currentTrack', function() {
    player.load();
    player.play();
  });
});
