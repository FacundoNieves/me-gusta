let botonesLike = document.querySelectorAll(".like");

for (let i = 0; i < botonesLike.length; i++) {
    botonesLike[i].addEventListener("click", function () {
        let spanLikes = this.parentElement.querySelector(".num-likes");
        let num = spanLikes.textContent;
        num++;
        spanLikes.textContent = num;
    })
}