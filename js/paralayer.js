//console.clear();

(function(){

	var doc = document,
			win = window,
			attr = 'data-parallax-depth', 
			layers = doc.querySelectorAll('['+attr+']'), 
			frame, i, len;

	// Get vendor prefixed property for `transform`
	var div = doc.createElement('div'),
			props = 'transform webkitTransform mozTransform msTransform oTransform'.split(' '),
			prop;
	for (i = 0, len = props.length; i < len; i++){
		if ( props[i] in div.style ) { prop = props[i]; break; }
	}

	function updateLayers(frameId,skip){
		var scrollTop = -this.pageYOffset,
				scrollLeft = -this.pageXOffset,
				layer, rect, depth;

		frame = false;

		for (i = 0, len = layers.length; i < len; i++) {
			layer = layers[i];
			depth = layer.getAttribute(attr);
			if ( depth !== 0 ) {
				layer.style[prop] = 'translate3d(' + 
					( layer.offsetLeft +
					 scrollLeft ) * depth + 'px,' + 
					( layer.offsetTop + 
					 scrollTop ) * depth  + 'px,0)';
			}

		}

	}
	updateLayers();
	
	function callUpdate(){
		frame = frame || requestAnimationFrame(updateLayers);
	}
	
	win.addEventListener('resize', callUpdate);
	win.addEventListener('scroll', callUpdate);

}());

// Adapted from Patryk Zabielski's concept at  http://codepen.io/zabielski/pen/MyoBaY?editors=0010