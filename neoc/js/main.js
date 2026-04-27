/*==============this is using for mobile & desktop work both are different creating problem on iphone==============*/
/*$(window).resize(function() {
    location.reload();
});*/
/*==============refresh==============*/






/*==============loader==============*/
$(window).on('load', function() {
  if($('.loader_area').length){
    $('.loader_area').delay(2750).fadeOut(250);
  }
});
/*==============loader==============*/




/*==============navigation_bar=============*/
$(document).ready(function(){
  $(".header .header_bottom .mobile_menu > li.button_search a.button_toggle").click(function(){
      $(".header .header_bottom .navigation_bar").slideToggle();
  });
    
    
  /*if ($(window).width() <= 991) {
       $(".header .header_bottom .navigation_bar > li > a").addClass("animate small_left");
  }
  else {
      $(".header .header_bottom .navigation_bar > li > a").removeClass("animate small_left");
  };*/
    
    
  if ($(window).width() <= 991) {
       $(".header .header_bottom .mobile_menu, .header .header_bottom .navigation_bar").click(function(e){
        e.stopPropagation();
      });
      $(document).click(function(){
          $(".header .header_bottom .navigation_bar").slideUp();
      });
      $(".header .header_bottom .navigation_bar > li > a").click(function(){
          $(".header .header_bottom .navigation_bar").slideUp();
      });
      $(".header .header_bottom .navigation_bar li > a").click(function(){
          $(".header .header_bottom .navigation_bar").slideUp();
      });
  };
  
  $(".header .header_bottom .mobile_menu > li.button_search a.fa-search").click(function(){
      $(".header .header_middle form.search_bar").fadeIn();
  });
  $(".header .header_middle form.search_bar .fa-close").click(function(){
      $(".header .header_middle form.search_bar").fadeOut();
  });
    
  $(".header .header_bottom .navigation_bar > li.close").click(function(){
      $(".header .header_bottom .navigation_bar").slideUp();
  });
});

/*==============navigation_bar=============*/






/*==============progress_bar=============*/
$(document).scroll(function (e) {
  var scrollAmount = $(window).scrollTop();
  var documentHeight = $(document).height();
  var windowHeight = $(window).height();
  var scrollPercent = (scrollAmount / (documentHeight - windowHeight)) * 100;
  var roundScroll = Math.round(scrollPercent);
  
  // For scrollbar 1
  $(".top_progress_bar > div").css("width", scrollPercent + "%");
  $(".top_progress_bar span").text(roundScroll); // for show width in %
});
$(document).scroll(function () {
    if (window.scrollY > 20) {
        $(".top_progress_bar").show();
    } else {
        $(".top_progress_bar").hide();
    }
});
/*==============progress_bar=============*/




