window.addEventListener('DOMContentLoaded',(event) => {

    print_state("sts");
    const name = document.querySelector('#name');
    name.addEventListener('input', validateName);

    const phone = document.querySelector('#phone');
    phone.addEventListener('input', validatePhone);

    const address = document.querySelector('#address');
    address.addEventListener('input', validateAddress);

});

function validateName() {
    const name = document.querySelector('#name');
    if(name.value.length == 0) {
        setTextValue('.name-error','');
        return false;
    }
    try {
        checkName(name.value);
        setTextValue('.name-error','');
        return true;
    }
    catch(e) {
        setTextValue('.name-error',e);
        throw e;
    }
}

function validatePhone() {
    const phone = document.querySelector('#phone');
    if(phone.value.length == 0) {
        setTextValue('.phone-error','');
        return false;
    }
    try {
        checkPhone(phone.value);
        setTextValue('.phone-error','');
        return true;
    }
    catch(e) {
        setTextValue('.phone-error',e);
    }
}

function validateAddress() {
    const address = document.querySelector('#address');
    if(address.value.length == 0) {
        setTextValue('.address-error','');
        return false;
    }
    try {
        checkAddress(address.value);
        setTextValue('.address-error','');
        return true;
    }
    catch(e) {
        setTextValue('.address-error',e);
    }
}