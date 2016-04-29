$(document).foundation();

$(document).ready(function() {
        var userFeed = new Instafeed({
        	get: 'user',
        	userId: '3044589536',
            accessToken: '3044589536.e8599b5.58beaa0fc4ac437682c34f388a432172',
            target: 'instafeed',
            links: true,
            limit: 6,
            sortBy: 'most-recent',
            resolution: 'standard_resolution',
            template: '<div class="column small-12 medium-4 large-4 instagram-box"><div class="photo-box"><a href="{{link}}"><img src="{{image}}"></a><div class="description">{{caption}}</div></div></div>'	
            });
         

            userFeed.run();


});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 600, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
});

