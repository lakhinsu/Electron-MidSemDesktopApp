const { shell } = require('electron');
const path=require('path');

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
    $('#paperlist').append("<li>JAVA-Darshan</li>");
    $('#paperlist').append("<li>JAVA-18</li>");
    $('#paperlist').append("<li>JAVA-REM-18</li>");
    $('#paperlist').append("<li>JAVA-16</li>");
    $('#paperlist').append("<li>JAVA-REM-16</li>");
    $('#paperlist').append("<li>JAVA-15</li>");
    $('#paperlist').append("<li>JAVA-14</li>");
    $('#paperlist').append("<li>JAVA-REM-14</li>");
    $('#paperlist').append("<li>JAVA-ALL</li>");
  }
  if (x == "Web Tech") {
    $("#subjecttitle").html("<h1>Web Tech</h1>");
    $('#paperlist').append("<li>WebTech-Darshan/li>");
    $('#paperlist').append("<li>WebTech-18</li>");
    $('#paperlist').append("<li>WebTech-14</li>");
    $('#paperlist').append("<li>WebTech-REM-14</li>");
    $('#paperlist').append("<li>WebTech-13</li>");
    $('#paperlist').append("<li>WebTech-REM-13</li>");
    $('#paperlist').append("<li>WebTech-11</li>");    
    $('#paperlist').append("<li>WebTech-ALL/li>");
  }
  if (x == "DOS") {
    $("#subjecttitle").html("<h1>DOS</h1>");
    $('#paperlist').append("<li>DOS-Darshan/li>");
    $('#paperlist').append("<li>DOS-2019</li>");
    $('#paperlist').append("<li>DOS-2018</li>");
    $('#paperlist').append("<li>DOS-2017-REM</li>");
    $('#paperlist').append("<li>DOS-2016</li>");
  }
  if (x == "DCDR") {
    $("#subjecttitle").html("<h1>DCDR</h1>");
    $('#paperlist').append("<li>DCDR-Darshan</li>");
    $('#paperlist').append("<li>DCDR-18</li>");
    $('#paperlist').append("<li>DCDR-REM-17</li>");
    $('#paperlist').append("<li>DCDR-REM-16</li>");
    $('#paperlist').append("<li>DCDR-ALL</li>");
  }
  if (x == "Software Engg.") {
    $("#subjecttitle").html("<h1>Software Engg.</h1>");
    $('#paperlist').append("<li>SE-Darshan</li>");
    $('#paperlist').append("<li>SE-REM-18</li>");
    $('#paperlist').append("<li>SE-REM-17</li>");
    $('#paperlist').append("<li>SE-REM-16</li>");
    $('#paperlist').append("<li>SE-REM-16</li>");
    $('#paperlist').append("<li>SE-REM-14</li>");
    $('#paperlist').append("<li>SE-12</li>");
    $('#paperlist').append("<li>SE-REM-11</li>");
    $('#paperlist').append("<li>SE-11</li>");
    $('#paperlist').append("<li>SE-ALL</li>");
    
  }
  if (x == "Dot Net") {
    $("#subjecttitle").html("<h1>Dot Net</h1>");
    $('#paperlist').append("<li>DotNet-Darshan</li>");
    $('#paperlist').append("<li>DotNet-REM-18</li>");
    $('#paperlist').append("<li>DotNet-17</li>");
    $('#paperlist').append("<li>DotNet-16</li>");
    $('#paperlist').append("<li>DotNet-14</li>");
    $('#paperlist').append("<li>DotNet-REM-14</li>");
    $('#paperlist').append("<li>DotNet-13</li>");
    $('#paperlist').append("<li>DotNet-11</li>");
    $('#paperlist').append("<li>DotNet-ALL</li>");
  }

  $(function() {
    
    $("#paperlist li").not('.emptyMessage').click(function() {
            //alert('Clicked list. ' + this.innerText);
            openpdf(this.innerText);
    });
  });
}

function clear(){
  $('#subjecttitle').html("");
  $('#paperlist').html("");
}

function openpdf(filename){
 // alert('here');
  //var path2=(`file://${__dirname}/Papers/`+filename+`.pdf`);
  var path2=path.join(__dirname,'/Papers/'+filename+'.pdf');
  //alert(path2);
  shell.openItem(path2);
}


