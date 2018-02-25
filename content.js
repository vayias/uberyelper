// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    console.log('sadasdsa');
    if (msg.text === 'report_back') {
    	// var open_restaurants = document.querySelectorAll('*[class^="instantClosedOpenStores_2vvurw"]');
    	website = window.location.href;
    	is_it_caviar = false;
    	if (website.includes('ubereats')) {
			var items = document.getElementsByClassName('title_jd1cg');
    	} else {
    		// document.getElementsByClassName('merchant-tile_name')[0].children[0].innerHTML

			var items = document.getElementsByClassName('merchant-tile_name');
			is_it_caviar = true;
    	}
		for (var _i = 0; _i <= items.length - 1; _i++) {
			(function() {
				var i = _i;
				if (is_it_caviar) {
					var restaurant_name = items[i].children[0].innerHTML;
				} else {
					var restaurant_name = items[i].innerHTML;
				}

				// var parent = items[i].querySelectorAll('*[class^="content_GCQcm"]')[0];
				// console.log(parent);
				var node = document.createElement("SPAN");
				var node2 = document.createElement("SPAN");
				var url = 'https://api.yelp.com/v3/businesses/search?term=' + restaurant_name + '&location=San Fransisco';
				$.ajax({
	            url: url,
	            type: 'GET',
	            dataType: 'json',
	            headers: {
	                'Authorization': 'Bearer 9lg3ArzXPfTbcPi8vt5WxFDhEpqxzUrMIUFN09AUU82eWXrr9z4VKMGvtloVmIwN84-cV0XTUeBs1BIku_zitfGDEoq9ArUyxraW0Q4e2ZconPKG4vL7NNoQHuIYWXYx'
	            },
	            contentType: 'application/json; charset=utf-8',
	            success: function (result) {
	            	var rating = result['businesses'][0]['rating'];
	            	var num_reviews = result['businesses'][0]['review_count'];
	            	var prices = result['businesses'][0]['price'];
					node.innerHTML = "Rating in YELP: " + rating + " ( " + num_reviews + " reviews)";
					node.style.color = '#57ad57';
					node.style.fontWeight = '500';
					items[i].parentNode.appendChild(node);
	               // CallBack(result);
	            },
	            error: function (error) {
	            }
	        });
			})();
		};
    }
});


