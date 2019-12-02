function ready() {

    let el = document.createElement('p');
 
    console.log("Page Ready");
    button.onclick = function() {
        for (i = 0; i < 1000; i++) {
        var i;
        }
        for (i = 10000; i >= 0; i = i - 1) {
            document.write("Spam\n");
        }
    }
}

document.addEventListener("DOMContentLoaded", ready);