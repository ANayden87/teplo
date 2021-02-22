
$(document).ready(function () {
    // Мобильное меню 
    $('.menu_link-sub').click(function(e){
        e.preventDefault();
        $('.menu_list').slideToggle(500);
    });
    // Удаление атрибута Style из класса .menu_list тега <menu></menu>
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.menu_list').removeAttr('style');
        }
    });
    // Модальное окно с рачётом стоимости
    // Открытие модального окна
    $('[data-target="modal_payment_open"]').click(function(e){
        e.preventDefault();
        $('.aloy').show();
    });
    // Закрытие модального окна
    $('[data-target="modal_payment_close"]').click(function(e){
        e.preventDefault();
        $('.aloy').hide();
    });
});
