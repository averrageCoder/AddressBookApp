class AddressBook {
    id;

    get fullName() {return this._fullName};
    set fullName(fullName) {
        let nameRegex = RegExp('^[A-Z]{1}[A-Za-z\\s]{2,}$');
        if(!nameRegex.test(fullName)) {
            throw 'Name is incorrect';
        }
        this._fullName = fullName;
    }

    get phoneNumber() {return this._phoneNumber};
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp('^([\\+]?\\d{2})?[\\s]?\\d{10}$');
        if(!phoneRegex.test(phoneNumber)) {
            throw 'Phone is incorrect';
        }
        this._phoneNumber = phoneNumber;
    }

    get address() {return this._address};
    set address(address) {
        let addressRegex = RegExp('^(\\b[\\w]{3,}\\s*)+$');
        if(!addressRegex.test(address)) {
            throw 'Address is incorrect';
        }
        this._address = address;
    }

    get city() {return this._city};
    set city(city) {
        this._city = city;
    }

    get state() {return this._state};
    set state(state) {
        this._state = state;
    }

    get zip() {return this._zip};
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$')
        if(!zipRegex.test(zip)) {
            throw 'Zip is incorrect';
        }
        this._zip = zip;
    }

    toString() {
        return "id= "+this.id+", fullName= "+this.fullName+", address= "+this.address
                +", city= "+this.city+", state= "+this.state
                +", zip= "+this.zip+", phoneNmber= "+this.phoneNumber;
    }
}