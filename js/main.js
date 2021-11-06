$(document).ready(function() {

    if ($(window).width() > 992) {
        $('#pagepiling').pagepiling({
            anchors: ['Main', 'About', 'Contacts'],
            menu: '#myMenu'
        });
    } else {
        $('#pagepilingcss').remove();
    }


    /*loadSvg*/
    $('[data-svg]').each(function() {
        var $this = $(this);
        var $svg = $this.data('svg');
        var $filename = $svg.split('\\').pop().split('/').pop().replace(".svg", "");

        $this.load($svg, function(responseTxt, statusTxt) {
            if (statusTxt == "success") {
                $this.find('svg').addClass('svg svg-' + $filename + '');
            }
        });
    });

    setTimeout(function() {
        $('.main__right-message').toggle('slow');;
    }, 3000);
    $('.present').click(function(e) {
        e.preventDefault();
        $('.about__right').find('.present_btn').hide('');
        $(this).parent().find('.present').removeClass('active');
        var btn = $(this).attr('value');
        $(this).toggleClass('active');
        $("#" + btn).toggle('');
    });

    jQuery(($) => {
        $('.select').on('click', '.select__head', function() {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).next().fadeOut();
            } else {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
                $(this).addClass('open');
                $(this).next().fadeIn();
            }
        });

        $('.select').on('click', '.select__item', function() {
            $('.select__head').removeClass('open');
            $(this).parent().fadeOut();
            $(this).parent().prev().text($(this).text());
            $(this).parent().prev().prev().val($(this).text());
        });

        $(document).click(function(e) {
            if (!$(e.target).closest('.select').length) {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
            }
        });
    });
});