// $('#scroll-down').on('click', function(event) {
// console.log('aaa');
//     var target = $(this.getAttribute('href'));

//     if( target.length ) {
//         event.preventDefault();
//         $('#what-we-do').stop().animate({
//             scrollTop: target.offset().top
//         }, 1000);
//     }

// });

$("#scroll-down").click(function() {
  console.log('aaa1');
  $('html, body').animate({
      scrollTop: $("#what-we-do").offset().top
  }, 800);
});