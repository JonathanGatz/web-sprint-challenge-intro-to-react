// Write your Character component here

export function getCharacters() {
    axios.get('https://swapi.dev/api/people/1/').then(function(response) {
        console.log(response)
    })
}


