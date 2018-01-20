/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.9.1
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.baguetteBox=e()}(this,function(){"use strict";function t(t,e){var n=document.querySelectorAll(t),o={galleries:[],nodeList:n};D[t]=o,[].forEach.call(n,function(t){e&&e.filter&&(z=e.filter);var n=[];if(n="A"===t.tagName?[t]:t.getElementsByTagName("a"),0!==(n=[].filter.call(n,function(t){if(-1===t.className.indexOf(e&&e.ignoreClass))return z.test(t.href)})).length){var i=[];[].forEach.call(n,function(t,n){var o=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,r(i,e),u(n)},a={eventHandler:o,imageElement:t};x(t,"click",o),i.push(a)}),o.galleries.push(i)}})}function e(){for(var t in D)D.hasOwnProperty(t)&&n(t)}function n(t){if(D.hasOwnProperty(t)){var e=D[t].galleries;[].forEach.call(e,function(t){[].forEach.call(t,function(t){E(t.imageElement,"click",t.eventHandler)}),X===t&&(X=[])}),delete D[t]}}function o(){if(N=B("baguetteBox-overlay"))return A=B("baguetteBox-slider"),L=B("previous-button"),S=B("next-button"),void(P=B("close-button"));(N=T("div")).setAttribute("role","dialog"),N.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(N),(A=T("div")).id="baguetteBox-slider",N.appendChild(A),(L=T("button")).setAttribute("type","button"),L.id="previous-button",L.setAttribute("aria-label","Previous"),L.innerHTML=j.svg?F:"&lt;",N.appendChild(L),(S=T("button")).setAttribute("type","button"),S.id="next-button",S.setAttribute("aria-label","Next"),S.innerHTML=j.svg?H:"&gt;",N.appendChild(S),(P=T("button")).setAttribute("type","button"),P.id="close-button",P.setAttribute("aria-label","Close"),P.innerHTML=j.svg?I:"&times;",N.appendChild(P),L.className=S.className=P.className="baguetteBox-button",a()}function i(t){switch(t.keyCode){case 37:h();break;case 39:p();break;case 27:g()}}function a(){x(N,"click",W),x(L,"click",G),x(S,"click",J),x(P,"click",K),x(A,"contextmenu",_),x(N,"touchstart",Q),x(N,"touchmove",Z),x(N,"touchend",$),x(document,"focus",tt,!0)}function l(){E(N,"click",W),E(L,"click",G),E(S,"click",J),E(P,"click",K),E(A,"contextmenu",_),E(N,"touchstart",Q),E(N,"touchmove",Z),E(N,"touchend",$),E(document,"focus",tt,!0)}function r(t,e){if(X!==t){for(X=t,s(e);A.firstChild;)A.removeChild(A.firstChild);V.length=0;for(var n,o=[],i=[],a=0;a<t.length;a++)(n=T("div")).className="full-image",n.id="baguette-img-"+a,V.push(n),o.push("baguetteBox-figure-"+a),i.push("baguetteBox-figcaption-"+a),A.appendChild(V[a]);N.setAttribute("aria-labelledby",o.join(" ")),N.setAttribute("aria-describedby",i.join(" "))}}function s(t){t||(t={});for(var e in q)Y[e]=q[e],"undefined"!=typeof t[e]&&(Y[e]=t[e]);A.style.transition=A.style.webkitTransition="fadeIn"===Y.animation?"opacity .4s ease":"slideIn"===Y.animation?"":"none","auto"===Y.buttons&&("ontouchstart"in window||1===X.length)&&(Y.buttons=!1),L.style.display=S.style.display=Y.buttons?"":"none";try{N.style.backgroundColor=Y.overlayBackgroundColor}catch(n){}}function u(t){Y.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==N.style.display&&(x(document,"keydown",i),R={count:0,startX:null,startY:null},m(M=t,function(){k(M),C(M)}),y(),N.style.display="block",Y.fullScreen&&d(),setTimeout(function(){N.className="visible",Y.bodyClass&&document.body.classList&&document.body.classList.add(Y.bodyClass),Y.afterShow&&Y.afterShow()},50),Y.onChange&&Y.onChange(M,V.length),U=document.activeElement,c())}function c(){Y.buttons?L.focus():P.focus()}function d(){N.requestFullscreen?N.requestFullscreen():N.webkitRequestFullscreen?N.webkitRequestFullscreen():N.mozRequestFullScreen&&N.mozRequestFullScreen()}function f(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function g(){Y.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==N.style.display&&(E(document,"keydown",i),N.className="",setTimeout(function(){N.style.display="none",f(),Y.bodyClass&&document.body.classList&&document.body.classList.remove(Y.bodyClass),Y.afterHide&&Y.afterHide(),U&&U.focus()},500))}function m(t,e){var n=V[t],o=X[t];if(void 0!==n&&void 0!==o)if(n.getElementsByTagName("img")[0])e&&e();else{var i=o.imageElement,a=i.getElementsByTagName("img")[0],l="function"==typeof Y.captions?Y.captions.call(X,i):i.getAttribute("data-caption")||i.title,r=b(i),s=T("figure");if(s.id="baguetteBox-figure-"+t,s.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',Y.captions&&l){var u=T("figcaption");u.id="baguetteBox-figcaption-"+t,u.innerHTML=l,s.appendChild(u)}n.appendChild(s);var c=T("img");c.onload=function(){var n=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");s.removeChild(n),!Y.async&&e&&e()},c.setAttribute("src",r),c.alt=a?a.alt||"":"",Y.titleTag&&l&&(c.title=l),s.appendChild(c),Y.async&&e&&e()}}function b(t){var e=t.href;if(t.dataset){var n=[];for(var o in t.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=t.dataset[o]);for(var i=Object.keys(n).sort(function(t,e){return parseInt(t,10)<parseInt(e,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,l=0;l<i.length-1&&i[l]<a;)l++;e=n[i[l]]||e}return e}function p(){var t;return M<=V.length-2?(M++,y(),k(M),t=!0):Y.animation&&(A.className="bounce-from-right",setTimeout(function(){A.className=""},400),t=!1),Y.onChange&&Y.onChange(M,V.length),t}function h(){var t;return M>=1?(M--,y(),C(M),t=!0):Y.animation&&(A.className="bounce-from-left",setTimeout(function(){A.className=""},400),t=!1),Y.onChange&&Y.onChange(M,V.length),t}function y(){var t=100*-M+"%";"fadeIn"===Y.animation?(A.style.opacity=0,setTimeout(function(){j.transforms?A.style.transform=A.style.webkitTransform="translate3d("+t+",0,0)":A.style.left=t,A.style.opacity=1},400)):j.transforms?A.style.transform=A.style.webkitTransform="translate3d("+t+",0,0)":A.style.left=t}function v(){var t=T("div");return"undefined"!=typeof t.style.perspective||"undefined"!=typeof t.style.webkitPerspective}function w(){var t=T("div");return t.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(t.firstChild&&t.firstChild.namespaceURI)}function k(t){t-M>=Y.preload||m(t+1,function(){k(t+1)})}function C(t){M-t>=Y.preload||m(t-1,function(){C(t-1)})}function x(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o):t.attachEvent("on"+e,function(t){(t=t||window.event).target=t.target||t.srcElement,n(t)})}function E(t,e,n,o){t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent("on"+e,n)}function B(t){return document.getElementById(t)}function T(t){return document.createElement(t)}var N,A,L,S,P,F='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',H='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',I='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',Y={},q={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},j={},X=[],M=0,R={},O=!1,z=/.+\.(gif|jpe?g|png|webp)/i,D={},V=[],U=null,W=function(t){-1!==t.target.id.indexOf("baguette-img")&&g()},G=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,h()},J=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,p()},K=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,g()},Q=function(t){R.count++,R.count>1&&(R.multitouch=!0),R.startX=t.changedTouches[0].pageX,R.startY=t.changedTouches[0].pageY},Z=function(t){if(!O&&!R.multitouch){t.preventDefault?t.preventDefault():t.returnValue=!1;var e=t.touches[0]||t.changedTouches[0];e.pageX-R.startX>40?(O=!0,h()):e.pageX-R.startX<-40?(O=!0,p()):R.startY-e.pageY>100&&g()}},$=function(){R.count--,R.count<=0&&(R.multitouch=!1),O=!1},_=function(){$()},tt=function(t){"block"===N.style.display&&N.contains&&!N.contains(t.target)&&(t.stopPropagation(),c())};return[].forEach||(Array.prototype.forEach=function(t,e){for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)}),[].filter||(Array.prototype.filter=function(t,e,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)t.call(e,n[i],i,n)&&o.push(n[i]);return o}),{run:function(e,i){j.transforms=v(),j.svg=w(),o(),n(e),t(e,i)},showNext:p,showPrevious:h,destroy:function(){l(),e(),E(document,"keydown",i),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),D={},X=[],M=0}}});
/*!
 * Colcade v0.2.0
 * Lightweight masonry layout
 * by David DeSandro
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */
  /*global define: false, module: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.Colcade = factory();
  }

}( window, function factory() {

// -------------------------- Colcade -------------------------- //

function Colcade( element, options ) {
  element = getQueryElement( element );

  // do not initialize twice on same element
  if ( element && element.colcadeGUID ) {
    var instance = instances[ element.colcadeGUID ];
    instance.option( options );
    return instance;
  }

  this.element = element;
  // options
  this.options = {};
  this.option( options );
  // kick things off
  this.create();
}

var proto = Colcade.prototype;

proto.option = function( options ) {
  this.options = extend( this.options, options );
};

// globally unique identifiers
var GUID = 0;
// internal store of all Colcade intances
var instances = {};

proto.create = function() {
  this.errorCheck();
  // add guid for Colcade.data
  var guid = this.guid = ++GUID;
  this.element.colcadeGUID = guid;
  instances[ guid ] = this; // associate via id
  // update initial properties & layout
  this.reload();
  // events
  this._windowResizeHandler = this.onWindowResize.bind( this );
  this._loadHandler = this.onLoad.bind( this );
  window.addEventListener( 'resize', this._windowResizeHandler );
  this.element.addEventListener( 'load', this._loadHandler, true );
};

proto.errorCheck = function() {
  var errors = [];
  if ( !this.element ) {
    errors.push( 'Bad element: ' + this.element );
  }
  if ( !this.options.columns ) {
    errors.push( 'columns option required: ' + this.options.columns );
  }
  if ( !this.options.items ) {
    errors.push( 'items option required: ' + this.options.items );
  }

  if ( errors.length ) {
    throw new Error( '[Colcade error] ' + errors.join('. ') );
  }
};

// update properties and do layout
proto.reload = function() {
  this.updateColumns();
  this.updateItems();
  this.layout();
};

proto.updateColumns = function() {
  this.columns = querySelect( this.options.columns, this.element );
};

proto.updateItems = function() {
  this.items = querySelect( this.options.items, this.element );
};

proto.getActiveColumns = function() {
  return this.columns.filter( function( column ) {
    var style = getComputedStyle( column );
    return style.display != 'none';
  });
};

// ----- layout ----- //

// public, updates activeColumns
proto.layout = function() {
  this.activeColumns = this.getActiveColumns();
  this._layout();
};

// private, does not update activeColumns
proto._layout = function() {
  // reset column heights
  this.columnHeights = this.activeColumns.map( function() {
    return 0;
  });
  // layout all items
  this.layoutItems( this.items );
};

proto.layoutItems = function( items ) {
  items.forEach( this.layoutItem, this );
};

proto.layoutItem = function( item ) {
  // layout item by appending to column
  var minHeight = Math.min.apply( Math, this.columnHeights );
  var index = this.columnHeights.indexOf( minHeight );
  this.activeColumns[ index ].appendChild( item );
  // at least 1px, if item hasn't loaded
  // Not exactly accurate, but it's cool
  this.columnHeights[ index ] += item.offsetHeight || 1;
};

// ----- adding items ----- //

proto.append = function( elems ) {
  var items = this.getQueryItems( elems );
  // add items to collection
  this.items = this.items.concat( items );
  // lay them out
  this.layoutItems( items );
};

proto.prepend = function( elems ) {
  var items = this.getQueryItems( elems );
  // add items to collection
  this.items = items.concat( this.items );
  // lay out everything
  this._layout();
};

proto.getQueryItems = function( elems ) {
  elems = makeArray( elems );
  var fragment = document.createDocumentFragment();
  elems.forEach( function( elem ) {
    fragment.appendChild( elem );
  });
  return querySelect( this.options.items, fragment );
};

// ----- measure column height ----- //

proto.measureColumnHeight = function( elem ) {
  var boundingRect = this.element.getBoundingClientRect();
  this.activeColumns.forEach( function( column, i ) {
    // if elem, measure only that column
    // if no elem, measure all columns
    if ( !elem || column.contains( elem ) ) {
      var lastChildRect = column.lastElementChild.getBoundingClientRect();
      // not an exact calculation as it includes top border, and excludes item bottom margin
      this.columnHeights[ i ] = lastChildRect.bottom - boundingRect.top;
    }
  }, this );
};

// ----- events ----- //

proto.onWindowResize = function() {
  clearTimeout( this.resizeTimeout );
  this.resizeTimeout = setTimeout( function() {
    this.onDebouncedResize();
  }.bind( this ), 100 );
};

proto.onDebouncedResize = function() {
  var activeColumns = this.getActiveColumns();
  // check if columns changed
  var isSameLength = activeColumns.length == this.activeColumns.length;
  var isSameColumns = true;
  this.activeColumns.forEach( function( column, i ) {
    isSameColumns = isSameColumns && column == activeColumns[i];
  });
  if ( isSameLength && isSameColumns ) {
    return;
  }
  // activeColumns changed
  this.activeColumns = activeColumns;
  this._layout();
};

proto.onLoad = function( event ) {
  this.measureColumnHeight( event.target );
};

// ----- destroy ----- //

proto.destroy = function() {
  // move items back to container
  this.items.forEach( function( item ) {
    this.element.appendChild( item );
  }, this );
  // remove events
  window.removeEventListener( 'resize', this._windowResizeHandler );
  this.element.removeEventListener( 'load', this._loadHandler, true );
  // remove data
  delete this.element.colcadeGUID;
  delete instances[ this.guid ];
};

// -------------------------- HTML init -------------------------- //

docReady( function() {
  var dataElems = querySelect('[data-colcade]');
  dataElems.forEach( htmlInit );
});

function htmlInit( elem ) {
  // convert attribute "foo: bar, qux: baz" into object
  var attr = elem.getAttribute('data-colcade');
  var attrParts = attr.split(',');
  var options = {};
  attrParts.forEach( function( part ) {
    var pair = part.split(':');
    var key = pair[0].trim();
    var value = pair[1].trim();
    options[ key ] = value;
  });

  new Colcade( elem, options );
}

Colcade.data = function( elem ) {
  elem = getQueryElement( elem );
  var id = elem && elem.colcadeGUID;
  return id && instances[ id ];
};

// -------------------------- jQuery -------------------------- //

Colcade.makeJQueryPlugin = function( $ ) {
  $ = $ || window.jQuery;
  if ( !$ ) {
    return;
  }

  $.fn.colcade = function( arg0 /*, arg1 */) {
    // method call $().colcade( 'method', { options } )
    if ( typeof arg0 == 'string' ) {
      // shift arguments by 1
      var args = Array.prototype.slice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().colcade({ options })
    plainCall( this, arg0 );
    return this;
  };

  function methodCall( $elems, methodName, args ) {
    var returnValue;
    $elems.each( function( i, elem ) {
      // get instance
      var colcade = $.data( elem, 'colcade' );
      if ( !colcade ) {
        return;
      }
      // apply method, get return value
      var value = colcade[ methodName ].apply( colcade, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });
    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var colcade = $.data( elem, 'colcade' );
      if ( colcade ) {
        // set options & init
        colcade.option( options );
        colcade.layout();
      } else {
        // initialize new instance
        colcade = new Colcade( elem, options );
        $.data( elem, 'colcade', colcade );
      }
    });
  }
};

// try making plugin
Colcade.makeJQueryPlugin();

// -------------------------- utils -------------------------- //

function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// get array of elements
function querySelect( selector, elem ) {
  elem = elem || document;
  var elems = elem.querySelectorAll( selector );
  return makeArray( elems );
}

function getQueryElement( elem ) {
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }
  return elem;
}

function docReady( onReady ) {
  if ( document.readyState == 'complete' ) {
    onReady();
    return;
  }
  document.addEventListener( 'DOMContentLoaded', onReady );
}

// -------------------------- end -------------------------- //

return Colcade;

}));

