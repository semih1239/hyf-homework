const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestWord(array){
    let shortWord = array[0]
    for(let i = 0; i<array.length ; i++){
        const currentWord = array[i]
        if (array[i].length < shortWord.length){
            shortWord = currentWord
        }
    }
    return shortWord
}
console.log(shortestWord(danishWords))