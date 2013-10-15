alert('atleast ');
require([ "dojox/gfx", "dojox/gfx/Moveable", "dojo/on" ], function(gfx,
		Moveable) {
	//all jsPlumb stuff should go here

	console.log('please');
	var surface = dojox.gfx.createSurface("surfaceElement", 400, 400);

	// Add a circle
	var circle = surface.createCircle({
		cx : 100,
		cy : 150,
		r : 50
	}).setFill("green").setStroke("pink");

	// Just checking if ui is responsive
	circle.connect("onclick", function(e) {
		circle.setFill("red");
	});
});
dojo.ready(alert(' hi -1'));

_getElementObject = function(el) {
	if (el == null)
		return null;
	return typeof (el) == "string" ? dojo.byId(el) : el;
},

jsPlumb.CurrentLibrary = {

	addClass : function(el, clazz) {
		el = _getElementObject(el);
		try {
			if (el.className.constructor == SVGAnimatedString) {
				jsPlumbUtil.svg.addClass(el, clazz);
			} else
				el.addClass(clazz);
		} catch (e) {
			// SVGAnimatedString not supported; no problem.
			el.addClass(clazz);
		}
	},

	animate : function(el, properties, options) {
		//var m = new jsPlumbMorph(el, options);
		//m.start(properties);
		dojo.animateProperty({
			node : _getElementObject(e1),
			properties : properties
		}).play(); //what about options ? dojo syntax different -- http://dojotoolkit.org/documentation/tutorials/1.6/animation/
	},

	appendElement : function(child, parent) {
		_getElementObject(parent).append(child);
	},
	bind : function(el, event, callback) {
		el = _getElementObject(el);
		on(e1, event, callback); //dojo uses on
	},

	destroyDraggable : function(el) {

	},
	destroyDroppable : function(e1) {

	},
	dragEvents : {},
	extend : function(o1, o2) {

	},
	getClientXY : function(eventObject) {

	},
	getDragObject : function(eventArgs) {

	},
	getDragScope : function(el) {

	},
	getDropEvent : function(args) {

	},
	getDropScope : function(el) {

	},
	getDOMElement : function(el) {

	},
	getElementObject : _getElementObject,

	getOffset : function(el) {
		return _getElementObject(el).offset;
	},
	getOriginalEvent : function(e) {
		return _getElementObject(e).originalEvent;
	},
	getPageXY : function(eventObject) {
		return [ eventObject.pageX, eventObject.pageY ];
	},
	getParent : function(el) {
		return _getElementObject(el).parent();
	},
	getScrollLeft : function(el) {
		return _getElementObject(el).scrollLeft;
	},

	getScrollTop : function(el) {
		return _getElementObject(el).scrollTop;
	},
	getSelector : function(context, spec) {
		if (arguments.length == 2)
			return _getElementObject(context).find(spec);
		//else
			//TODO
	},
	getSize : function(el) {
		el = _getElementObject(el);
		return [ offsetWidth, offsetHeight ];
	},
	getTagName : function(el) {
		var e = _getElementObject(el);
		return e.length > 0 ? e[0].tagName : null;
	},
	getUIPosition : function(eventArgs, zoom) {
		zoom = zoom || 1;
		if (eventArgs.length == 1) {
			ret = {
				left : eventArgs[0].pageX,
				top : eventArgs[0].pageY
			};
		} else {
			var ui = eventArgs[1], _offset = ui.offset;

			ret = _offset || ui.absolutePosition;

			// adjust ui position to account for zoom, because jquery ui does not do this.
			ui.position.left /= zoom;
			ui.position.top /= zoom;
		}
		return {
			left : ret.left / zoom,
			top : ret.top / zoom
		};
	},
	hasClass : function(el, clazz) {
		return el.hasClass(clazz);
	},
	initDraggable : function(el, options, isPlumbedComponent, _jsPlumb) {
		options = options || {};
		el = _getElementObject(el);
		options["start"] = jsPlumbUtil.wrap(options["start"], function() {
			_getElementObject("body").addClass(_jsPlumb.dragSelectClass);
		}, false);

		options["stop"] = jsPlumbUtil.wrap(options["stop"], function() {
			_getElementObject("body").removeClass(_jsPlumb.dragSelectClass);
		});

		// remove helper directive if present and no override
		if (!options.doNotRemoveHelper)
			options.helper = null;
		if (isPlumbedComponent)
			options.scope = options.scope || jsPlumb.Defaults.Scope;
		el.draggable(options);
	},
	initDroppable : function(el, options) {
		//TODO
	},
	isAlreadyDraggable : function(el) {
		//return _getElementObject(el).hasClass("");
		return true;
	},
	isDragSupported : function(el) {
		return true;
	},
	isDropSupported : function(el) {
		return true;
	},
	removeClass : function(el, clazz) {
		jsPlumb.CurrentLibrary.getElementObject(el).removeClass(clazz);
	},
	removeElement : function(el) {
		_getElementObject(el).remove();
	},

	setDragFilter : function(el, filter) {
		jsPlumb.log("NOT IMPLEMENTED: setDragFilter");
	},
	setDraggable : function(el, draggable) {
		//el.draggable("option", "disabled", !draggable);
		return true;
	},

	setDragScope : function(el, scope) {
		//el.draggable("option", "scope", scope);
	},

	setOffset : function(el, o) {
		//_getElementObject(el).offset(o);
	},

	/**
	 * note that jquery ignores the name of the event you wanted to trigger, and figures it out for itself.
	 * the other libraries do not.  yui, in fact, cannot even pass an original event.  we have to pull out stuff
	 * from the originalEvent to put in an options object for YUI. 
	 * @param el
	 * @param event
	 * @param originalEvent
	 */
	trigger : function(el, event, originalEvent) {
		//var h = jQuery._data(_getElementObject(el)[0], "handle");
		//h(originalEvent);
	},

	unbind : function(el, event, callback) {
		el = _getElementObject(el);
		//el.unbind(event, callback);
		//dojo needs  parater returned by connect
		var signal = dojo.on(el,event,callback);
		signal.remove();
		
		//http://dojotoolkit.org/reference-guide/1.9/dojo/on.html
		
		}
	};
dojo.ready(alert(' hi 0'));
dojo.ready(jsPlumb.init);
