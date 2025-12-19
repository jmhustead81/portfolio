function setFooterYear() {
  var currentYear = new Date().getFullYear();

  $("#footer-current-year").text(currentYear);
}

function smoothScroll() {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      window.location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      window.location.hostname === this.hostname
    ) {
      var target = $(this.hash);

      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 15,
          },
          400
        );
        return false;
      }
    }
  });
}

function showLightbox(img, caption) {
  $("#lightbox-bg").fadeIn(400);
  $("#lightbox-img").attr("src", img);
  $("#lightbox-caption").text(caption);
  $("#lightbox").fadeIn(400);
}

function hideLightbox() {
  $("#lightbox").fadeOut(400);
  $("#lightbox-bg").fadeOut(400);
}

$(".projects-item a").on("click", function (event) {
  event.preventDefault();

  var imgSrc = $(this).find("img").attr("src");
  var imgCaption = $(this).find("figcaption").text();

  if (imgSrc) {
    showLightbox(imgSrc, imgCaption);
  }
});

$("#lightbox").on("click", function (event) {
  hideLightbox();
});

$("#lightbox-bg").on("click", function (event) {
  hideLightbox();
});

$(document).on("keydown", function (e) {
  if (e.key === "Escape") {
    hideLightbox();
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("#back-to-top").fadeIn(400);
  } else {
    $("#back-to-top").fadeOut(400);
  }
});

$(document).ready(function () {
  setFooterYear();
  smoothScroll();
});