/*============header_search============*/
$(document).ready(function(){
  $("form.search_bar input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("form.search_bar .dropdown > li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
$(document).ready(function(){
$("form.search_bar").click(function(e){
    e.stopPropagation();
});
});
$(document).click(function(){
    $("form.search_bar .dropdown").hide();
    $("form.search_bar input").val("");
    $("form.search_bar button").hide();
});
$(document).ready(function(){
$('form.search_bar input').keyup(function() {
  if ($(this).val().length == 0) {
    $('form.search_bar .dropdown, form.search_bar button').hide();
  } else {
    $('form.search_bar .dropdown, form.search_bar button').show();
  }
}).keyup(); 
$("form.search_bar button").click(function(){
    $(this).hide();
    $("form.search_bar .dropdown").hide();
    $("form.search_bar input").val("");
});
$("form.search_bar .dropdown > li > a").click(function(){
    $(this).parent().parent().hide();
    $(this).parent().parent().siblings("input").val("");
    $(this).parent().parent().siblings("button").hide();
});
});
/*============header_search============*/


/*============slider============*/
$(document).ready(function() {
    $('.slider .owl-carousel').owlCarousel({
        lazyLoad: true,
        btt:true,
        items: 1,
        loop: true,
        autoplay: true,
        dots:true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        thumbs: true,
        thumbImage: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',			
    });
});
/*============slider============*/






/*===========content slider===========*/
(function($){
    $.fn.typer = function(text, options){
        options = $.extend({}, {
            char: '',
            delay: 2000,
            duration: 600,
            endless: true,
            onType: $.noop,
            afterAll: $.noop,
            afterPhrase: $.noop
        }, options || text);

        text = $.isPlainObject(text) ? options.text : text;
        text = $.isArray(text) ? text : text.split(" ");

        return this.each(function(){
            var elem = $(this),
                isVal = {input:1, textarea:1}[this.tagName.toLowerCase()],
                isTag = false,
                timer,
                c = 0;

            (function typetext(i) {
                var e = ({string:1, number:1}[typeof text] ? text : text[i]) + '',
                    char = e.substr(c++, 1);

                if( char === '<' ){ isTag = true; }
                if( char === '>' ){ isTag = false; }
                elem[isVal ? "val" : "html"](e.substr(0, c) + ($.isFunction(options.char) ? options.char() : options.char || ' '));
                if(c <= e.length){
                    if( isTag ){
                        typetext(i);
                    } else {
                        timer = setTimeout(typetext, options.duration/10, i);
                    }
                    options.onType(timer);
                } else {
                    c = 0;
                    i++;

                    if (i === text.length && !options.endless) {
                        return;
                    } else if (i === text.length) {
                        i = 0;
                    }
                    timer = setTimeout(typetext, options.delay, i);
                    if(i === text.length - 1) options.afterAll(timer);
                    options.afterPhrase(timer);
                }
            })(0);
        });
    };
}(jQuery));


var win = $(window),
foo = $("#post");
foo.typer(["(Software <span>Engineer</span>)", "(UI & UX <span>Developer</span>)"]);
/*===========content slider===========*/





/*===========sidebar_sliders===========*/
$(document).ready(function() {
    $('.sidebar .full_width.testimonials_slider, .sidebar .full_width.lifestyle_slider, .sidebar .full_width.childhood_slider, .sidebar .full_width.team_slider').owlCarousel({
        lazyLoad: true,
        loop: true,
        autoplay:true,
        margin:0,
        items:1,
        nav: true,
        dots:false,
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        responsiveClass:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        //animateOut: 'fadeOut',
        //animateIn: 'fadeIn',
        thumbs:false,
        thumbImage: false,
        autoHeight:true,
    });
});
/*===========sidebar_sliders===========*/


/*============progress bar============*/
(function($) {
    $.fn.appear = function(fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function() {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function() {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function() {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });

})(jQuery);
/* custom js add here */
//Fact Counter + Text Count
if($('.bar-item').length){
    $('.bar-item').appear(function(){

        var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);
            
        if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
                countNum: $t.find(".count-text").text()
            }).animate({
                countNum: n
            }, {
                duration: r,
                easing: "linear",
                step: function() {
                    $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function() {
                    $t.find(".count-text").text(this.countNum);
                }
            });
        }
        
    },{accY: 0});
}
//Progress Bar
if($('.progress-line').length){
    $('.progress-line').appear(function(){
        var el = $(this);
        var percent = el.data('width');
        $(el).css('width',percent+'%');
    },{accY: 0});
}
/*============progress bar============*/






/*===============my_work===============*/
$(document).ready(function(){
    $(".my_work_area .more .fa-eye").click(function(){
        $(this).toggleClass("active");
        $(this).parent().siblings(".image").toggleClass("active");
        $(this).parent().siblings().children(".website_approved").slideToggle();
        $(this).parent().parent().parent().siblings().children().children().children(".fa-eye").removeClass("active");
        $(".my_work_area .image .details").removeClass("active");
        $(this).parent().parent().parent().siblings().children().children(".image").removeClass("active");
        $(this).parent().parent().parent().siblings().children().children().children(".website_approved").slideDown();
    });
    $(".my_work_area .more .fa-long-arrow-right").click(function(){
        $(this).parent().siblings(".image").removeClass("active");
    });
    $(".my_work_area").click(function(e){
        e.stopPropagation();
    });
    $(document).click(function(){
        $(".my_work_area .image").removeClass("active");
        $(".my_work_area .more .fa-eye").removeClass("active");
        $(".my_work_area .image .details").removeClass("active");
        $(".my_work_area .image .website_approved").slideDown();
    });
    $(".my_work_area .image .detail").click(function(){
        $(this).siblings(".details").addClass("active");
        $(".my_work_area .more .fa-eye").removeClass("active");
        $(this).parent().parent().parent().siblings().children().children().children(".details").removeClass("active");
        $(".my_work_area .image").removeClass("active");

    });
    $(".my_work_area .image .details > .fa").click(function(){
        $(this).parent(".details").removeClass("active");
        $(".my_work_area .more .fa-eye").removeClass("active");
    });
});
/*===============my_work===============*/    






/*===============branding_projects===============*/
$(document).ready(function(){
    $(".branding_projects_area > li.buttons .btn.one").click(function(){
        $(this).toggleClass("active");
        $(this).parent().siblings(".image").toggleClass("active");
        $(this).parent().parent().siblings().children(".image").removeClass("active");
        $(this).parent().parent().siblings().children().children(".one").removeClass("active");
        
        $(this).parent().siblings(".image").attr("id", "template");
        $(this).parent().parent().siblings(".branding_projects_area").children(".image").removeAttr("id", "template");
    });
    $(".branding_projects_area > li.buttons .btn.two").click(function(){
        $(this).parent().siblings(".image").removeClass("active");
    });
    $(".branding_projects_area > li.buttons .btn.one").click(function(e) {					
        e.preventDefault();					
        var section = $(this).attr("href");					
        $("html, body").animate({					
            scrollTop: $(section).offset().top - 7					
        });
        if ($(window).width() <= 620) {
               $("html, body").animate({					
                    scrollTop: $(section).offset().top - 15					
               });
          };
    });
    
    $(".branding_projects_area").click(function(e){
        e.stopPropagation();
    });
    $(document).click(function(){
        $(".branding_projects_area > li.image").removeClass("active").removeAttr("id", "template");;
        $(".branding_projects_area > li.buttons .btn.one").removeClass("active");
    });
});
/*===============branding_projects===============*/





/*============testinomial slider============*/
$(document).ready(function() {
  $('.reviews_slider .owl-carousel').owlCarousel({
    lazyLoad: true,
    btt:true,
    items: 2,
    loop: true,
    autoplay: true,
    autoHeight:true,
    margin:30,
    dots:false,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
    thumbs: true,
    thumbImage: false,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item',
    responsiveClass:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
    },   
  });
  $(".reviews .owl-controls").addClass("animate big_right");
});
/*============testinomial slider============*/





/*============footer==========*/
$(document).ready(function() {
    var currentYear = (new Date).getFullYear();
    $("#current_year").text((new Date).getFullYear());
});
/*============footer==========*/




/*============same page linking to top==========*/
$(document).scroll(function () {
    if (window.scrollY > 300) {
        $("a.scroll_top").fadeIn();
    } else {
        $("a.scroll_top").fadeOut();
    }
});

$("a.scroll_top").click(function(e) {					
    e.preventDefault();					
        var section = $(this).attr("href");					
        $("html, body").animate({					
        scrollTop: $(section).offset().top					
    });					
});
/*============same page linking to top==========*/



/*============lazy load===========*/
$(document).ready(function() {
    $(function() {
        $('.lazy').Lazy();
    });
});

/*============lazy load===========*/


/*============animation on viewport============*/
$(document).ready(function() {
    var $animation_elements = $('.animate');
    var $window = $(window);
    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);

      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('active');
            } else {
            $element.removeClass('');
        }
      });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});
