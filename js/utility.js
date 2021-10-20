function checkName(name) {
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z\\s]{2,}$');
    if(!nameRegex.test(name)) {
        throw 'Name is incorrect';
    }
    else return true;
}

function checkPhone(phone) {
    let phoneRegex = RegExp('^([\\+]?\\d{2})?[\\s]?\\d{10}$');
    if(!phoneRegex.test(phone)) {
        throw 'Phone is incorrect';
    }
    else return true;
}

function checkAddress(address) {
    let addressRegex = RegExp('^(\\b[\\w]{3,}\\s*)+$');
    if(!addressRegex.test(address)) {
        throw 'Address is incorrect';
    }
    else return true;
}

function checkZip(zip) {
    let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$')
    if(!zipRegex.test(zip)) {
        throw 'Zip is incorrect';
    }
    else return true;
}

const setTextValue = (property, value) => {
    const text_error = document.querySelector(property);
    text_error.textContent = value;
}

function getInputValueId(id) {
    return document.querySelector(id).value;
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const setElementValues = (cls, value) => {
    const object = document.getElementsByTagName(cls);
    for(var obj of object) {
        obj.innerHTML = value;
    }
}