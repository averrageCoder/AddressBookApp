class Address {
    constructor(...params) {
        this.city = params[0];
        this.state = params[1];
        this.zip = params[2];
    }

    get city() {return this._city};
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$')
        if(cityRegex.test(city)) this._city = city;
        else throw 'city is incorrect';
    }

    get state() {return this._state};
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$')
        if(stateRegex.test(state)) this._state = state;
        else throw 'state is incorrect';
    }

    get zip() {return this._zip};
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$')
        if(zipRegex.test(zip)) this._zip = zip;
        else throw 'zip is incorrect';
    }
}
class Contact {
    get fullName() {return this._fullName};
    set fullName(fullName) {
        let nameRegex = RegExp('^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$"')
        if(nameRegex.test(fullName)) this._fullName = fullName;
        else throw 'fullName is incorrect';
    }

    get phoneNumber() {return this._phoneNumber};
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[0-9]{10}$')
        if(phoneNumberRegex.test(phoneNumber)) this._phoneNumber = phoneNumber;
        else throw 'phoneNumber is incorrect';
    }

    get address() {return this._address};
    set address(address) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$')
        if(cityRegex.test(address)) this._address = address;
        else throw 'address is incorrect';
    }

    get city() {return this._city};
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$')
        if(cityRegex.test(city)) this._city = city;
        else throw 'city is incorrect';
    }

    get state() {return this._state};
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$')
        if(stateRegex.test(state)) this._state = state;
        else throw 'state is incorrect';
    }

    get zip() {return this._zip};
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$')
        if(zipRegex.test(zip)) this._zip = zip;
        else throw 'zip is incorrect';
    }

    toString() {
        return "fullName= "+this.fullName+", address= "+this.address
                +", city= "+this.city+", state= "+this.state
                +", zip= "+this.zip+", phoneNmber= "+this.phoneNumber;
    }
}