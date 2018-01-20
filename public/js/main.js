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
