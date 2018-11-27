document.addEventListener("DOMContentLoaded", function() {

    var dropDown = document.getElementById("nav__display");
    var dropList = document.querySelector("ul#list");
    var chairs = document.getElementsByClassName("row2_item");
    var move = document.querySelectorAll(".move");

    dropDown.addEventListener("mouseover", function(){
        dropList.style.display = "block";
    });
    dropDown.addEventListener("mouseout", function(){
        dropList.style.display = "none";
    });

    for (var i=0; i < chairs.length-1; i++) {
        chairs[i].addEventListener("mouseover", function(){
            this.children[0].style.display = "none";
        });
        chairs[i].addEventListener("mouseout", function(){
            this.children[0].style.display = "block";
        });
    }

    move[1].addEventListener("click", function() {
        var sliderItem = document.querySelectorAll(".slider li");
        var n;
        for (var i=0; i < sliderItem.length; i++) {
            if (sliderItem[i].className.indexOf("visible") >= 0) {
                sliderItem[i].classList.toggle("visible");
                if (i<sliderItem.length-1) {
                    n = i+1;
                } else {
                    n = 0;
                }
                sliderItem[n].classList.toggle("visible");
                break;
            }
        }
    });


    move[0].addEventListener("click", function() {
        var sliderItem = document.querySelectorAll(".slider li");
        var n2;
        for (var i=0; i < sliderItem.length; i++) {
            if (sliderItem[i].className.indexOf("visible") >= 0) {
                sliderItem[i].classList.toggle("visible");
                if (i>0) {
                    n2 = i-1;
                } else if (i == 0) {
                    n2 = sliderItem.length-1;
                }
                sliderItem[n2].classList.toggle("visible");
                break;
            }
        }
    });



    var arrow = document.querySelectorAll(".list_arrow");
    var listPanel = document.querySelectorAll(".list_panel");
    var counter1 = 0, counter2 = 0, counter3 = 0;
    var panelLeft = document.querySelector(".panel_left");
    var panelRight = document.querySelector(".panel_right");
    var transport = document.getElementById("transport");

    arrow[0].addEventListener("click", function(){

        if (counter1%2 == 0) {
            this.parentElement.children[2].style.display = "block";
        } else {
            this.parentElement.children[2].style.display = "none";
        }
        counter1++;
    });

    arrow[1].addEventListener("click", function(){
        if (counter2%2 == 0) {
            this.parentElement.children[2].style.display = "block";
        } else {
            this.parentElement.children[2].style.display = "none";
        }
        counter2++;
    });

    arrow[2].addEventListener("click", function(){
        if (counter3%2 == 0) {
            this.parentElement.children[2].style.display = "block";
        } else {
            this.parentElement.children[2].style.display = "none";
        }
        counter3++;
    });

    transport.addEventListener("change", function(){
        if (transport.checked == true) {
            panelRight.querySelector(".transport.value").innerText = this.dataset.transportPrice;
            panelLeft.querySelector(".transport").innerText = "Transport";
        }  else {
            panelRight.querySelector(".transport.value").innerText = 0;
        }
        var suma = Number(panelRight.querySelector(".title.value").innerText) +
            Number(panelRight.querySelector(".color.value").innerText) +
            Number(panelRight.querySelector(".pattern.value").innerText) +
            Number(panelRight.querySelector(".transport.value").innerText);

        document.querySelector(".summary_panel .sum strong").innerText = suma;

    });

    for (var i=0; i < listPanel.length; i++) {
        for (var j=0; j < listPanel[i].children.length; j++) {
            listPanel[i].children[j].addEventListener("click", function () {
                if (this.innerText == "Clair") {
                    panelLeft.querySelector(".title").innerText = "chair " + this.innerText;
                    panelRight.querySelector(".title.value").innerText = 250;
                } else if (this.innerText == "Margarita") {
                    panelLeft.querySelector(".title").innerText = "chair " + this.innerText;
                    panelRight.querySelector(".title.value").innerText = 200;
                } else if (this.innerText == "Selena") {
                    panelLeft.querySelector(".title").innerText = "chair " + this.innerText;
                    panelRight.querySelector(".title.value").innerText = 150;
                }

                if (this.innerText == "Czerwony") {
                    panelLeft.querySelector(".color").innerText = this.innerText;
                    panelRight.querySelector(".color.value").innerText = 10;
                } else if (this.innerText == "Czarny") {
                    panelLeft.querySelector(".color").innerText = this.innerText;
                    panelRight.querySelector(".color.value").innerText = 0;
                } else if (this.innerText == "Pomarańczowy") {
                    panelLeft.querySelector(".color").innerText = this.innerText;
                    panelRight.querySelector(".color.value").innerText = 20;
                }

                if (this.innerText == "Tkanina") {
                    panelLeft.querySelector(".pattern").innerText = this.innerText;
                    panelRight.querySelector(".pattern.value").innerText = 0;
                } else if (this.innerText == "Skóra") {
                    panelLeft.querySelector(".pattern").innerText = this.innerText;
                    panelRight.querySelector(".pattern.value").innerText = 50;
                }

                var suma = Number(panelRight.querySelector(".title.value").innerText) +
                    Number(panelRight.querySelector(".color.value").innerText) +
                    Number(panelRight.querySelector(".pattern.value").innerText) +
                    Number(panelRight.querySelector(".transport.value").innerText);
                document.querySelector(".summary_panel .sum strong").innerText = suma;
            });
        }
    }
    
});
