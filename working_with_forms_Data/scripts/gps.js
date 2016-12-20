// JavaScript source code

// create function today() that returns the current date
//in the format mm/dd/yyyy

function today() {
    var now = new Date();
    //extract from the now object thed ae m month ,and full year
    var thisDate = now.getDate();
    var thisMonth = now.getMonth() + 1;
    var thisYear = now.getFullYear();

    var currentDate = thisMonth + "/" + thisDate + "/" + thisYear;
    return currentDate;
}