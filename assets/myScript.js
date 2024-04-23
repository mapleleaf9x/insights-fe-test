$(document).ready(function() {
    $('.learn-more').click(function() {
        alert('Clicked Learn More');
    });

    $('.shop-pillow').click(function() {
        alert('Clicked Shop Pillows');
    });

    $('.button-radius.btn-get-the-best-gift').click(function() {
        alert('Clicked Get The Best Gift');
    });

    $('.btn-gift-card.btn-find-perfect-gift').click(function() {
        alert('Clicked Find The Perfect Gift');
    });

    $('.btn-gift-card.btn-buy-gift-card').click(function() {
        alert('Clicked Buy Gift Cards');
    });

    $('.hot-slider .btn-see-all-product').click(function() {
        alert('Clicked See All Products');
    });

    $('#scrollRight').click(function() {
        $('.hot-slider .slider .slide-content').animate({
          scrollLeft: '+=640'
        }, 400);
    });

    $('#scrollLeft').click(function() {
        $('.hot-slider .slider .slide-content').animate({
            scrollLeft: '-=640'
        }, 400);
    });
     
    $('#minusQuantity').click(function() {
        var quantityInput = $('#quantity');
        var currentValue = parseInt(quantityInput.val());
        if (currentValue > parseInt(quantityInput.attr('min'))) {
            quantityInput.val(currentValue - 1);
        }
    });

    $('#plusQuantity').click(function() {
        var quantityInput = $('#quantity');
        var currentValue = parseInt(quantityInput.val());
        if (currentValue < parseInt(quantityInput.attr('max'))) {
            quantityInput.val(currentValue + 1);
        }
    });

    $('input[type="radio"]').change(function(){
        var color = $(this).attr('id');
        $('#chosenColor').text(color.charAt(0).toUpperCase() + color.slice(1));
      });
});
