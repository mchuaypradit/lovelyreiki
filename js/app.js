$(document).foundation();

/*$(document).ready(function() {
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


});*/

$(document).ready(function($) {
    $('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        
        // Get the current target hash
        var target = this.hash;
        
        // Animate the scroll bar action so its smooth instead of a hard jump
        $('html, body').stop().animate({
            'scrollTop' : $(target).offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});
