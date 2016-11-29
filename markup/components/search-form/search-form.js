/*eslint-disable*/
var setSearchObject = {
    fiedlsetActive: 0,
    $fieldsets: $('.search-product .search-product-form__fieldset'),
    $inputPhone: $('.search-product .phone-js'),
    $countProduct: $('.search-product .count-product-js'),
    $btnForward: $('.search-product .btn-forward'),
    $btnSubmit: $('.search-product .search-product-form .btn-submit'),
    $stepDelivery: $('.search-product .search-product-form'),
    $successBlock: $('.search-product .success-search-product-block'),
    $deliveryBtn: $('.searching-btn'),
    $productNameInput: $('.search-product .product-name-js')
};

setSearchObject.$countProduct.inputmask({ "mask": "9", "repeat": 4, "greedy": false });
setSearchObject.$inputPhone.inputmask("+7(999)999-99-99");

setSearchObject.$productNameInput.on('keyup', function(e){
    var $valThis = $(this).val();
    var $btnForward = $(this).closest('.field-row').find('.btn-forward');
    if($valThis.trim().length > 4){
        $btnForward.removeAttr('disabled');
    } else {
        $btnForward.attr('disabled', 'disabled');
    }
});
setSearchObject.$inputPhone.on('keyup', function(e){
    var $btnForward = $(this).closest('.field-row').find('.btn-forward');
    if($(this).inputmask('isComplete')){
        $btnForward.removeAttr('disabled');
    } else {
        $btnForward.attr('disabled', 'disabled');
    }
});
setSearchObject.$countProduct.on('keyup', function(e){
    var $btnSubmit = $(this).closest('.field-row').find('.btn-submit');
    var $thisValue = $(this).val();
    if($thisValue.length){
        $btnSubmit.removeAttr('disabled');
    }else {
        $btnSubmit.attr('disabled', 'disabled');
    }
});

setSearchObject.$deliveryBtn.on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 200);
    $('html').addClass('active');
    $('.content').addClass('active');
    setSearchObject.fiedlsetActive = 1;

    // Получаем ширину певого блока формы
    var $widthFieldset = setSearchObject.$fieldsets.eq(setSearchObject.fiedlsetActive - 1).addClass('active').width();
    var $windowWidth = $(window).width();
    var $fieldToSetWidth = ($windowWidth / 2) - ($widthFieldset / 2);
    setSearchObject.$fieldsets.eq(setSearchObject.fiedlsetActive - 1).animate({
        'left': $fieldToSetWidth + 'px'
    }, 200);
});
setSearchObject.$btnForward.on('click', function(e){
    setSearchObject.fiedlsetActive = $(this).data('to-step');
    $(this).closest('.search-product .search-product-form__fieldset').removeClass('active').addClass('diactive').animate({
        top: '-500vh'
    }, 500);

    var $widthFieldset = setSearchObject.$fieldsets.eq(setSearchObject.fiedlsetActive - 1).width();
    var $windowWidth = $(window).width();
    var $fieldToSetWidth = ($windowWidth / 2) - ($widthFieldset / 2);
    setSearchObject.$fieldsets.eq(setSearchObject.fiedlsetActive - 1).animate({
        'left': $fieldToSetWidth + 'px'
    }, 200).addClass('active');
});
setSearchObject.$btnSubmit.on('click', function(e){
    e.preventDefault();

    var formData = setSearchObject.$stepDelivery.serialize();

    setSearchObject.$btnSubmit.closest(setSearchObject.$fieldsets).removeClass('active').addClass('diactive').animate({
        top: '-500vh'
    }, 500);

    var $successBlockWidth = setSearchObject.$successBlock.width();
    var $windowWidth = $(window).width();
    var $successBlockWidthSet = ($windowWidth / 2) - ($successBlockWidth / 2);

    setSearchObject.$successBlock.addClass('active').delay(800).animate({
        left: $successBlockWidthSet + 'px'
    }, 200);
});

$(window).on('resize', function () {
    var $windowWidth = $(this).width();
    var $fiedsetActive = $('.search-product .search-product-form__fieldset.active')
    var $fieldSetActiveWidth = $fiedsetActive.width();
    var $successBlockActive = $('.search-product .success-search-product-block.active');
    var $successBlockActiveWidth = $successBlockActive.width();

    var $fieldSetActiveSet = ($windowWidth / 2) - ($fieldSetActiveWidth / 2);
    var $successBlockActiveSet = ($windowWidth / 2) - ($successBlockActiveWidth / 2);

    $fiedsetActive.css({left: $fieldSetActiveSet + 'px'});
    $successBlockActive.css({left: $successBlockActiveSet + 'px'});

    if($windowWidth <= 480){
        $fiedsetActive.css({top: 170 + 'px'});
        $successBlockActive.css({top: 170 + 'px'});
    } else {
        $fiedsetActive.css({top: 130 + 'px'});
        $successBlockActive.css({top: 130 + 'px'});
    }
});
/*eslint-enable*/
