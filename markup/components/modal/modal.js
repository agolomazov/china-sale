$(document).on('click', '.contact-call-phone__link', function (e) {
    e.preventDefault();
    $('.modal').bPopup({
        closeClass: 'modal-close-link'
    });
});
