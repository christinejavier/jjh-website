$("#lazyjson").lazyjson({
	effect: "slideDown",
	pagination: {
		active: true,
		pages: 1,
		count: 10
	},
	api: {
		uri: "/api/listings.json"
	}
});

$.getJSON("/api/listings.json", function(listings){
	$("#lazyjson").on("mouseover", "a", function(e){
		var listingInfo = listings.length-1-($(this).data("id"));
		var address = listings[listingInfo].address1;
		// window.location.href = "/listings?address="+address;
		$(this).attr("href", ("/listings/current?address="+encodeURIComponent(address)));
	});

	/*
	$("#lazyjson").on("click", "a", function(e){
		//prevent from linking to other page
		e.preventDefault(); 
		//store id value, need to reverse id's
		var listingInfo = listings.length-1-($(this).data("id"));

		// var address = decodeURIComponent(window.location.query.address1);
		// var listing;
		
		var address = listings[listingInfo].address1; //might need to decode this?

		// window.location.href = "/listings?address="+address;
		window.location.href = "/listings?address="+encodeURIComponent(address);

	});
	*/
});



