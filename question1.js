function word_vowel(phrase){
    let word = 0;
    let vowel = 0;
    for (i=0; i<phrase.length;i++){
        if (phrase[i] == " "||phrase[i] == "."){
            word ++;
        }else if(phrase[i]== "a" ||phrase[i]== "i" ||phrase[i]== "o" ||phrase[i]== "u" ||phrase[i]== "e" ) {
            vowel++;
        }
    }
    return console.log("number of words",word,"number of vowels",vowel);
}
word_vowel("hello world.");