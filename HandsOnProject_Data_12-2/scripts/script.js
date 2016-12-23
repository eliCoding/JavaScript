// JavaScript source code 
// script date : december 20,2016 
//Author: Elmira Amanollahi
function convert() {
    var lb = $("#pValue").val();
    
    var kg = Math.round(lb / 2.2);
    
    $("#kValue").html(kg);
}
$("#convertButton").click(convert);
$("#pValue").val("");
$("#kValue").html("");