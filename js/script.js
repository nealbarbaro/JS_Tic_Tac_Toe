// galaxies, solars systems, planets, satelites

$(document).ready(function(){

  var tiles = $('.tile');
  var p1arr = [];
  var p2arr = [];
  var current_player = 1;

  var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

  var is_game_over = function(player_array) {
    var player_list = player_array.join("").split(",");
    for (var i = 0; i < win.length; i++) {
      if (_.contains(player_list, win[i].join(""))) {
        alert("Player " + current_player + " wins!");
        window.location.href = window.location.href;
      }
    }
  };

  var activate_tile = function(tile) {
    if (current_player === 1){
      tile.html("X");
      tile.addClass('xclass');
      p1arr.push(tile.attr("data"));
      is_game_over(p1arr);
      current_player = 2;
    }
    else {
      tile.html('O');
      tile.addClass('oclass');
      p2arr.push(tile.attr("data"));
      is_game_over(p2arr);
      current_player = 1;
    }
  };


  var handle_click = function(){
    var tile = $(this);
    if (tile.hasClass('xclass') || tile.hasClass('oclass')) {
      console.log("fail");
      return false;
    }
    activate_tile(tile);
  };

  $.each(tiles, function(index, tile) {
    var tile = $(tile);
    tile.on('click', handle_click);
  });

});
