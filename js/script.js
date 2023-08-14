function start() {
}
var isactive = false;

function sidebar(active){
  let bar = document.getElementById('sidebar');
  if (isactive == false && active == true) {
    isactive = true
    bar.style.translate ='0px'
  }

  else{
    bar.style.translate = '-100%'
    isactive = false
  }
}

function gallery(x) {
 const g1 = document.getElementById("g1");
 const g2 = document.getElementById("g2");
 const g3 = document.getElementById("g3");
 const g4 = document.getElementById("g4");
 const g5 = document.getElementById("g5");
 const g6 = document.getElementById("g6");

 g1.style.display = "none";
 g2.style.display = "none";
 g3.style.display = "none";
 g4.style.display = "none";
 g5.style.display = "none";
 g6.style.display = "none";

 switch (x) {
   case 1:
     g1.style.display = "block";
     g2.style.display = "block";
     g3.style.display = "block";
     g4.style.display = "block";
     g5.style.display = "block";
     g6.style.display = "block";
     break;
   case 2:
     g1.style.display = "block";
     g2.style.display = "none";
     g3.style.display = "block";
     g4.style.display = "block";
     g5.style.display = "none";
     g6.style.display = "none";
     break;
   case 3:
     g1.style.display = "none";
     g2.style.display = "block";
     g3.style.display = "none";
     g4.style.display = "none";
     g5.style.display = "none";
     g6.style.display = "block";
     break;
   case 4:
     g1.style.display = "none";
     g2.style.display = "none";
     g3.style.display = "none";
     g4.style.display = "none";
     g5.style.display = "block";
     g6.style.display = "none";
     break;
   default:
     g1.style.display = "block";
     g2.style.display = "block";
     g3.style.display = "block";
     g4.style.display = "block";
     g5.style.display = "block";
     g6.style.display = "block";
     break;
 }
}


var xpos = 0;

//carousel function Starts-------------->
function carousel(direction){
  const carousel = document.getElementById('carousel');
  var carouselitems = document.querySelectorAll('.carousel-item');
  //Direction----->
  if (direction === 'left')left();

  if (direction === 'right')right();
  //right function starts---------->

  function right() {
    if(window.matchMedia("(max-width: 767px)").matches){
        xpos -= 315;
      carousel.style.translate = xpos + 'px';
      if (xpos <= -1400) {
        xpos = 0;
        carousel.style.translate = xpos +'px';
      }
    }
    //right function ends<----------
    else if(window.matchMedia("(max-width: 1023px)").matches){
       xpos -= 313;
      carousel.style.translate = xpos + 'px';
      if (xpos <= -1000) {
        xpos = 0;
        carousel.style.translate = xpos +'px';
      }
    }

    else if(window.matchMedia("(max-width: 1439px)").matches){
      xpos -= 314;
      carousel.style.translate = xpos + 'px';
      if (xpos <= -900) {
        xpos=0;
        carousel.style.translate = xpos +'px'
      }
    }
    else if(window.matchMedia("(min-width: 1440px)").matches){
      xpos -= 314;
      carousel.style.translate = xpos + 'px';
      if (xpos <= -900) {
        xpos=0;
        carousel.style.translate = xpos +'px'
      }
    }
  }
  function left() {
    if(window.matchMedia("(max-width: 767px)").matches){
      xpos += 315;
      carousel.style.translate = xpos + 'px';
      if (xpos >= 1) {
        xpos=-1260;
        carousel.style.translate = xpos +'px';
      }
    }

    else if(window.matchMedia("(max-width: 1023px)").matches){
      xpos += 314;
      carousel.style.translate = xpos + 'px';
      if (xpos >= 1) {
        xpos=-939;
        carousel.style.translate = xpos + 'px';
      }
    }

    else if(window.matchMedia("(max-width: 1439px)").matches){
      xpos += 314;
      carousel.style.translate = xpos + 'px';
      if (xpos >= 1) {
        xpos=-628;
        carousel.style.translate = xpos +'px';
      }
    }
    else if(window.matchMedia("(min-width: 1440px)").matches){
      xpos += 314;
      carousel.style.translate = xpos + 'px';
      if (xpos >= 1) {
        xpos=-628;
        carousel.style.translate = xpos +'px';
      }
    }
  }
}

var xpos2 = 0;

//carousel 2 function Starts-------------->
function carousel2(direction){
  const carousel2 = document.getElementById('carousel2');
  var carousel2items = document.querySelectorAll('.carousel2-item');
  //Direction----->
  if (direction === 'left')left();

  if (direction === 'right')right();
  //right function starts---------->

  function right() {
    if(window.matchMedia("(max-width: 767px)").matches){
        xpos2 -= 315;
      carousel2.style.translate = xpos2 + 'px';
      if (xpos2 <= -945) {
        xpos2 = 0;
        carousel2.style.translate = xpos2 +'px';
      }
    }
    //right function ends<----------
    else if(window.matchMedia("(max-width: 1023px)").matches){
       xpos2 -= 313;
      carousel2.style.translate = xpos2 + 'px';
      if (xpos2 <= -800) {
        xpos2 = 0;
        carousel2.style.translate = xpos2 +'px';
      }
    }

    else if(window.matchMedia("(max-width: 1439px)").matches){
      xpos2 -= 314;
      carousel2.style.translate = xpos2 + 'px';
      if (xpos2 <= -600) {
        xpos2=0;
        carousel2.style.translate = xpos2 + 'px';
      }
    }
    else if(window.matchMedia("(min-width: 1440px)").matches){
      xpos2 -= 314;
      carousel2.style.translate = xpos2 + 'px';
      if (xpos2 <= -600) {
        xpos2=0;
        carousel2.style.translate = xpos2 +'px';
      }
    }
  }
  function left() {
    if(window.matchMedia("(max-width: 767px)").matches){
      xpos2 += 315;
      carousel2.style.translate = xpos2 + 'px';
      if (xpos2 >= 1) {
        xpos2=-1260;
        carousel2.style.translate = xpos2 + 'px';
      }
    }

    else if(window.matchMedia("(max-width: 1023px)").matches){
      xpos2 += 314;
      carousel2.style.translate = xpos2 + 'px';
      if (xpos2 >= 1) {
        xpos2=-939;
        carousel2.style.translate = xpos2 +'px'
      }
    }

    else if(window.matchMedia("(max-width: 1439px)").matches){
      xpos2 += 314;
      carousel2.style.translate = xpos2 + 'px';
      if (xpos2 >= 1) {
        xpos2=-314;
        carousel2.style.translate = xpos2 +'px'
      }
    }
    else if(window.matchMedia("(min-width: 1440px)").matches){
      xpos2 += 314;
      carousel2.style.translate = xpos2 + 'px';
      if (xpos2 >= 1) {
        xpos2=-314;
        carousel2.style.translate = xpos2 +'px'
      }
    }
  }
}
