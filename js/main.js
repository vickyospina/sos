let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let abrir = document.getElementById("open");
let cerrado = true;

function menus() {
  let desplazamiento_actual = window.pageYOffset;

  if (desplazamiento_actual <= 150) {
    nav.classList.remove("nav2");
    nav.className = "nav1";
    nav.style.transition = "1s";
    menu.style.top = "80px";
    abrir.style.color = "#fff";
  } else {
    nav.classList.remove("nav1");
    nav.className = "nav2";
    nav.style.transition = "1s";
    menu.style.top = "100px";
    abrir.style.color = "#000";
  }
}

function apertura() {
  if (cerrado) {
    menu.style.width = "70vw";
    cerrado = false;
  } else {
    menu.style.width = "0%";
    menu.style.overflow = "hidden";
    cerrado = true;
  }
}

function menuresponsive() {
  if (screen.width >= 700) {
    cerrado = true;
    menu.style.removeProperty("overflow");
    menu.style.removeProperty("width");
  }
}

window.addEventListener("load", function () {
 /* $("#onload").fadeOut();
  $("body").removeClass("hidden"); */
  menus();
});

window.addEventListener("click", function (e) {
  if ((cerrado = false)) {
    let span = this.document.querySelector("span");
    if (e.target !== span && e.target !== abrir) {
      menu.style.width = "0%";
      menu.style.overflow = "hidden";
      cerrado = true;
    }
  }
});

window.addEventListener("scroll", function () {
  menus();
});

window.addEventListener("resize", function () {
  menuresponsive();
});

abrir.addEventListener("click", function () {
  apertura();
});
