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
    var $heightFieldSet = setDeliveryObject.$fieldsets.eq(setDeliveryObject.fiedlsetActive - 1).addClass('active').height();
    var $windowWidth = $(window).width();
    var $windowHeight = $(window).height();
    var $fieldToSetWidth = ($windowWidth / 2) - ($widthFieldset / 2);
    var $fieldToSetHeight = ($windowHeight / 2) - ($heightFieldSet / 2);

    setDeliveryObject.$fieldsets.eq(setDeliveryObject.fiedlsetActive - 1).css({
        top: $fieldToSetHeight + 'px'
    }).animate({
        'left': $fieldToSetWidth + 'px'
    }, 200);
});
setDeliveryObject.$btnForward.on('click', function(e){
    setDeliveryObject.fiedlsetActive = $(this).data('to-step');
    $(this).closest('.step-delivery .step-delivery-form__fieldset').removeClass('active').addClass('diactive').animate({
        top: '-500vh'
    }, 500);

    var $widthFieldset = setDeliveryObject.$fieldsets.eq(setDeliveryObject.fiedlsetActive - 1).width();
    var $heightFieldset = setDeliveryObject.$fieldsets.eq(setDeliveryObject.fiedlsetActive - 1).height();
    var $windowWidth = $(window).width();
    var $windowHeight = $(window).height();
    var $fieldToSetWidth = ($windowWidth / 2) - ($widthFieldset / 2);
    var $fieldToSetHeight = ($windowHeight / 2) - ($heightFieldset / 2);
    setDeliveryObject.$fieldsets.eq(setDeliveryObject.fiedlsetActive - 1).css({
        top: $fieldToSetHeight + 'px'
    }).animate({
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
    var $successBlockHeight = setDeliveryObject.$successBlock.height();
    var $windowWidth = $(window).width();
    var $windowHeight = $(window).height();
    var $successBlockWidthSet = ($windowWidth / 2) - ($successBlockWidth / 2);
    var $successBlockHeightSet = ($windowHeight / 2) - ($successBlockHeight / 2);

    setDeliveryObject.$successBlock.addClass('active').css({
        top: $successBlockHeightSet + 'px'
    }).delay(800).animate({
        left: $successBlockWidthSet + 'px'
    }, 200);
});

$(window).on('resize', function () {
    var $windowWidth = $(this).width();
    var $windowHeight = $(this).height();
    var $fiedsetActive = $('.step-delivery .step-delivery-form__fieldset.active')
    var $fieldSetActiveWidth = $fiedsetActive.width();
    var $fieldSetActiveHeight = $fiedsetActive.height();
    var $successBlockActive = $('.step-delivery .success-block.active');
    var $successBlockActiveWidth = $successBlockActive.width();
    var $successBlockActiveHeight = $successBlockActive.height();

    var $fieldSetActiveSet = ($windowWidth / 2) - ($fieldSetActiveWidth / 2);
    var $fieldSetActiveSetHeight = ($windowHeight / 2) - ($fieldSetActiveHeight / 2);
    var $successBlockActiveSet = ($windowWidth / 2) - ($successBlockActiveWidth / 2);
    var $successBlockActiveSetHeight = ($windowHeight / 2) - ($successBlockActiveHeight / 2);

    $fiedsetActive.css({left: $fieldSetActiveSet + 'px', top: $fieldSetActiveSetHeight + 'px'});
    $successBlockActive.css({left: $successBlockActiveSet + 'px', top: $successBlockActiveSetHeight + 'px'});
});
/*eslint-enable*/
