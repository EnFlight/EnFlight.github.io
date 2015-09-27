$(function() {
    $('.photo-grid-photo').on('click', function() {
        $('.photo-grid-photo').removeClass('active');
        $(this).toggleClass('active');
    });
  
  $('.read-more').on('click', function() {
      var $bio = $(this).parent().clone();
      var $original = $(this).parent();
    
      $bio.css({
        left: $original.position().left + 'px',
        top: $original.position().top + 'px'/*,
        height: $original.outerHeight() + 'px'*/
      });
    
      $('.photo-grid-photo').toggleClass('active');
      $bio.appendTo('body').addClass('expanded-bio');
      var bioHeight = $bio.outerHeight();
      $bio.find('.hidden-bio').css('display', 'none');
      window.setTimeout(function() {
        $('.photo-grid-photo').removeClass('active');
        $bio.addClass('come-out');
        window.setTimeout(function(){
          //$bio.find('.hidden-bio').show();
          $bio.css('height', bioHeight + 'px');
        }, 500);
      }, 100);
      
  });
});

var app = ( function() {
  
  var settings = {
    running: false,
    duration: 250,
    current: 0
  };
  
  var init = function() {
    bindEventHandlers();
    
    $( 'img' ).each( function() {
      var src = $( this ).attr( 'src' );
  
      $( this ).attr( 'data-src', src );
    } );
  }
  
  var bindEventHandlers = function() {
    $( document ).on( 'mouseenter', 'article', function() {      
      startLoop();
    } )
    .on( 'mouseleave', 'article', function() {
      stopLoop();
    } );
  }
  
  var startLoop = function() {
    
    if( $( '#toggle-animation' ).prop( 'checked' )  ) {
    
     settings.loop = setInterval( function() {
        next();
      }, settings.duration );
      
    }
  }
  
  var stopLoop = function() {
    clearInterval( settings.loop );
    settings.loop = null;
  }
  
  var next = function() {
    var src = 'http://hatsumatsu.de/files/public/dummy/dummy-' + settings.current + '.jpg';
    
    $( 'img' ).attr( 'src', src );
    
    settings.current = ( settings.current < 5 ) ? ( settings.current + 1 ) : 0;
  }
  
  return {
    init: function() { init(); }
  }
  
} )();

$( document ).ready( function() {
  app.init();
} );