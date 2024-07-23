const url = "https://api.quotable.io/random";

let quote = document.getElementById("quote");
let btn = document.getElementById("btn");
let author = document.getElementById("author");

let getquote = ()=>{
    fetch(url)
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        // console.log(data.content);
        // console.log(data.author);
        quote.innerText = data.content;
        author.innerText = `" ${data.author} "`;
    })
}

window.addEventListener("load",getquote);
btn.addEventListener("click", getquote); 