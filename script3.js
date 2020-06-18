var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("class", "search-input");
input.setAttribute("id", "search");
// button
let button = document.createElement("button");
let buttonText = document.createTextNode("Check Me");
button.setAttribute("class", "search-button");
button.appendChild(buttonText);
// ambil section form
const divCheck = document.querySelector(".search-form");
divCheck.appendChild(input);
divCheck.appendChild(button);

// buat event di button
button.addEventListener("click", myCheckWord);
// regex

function myCheckWord() {
    // ambil value input

    let inputValue = input.value;
    let search = /^Bagaimana cara memulai usaha bisnis$|^Bootcamp impact byte$|^Status covid hari ini$/;
    if (search.test(inputValue)) {
        alert("Yaa benar");
    } else {
        alert("Coba lagi yaa");
    }
    return;
}

//

// ---------------------------
