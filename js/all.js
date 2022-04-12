$(document).ready(function () {

  //回到最上面//
  $(".backtoTop").click(function(){
      console.log($('html,body').scrollTop());
      $('html,body').animate({"scrollTop":0});
  });



  //社福影片自動播放// 

  $(window).scroll(function () {
    last=$("body").height()-$(window).height()-1000
    if($(window).scrollTop()>=last){
      $("#socialVdo")[0].play();
      $("#socialVdo2")[0].play();
    }
  })

  
/* 
  //BeforeAfter//

  $("#slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.foreground-img').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.slider-button').css('left', `calc(${sliderPos}% - 20px)`)
  });
  $("#slider2").on("input change", (e)=>{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.foreground-img2').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.slider-button2').css('left', `calc(${sliderPos}% - 20px)`)
  });
*/


//作品集類別按鈕//

$("#all").click(function (e) { 
  e.preventDefault();
  $(".all").fadeIn(500);
});
$("#draw").click(function (e) { 
  e.preventDefault();
  $(".draw").siblings().css("display","none");
  $(".draw").fadeIn(500);
});
$("#web").click(function (e) { 
  e.preventDefault();
  $(".all").siblings().css("display","none");
  $(".web").fadeIn(500);
});
$("#onepage").click(function (e) { 
  e.preventDefault();
  $(".all").siblings().css("display","none");
  $(".onepage").fadeIn(500);
});
$("#ps").click(function (e) { 
  e.preventDefault();
  $(".all").siblings().css("display","none");
  $(".ps").fadeIn(500);
});
$("#ebuy").click(function (e) { 
  e.preventDefault();
  $(".all").siblings().css("display","none");
  $(".ebuy").fadeIn(500);
});
$("#2D").click(function (e) { 
  e.preventDefault();
  $(".all").siblings().css("display","none");
  $(".2D").fadeIn(500);
});
$("#text").click(function (e) { 
  e.preventDefault();
  $(".all").siblings().css("display","none");
  $(".text").fadeIn(500);
});
$("#social").click(function (e) { 
  e.preventDefault();
  $(".all").siblings().css("display","none");
  $(".social").fadeIn(500);
});




    



});