/*============animation on viewport============*/


/*============image gallery============*/
$(function () {
    var $win = $(window);
    $win.scroll(function () { 
    if( $win.height() + $win.scrollTop() < $(document).height() - 200 && $win.scrollTop() > 1100 ){
        $("ul.filters-list").addClass("fixed");
    }
    else if( $win.scrollTop() < 1101 ){
      $("ul.filters-list").removeClass("fixed");
    }
    if( $win.height() + $win.scrollTop() >= $(document).height() - 600 ) {
        $("ul.filters-list").removeClass("fixed");
    }

  });
});
$("ul.filters-list > li > a").click(function(e) {					
    e.preventDefault();					
        var section = $(this).attr("href");					
        $("html, body").animate({					
        scrollTop: $(section).offset().top - 50					
    });					
});
/*$(".buttons.image_gallery .button").click(function(e) {					
    e.preventDefault();					
        var section = $(this).attr("href");					
        $("html, body").animate({					
        scrollTop: $(section).offset().top - 50
    });					
});*/
/*============image gallery============*/




/*==============marquee_width==============*/
/*$(document).ready(function(){
    var spanWidth = $(".marquee_area .marquee > span").width();
    var itemsWidth = $(".marquee_area .marquee .items").width();
    var totalWidth = itemsWidth - spanWidth;
    console.log("Total Width = " + totalWidth + "px");
});*/
/*==============marquee_width==============*/


/*==============popup==============*/
$(document).ready(function(){
	$(".data_target").on("click", function(){
	  $($(this).attr("data-target")).addClass("active");
	});
	$(".popup .center .center_main .head > i, .popup .center .center_main span.ok > i").click(function(){
		$(".popup").removeClass('active');
	});
});
/*==============popup==============*/