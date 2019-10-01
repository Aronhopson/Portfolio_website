$(document).ready(function() {
    $('#slides').superslides({   //jQuery
        animation: "fade",
        play: 5000,
        pagination: false
    });
    var typed =new Typed(".typed" ,{
        strings : ["Web Developer.", "Students."],
        typeSpeed : 70,
        loop: true,
        startDelay :1000,
        showCursor : false
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
         responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });
   
    var skillsTopOffset = $(".Skillsection").offset().top;
    $(window).scroll(function() { 
        //window.pageYOffset is a scrool position
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            $('.chart').easyPieChart({
                easing: "easeInOut",
                barColor: "#fff",
                trackColor: false,
                scaleColor: false,
                lineWidth:4,
                size: 152,
                onStep: function(from,to, percent){
                    $(this.el).find('.percent').text(Math.round(percent)) // el represent current element
                }
        
            });
        }
    });
    $(".counter").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());
        element.countup(endVal)

    });

    $("[data-fancybox]").fancybox();

    //call when page is load
    $(".items").isotope({
        filter: "*", // means apply to all
        animationOption:{
            duration:1500,
            easing:"linear",
            queue:false
        }
    });



    $("#filters a").click(function() {
        $("#filters .current").removeClass("current"); //filtering and removing current element
        $(this).addClass("current");         //this refer top the click event that is current button

        var selector = $(this).attr("data-filter");

        //call when clicked
        $(".items").isotope({
            filter: selector, // means apply to all
            animationOption:{
                duration:1500,
                easing:"linear",
                queue:false
            }
        });
        return false;
    });
    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll",stickyNavigation); //when window is scroll stickNavigation is calll
function stickyNavigation() {
    var body =$("body");

    if($(window).scrollTop() >= navTop){ //if we scrool pass the position of nav top apply addClass
        body.css("padding-top" , nav.outerHeight() + "px");
        body.addClass("fixedNav");
    } else {
        body.css("padding-top" , 0);
        body.removeClass("fixedNav")
    }

}
});