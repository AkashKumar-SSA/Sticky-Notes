const shapes_button = document.querySelector("#shapes_button");
const shapes_container = document.querySelector("#shapes_container");
const shapes_container_elements = document.querySelectorAll("#shapes_container > div");

// Click event on shapes tool in the toolbar
let shapes_show_condition = true;
shapes_button.addEventListener("click", () => {
    if (shapes_show_condition) {
        shapes_container.style.display = "flex";
        shapes_show_condition = false;
    } else {
        shapes_container.style.display = "none";
        shapes_show_condition = true;
    }
});
const text_Area = document.querySelector("#text_area");
text_Area.addEventListener("click", () => {
    console.log("text area clicked");
})

// Opening and closing of  rectangle shape
function close_shape_container() {
    shapes_container.style.display = "none";
    shapes_show_condition = true;
}
function rectangle_function() {
    text.style.display = "none";
    close_shape_container();
    const shape_open = document.querySelector("#rectangular_note");
    shape_open.style.display = "block";
    text_Area = shape_open;
}

shapes_container_elements.forEach((elements) => {
    elements.addEventListener("click", () => {
        console.log(elements.id);
        switch (elements.id) {
            case "rectangle_shape":
                rectangle_function();
                break;
            case "heart_shape":
                break;
            case "circle_shape":
                break;
            case "star_shape":
                break;
            case "leaf_shape":
                break;
        }
    })
})

// Click event on the shapes(shapes container)
// shapes_container.addEventListener("click", (event) => {
//     const shapeId = event.target.id;
//     // console.log(shapeId);

//     switch (shapeId) {
//         case "rectangle_shape":
//             // alert("Rectangle shape clicked");
//             rectangle_function();
//             break;

//         case "heart_shape":
//             alert("heart shape clicked");
//             break;

//         case "circle_shape":
//             alert("circle_shape shape clicked");
//             break;

//         case "star_shape":
//             alert("star shape clicked");
//             break;
//     }
// });