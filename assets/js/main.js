$(window).ready(function () {
  // ========== Open Menu & remove body padding, add class active to body ========== //
  $("#menu-icon").click(function () {
    $("body").toggleClass("active");
  });

  // ========== remove class active when click close button ========== //
  $(".btn-close").click(function () {
    $("body").removeClass("active");
  });

  // ========== remove class active when click on overlay ========== //
  $(".overlay").click(function () {
    $("body").removeClass("active");
  });

  // ========== dark mode ========== //
  $("#mode-btn").click(function () {
    if (!$("body").hasClass("dark-mode")) {
      $("body").addClass("dark-mode");
      $("#mode-btn i").addClass("fa-moon").removeClass("fa-sun");
      window.localStorage.setItem("theme-mode", "dark");
    } else {
      $("body").removeClass("dark-mode");
      $("#mode-btn i").addClass("fa-sun").removeClass("fa-moon");
      window.localStorage.setItem("theme-mode", "light");
    }
  });

  if (window.localStorage.getItem("theme-mode")) {
    if (window.localStorage.getItem("theme-mode") == "dark") {
      $("body").addClass("dark-mode");
      $("#mode-btn i").addClass("fa-moon").removeClass("fa-sun");
    } else {
      $("body").removeClass("dark-mode");
      $("#mode-btn i").addClass("fa-sun").removeClass("fa-moon");
    }
  }

  $("#user-btn").click(function () {
    $(".main-header .profile").toggleClass("active");
  });

  $(window).on("scroll", function () {
    $(".main-header .profile").removeClass("active");
  });

  $("#search-icon").click(function () {
    $(".main-header .search-box").toggleClass("active");
  });
});
