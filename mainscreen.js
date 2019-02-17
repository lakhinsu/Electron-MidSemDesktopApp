function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "black";
  clear();
}

function onSubClick(param) {
  // document.getElementById("maincontent").style.height="0%";
  //document.getElementById("maincontent").style.zIndex=-1;
  //document.getElementById("maincontent").style.visibility="hidden";
  openNav();
  var x = param.innerText;
  console.log(x);
  if (x == "Advance Java") {
    $("#subjecttitle").html("<h1>Advance Java</h1>");
    $('#paperlist').append("<li>AJ-2019</li>");
    $('#paperlist').append("<li>AJ-2018</li>");
    $('#paperlist').append("<li>AJ-2017-REM</li>");
    $('#paperlist').append("<li>AJ-2016</li>");
  }
  if (x == "Web Tech") {
    $("#subjecttitle").html("<h1>Web Tech</h1>");
    $('#paperlist').append("<li>WT-2019</li>");
    $('#paperlist').append("<li>WT-2018</li>");
    $('#paperlist').append("<li>WT-2017-REM</li>");
    $('#paperlist').append("<li>WT-2016</li>");
  }
  if (x == "DOS") {
    $("#subjecttitle").html("<h1>DOS</h1>");
    $('#paperlist').append("<li>DOS-2019</li>");
    $('#paperlist').append("<li>DOS-2018</li>");
    $('#paperlist').append("<li>DOS-2017-REM</li>");
    $('#paperlist').append("<li>DOS-2016</li>");
  }
  if (x == "DCDR") {
    $("#subjecttitle").html("<h1>DCDR</h1>");
    $('#paperlist').append("<li>DCDR-2019</li>");
    $('#paperlist').append("<li>DCDR-2018</li>");
    $('#paperlist').append("<li>DCDR-2017-REM</li>");
    $('#paperlist').append("<li>DCDR-2016</li>");
  }
  if (x == "Software Engg.") {
    $("#subjecttitle").html("<h1>Software Engg.</h1>");
    $('#paperlist').append("<li>SE-2019</li>");
    $('#paperlist').append("<li>SE-2018</li>");
    $('#paperlist').append("<li>SE-2017-REM</li>");
    $('#paperlist').append("<li>SE-2016</li>");
  }
  if (x == "Dot Net") {
    $("#subjecttitle").html("<h1>Dot Net</h1>");
    $('#paperlist').append("<li>.Net-2019</li>");
    $('#paperlist').append("<li>.Net-AJ-2018</li>");
    $('#paperlist').append("<li>.Net-2017-REM</li>");
    $('#paperlist').append("<li>.Net-2016</li>");
  }
}

function clear(){
  $('#subjecttitle').html("");
  $('#paperlist').html("");
}

