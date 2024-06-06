// code for toolbar -----------------------------------------------
const toolbar = document.querySelector("#toolbar");
const size_input_button = document.querySelector("#size_input_button");

let display_sizeInput = false;
size_input_button.addEventListener("click", function () {
    if (display_sizeInput) {
        text_size.style = "display:none;"
        display_sizeInput = false;
    }
    else {
        document.querySelector("#text_size").style = "display:block;";
        display_sizeInput = true;
    }
});

const text_background_color = document.querySelector("#text_background_color");
const background_colord = document.querySelector("#background_choose #color");
background_colord.addEventListener('change', function () {
    text_background_color.style.backgroundColor = background_colord.value;
});

const text_color_choose_button = document.querySelector("#text_color_choose_button");

text_color_choose_button.addEventListener("click", function () {
    text_color.click();
});
text_color.addEventListener("change", () => {
    text_color_choose_button.style.color = text_color.value;
});

function boldText() {
    document.execCommand('bold', false, null);
}

function underlineText() {
    document.execCommand('underline', false, null);
}

function strikethroughText() {
    document.execCommand('strikethrough', false, null);
}

// background_color.addEventListener("click", () => { });

// toolbar.addEventListener("click", function (event) {
//     const buttonId = event.target.id;

//     switch (buttonId) {
//         case "bold":

//             document.execCommand("bold", false, null);
//             break;
//         case "italic":
//             document.execCommand("italic", false, null);
//             break;
//         case "underline":
//             document.execCommand("underline", false, null);
//             break;
//         case "strikethrough":
//             document.execCommand("strikethrough", false, null);
//             break;
//         case "text_color":
//             document.execCommand("ForeColor", false, color);
//             break;
//         case "background_color":
//             break;
//         case "textSize_input_container":
//             alert("enter text size")

//             document.execCommand("FontSize", false, size);
//             break;
//     }
// });
