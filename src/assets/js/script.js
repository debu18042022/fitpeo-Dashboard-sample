// Sidebar Swicther
window.onload = function () {
    const sidebar = document.getElementById("sidebar");
    const btnHam = document.getElementById("btn-hamburger");
    const asideOverlay = document.getElementById("aside-overlay");
    btnHam.addEventListener("click", function () {
      const body = document.body;
      body.classList.toggle("sidebar-expnaded");
      sidebar.classList.add("aside-responsive");
    });
    asideOverlay.addEventListener("click", function () {
      const body = document.body;
      body.classList.remove("sidebar-expnaded");
      sidebar.classList.remove("aside-responsive");
    });
  };
  