$(document).ready( function() {

// attivare il click sulle frecce
$(".prev").click( function(){
  immaginiAttive("prev");
})

$(".next").click( function(){
  immaginiAttive("next");
})
}) // fine del documento


// funzioni
function immaginiAttive(direzione) {
  var imgAttiva = $(".images img.active");
  var circleAttiva = $(".nav i.active");

// Rimuoviamo la classe attiva precedente in modo che non si sovrappongano
 imgAttiva.removeClass("active");
 circleAttiva.removeClass("active");

// NEXT= diciamo che le immagini sono attive man mano che scorriamo
  if (direzione === "next") {
    if(imgAttiva.hasClass("last")){
      $(".images img.first").addClass("active");
      $(".nav i.first").addClass("active");
    } else {
      imgAttiva.next("img").addClass("active");
      circleAttiva.next("i").addClass("active");
    }
    }
// PREV= attiviamo le immagini quando scorriamo indietro
if (direzione === "prev") {
  if (imgAttiva.hasClass("first")) {
    $(".images img.last").addClass("active");
    $(".images img.last").addClass("active");
  } else {
    imgAttiva.prev("img").addClass("active");
    circleAttiva.prev("i").addClass("active");
  }
}


}

// Bonus!!
$(document).keydown(function(event) {
  console.log(event .keyCode);

  if (event .keyCode == 37) {
    immaginiAttive("prev");
  } else if (event .keyCode == 39) {
    immaginiAttive("next");
  }
})
