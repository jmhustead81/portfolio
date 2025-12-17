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


$(document).ready(function () {
    setFooterYear();
    smoothScroll();
});