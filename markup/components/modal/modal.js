/*eslint-disable*/
$(document).on('click', '.contact-call-phone__link', function (e) {
    e.preventDefault();
    $('.modal').bPopup({
        closeClass: 'modal-close-link'
    });
});

var modalNameCustomer = document.querySelector('.name-customer-js');
var superPlaceholderOptions = {
    // delay between letters (in milliseconds)
    letterDelay: 100, // milliseconds
    // delay between sentences (in milliseconds)
    sentenceDelay: 1000,
    // should start on input focus. Set false to autostart
    startOnFocus: true,
    // loop through passed sentences
    loop: true,
    // Initially shuffle the passed sentences
    shuffle: false,
    // Show cursor or not. Shows by default
    showCursor: true,
    // String to show as cursor
    cursor: '|'
};

superplaceholder({
    el: modalNameCustomer,
    sentences: ['Укажите Ваше имя', 'Например: Иван Иванов'],
    options: superPlaceholderOptions
});

$(document).ready(function(){
    $('.phone-customer-js').inputmask("+7(999)999-99-99");  //static mask

});
/*eslint-enable*/

