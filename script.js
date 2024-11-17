
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url ="https://api.quotable.io/random";



async function getquote(url){

    const response = await fetch(url);
    var data = await response.json();
    quote.className="new";
    quote.innerHTML = data.content;
    setTimeout(
        function(){
            quote.className="";
        },500
    )
    author.innerHTML = data.author;
    console.log(data)
}
getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML +"--- by "+author.innerHTML, "tweet window", "width=600, height=300");
}

