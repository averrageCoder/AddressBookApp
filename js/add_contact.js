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

    const zip = document.querySelector('#zip');
    zip.addEventListener('input', validateZip);

    object = document.querySelectorAll(".homepage_href")
    for(var obj of object) {
        obj.href = site_properties.homepage;
    }

    checkForUpdate();
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

function validateZip() {
    const zip = document.querySelector('#zip');
    if(zip.value.length == 0) {
        setTextValue('.zip-error','');
        return false;
    }
    try {
        checkZip(zip.value);
        setTextValue('.zip-error','');
        return true;
    }
    catch(e) {
        setTextValue('.zip-error',e);
        return false;
    }
}

function save(event) {
    event.preventDefault();
    event.stopPropagation();
    try {
        setContactObject();
        if(site_properties.useLocalStorage.match("true")) {
            createAndUpdateStorage();
            resetForm();
            window.location.replace(site_properties.homepage);
        }
    }
    catch(e) {
        alert(e);
    }
}

function resetForm() {
    setValue('#name','');
    setValue('#address','');
    setValue('#city','');
    setValue('#state','');
    setValue('#zip','');
    setValue('#phone','');
    setElementValues('error-output','')
    print_state("state");
    print_city("city", 0);
}

function setContactObject() {
    try {
        if(!isUpdate && site_properties.useLocalStorage.match("true")) {
            contactObj.id = createNewContactID();
        }
        if(checkName(getInputValueId('#name'))) contactObj._fullName = getInputValueId('#name');
        if(checkPhone(getInputValueId('#phone'))) contactObj._phoneNumber = getInputValueId('#phone');
        if(checkAddress(getInputValueId('#address'))) contactObj._address = getInputValueId('#address');
        contactObj._city = getInputValueId('#city');
        contactObj._state = getInputValueId('#state');
        if(checkZip(getInputValueId('#zip'))) contactObj._zip = getInputValueId('#zip');
        alert("Saved!");
    }
    catch (e) {
        throw e;
    }
}

function createAndUpdateStorage() {
    let AddressBookList = JSON.parse(localStorage.getItem('AddressBookList'));
    if(AddressBookList != undefined) {
        let addressBookData = AddressBookList
                            .find(contact => contact.id == contactObj.id);
        console.log("addressBookData", addressBookData, " ",contactObj.id)
        if(!addressBookData) AddressBookList.push(contactObj);
        else {
            const index = AddressBookList
                         .map(contact => contact.id)
                         .indexOf(addressBookData.id);
                         AddressBookList.splice(index, 1, contactObj);
        }
    }
    else {
        AddressBookList = [contactObj];
    }
    localStorage.setItem("AddressBookList", JSON.stringify(AddressBookList));
}

function createNewContactID() {
    let contactID = localStorage.getItem('contactID');
    contactID = !contactID ? 1: (parseInt(contactID)+1).toString();
    localStorage.setItem('contactID', contactID);
    return contactID;
}

function checkForUpdate() {
    contactObj = new AddressBook();
    const addressBookJSON = localStorage.getItem('editContact');
    isUpdate = addressBookJSON ? true:false;
    if(!isUpdate) return;
    contactObj = JSON.parse(addressBookJSON);
    setForm();
}

function setForm() {
    setValue('#name',contactObj._fullName);
    setValue('#address',contactObj._address);
    setValue('#zip',contactObj._zip);
    setValue('#phone',contactObj._phoneNumber);
    setValue('#state',contactObj._state);
    document.querySelector('#state').onchange();
    setValue('#city',contactObj._city);
}