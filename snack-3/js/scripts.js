/* 
 *  SNACK 3 - whatAMessExclamationPoint()
 *  Prendere i dati da vari array e creare un solo array di oggetti. 
 *  Dopodichè, mostare gli elementi in pagina
*/
const firstNames = [
    'Adriano',
    'Simone',
    'Jacopo',
    'Alessio'
];
const lastNames = [
    'Grimaldi',
    'Giusti',
    'Damiani',
    'Vietri'
];
const emails = [
    'adriano.grimaldi@boolean.careers',
    'simone.giusti@boolean.careers',
    'jacopo.damiani@boolean.careers',
    'alessio.vietri@boolean.careers'
];
const phoneNumbers = [
    '+39 331 234 56 78',
    '+39 332 345 67 89',
    '+39 333 456 78 90',
    '+39 334 567 89 01'
];
const avatars = [
    'https://cdn-icons-png.flaticon.com/512/236/236831.png',
    'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    'https://cdn-icons-png.flaticon.com/512/145/145843.png',
    'https://cdn-icons-png.flaticon.com/512/3940/3940403.png'
];

let newUser;
const users = [];
const usersContainer = document.getElementById('users');

// first bug
avatars.forEach((e, i) => {
    createUserObject(firstNames[i], lastNames[i], emails[i], phoneNumbers[i], avatars[i]);
    users.push(newUser);
})

console.log(newUser);

// second bug
users.forEach((element, i) => {
    const newUserCard = document.createElement('div');
    newUserCard.innerHTML = `<img src="${element.avatar}">`;
    newUserCard.innerHTML += `<h2>${element.fullName}</h2>`;
    newUserCard.innerHTML += `<h4>${element.email}</h4>`;
    newUserCard.innerHTML += `<h4>${element.phoneNumber}</h4>`;

    usersContainer.append(newUserCard);
});

function createUserObject(firstName, lastName, email, phoneNumber, avatar) {
    // third bug
    newUser = {
        fullName: firstName + ' ' + lastName,
        email: email,
        phoneNumber: phoneNumber,
        avatar: avatar,
    };
}