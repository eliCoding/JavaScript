// JavaScript source code  Recipe’s ingredients and instructions
// Author:Elmira amanollahi
//Date:December 20, 2016
function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
}
$("h3").click(display);

