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