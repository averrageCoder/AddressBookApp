let isUpdate = false;
let contactObj = {};

window.addEventListener('DOMContentLoaded',(event) => {

    print_state("state");
    const name = document.querySelector('#name');
    name.addEventListener('input', validateName);

    const phone = document.querySelector('#phone');
    phone.addEventListener('input', validatePhone);

    const address = document.querySelector('#address');
    address.addEventListener('input', validateAddress);

    object = document.querySelectorAll(".homepage_href")
    for(var obj of object) {
        obj.href = site_properties.homepage;
    }
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
        return false;
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
        return false;
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
        return false;
    }
}

function save(event) {
    event.preventDefault();
    event.stopPropagation();
    try {
        setContactObject();
        // if(site_properties.useLocalStorage.match("true")) {
        //     createAndUpdateStorage();
        //     resetForm();
        //     window.location.replace(site_properties.homepage);
        // }
    }
    catch(e) {
        alert(e);
    }
}

function resetForm() {

}

function setContactObject() {
    contactObj = new Contact();
    try {
        if(!isUpdate && site_properties.useLocalStorage.match("true")) {
            contactObj.id = createNewContactID();
        }
        if(checkName(getInputValueId('#name'))) contactObj._fullName = getInputValueId('#name');
        if(checkPhone(getInputValueId('#phone'))) contactObj._phoneNumber = getInputValueId('#phone');
        if(checkAddress(getInputValueId('#address'))) contactObj._address = getInputValueId('#address');
        contactObj._city = getInputValueId('#city');
        contactObj._state = getInputValueId('#state');
        contactObj._zip = getInputValueId('#zip');
        alert(contactObj);
    }
    catch (e) {
        alert(e);
    }
}

function createNewContactID() {
    let contactID = localStorage.getItem('contactID');
    contactID = !contactID ? 1: (parseInt(contactID)+1).toString();
    localStorage.setItem('contactID', contactID);
    return contactID;
}