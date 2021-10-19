class Contact {
    id;

    get fullName() {return this._fullName};
    set fullName(fullName) {
        this._fullName = fullName;
    }

    get phoneNumber() {return this._phoneNumber};
    set phoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
    }

    get address() {return this._address};
    set address(address) {
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
        this._zip = zip;
    }

    toString() {
        return "id= "+this.id+"fullName= "+this.fullName+", address= "+this.address
                +", city= "+this.city+", state= "+this.state
                +", zip= "+this.zip+", phoneNmber= "+this.phoneNumber;
    }
}