let headbarsmenu = document.getElementById('headbarsmenu');
let geeldropdownmenu = document.getElementById('geeldropdownmenu');
let geelhamburger = document.getElementById('geelhamburger');
let geelmenuopen = false;

let menu = document.getElementById('menu');
let grijshamburger = document.getElementById('grijshamburger');
let grijsdropdownmenu = document.getElementById('grijsdropdownmenu');
let grijsmenuopen = false;

geelhamburger.onclick = function() {
  hamburger();
};
grijshamburger.onclick = function() {
  hamburger2();
};

function hamburger() {
  if (grijsmenuopen === true) {
    grijsdropdownmenu.style.display = 'none';
    grijsmenuopen = false;
  } else {
    if (geelmenuopen === false) {
      geeldropdownmenu.style.display = 'unset';
      geelmenuopen = true;
    } else {
      geeldropdownmenu.style.display = 'none';
      geelmenuopen = false;
    }
  }
}
function hamburger2() {
  if (geelmenuopen === true) {
    geeldropdownmenu.style.display = 'none';
    geelmenuopen = false;
  } else {
    if (grijsmenuopen === false) {
      grijsdropdownmenu.style.display = 'unset';
      grijsmenuopen = true;
      menu.style.backgroundImage = 'none';
    } else {
      grijsdropdownmenu.style.display = 'none';
      menu.style.backgroundImage = 'url(logo.png)';
      grijsmenuopen = false;
    }
  }
}
