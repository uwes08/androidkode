
  
  var load = document.getElementById("loading"); window.addEventListener('load', function(){ load.style.display = "none"; });
  var load = document.getElementById("preloader"); window.addEventListener('load', function(){ load.style.display = "none"; });

document.querySelector('.menu-button').onclick = function(e) {
   e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
};

function openNav() {
    document.getElementById("sideNavigation").style.width = "270px";
    document.getElementById("main").style.marginLeft = "270px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$(document).ready(function() {
  var front = document.getElementsByClassName("front");
  var back = document.getElementsByClassName("back");

  var highest = 0;
  var absoluteSide = "";

  for (var i = 0; i < front.length; i++) {
    if (front[i].offsetHeight > back[i].offsetHeight) {
      if (front[i].offsetHeight > highest) {
        highest = front[i].offsetHeight;
        absoluteSide = ".front";
      }
    } else if (back[i].offsetHeight > highest) {
      highest = back[i].offsetHeight;
      absoluteSide = ".back";
    }
  }
  $(".front").css("height", highest);
  $(".back").css("height", highest);
  $(absoluteSide).css("position", "absolute");
});

  $(document).ready(function(){$("body").toggleClass(localStorage.toggled),$("#modedark").on("click",function(){"Night"!=localStorage.toggled?($("body").toggleClass("Night",!0),localStorage.toggled="Night",$(".section-center").css("display","block")):($("body").toggleClass("Night",!1),localStorage.toggled="",$(".section-center").css("display",""))}),$("body").hasClass("Night")?$("#modedark").prop("checked",!0):$("#modedark").prop("checked",!1)});