$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".scrolling-navbar").css({"background-color":"#009FB8"});   
        }
        else{
            $(".scrolling-navbar").css({"background-color":"rgba(195, 199, 201, .3)"});
        }

    })


})