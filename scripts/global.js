function setFooterYear() {
    var currentYear = new Date().getFullYear();

    $('#footerCurrentYear').text(currentYear);
}

function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (
            window.location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
            window.location.hostname === this.hostname
        ) {
            var target = $(this.hash);

            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");

            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    400
                );
                return false;
            }
        }
    });
};

function showLightbox(img, label) {
    $('#lightbox-img').attr('src', img);
    $('#lightbox-label').text(label);
    $('#lightbox').fadeIn(400);
}

function hideLightbox() {
    $('#lightbox').fadeOut(400);
}

$('.projects-item a').on('click', function (event) {
    event.preventDefault();

    var imgSrc = $(this).find('img').attr('src');
    var imgLabel = $(this).find('label').text();

    if (imgSrc) {
        showLightbox(imgSrc, imgLabel);
    }
});

$('#lightbox').on('click', function (event) {
    hideLightbox();
});

$(document).on('keydown', function (e) {
    if (e.key === "Escape") {
        hideLightbox();
    }
});

$(document).ready(function () {
    setFooterYear();
    smoothScroll();
});