function doCalc(){
    const number = parseInt(document.querySelector('#numberIn').value)
    const outNum = number * number
    document.querySelector('#numSq').innerHTML =  outNum
}

document.querySelector('#calcButton').addEventListener('click', doCalc)