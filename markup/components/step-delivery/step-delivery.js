/*eslint-disable*/
var setDeliveryObject = {
    fiedlsetActive: 0,
    $fieldsets: $('.step-delivery .step-delivery-form__fieldset'),
    $inputPhone: $('.step-delivery .phone-js'),
    $countProduct: $('.step-delivery .count-product-js'),
    $btnForward: $('.step-delivery .btn-forward'),
    $btnSubmit: $('.step-delivery .step-delivery-form .btn-submit'),
    $stepDelivery: $('.step-delivery .step-delivery-form'),
    $successBlock: $('.step-delivery .success-block'),
    $deliveryBtn: $('.delivery-btn'),
    $addressInput: $('.step-delivery .address-js')
};

setDeliveryObject.$countProduct.inputmask({ "mask": "9", "repeat": 4, "greedy": false });
setDeliveryObject.$inputPhone.inputmask("+7(999)999-99-99");

setDeliveryObject.$addressInput.on('keyup', function(e){
    var $valThis = $(this).val();
    var $btnForward = $(this).closest('.field-row').find('.btn-forward');
    if($valThis.trim().length > 4){
        $btnForward.removeAttr('disabled');
    } else {
        $btnForward.attr('disabled', 'disabled');
    }
});
setDeliveryObject.$inputPhone.on('keyup', function(e){
    var $btnForward = $(this).closest('.field-row').find('.btn-forward');
    if($(this).inputmask('isComplete')){
        $btnForward.removeAttr('disabled');
    } else {
        $btnForward.attr('disabled', 'disabled');
    }
});
setDeliveryObject.$countProduct.on('keyup', function(e){
    var $btnSubmit = $(this).closest('.field-row').find('.btn-submit');
    var $thisValue = $(this).val();
    if($thisValue.length){
        $btnSubmit.removeAttr('disabled');
    }else {
        $btnSubmit.attr('disabled', 'disabled');
    }
});

setDeliveryObject.$deliveryBtn.on('click', function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 200);
    $('html').addClass('active');


    $('.content').addClass('active');
    setDeliveryObject.fiedlsetActive = 1;

    // Получаем ширину певого блока формы
    var $widthFieldset = setDeliveryObject.$fieldsets.eq(setDeliveryObject.fiedlsetActive - 1).addClass('active').width();
    var $windowWidth = $(window).width();
    var $fieldToSetWidth = ($windowWidth / 2) - ($widthFieldset / 2);
    setDeliveryObject.$fieldsets.eq(setDeliveryObject.fiedlsetActive - 1).animate({
        'left': $fieldToSetWidth + 'px'
    }, 200);
});
setDeliveryObject.$btnForward.on('click', function(e){
    setDeliveryObject.fiedlsetActive = $(this).data('to-step');
    $(this).closest('.step-delivery .step-delivery-form__fieldset').removeClass('active').addClass('diactive').animate({
        top: '-500vh'
    }, 500);

    var $widthFieldset = setDeliveryObject.$fieldsets.eq(setDeliveryObject.fiedlsetActive - 1).width();
    var $windowWidth = $(window).width();
    var $fieldToSetWidth = ($windowWidth / 2) - ($widthFieldset / 2);
    setDeliveryObject.$fieldsets.eq(setDeliveryObject.fiedlsetActive - 1).animate({
        'left': $fieldToSetWidth + 'px'
    }, 200).addClass('active');
});
setDeliveryObject.$btnSubmit.on('click', function(e){
    e.preventDefault();
    var formData = setDeliveryObject.$stepDelivery.serialize();

    setDeliveryObject.$btnSubmit.closest(setDeliveryObject.$fieldsets).removeClass('active').addClass('diactive').animate({
        top: '-500vh'
    }, 500);

    var $successBlockWidth = setDeliveryObject.$successBlock.width();
    var $windowWidth = $(window).width();
    var $successBlockWidthSet = ($windowWidth / 2) - ($successBlockWidth / 2);

    setDeliveryObject.$successBlock.addClass('active').delay(800).animate({
        left: $successBlockWidthSet + 'px'
    }, 200);
});

$(window).on('resize', function () {
    var $windowWidth = $(this).width();
    var $fiedsetActive = $('.step-delivery .step-delivery-form__fieldset.active')
    var $fieldSetActiveWidth = $fiedsetActive.width();
    var $successBlockActive = $('.step-delivery .success-block.active');
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
