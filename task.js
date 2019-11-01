document.querySelector('.get-giphy').addEventListener('click', getGiphy);
document.addEventListener('click', getGiphy);

function getGiphy(e) {
    const text = document.querySelector('input');
    const value = text.value
  
      console.log(text);
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=Hso5PlezUyHBPsI7wZ2WEaqLb171zaxc&q=${value}&limit=9&offset=0&rating=G&lang=en/`, true);
    

    xhr.onload = function()
   {console.log(xhr.status);
      if(xhr.status === 200) {console.log(xhr.responseText)
          const response = JSON.parse(xhr.responseText);
        
          let output = '';
           
            response.data.forEach(function(gif){
              output += `<img src ='https://media.giphy.com/media/${gif.id}/source.gif' height=300px width=300px>`;

              console.log(output)
            });
                    
          document.querySelector('.new').innerHTML = output;
      }  
    }


    xhr.send();


     e.preventDefault();
}