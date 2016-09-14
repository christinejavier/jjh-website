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
	$("#lazyjson").on("click", "a", function(e){
		//prevent from linking to other page
		e.preventDefault(); 
		var listingInfo = ($(this).data("id"));
		console.log(listings[listingInfo]);
	})
})





