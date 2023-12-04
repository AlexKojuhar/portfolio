function createStars(count) {
    console.log('here');
    for (let i = 0; i < count; i++) {
        drawStars();
    }
}

function drawStars() {
    const tmpStar = document.createElement("figure");
    const size = Math.ceil(getRandomArbitrary(1, 3))
    console.log(size);
    tmpStar.className = "star";
    tmpStar.style.top = 100 * Math.random() + "%";
    tmpStar.style.left = 100 * Math.random() + "%";
    tmpStar.style.width = size + 'px'
    tmpStar.style.height = size + 'px'
    document.getElementById("stars").appendChild(tmpStar);
}

function selectStars() {
    stars = document.querySelectorAll(".star");
}

function animateStars() {
    Array.prototype.forEach.call(stars, function (el, i) {
        TweenMax.to(el, Math.random() * 0.5 + 0.3, { opacity: Math.random(), onComplete: animateStars });
    });
}



createStars(250);
selectStars();
animateStars();


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}