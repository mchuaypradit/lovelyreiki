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

