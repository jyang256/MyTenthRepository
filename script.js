    //makes the background image move with mouse move event
    //correct aspect ratio to 16:9
    function perspective(event) {
      var w = window.innerWidth;
      var h = window.innerHeight;
      var x = event.clientX - w;
      var y = event.clientY - h;
      var layer1 = document.getElementById("layer1");
      var layer2 = document.getElementById("layer2");
      layer1.style.left = x/40 + "px";
      layer1.style.top = y/40 + "px";
      layer2.style.left = x/20 + "px";
      layer2.style.top = y/20 + "px";
    }

      //docking navbar, only activates on 990+ width windows
    window.addEventListener('resize', navcheck);
    function navcheck(){
      var n = document.getElementById("navigation");
      var m = document.getElementById("master");
      if(window.innerWidth > 991){
        if (m.scrollTop > 30 || m.scrollTop > 30) {
          n.style.width = "100%";
          n.style.top = "0";
          n.style.position = "sticky";
          n.style.margin = "0";
          n.style.borderRadius= "0";
        }else{
          n.style.width = "92%";
          n.style.top = "30px";
          n.style.position = "absolute";
          n.style.marginLeft = "4%";
          n.style.marginRight = "4%";
          n.style.borderRadius= "5px";
        }
      }else{
          n.style.width = "100%";
          n.style.top = "0";
          n.style.position = "sticky";
          n.style.margin = "0";
          n.style.borderRadius= "0";
      }
    }
