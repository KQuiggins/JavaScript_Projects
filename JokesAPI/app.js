document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://v2.jokeapi.dev/joke/Any?amount=${number}`, true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            console.log(response);
            let output = '';

            if(response.amount > 0){
                response.jokes.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;
                });
            } else {
                output += '<li>Oops! Something went wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }

        
    }

    xhr.send();

    e.preventDefault();
    
}