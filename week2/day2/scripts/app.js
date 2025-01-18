"use strict";

// IIFE - Immediately Invoked Functional Expression
(function () {

    function DisplayHomePage() {
        console.log("Called DisplayHomePage....");
        let aboutUsBtn = document.getElementById("AboutUsBtn");
        if (aboutUsBtn) { // Check if the element exists
            aboutUsBtn.addEventListener("click", function () {
                location.href = "about.html";
            });
        }
    }

    let mainContent = document.getElementsByTagName("main")[0];
    if (mainContent) { // Check if the main element exists
        // <p id="MainParagraph" class="This is the main paragraph" ></p>
        let MainParagraph = document.createElement("p"); // Corrected creation of element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is the main paragraph";

        // Attach it to the DOM
        mainContent.appendChild(MainParagraph); // Fixed variable case

        let FirstString = "This is";
        let SecondString = `${FirstString} is my second paragraph`;
        MainParagraph.textContent = SecondString;

        // Attach it to the DOM
        mainContent.appendChild(MainParagraph); // Fixed variable case

        let DocumentBody = document.body;
        //<article><p></p></article>
        let ArticleBody = document.createElement("article");
        let ArticleParagraph = `<pid ="ArticleParagraph" class="mt-3">This is my article paragraph</pid></p>`;
        ArticleBody.setAttribute("class", "container");
        ArticleBody.innerHTML = ArticleParagraph;

        DocumentBody.appendChild(ArticleBody);
    }

    function DisplayAboutPage() {
        console.log("Called DisplayAboutPage....");
    }

    function DisplayServicesPage() {
        console.log("Called DisplayServicesPage....");
    }

    function DisplayContactPage() {
        console.log("Called DisplayContactPage....");
    }

    function DisplayProductsPage() {
        console.log("Called DisplayProductsPage....");
    }

    function Start() {
        console.log("Start App...");
        switch (document.title) {
            case "Home":
                DisplayHomePage();
                break;
            case "About":
                DisplayAboutPage();
                break;
            case "Services":
                DisplayServicesPage(); // Fixed typo
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

})();
