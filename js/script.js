$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 100){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky")
        }
    });
    
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");
    });
});

$('.navbar .menu').click(function(){
    $('html').css("scrollBehavior", "smooth");
    $('.navbar .menu').toggleClass('active');
});
