

const wordInput = document.getElementById('wordInput');
const definitionList = document.getElementById('definitionList');

wordInput.addEventListener('input', fetchDefinitions);

async function fetchDefinitions() {
    const word = wordInput.value.trim();
    if (word === '') {
        definitionList.innerHTML = '';
        return;
    }

    
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

        

  

        definitionList.innerHTML = '';
        data.forEach(entry => {
            
            entry.meanings.forEach(meaning => {
                
                meaning.definitions.forEach(def => {
                   
                    
                definitionList.innerHTML += `<ol> <li><strong>${meaning.partOfSpeech}</strong>: ${def.definition}</li> </ol> <br>`;
            });
                });
            });
        
    } 

    catch(error){

    }
}
