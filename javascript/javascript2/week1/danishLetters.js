const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";

function countDanishLetters(word){
    let result = {total:0}
    const lowerWord = word.toLowerCase()
    for(let i =0 ; i<lowerWord.length; i++){
        if(lowerWord[i] == 'æ'){
            if(result.æ === undefined){
                result.æ = 0
            }
            result.total += 1
            result.æ += 1
        }
        else if(lowerWord[i] == 'ø'){
            if(result.ø === undefined){
                result.ø = 0
            }
            result.total += 1
            result.ø += 1
        }
        else if(lowerWord[i] == 'å'){
            if(result.å === undefined){
                result.å = 0
            }
            result.total += 1
            result.å += 1
        }
    }
    return result
}

console.log(countDanishLetters(danishString))
console.log(countDanishLetters(danishString2))
