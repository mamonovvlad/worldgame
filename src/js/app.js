$(document).ready(function () {
    //click link
    $('body').on('click', '.click-page', function () {
        // $('.click-page').removeClass('action');
        // $(this).addClass('action');
        var href = $(this).attr('href');
        $('.page').removeClass('active').removeClass('in');
        $(href).addClass('active');
        setTimeout(function () {
            $(href).addClass('in');
        }, 200);
        return false;
    });

    //mail
    $('.icon-cancel').click(function () {
        $('#tech').fadeOut();
    })
    $('.support-popups').click(function () {
        $('#tech').fadeIn();
    })

    // Список учасников
    $('.info-bonus__small a').click(function () {
        $('.list').fadeIn();
    })

    $('.click-cancel i').click(function () {
        $('.list').fadeOut();
    })
    // Кнопка "Принять участие"
    $('.info-bonus__btn  button').click(function () {
        $('.info-bonus__btn-open').fadeToggle();
    })
    // Кнопка "Истори игр"
    $('.games-content__win__button button').click(function () {
        $('.games-content__win-block').fadeToggle();
    })
    // Кнопка "Бургур"
    $('.mobile-burger__img').click(function () {
        $('.mobile-burger__block').slideToggle();
    })
    // Кнопка "Чат"
    $('.icon-chat').click(function () {
        $('.main-content__chat').fadeToggle();
    })
    // Кнопка "Info"
    $('.icon-info').click(function () {
        $('.main-content__info').fadeToggle();
    })
    $('.minimum-btn').click(function () {
        $('.header-box__user').fadeOut();
        $('.header-box__exit').fadeIn();
    })
    $('.maximum-text').click(function () {
        $('.header-box__user').fadeIn();
        $('.header-box__exit').fadeOut();
    })
    $('.statistics-btn').click(function () {
        $('.history').fadeIn();
    })
    $('.icon-cancel').click(function () {
        $('.history').fadeOut();
    })
    $('.icon-cancel').click(function () {
        $('.registration-popup').fadeOut();
    })
    $('.header-box__buttom-entrance-page').click(function () {
        $('.entrance-popup').fadeIn();
    })
    $('.icon-cancel').click(function () {
        $('.entrance-popup').fadeOut();
    })
    $('.ent-btn').click(function () {
        $('.registration-popup').fadeIn();
        $('.entrance-popup').fadeOut();
    })
    $('.reg-btn').click(function () {
        $('.registration-popup').fadeOut();
        $('.entrance-popup').fadeIn();
    })
    //показать пароль
    var pass = $('#entrance-password-show');
    $('button.entrance-password-show').click(function () {
        pass.attr('type', pass.attr('type') === 'password' ? 'text' : 'password');
    });
    // // F.A.Q
    $('.questions-answers-block-title i').click(function () {
        $(this).closest('.questions-answers-block').find('.questions-answers-block-cont').slideToggle();

        $(this).toggleClass('icon-up-big');
    });

    // //ref
    $('.referral-content__ref-btn').click(function () {
        $(this).siblings('input.linkToCopy').select();
        document.execCommand("copy");
    });

    // // 
    $('.fortune').click(function () {
        $(this).closest('.questions-answers-block').find('.questions-answers-block-cont').slideToggle();

        $(this).toggleClass('icon-up-big');
    });

});