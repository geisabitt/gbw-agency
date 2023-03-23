$(document).ready(function () {
  //progress bar A
  let containerA = document.getElementById("circleA");

  let circleA = new ProgressBar.Circle(containerA, {
    color: "#c04724",
    strokeWidth: 8,
    duration: 1500,
    from: { color: "#aaa" },
    to: { color: "#c04724" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = '<i class="fa-brands fa-html5"></i>';
      circle.setText(value);
    },
  });
  //progress bar B
  let containerB = document.getElementById("circleB");

  let circleB = new ProgressBar.Circle(containerB, {
    color: "#275da6",
    strokeWidth: 8,
    duration: 1800,
    from: { color: "#aaa" },
    to: { color: "#275da6" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = '<i class="fa-brands fa-css3-alt"></i>';
      circle.setText(value);
    },
  });
  //progress bar c
  let containerC = document.getElementById("circleC");

  let circleC = new ProgressBar.Circle(containerC, {
    color: "#d5b931",
    strokeWidth: 8,
    duration: 2100,
    from: { color: "#aaa" },
    to: { color: "#d5b931" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = '<i class="fa-brands fa-js"></i>';
      circle.setText(value);
    },
  });
  //progress bar D
  let containerD = document.getElementById("circleD");

  let circleD = new ProgressBar.Circle(containerD, {
    color: "#bd002e",
    strokeWidth: 8,
    duration: 2500,
    from: { color: "#aaa" },
    to: { color: "#bd002e" },

    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      let value = '<i class="fa-brands fa-angular"></i>';
      circle.setText(value);
    },
  });

  // iniciando o loader quando o usuário chega no elemento
  let dataAreaOffset = $("#data-area").offset();
  let stop = 0;

  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();

    if (scroll > dataAreaOffset.top - 500 && stop == 0) {
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);

      stop = 1;
    }
  });

  // Parallax
  setTimeout(function () {
    $("#data-area").parallax({ imageSrc: "img/cidadeparallax.png" });
    $("#apply-area").parallax({ imageSrc: "img/pattern.png" });
  }, 250);

  //filtro portifólio

  $(".filter-btn").on("click", function () {
    let type = $(this).attr("id");
    let boxes = $(".project-box");

    $(".main-btn").removeClass("active");
    $(this).addClass("active");

    if (type == "desenvolvimento-btn") {
      eachBoxes("desenvolvimento", boxes);
    } else if (type == "framework-btn") {
      eachBoxes("framework", boxes);
    } else if (type == "manutencao-btn") {
      eachBoxes("manutencao", boxes);
    } else {
      eachBoxes("all", boxes);
    }
  });
  function eachBoxes(type, boxes) {
    if (type == "all") {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function () {
        if (!$(this).hasClass(type)) {
          $(this).fadeOut("slow");
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  // scroll para as seções menu nav-itens

  let navBtn = $(".nav-item");
  let controlBtn = $(".control-btn");

  let bannerSection = $("#mainSlider");
  let aboutSection = $("#about-area");
  let servicesSection = $("#services-area");
  let portifolioSection = $("#portifolio-area");
  let contactSection = $("#contact-area");
  let contactForm = $("#contact-form");

  let scrollTo = "";

  $(navBtn).click(function (e) {
    e.preventDefault();

    let btnId = $(this).attr("id");

    if (btnId == "about-menu") {
      scrollTo = aboutSection;
    } else if (btnId == "services-menu") {
      scrollTo = servicesSection;
    } else if (btnId == "portifolio-menu" || btnId == "btn-portifolio-slide") {
      scrollTo = portifolioSection;
    } else if (btnId == "contact-menu") {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(scrollTo).offset().top - 70,
      },
      1500
    );
  });

  // inicio inicio
  $(controlBtn).click(function (e) {
    e.preventDefault();

    let btnId = $(this).attr("id");

    if (btnId == "btn-portifolio-slide") {
      scrollTo = portifolioSection;
    } else if (btnId == "btn-contato-slide") {
      scrollTo = contactForm;
    } else if (btnId == "btn-contato2-slide") {
      scrollTo = contactForm;
    } else if (btnId == "apply-btn") {
      scrollTo = contactForm;
    } else if (btnId == "call-btn") {
      scrollTo = contactForm;
    }

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(scrollTo).offset().top - 70,
      },
      1500
    );
  });

  //fim testes
});
