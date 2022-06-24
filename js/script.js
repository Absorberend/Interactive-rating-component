const rating = document.querySelectorAll('.circle_overlay');
const button = document.querySelector('.button');
const pages = document.querySelectorAll('.box_container');
const rateOutput = document.querySelector('.ratingResult');


let rateClicked = false;


for (const rate of rating) {
    rate.addEventListener("click", function() {
        if (rateClicked === false) {
            rate.classList.add("rating_clicked");
            rateClicked = true;
        } else {
            for (negRate of rating) {
            negRate.classList.remove("rating_clicked");
            rate.classList.add("rating_clicked");
            }
        }
        rateOutput.innerHTML = rate.innerHTML;
    })
};

button.addEventListener("click", function() {
    if (rateClicked === true) {
        for (const page of pages) {
            if (page.classList.contains("hidden")) {
                page.classList.remove("hidden");
            } else {
                page.classList.add("hidden");
            }
        }
    } 
});

