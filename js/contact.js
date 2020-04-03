$( window ).on( "load", function() {
    $('.card').click(function(){
    $(this).toggleClass('flipped');
  });
});