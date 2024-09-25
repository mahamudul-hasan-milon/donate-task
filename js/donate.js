// noakhali donate
document.getElementById('donate-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addDonate = getInputFieldValueById('input-donate');
    const balance = getTextFieldValueById('account-balance');
    const currentBalance = getTextFieldValueById('current-balance');

    if (isNaN(addDonate)){
        alert ('Failed to Donate, Please try again!!');
        return;
    }

    if (addDonate < 0 ){
        alert ('Failed to Donate, Please try again!!');
        return;
    }

    // added to card balance
    const newBalance = balance + addDonate;
    document.getElementById('account-balance').innerText = newBalance;

    // added to current balance
    if(newBalance>currentBalance){
        alert ('Could not donate money. Try again!!');
    }

    const mainBalance = currentBalance - addDonate;
    document.getElementById('current-balance').innerText = mainBalance;


    // added to history
    const p = document.createElement('p');
    p.innerText = `${addDonate} Taka is Donated for Flood Relief in Noakhali, Bangladesh`;

    document.getElementById('history-container').appendChild(p);
    p.style.marginLeft = '30%';

   
});

// feni donate
document.getElementById('donate-btn2').addEventListener('click', function(event){
    event.preventDefault();

    const addDonate2 = getInputFieldValueById('input-donate2');
    const balance2 = getTextFieldValueById('account-balance2');
    const currentBalance2 = getTextFieldValueById('current-balance');

    if (isNaN(addDonate2)){
        alert ('Failed to Donate, Please try again!!');
        return;
    }

    if (addDonate2 < 0 ){
        alert ('Failed to Donate, Please try again!!');
        return;
    }

    // added to card balance
    const newBalance2 = balance2 + addDonate2;
    document.getElementById('account-balance2').innerText = newBalance2;

    // added to current balance
    if(newBalance2>currentBalance2){
        alert ('Could not donate money. Try again!!');
    }

    const mainBalance2 = currentBalance2 - addDonate2;
    document.getElementById('current-balance').innerText = mainBalance2;

// added to history
const p = document.createElement('p');
p.innerText = `${addDonate2} Taka is Donated for Famine-2024 at Feni, Bangladesh`;

document.getElementById('history-container2').appendChild(p);
p.style.marginLeft = '30%';
    


});
// qouta protest
document.getElementById('donate-btn3').addEventListener('click', function(event){
    event.preventDefault();

    const addDonate3 = getInputFieldValueById('input-donate3');
    const balance3 = getTextFieldValueById('account-balance3');
    const currentBalance3 = getTextFieldValueById('current-balance');

    if (isNaN(addDonate3)){
        alert ('Failed to Donate, Please try again!!');
        return;
    }

    if (addDonate3 < 0 ){
        alert ('Failed to Donate, Please try again!!');
        return;
    }

    // added to card balance
    const newBalance3 = balance3 + addDonate3;
    document.getElementById('account-balance3').innerText = newBalance3;

    // added to current balance
    if(newBalance3>currentBalance3){
        alert ('Could not donate money. Try again!!');
    }

    const mainBalance3 = currentBalance3 - addDonate3;
    document.getElementById('current-balance').innerText = mainBalance3;


    // added to history
    const p = document.createElement('p');
    p.innerText = `${addDonate3} Taka is Donated for Injured in the Quota Movement, Bangladesh`;

    document.getElementById('history-container3').appendChild(p);
    p.style.marginLeft = '30%';


});