var rdes = {
    imageGrid: {},
    gallery: {}
};

// element as first argument
rdes.imageGrid = (function() {
    var self = {};
    var grid = document.querySelector('.c-image-grid');
    var colc;

    self.setupGrid = function() {
        colc = new Colcade( grid, {
          columns: '.c-image-grid__col',
          items: '.c-image-grid__image'
        });
    }

    // From Joe Walsh: https://davidwalsh.name/javascript-debounce-function
    self.debounce = function(func, wait, immediate) {
    	var timeout;
    	return function() {
    		var context = this, args = arguments;
    		var later = function() {
    			timeout = null;
    			if (!immediate) func.apply(context, args);
    		};
    		var callNow = immediate && !timeout;
    		clearTimeout(timeout);
    		timeout = setTimeout(later, wait);
    		if (callNow) func.apply(context, args);
    	};
    };

    self.recreateGrid = self.debounce(function() {
        console.log('hit');

        colc.destroy();
        colc = new Colcade( grid, {
          columns: '.c-image-grid__col',
          items: '.c-image-grid__image'
        });
    }, 250);

    self.init = function() {
        self.setupGrid();
        window.addEventListener('resize', self.recreateGrid);
    }

    return self;
})();

// element as first argument
rdes.gallery = (function() {
    var self = {};
 
    self.init = function() {
        console.log('hit');

        baguetteBox.run('.c-image-grid');
    }

    return self;
})();

(function() {
    rdes.imageGrid.init();
    rdes.gallery.init();
})();
