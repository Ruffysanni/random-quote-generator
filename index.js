// const api_url = "https://api.quotable.io/random";
const api_url = "https://api.quotable.io/random?limit=3";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const newTweet = document.getElementById("tweet");

//fetching data from the quote api
async function getQuotes(url){
    const response = await fetch(url);
    var data = await response.json();
    
    //getting the quote element
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    console.log(data)
}
//Create new quotes
newQuote.addEventListener("click", function(){
    getQuotes(api_url)
});

//Postiong the quote on twitter...
newTweet.addEventListener("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " --- by " + author.innerHTML, "Tweet window", "width=600px, height=300px")
})
