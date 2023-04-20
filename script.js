window.onload = function Removes() {
    document.querySelector(".blog-sidebar div:last-child li:nth-child(2)").remove();
    document.querySelector(".my-3").remove();
    // document.querySelectorAll(".col-md-8 .blog-post .blog-post-meta a").mouseover(window.alert("Marco")); 
}

let linkOff = document.getElementsByClassName("stretched-link");

for (let deleteItem of linkOff) {
    deleteItem.addEventListener("click" , (event) => {
        event.target.parentNode.parentNode.parentNode.remove();
    })
}

let myAuthor = document.querySelectorAll(".blog-post-meta a")

for (let alertAuthor of myAuthor) {
    alertAuthor.addEventListener("mouseover" , (event) => { //Evento & Funzione con addEventListener
        alert(event.target.innerText);
    }) 
}