const rating = document.querySelectorAll('.circle_overlay');
const button = document.querySelector('.button');
const pages = document.querySelectorAll('.box_container');
const rateOutput = document.querySelector('.ratingResult');

let rateClicked = false;

//loop through the query ALL selector
for (const rate of rating) {
    //Add a style class to the clicked element
    rate.addEventListener("click", function() {
        if (rateClicked === false) {
            rate.classList.add("rating_clicked");
            rateClicked = true;
        //Make sure that only one element can be selected at a time
        } else {
            for (negRate of rating) {
            negRate.classList.remove("rating_clicked");
            rate.classList.add("rating_clicked");
            }
        }
        //Display the clicked value on the Thank You page
        rateOutput.innerHTML = rate.innerHTML;
    })
};

button.addEventListener("click", function() {
    if (rateClicked === true) {
        //Hide the main page and show the thank you page
        for (const page of pages) {
            if (page.classList.contains("hidden")) {
                page.classList.remove("hidden");
            } else {
                page.classList.add("hidden");
            }
        }
    } 
});

