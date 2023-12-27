const ensemble1 = [3, 1, 7, 9];
const ensemble2 = [2, 4, 1, 9, 3];
function ensemble(ensemble1,ensemble2){
    let a = 0;
    let sum = 0;
    for(let i=0 ; i<ensemble1.length; i++){
        for(let j=0 ; j<ensemble2.length; j++){
        if (ensemble1[i] != ensemble2[j]){
            a = ensemble1[i];
        }else{
            a = 0;
            break;
        }
    }
    sum  = sum + a;
}
a = 0;
for(let i=0 ; i<ensemble2.length; i++){
        for(let j=0 ; j<ensemble1.length; j++){
        if (ensemble2[i] != ensemble1[j]){
            a = ensemble2[i];
        }else{
            a = 0;
            break;
        }
    }
    sum  = sum + a;
}
return console.log("resultat",sum);
}
ensemble(ensemble1,ensemble2);
