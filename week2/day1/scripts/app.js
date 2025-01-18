"use strict";

//IIFE - Immediately Invoked Functional Expression
(function () {

    function DisplayHomePage(){
        console.log("Called DisplayHomePage....");
        let aboutUsBtn = document.getElementById("AboutUsBtn");
        aboutUsBtn.addEventListener("click", function(){
            location.href="about.html";
        })
    }

    function DisplayAboutPage(){
        console.log("Called DisplayAboutPage....");
    }

    function DisplayServicesPage(){
        console.log("Called DisplayServicesPage....");
    }

    function DisplayContactPage(){
        console.log("Called DisplayContactPage....");
    }

    function DisplayProductsPage(){
        console.log("Called DisplayProductsPage....");
    }

    function Start(){
        console.log("Start App...");
        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "About":
                DisplayAboutPage();
                break;
            case "Services":
                DisplaySerivesPage();
                break;
            case "Contacts":
                DisplayContactPage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
        }

    }
    window.addEventListener("load", Start);

})()