(function() {
    var colc = new Colcade(document.querySelector('.c-image-grid'), {
      columns: '.c-image-grid__col',
      items: '.c-image-grid__image'
    });

    $('.c-image-grid__image').simpleLightbox();
})();
