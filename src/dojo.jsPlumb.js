

;(function(){
   
	require(["dojox/gfx","dojox/gfx/Moveable","dojo/domReady!"]
	, function(gfx, Moveable) {
		//don't know to what to put here, will figure out later
	});
	
	alert('hi 1');
	
	jsPlumb.CurrentLibrary = {		
	
	addClass : function(el, clazz) {
		el = dojo.byId(el);
		try {
			if (el.className.constructor == SVGAnimatedString) {
				jsPlumbUtil.svg.addClass(el, clazz);
			}
			else el.addClass(clazz);
		}
		catch (e) {				
			// SVGAnimatedString not supported; no problem.
			el.addClass(clazz);
		}						
	},
	// have no idea about animation of dojo gfx
	
	appendElement : function(child, parent) {
		dojo.byId(parent).append(child);			
	},
	bind : function(el, event, callback) {
		el = dojo.byId(el);
		on(event, callback);  //dojo uses on
	},
	
	
	
	
	}
	
	alert('hi 2');
	
	console.log(jsPlumb.init);
	
	dojo.ready(jsPlumb.init);
	
	alert('hi 3');
	
})();