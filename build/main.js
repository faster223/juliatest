// Fullpage settings


$(document).ready(function() {


    $('#fullpage').fullpage({
        //Navigation
        menu: '.menu',
        lockAnchors: false,
        anchors: ['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'bottom',
        navigationTooltips: ['Свадебные фотосессии', 'Фотосессии для выпускников'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize: false,
        sectionsColor: ['#fff', '#fff'],
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction) {

            if (index == 1) {
                $('.hero-text-svg-wrapper svg').attr('class', 'lens-active');
                $('body, li a').css('color', '#fff');
                $('h1, h3').css('color', '#0af');

             
            }
            if (index == 2) {
                $('.hero-text-svg-wrapper svg').attr('class', 'lens-active-up');
               
                 $('body, li a').css('color', '#000');

            }

        },
        afterLoad: function(anchorLink, index) {
          
            if (index == 1) {
                $('#lens').removeAttr('class', 'lens-active');

            }
            if (index == 2) {
                $('#lens').removeAttr('class', 'lens-active');

            }

            //         if (index === 1) {

            //             for (var i = 0; i < navsLength; i++) {

            //     if (i % 2 != 0) {
            //        $(navs[i]).animate({'left': '-50px'}, 400)
            //     } else {
            //        $(navs[i]).animate({'right': '-50px'}, 400)
            //     }
            // }
            //         };

        },
        afterRender: function() {},
        afterResize: function() {},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {

            if (slideIndex > 0) {
                $('#svg4136').animate({'width': '15px', 'height': '15px'}, 800);

                $('.hero-text').animate({
                    'left': '98%',
                    'top': '2%',
                    'width': '20%'
                }, 800);
                $('.hero-text h1').animate({
                    'font-size': '1.2rem',
                    'line-height': '20px'
                }, 800);
                    $('.hero-text h3').animate({
                    'font-size': '.8rem',
                    'line-height': '12px',
                    'text-transform': 'uppercase'
                }, 800);
                      $('.hero-text li a').animate({
                    'font-size': '.8rem',
                  
                }, 800);
                $('.brackets:nth-child(1)').animate({
                    'left': "33%"
                }, 800);


            } else {
            $('#svg4136').animate({'width': '35px', 'height': '35px'}, 800);


                $('.hero-text').animate({
                    'left': '50%',
                    'top': '25%',
                    'width': '40%'
                }, 800);
                $('.hero-text h1').animate({
                    'font-size': '3rem',
                    'line-height': '45px',
                    'letter-spacing': '6px'
                }, 800);

                $('.brackets').animate({
                    'display': "none"
                }, 800);

            }
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {

        }
    });

    function addClassSlide() {
        var slide = document.getElementsByClassName('slide');
        $(slide).each(function(i) {
            i += 1;
            $(this).addClass('slide-image' + i);
            var i = slide.length;
        });
    }
    addClassSlide();
    $('.fp-prev').prepend('<div class="new-nav-style new-nav-style-left"><i class="ion-ios-arrow-thin-left"></i><span class="word">L</span></div>');
    $('.fp-next').prepend('<div class="new-nav-style new-nav-style-right"><i class="ion-ios-arrow-thin-right"></i><span class="word">R</span></div>');



    var navs = document.getElementsByClassName('new-nav-style');
    var navsLength = navs.length;

    function moveArrows() {
        for (var i = 0; i < navsLength; i++) {

            if (i % 2 != 0) {
                $(navs[i]).animate({
                    'margin-left': '-30px'
                }, 1500);
                $(navs[i]).animate({
                    'margin-left': '-10px'
                }, 100);
                $(navs[i]).animate({
                    'margin-left': '-20px'
                }, 100);
                $(navs[i]).animate({
                    'margin-left': '-15px'
                }, 100);
            } else {
                $(navs[i]).animate({
                    'margin-left': '30px'
                }, 1500);
                $(navs[i]).animate({
                    'margin-left': '10px'
                }, 100);
                $(navs[i]).animate({
                    'margin-left': '20px'
                }, 100);
                $(navs[i]).animate({
                    'margin-left': '7px'
                }, 100);
            }
        }

    };

    setTimeout(moveArrows, 1000);

    var p = $('.hero-text-svg-wrapper svg ').find('path');

    p.css('opacity', '0');


    for (var index = 0; index < $(p).length; index++) {

        $(p).eq(index).attr('id', 'l' + index);

    }

    var elems = document.getElementsByTagName('path');
    var i = 0;
 function delayedStroke() {
    var hue = 'rgb(' + (Math.floor(Math.random() * 150)) + ',' + (Math.floor(Math.random() * 150)) + ',' + (Math.floor(Math.random() * 150)) + ')';

        elems[i].style.opacity = '1';
        elems[i].style.fill = 'transparent';
        elems[i].style.stroke = '#0af';
        elems[i].style.strokeWidth = '5px';
        $('.hero-text-svg-wrapper svg').attr('class', 'lens-active');

        if (++i == elems.length) {
            return;
        }

        window.setTimeout(delayedStroke, 500);
    }
    delayedStroke();


});

// var lis = document.getElementById('menu').getElementsByTagName('li');
