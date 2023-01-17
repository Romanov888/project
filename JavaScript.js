var document;
var $;
var $num;
var $even;
var $odd;
var console;
var $slide;
var g;
var g1;
var window;
var ResizeSensor;
var jQuery;


function Admin_menu_on() {
    $("#Admin-menu").show(300);
}

function Admin_menu_leave() {
    $("#Admin-menu").hide(300);
}

function About_menu_on() {
    $("#About-menu").show(300);
}

function About_menu_leave() {
    $("#About-menu").hide(300);
}

function Mobile_menu() {
    var cmm = $("#click-menu-mobile");
    if (cmm.css("display") === "none") {
        cmm.show(300);
    } else {
        cmm.hide(300);
    }
}

function Admin_mobile() {
    var admm = $("#Admin-menu-mobile");
    if (admm.css("display") === "none") {
        admm.show(300);
    } else {
        admm.hide(300);
    }
}

function About_mobile() {
    var abmm = $("#About-menu-mobile");
    if (abmm.css("display") === "none") {
        abmm.show(300);
    } else {
        abmm.hide(300);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    var b1;
    var mm;
    var adm;
    var abm;
    var b = document.getElementById("Admin");
    b.addEventListener("mouseover", Admin_menu_on);
    b.addEventListener("mouseleave", Admin_menu_leave);
    b1 = document.getElementById("About");
    b1.addEventListener("mouseover", About_menu_on);
    b1.addEventListener("mouseleave", About_menu_leave);
    mm = document.getElementById("click-mob-menu");
    mm.addEventListener("click", Mobile_menu);
    adm = document.getElementById("Admin-mobile");
    adm.addEventListener("click", Admin_mobile);
    abm = document.getElementById("About-mobile");
    abm.addEventListener("click", About_mobile);

    $("#overlay_btn").click(function () {
        openForm();
        
        animate({
            duration: 700,
            timing: function circ(timeFraction) {
              return 1 - Math.sin(Math.acos(timeFraction));
            },
            draw: function(progress) {
              $(".FormOverlay").css("left", 110-progress*110+"px");
              $(".FormOverlay").css("bottom", 45-progress*45+"px");
              $(".FormOverlay").css("width",  progress * 100 + "%");
              $(".FormOverlay").css("height",  progress * 100 + "%");
              $("#form-overlay").css("opacity", progress);
              $("#close_overlay_btn").css("opacity", progress);
            }
          });
    });

    $(".FormOverlay").click(function (event) {
        
        if((String)(event.target) === "[object HTMLSpanElement]") 
        {
            $("#mess_good").css("display", "none");
            $("#mess_error").css("display", "none");
            openHome();//Изменение URL при открытии формы
            animate({//Отрисовка плавного появления оверлея с формой
                duration: 400,
                timing: function circ(timeFraction) {
                return 1 - Math.sin(Math.acos(timeFraction));
                },
                draw: function(progress) {
                $(".FormOverlay").css("left", progress*110+"px");
                $(".FormOverlay").css("bottom", progress*45+"px");
                $(".FormOverlay").css("width",  (1- progress) * 100 + "%");
                $(".FormOverlay").css("height",  (1 - progress) * 100 + "%");
                $("#form-overlay").css("opacity", 1-progress);
                $("#close_overlay_btn").css("opacity", 1-progress);
                }
            });
        }
    });

});