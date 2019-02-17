function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "black";
  }

  function onSubClick(){
   // document.getElementById("maincontent").style.height="0%";
    //document.getElementById("maincontent").style.zIndex=-1;
    //document.getElementById("maincontent").style.visibility="hidden";
    openNav();
  }