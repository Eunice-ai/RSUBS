function loadHeaderFooter() {
    const header = new XMLHttpRequest();
    header.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("header").innerHTML = this.responseText;
        active();
        responsiveNav();
      }
    };
    header.open("GET", "includes/header.html", true);
    header.send();
  
    const footer = new XMLHttpRequest();
    footer.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("footer").innerHTML = this.responseText;
      }
    };
    footer.open("GET", "includes/footer.html", true);
    footer.send();
  }
  
  loadHeaderFooter();
  
  function active() {
    const navlinks = document.querySelectorAll(".nav__item__link");
    const windowPathName = window.location.pathname;
  
    navlinks.forEach((navlink) => {
      const navLinkPathname = new URL(navlink.href).pathname;
  
      if (
        windowPathName === navLinkPathname ||
        (windowPathName === "/index.html" && navLinkPathname === "/")
      ) {
        navlink.classList.add("active");
      }
    });
  }
  
  function responsiveNav() {
    const navbarNav = document.querySelector(".navbar__collapse__nav");
    const navToggler = document.querySelector(".navbar__toggler");
  
    navToggler.addEventListener("click", () => {
      const visible = navbarNav.getAttribute("data-visible");
  
      if (visible === "false") {
        navbarNav.setAttribute("data-visible", "true");
        navToggler.setAttribute("aria-expanded", "true");
      } else if (visible === "true") {
        navbarNav.setAttribute("data-visible", "false");
        navToggler.setAttribute("aria-expanded", "false");
      }
    });
  }