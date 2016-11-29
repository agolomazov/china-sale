/*eslint-disable*/
var fiedlsetActive = 0;
var $fieldsets = $('.step-delivery-form__fieldset');
var $inputPhone = $('.phone-js');
var $countProduct = $('.count-product-js');
var $btnForward = $('.btn-forward');
var $btnSubmit = $('.step-delivery-form .btn-submit');
var $stepDelivery = $('.step-delivery-form');
var $successBlock = $('.success-block');
var $deliveryBtn = $('.delivery-btn');
var $addressInput = $('.address-js');

$countProduct.inputmask({ "mask": "9", "repeat": 4, "greedy": false });
$inputPhone.inputmask("+7(999)999-99-99");

$addressInput.on('keyup', function(e){
    var $valThis = $(this).val();
    var $btnForward = $(this).closest('.field-row').find('.btn-forward');
    if($valThis.trim().length > 4){
        $btnForward.removeAttr('disabled');
    } else {
        $btnForward.attr('disabled', 'disabled');
    }
});
$inputPhone.on('keyup', function(e){
    var $btnForward = $(this).closest('.field-row').find('.btn-forward');
    if($(this).inputmask('isComplete')){
        $btnForward.removeAttr('disabled');
    } else {
        $btnForward.attr('disabled', 'disabled');
    }
});
$countProduct.on('keyup', function(e){
    var $btnSubmit = $(this).closest('.field-row').find('.btn-submit');
    var $thisValue = $(this).val();
    if($thisValue.length){
        $btnSubmit.removeAttr('disabled');
    }else {
        $btnSubmit.attr('disabled', 'disabled');
    }
});

$deliveryBtn.on('click', function (e) {
    e.preventDefault();
    $('.content').addClass('active');
    fiedlsetActive = 1;

    // Получаем ширину певого блока формы
    var $widthFieldset = $fieldsets.eq(fiedlsetActive - 1).addClass('active').width();
    var $windowWidth = $(window).width();
    var $fieldToSetWidth = ($windowWidth / 2) - ($widthFieldset / 2);
    $fieldsets.eq(fiedlsetActive - 1).animate({
        'left': $fieldToSetWidth + 'px'
    }, 200);
});
$btnForward.on('click', function(e){
    fiedlsetActive = $(this).data('to-step');
    $(this).closest('.step-delivery-form__fieldset').removeClass('active').addClass('diactive').animate({
        top: '-500vh'
    }, 500);

    var $widthFieldset = $fieldsets.eq(fiedlsetActive - 1).width();
    var $windowWidth = $(window).width();
    var $fieldToSetWidth = ($windowWidth / 2) - ($widthFieldset / 2);
    $fieldsets.eq(fiedlsetActive - 1).animate({
        'left': $fieldToSetWidth + 'px'
    }, 200).addClass('active');
});
$btnSubmit.on('click', function(e){
    e.preventDefault();

    var formData = $stepDelivery.serialize();

    $btnSubmit.closest('.step-delivery-form__fieldset').removeClass('active').addClass('diactive').animate({
        top: '-500vh'
    }, 500);

    var $successBlockWidth = $successBlock.width();
    var $windowWidth = $(window).width();
    var $successBlockWidthSet = ($windowWidth / 2) - ($successBlockWidth / 2);

    $('.step-delivery .success-block').addClass('active').delay(800).animate({
        left: $successBlockWidthSet + 'px'
    }, 200);
});

$(window).on('resize', function () {
    var $windowWidth = $(this).width();
    var $fiedsetActive = $('.step-delivery-form__fieldset.active')
    var $fieldSetActiveWidth = $fiedsetActive.width();
    var $successBlockActive = $('.success-block.active');
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
