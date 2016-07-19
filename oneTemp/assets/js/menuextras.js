// function toggleDiv(divId) {
//    $("#"+divId).toggle();
// }

function getButton() {     
     document.getElementById("resultsMenu").style.display = "block";     
}

$("div.accordian").accordion({
    autoHeight: false,
    collapsible: true,
    active: false,
});

//this isn't used but saving temporarily just in case
function toggleMenu() {
  var menuBox = document.getElementById('results');    
  if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
}