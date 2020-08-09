$(function(){
    $(".circle").click(function(){
        $("p").html("HEY DO NOT CLICK THE CIRCLE");
    })

    $(".circle").hover(function(){
        $("iframe").attr("src","https://www.facebook.com/");
    })
})