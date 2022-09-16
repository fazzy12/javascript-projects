const qouteBox = document.getElementById('quote-paragraph');
const author = document.getElementById('author');
const button = document.querySelector('button');




let url;
async function fetchQuotes() {
        try {
            url = 'https://type.fit/api/quotes';
            let response = await fetch(url);
            let data = await response.json();
            
            const randomiseQuote = Math.floor(Math.random() * data.length);
            
            qouteBox.innerHTML = data[randomiseQuote].text
            
            if (data[randomiseQuote].author === null){
                author.textContent = "Author: Anonymous"
            }else{
                author.textContent = `Author: ${data[randomiseQuote].author}`
            }
        }catch (err) {
            qouteBox.innerHTML = err.message;
        }
    } 
    
    button.addEventListener('click', fetchQuotes);
