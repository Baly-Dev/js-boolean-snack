/* 
 *  SNACK 2 - advancedCalculus()
 *  Chiedere all'utente un numero e stampare in pagina la tabellina 
 *  del 3 fino al multiplo scelto dall'utente
*/

let userNumber;

// first bug
while (!(userNumber % 3 == 0)){
    userNumber = parseInt(prompt('Inserisci un numero'));
    console.log(userNumber)
}

const mainList = document.getElementById('main-list');

for (let i = 1; i <= userNumber; i++) {
    const listItem = document.createElement('li');

    // second bug
    listItem.innerHTML = '3 * ' + i + ' = ' +  i * 3;;
    mainList.append(listItem);    
}