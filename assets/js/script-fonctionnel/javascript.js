$(function() {

    var current = 1;
    var num = 0;
    var max = $('.jackpot').length + 1;
    var rotate = 5;
    var speed = 80;
    var winner = 0;
  
    function change() {
      winner = Math.floor((Math.random() * 12) + 1);
      $('.jack-' + current).toggleClass("active-spin spin-default");
      current++;
      if (current == max) {
        current = 1;
        num++;
      }
      if (num == 3) {
        speed = 160;
      }
  
      if (num != rotate) {
        setTimeout(function() {
          change()
        }, speed);
      } else {
        current = 1;
       lastRound();
      }
    }
  
    function lastRound(){
  
       setTimeout(function() {
         $('.jack-' + current).toggleClass("active-spin spin-default");
         if (current == winner){
           findWinner();
         }else{
           current++;
           lastRound();
         }
        }, speed + current * 20);
      }
  
  
       function findWinner(){
       $('.jackpot').removeClass("active-spin").addClass("spin-default");
        $('.jack-' + winner).addClass("iswin");
        current = winner;
        num = 0;
    }
  
    $('.play').click(function(event) {
      $('.jackpot').removeClass("iswin").addClass('spin-default');
      setTimeout(function() {
        change()
      }, speed);
    });
  });