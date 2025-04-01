function frontDoorResponse(line) {
    return line[0];
}

function frontDoorFullWord(line, line2, line3, line4, line5){
    return frontDoorResponse(line) + frontDoorResponse(line2) +
    frontDoorResponse(line3) + frontDoorResponse(line4) + 
    frontDoorResponse(line5);
}

// let fullWord = frontDoorFullWord('Stands so high', 'Huge hooves too', 
// 'Impatiently waits for', 'Reins and harness', 'Eager to leave');

function frontDoorPassword(fullWord) {
    let firstLetter = fullWord[0];
    let restOfWord = fullWord.slice(1, fullWord.length);

    let finalFirstLetter = firstLetter.toUpperCase();
    let finalRestOfWord = restOfWord.toLowerCase();

    let finalWord = finalFirstLetter + finalRestOfWord;
    return finalWord;
}

// TO-DO: Work on ignoring whitespaces
function backDoorResponse(line) {
    let finalWord = line.trim();
    return finalWord[finalWord.length-1];
}

function backDoorPassword(fullWord) {
    let firstLetter = fullWord[0];
    let restOfWord = fullWord.slice(1, fullWord.length);

    let finalFirstLetter = firstLetter.toUpperCase();
    let finalRestOfWord = restOfWord.toLowerCase();

    let finalWord = finalFirstLetter + finalRestOfWord;
    return finalWord + ", please";
}