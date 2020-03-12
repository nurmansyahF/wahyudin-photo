(function() {
  'use strict';

  function init() {
    jQuery('img.svg').each(function(i) {
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
        var $svg = jQuery(data).find('svg');
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
        }
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);
      }, 'xml');
    });

    $('body').hbaLoadImages({
      attribute: 'img-src',
      onSuccess: function(source, element) {
        element.src = source;
      }
    });

    setTimeout(func, 100);
    setTimeout(bgImg, 100);

    setTimeout(function() {
      $('.select').selectpicker({
        style: 'select-control',
        size: 4
      });
    }, 800);

  }init();

  function bgImg() {
    $('.bg-img').each(function(){
      var $t = $(this),
          $data = $t.data('src');
      $t.css('background-image', 'url('+$data+')');
    })
  }

  function func() {
    $('body').addClass('ready')

    $('.back-to-top').on('click',function(){
      $("html, body").animate({ scrollTop: 0 },'slow');
    });

    //SLIDER
    $('.slider').each(function(){
      var t = $(this),
          nItem = t.children().length;

      if (nItem > 1){
        t.addClass('owl-carousel');
        t.owlCarousel({
          items: 1,
          loop: true,
          dots: false,
          nav: true,
          margin: 24,
          center: true,
          navText: ["<span class='icon-chevron-left'></span>","<span class='icon-chevron-right'></span>"],
          autoplay: true,
          autoplayTimeout: 8000,
          autoplaySpeed: 1200,
          animateIn: 'fadeIn',
          animateOut: 'fadeOut'
        })
      }
    });

    //SLIDER EXTRA SMALL
    function sliderXS() {
      var sliderS = $('.slider-xs');
      if ($(window).width() < 767) {
        sliderS.addClass('owl-carousel');
        sliderS.owlCarousel({
          // navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
          items: 1,
          loop: true,
          nav: false,
          dots: true,
          autoplay: true,
          responsive : {
            0 : {
              items: 1
            },
            480 : {
              items: 1
            }
          }
        });
      } else {
        sliderS.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        sliderS.find('.owl-stage-outer').children().unwrap();
      }
    }sliderXS();

    $('.inputfile').each(function() {
      var e = $(this),
          a = e.siblings("label");
      e.change(function() {
          console.log('jalan');
          var t = $(this).val().split("\\").pop();
          a.html('<i class="fa fa-file-o mr10"></i> ' + t), e.closest(".upload-file").addClass("has-file")
      })
    })

    $(window).scroll(function() {
      if ($(window).scrollTop() > $(window).height()/2) {
        $('.back-to-top').addClass('show');
      } else {
        $('.back-to-top').removeClass('show');
      }
      // mastParallax();
      animateScroll();
    });

    // FIXED MENU
    function fixedHeader() {
      if($('header').length > 0 && $(window).width() > 1025){
        var ct = 0;
        $(window).scroll(function() {

          $('header').each(function() {
            var hh = $('header').height();

            var top = $(window).scrollTop(),
                h = $(window).height(),
                header = $('header');
            if (!$('body').hasClass('menu-open')) {
              if (top > hh) {
                header.addClass('fixed');
                $('.cart').removeClass('in');
              } else {
                header.removeClass('fixed')
              }
              if (ct > top) {
                header.addClass('sticky');
              } else {
                header.removeClass('sticky');
              }
              if (top > h) {
                jQuery('.back-to-top').removeClass('h');
              } else {
                jQuery('.back-to-top').addClass('h');
              }
              ct = top;
            }

          });
        });
      }else{
        $('header').removeClass('sticky');
        $('header').removeClass('fixed');
      }
    }fixedHeader();

    $('.header_menu_icon').click(function(){
      $('body').toggleClass('menu-open');
    })

    $('.has-sub').each(function(){
      var $t = $(this),
          $link = $t.find('.link');
      $link.click(function(){
        if($t.hasClass('sub-open')){
          $t.removeClass('sub-open');
        } else {
          $('.has-sub').removeClass('sub-open');
          $t.addClass('sub-open');
        }
      })
    })

    // ANIMATE ON SCROLL
    function animateScroll(){
      $('.animate').each(function(i){
          var bottom_of_object = $(this).offset().top + 10;
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          if( bottom_of_window > bottom_of_object ){
              $(this).addClass('animate-in');
          }
      });
    }

    $( document ).ready(function() {
      animateScroll();
    });

    $(window).resize(function() {
      fixedHeader();
      // mastParallax();
      sliderXS();
    });

  }

})();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBqUXVlcnkoJ2ltZy5zdmcnKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgdmFyICRpbWcgPSBqUXVlcnkodGhpcyk7XHJcbiAgICAgIHZhciBpbWdJRCA9ICRpbWcuYXR0cignaWQnKTtcclxuICAgICAgdmFyIGltZ0NsYXNzID0gJGltZy5hdHRyKCdjbGFzcycpO1xyXG4gICAgICB2YXIgaW1nVVJMID0gJGltZy5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICAgIGpRdWVyeS5nZXQoaW1nVVJMLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgdmFyICRzdmcgPSBqUXVlcnkoZGF0YSkuZmluZCgnc3ZnJyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbWdJRCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICRzdmcgPSAkc3ZnLmF0dHIoJ2lkJywgaW1nSUQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGltZ0NsYXNzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgJHN2ZyA9ICRzdmcuYXR0cignY2xhc3MnLCBpbWdDbGFzcyArICcgcmVwbGFjZWQtc3ZnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzdmcgPSAkc3ZnLnJlbW92ZUF0dHIoJ3htbG5zOmEnKTtcclxuICAgICAgICAkaW1nLnJlcGxhY2VXaXRoKCRzdmcpO1xyXG4gICAgICB9LCAneG1sJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdib2R5JykuaGJhTG9hZEltYWdlcyh7XHJcbiAgICAgIGF0dHJpYnV0ZTogJ2ltZy1zcmMnLFxyXG4gICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uKHNvdXJjZSwgZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuc3JjID0gc291cmNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmMsIDEwMCk7XHJcbiAgICBzZXRUaW1lb3V0KGJnSW1nLCAxMDApO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5zZWxlY3QnKS5zZWxlY3RwaWNrZXIoe1xyXG4gICAgICAgIHN0eWxlOiAnc2VsZWN0LWNvbnRyb2wnLFxyXG4gICAgICAgIHNpemU6IDRcclxuICAgICAgfSk7XHJcbiAgICB9LCA4MDApO1xyXG5cclxuICB9aW5pdCgpO1xyXG5cclxuICBmdW5jdGlvbiBiZ0ltZygpIHtcclxuICAgICQoJy5iZy1pbWcnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciAkdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAkZGF0YSA9ICR0LmRhdGEoJ3NyYycpO1xyXG4gICAgICAkdC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKCcrJGRhdGErJyknKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmdW5jKCkge1xyXG4gICAgJCgnYm9keScpLmFkZENsYXNzKCdyZWFkeScpXHJcblxyXG4gICAgJCgnLmJhY2stdG8tdG9wJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sJ3Nsb3cnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vU0xJREVSXHJcbiAgICAkKCcuc2xpZGVyJykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgdCA9ICQodGhpcyksXHJcbiAgICAgICAgICBuSXRlbSA9IHQuY2hpbGRyZW4oKS5sZW5ndGg7XHJcblxyXG4gICAgICBpZiAobkl0ZW0gPiAxKXtcclxuICAgICAgICB0LmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICB0Lm93bENhcm91c2VsKHtcclxuICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICAgICAgbWFyZ2luOiAyNCxcclxuICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgIG5hdlRleHQ6IFtcIjxzcGFuIGNsYXNzPSdpY29uLWNoZXZyb24tbGVmdCc+PC9zcGFuPlwiLFwiPHNwYW4gY2xhc3M9J2ljb24tY2hldnJvbi1yaWdodCc+PC9zcGFuPlwiXSxcclxuICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA4MDAwLFxyXG4gICAgICAgICAgYXV0b3BsYXlTcGVlZDogMTIwMCxcclxuICAgICAgICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXHJcbiAgICAgICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCdcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1NMSURFUiBFWFRSQSBTTUFMTFxyXG4gICAgZnVuY3Rpb24gc2xpZGVyWFMoKSB7XHJcbiAgICAgIHZhciBzbGlkZXJTID0gJCgnLnNsaWRlci14cycpO1xyXG4gICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjcpIHtcclxuICAgICAgICBzbGlkZXJTLmFkZENsYXNzKCdvd2wtY2Fyb3VzZWwnKTtcclxuICAgICAgICBzbGlkZXJTLm93bENhcm91c2VsKHtcclxuICAgICAgICAgIC8vIG5hdlRleHQ6IFtcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1sZWZ0Jz48L2k+XCIsXCI8aSBjbGFzcz0nZmFzIGZhLWNoZXZyb24tcmlnaHQnPjwvaT5cIl0sXHJcbiAgICAgICAgICBpdGVtczogMSxcclxuICAgICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgICBuYXY6IGZhbHNlLFxyXG4gICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgcmVzcG9uc2l2ZSA6IHtcclxuICAgICAgICAgICAgMCA6IHtcclxuICAgICAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA0ODAgOiB7XHJcbiAgICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNsaWRlclMudHJpZ2dlcignZGVzdHJveS5vd2wuY2Fyb3VzZWwnKS5yZW1vdmVDbGFzcygnb3dsLWNhcm91c2VsIG93bC1sb2FkZWQnKTtcclxuICAgICAgICBzbGlkZXJTLmZpbmQoJy5vd2wtc3RhZ2Utb3V0ZXInKS5jaGlsZHJlbigpLnVud3JhcCgpO1xyXG4gICAgICB9XHJcbiAgICB9c2xpZGVyWFMoKTtcclxuXHJcbiAgICAkKCcuaW5wdXRmaWxlJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGUgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgYSA9IGUuc2libGluZ3MoXCJsYWJlbFwiKTtcclxuICAgICAgZS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnamFsYW4nKTtcclxuICAgICAgICAgIHZhciB0ID0gJCh0aGlzKS52YWwoKS5zcGxpdChcIlxcXFxcIikucG9wKCk7XHJcbiAgICAgICAgICBhLmh0bWwoJzxpIGNsYXNzPVwiZmEgZmEtZmlsZS1vIG1yMTBcIj48L2k+ICcgKyB0KSwgZS5jbG9zZXN0KFwiLnVwbG9hZC1maWxlXCIpLmFkZENsYXNzKFwiaGFzLWZpbGVcIilcclxuICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+ICQod2luZG93KS5oZWlnaHQoKS8yKSB7XHJcbiAgICAgICAgJCgnLmJhY2stdG8tdG9wJykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuYmFjay10by10b3AnKS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIG1hc3RQYXJhbGxheCgpO1xyXG4gICAgICBhbmltYXRlU2Nyb2xsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBGSVhFRCBNRU5VXHJcbiAgICBmdW5jdGlvbiBmaXhlZEhlYWRlcigpIHtcclxuICAgICAgaWYoJCgnaGVhZGVyJykubGVuZ3RoID4gMCAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDEwMjUpe1xyXG4gICAgICAgIHZhciBjdCA9IDA7XHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAkKCdoZWFkZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgaGggPSAkKCdoZWFkZXInKS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0b3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgICAgICAgICBoID0gJCh3aW5kb3cpLmhlaWdodCgpLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyID0gJCgnaGVhZGVyJyk7XHJcbiAgICAgICAgICAgIGlmICghJCgnYm9keScpLmhhc0NsYXNzKCdtZW51LW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgIGlmICh0b3AgPiBoaCkge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgICAgICAgICAgJCgnLmNhcnQnKS5yZW1vdmVDbGFzcygnaW4nKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdmaXhlZCcpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChjdCA+IHRvcCkge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdzdGlja3knKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdzdGlja3knKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHRvcCA+IGgpIHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeSgnLmJhY2stdG8tdG9wJykucmVtb3ZlQ2xhc3MoJ2gnKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCcuYmFjay10by10b3AnKS5hZGRDbGFzcygnaCcpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjdCA9IHRvcDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAkKCdoZWFkZXInKS5yZW1vdmVDbGFzcygnc3RpY2t5Jyk7XHJcbiAgICAgICAgJCgnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH1maXhlZEhlYWRlcigpO1xyXG5cclxuICAgICQoJy5oZWFkZXJfbWVudV9pY29uJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgIH0pXHJcblxyXG4gICAgJCgnLmhhcy1zdWInKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciAkdCA9ICQodGhpcyksXHJcbiAgICAgICAgICAkbGluayA9ICR0LmZpbmQoJy5saW5rJyk7XHJcbiAgICAgICRsaW5rLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoJHQuaGFzQ2xhc3MoJ3N1Yi1vcGVuJykpe1xyXG4gICAgICAgICAgJHQucmVtb3ZlQ2xhc3MoJ3N1Yi1vcGVuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICQoJy5oYXMtc3ViJykucmVtb3ZlQ2xhc3MoJ3N1Yi1vcGVuJyk7XHJcbiAgICAgICAgICAkdC5hZGRDbGFzcygnc3ViLW9wZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEFOSU1BVEUgT04gU0NST0xMXHJcbiAgICBmdW5jdGlvbiBhbmltYXRlU2Nyb2xsKCl7XHJcbiAgICAgICQoJy5hbmltYXRlJykuZWFjaChmdW5jdGlvbihpKXtcclxuICAgICAgICAgIHZhciBib3R0b21fb2Zfb2JqZWN0ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAxMDtcclxuICAgICAgICAgIHZhciBib3R0b21fb2Zfd2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpO1xyXG5cclxuICAgICAgICAgIGlmKCBib3R0b21fb2Zfd2luZG93ID4gYm90dG9tX29mX29iamVjdCApe1xyXG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGUtaW4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgYW5pbWF0ZVNjcm9sbCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgZml4ZWRIZWFkZXIoKTtcclxuICAgICAgLy8gbWFzdFBhcmFsbGF4KCk7XHJcbiAgICAgIHNsaWRlclhTKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxufSkoKTtcclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9

//# sourceMappingURL=main.js.map
