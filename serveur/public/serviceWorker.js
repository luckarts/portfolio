if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('/offline.js').then(
			function() {
				console.log('ServiceWorker registration successful with scope: ');
			},
			function(err) {
				console.log('ServiceWorker registration failed: ', err);
			}
		);
	});
}
