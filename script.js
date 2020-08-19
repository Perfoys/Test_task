"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
    let subbutton = document.querySelector("#submit-input");
    subbutton.addEventListener("click", function(e){
        alert("Мы получили ваш номер!");
    })

    let slideblock = document.querySelectorAll(".Slider-circle");
    for (let i = 0; i < slideblock.length; i++) {
        slideblock[i].addEventListener("click", function() {
            slideblock.forEach(function (item, i, slideblock){
                slideblock[i].firstChild.className = "Circle-non-active";
            })
            slideblock[i].firstChild.className = "Circle-active";
            let slider = document.querySelector(".Slider-cover");
            let imgblock = document.querySelector(".Slide-control");
            let img = document.querySelector(".image-slide");
            if (i>1) imgblock.style.transform = `translateX(-${(img.width+12)*2}px)`;
            else if (i>0 && i<2) imgblock.style.transform = `translateX(-${img.width+12}px)`;
            else  imgblock.style.transform = `translateX(-0px)`;
        })
    }

    let selectible = document.querySelectorAll(".select-item");
    for (let i = 0; i < selectible.length; i++) {
        selectible[i].addEventListener("click", function() {
            let id = selectible[i].id;
            let imgblock = document.querySelector("#img-block");
            imgblock.firstChild.src = `images/${id}.png`;
        })
    }
})