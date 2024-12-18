$(function () {
    var menu_width = 300;
    var menu = $(".menu");
    var menu_open = $(".menu-open");
    var menu_close = $(".menu-close");
    var overlay = $(".overlay");
   
    menu_open.click(function (e) {
      e.preventDefault();
      menu.css({"right": "0px"});
      overlay.css({"opacity": "1", "width": "100%"});
    });
    
    menu_close.click(function (e) {
      e.preventDefault();
      menu.css({"right": "-" + menu_width + "px"});
      overlay.css({"opacity": "0", "width": "0"});
    });
   });