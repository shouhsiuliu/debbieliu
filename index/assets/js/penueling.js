// phone menu ham animate 
    function myFunction(x) {
        x.classList.toggle("change");
        // x.parentNode.parentNode.parentNode.parentNode.classList.toggle("ofHidden");
        document.body.classList.toggle("ofHidden");
        x.parentNode.classList.toggle("bdBottom");
    }

// to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
    
    $('.scroll-up').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop : 0}, 1000);
    });

// scroll function - figure
    $(window).on('scroll', function () {
        $('figure').each(function () {
            if (($(window).scrollTop()+600) >= $(this).offset().top) {
                $(this).addClass('in-view');
            } else {
                // $(this).removeClass('in-view');
            }
        });
    });

// toggle search&language
    $(".dropdown a[name*=menu_]").click(function(){
        if ($(this).attr("name") == $(this).next().attr("name")) //比對name是否一致
        {
            $(".dropdown-content[name!=" + $(this).attr("name") + "]").hide(); //不同的隱藏
            $(this).next().slideToggle();
        }
    });

// brand title click on phone
    function openCity(evt, brandphone) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(brandphone).style.display = "block";
        evt.currentTarget.className += " active";
    }

function kvStr() {
    var str = $(".flex-active-slide img").attr("data-src").split('/');
    var sUrl = "";
    for (i = 0; i < str.length; i++) {
        if (i == str.length - 1 && $(window).width() < 768)
            sUrl += "/m" + str[i];
        else if (i == 0)
            sUrl += str[i];
        else
            sUrl += "/" + str[i];
    }
    return sUrl;
}

//en index
function setban1() {
    if ($("#img_ban1").length > 0) {
        var str = $("#img_ban1").attr("data-src").split('/');
        var sUrl = "";
        for (i = 0; i < str.length; i++) {
            if (i == str.length - 1 && $(window).width() < 768)
                sUrl += "/m" + str[i];
            else if (i == 0)
                sUrl += str[i];
            else
                sUrl += "/" + str[i];
        }
        $("#img_ban1").attr("src", sUrl);
    }
}

//zh index
function setban1V2() {
    var str = $("#home").attr("data-org").split('/');
    var sUrl = "";
    for (i = 0; i < str.length; i++) {
        if (i == str.length - 1 && $(window).width() < 768)
            sUrl += "/m" + str[i];
        else if (i == 0)
            sUrl += str[i];
        else
            sUrl += "/" + str[i];
    }
    $("#home").attr("data-background", sUrl);
}

// kv change another picture on phone
$(document).ready(function () {
    setIGSort();

    $(".slides li img").each(function () {
        $(this).attr("oUrl", $(this).attr("data-src"));
    });
    setban1();

    $(window).resize(function () {
        // setban1();
        //輪播
        // var owl = $('.owl-carousel');

        // owl.each(function (idx, item) {
        //     if ($(window).width() < 768) { $(this).data('owl.carousel').options.items = 1; }
        //     else {
        //         switch (item.id) {
        //             case "owl-carousel_sales":
        //             case "owl-carousel_blog":
        //                 $(this).data('owl.carousel').options.items = 4; 
        //                 break;
        //             case "owl-carousel":
        //                 $(this).data('owl.carousel').options.items = 5; 
        //                 break;
        //             case "owl-carousel_ig":
        //                 $(this).data('owl.carousel').options.items = 6; 
        //                 break;
        //         }
        //     }
        //     $(this).trigger('refresh.owl.carousel');
        // });

            
        // hide nav (jq)
        // if ($(window).width() < 768) {

        //         var prev = 0;
        //         var $window = $(window);
        //         var nav = $('#navbar');

        //         $window.on('scroll', function(){
        //         var scrollTop = $window.scrollTop();
        //         nav.toggleClass('hidee', scrollTop > prev);
        //         prev = scrollTop;

        //         }) 
        // }
        // else{
        // }   
    });
    $(window).resize();
});

function setIGSort() {
    if ($('.iggrid .followbox figure').length == 0)
        return;

    let elements = $('.iggrid .followbox figure>img:first-child');
    //const igImgs = elements.toArray();
    const arr = Array.from({ length: 24 }, () => Math.random()).map(function (o, i) { return { id: i, sort: o }; }).sort((a, b) => a.sort - b.sort);

    elements.remove();
    $('.iggrid .followbox').remove();
    arr.forEach(function (e, i) {
        var divArea =
            "<div class=\"followbox \">" +
            "<a href=\"https://www.instagram.com/queenshoplife/\">" +
            "<figure class=\"in-view\">" +
            "<img src=\"http://photo.queenshop.com.tw/www/index/assets/images/ig/" + (e.id + 1) + ".jpg\" alt=\"Blog-post Thumbnail\" />" +
            "<div class=\"followtitle\"><img src=\"/assets/images/icon/heartW.svg\" alt=\"\"></div></figure></a></div>"
        $('.iggrid').append(divArea);
        //$('.iggrid .followbox figure')[i].prepend(igImgs[e.id]);
    });
}
