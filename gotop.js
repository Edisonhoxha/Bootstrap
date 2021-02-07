$(document).ready(function(){
      $(window).scroll(function(){
        if($(window).scrollTop() > 300){
          $('.gotopbtn').css({
            "opacity":"1", "pointer-events":"auto"
          });
        }else{
          $('.gotopbtn').css({
            "opacity":"0", "pointer-events":"none"
          });
        }
      });
    });