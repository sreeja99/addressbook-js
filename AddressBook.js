class Contact{
    //constructors
    constructor(...parameters){
        this.firstName = parameters[0]
        this.lastName = parameters[1]
        this.address = parameters[2]
        this.city = parameters[3]
        this.state = parameters[4]
        this.zip = parameters[5]
        this.phoneNumber = parameters[6]
        this.emailId = parameters[7]
    }
    //getters and setters
    get firstName(){return this._firstName;}
    get lastName(){return this._lastName;}
    get address(){return this._address;}
    get city(){return this._city;}
    get state(){return this._state;}
    get zip(){return this._zip;}
    get phoneNumber(){return this._phoneNumber;}
    get emailId(){return this._emailId;}
    set firstName(firstName){
        let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw "incorrect first name"
    }
    set lastName(lastName){
        let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$")
        if(lastNameRegex.test(lastName))
        this._lastName = lastName;
        else throw "incorrect last name"
    }
    set address(address){
        let addressRegex = RegExp("^[A-Za-z0-9/,]{4,}$")
        if(addressRegex.test(address))
        this._address = address;
        else throw "incorrect address"
    }
    set city(city){
        let cityRegex = RegExp("^[a-zA-Z]{4,}$")
        if(cityRegex.test(city))
        this._city = city
        else throw "incorrect city"
    }
    set state(state){
        let stateRegex = RegExp("^[a-zA-Z]{4,}$")
        if(stateRegex.test(state))
        this._state = state;
        else throw "incorrect state"
    }
    set zip(zip){
        let zipRegex = RegExp("^[1-9]{1}[0-9]{5}$")
        if(zipRegex.test(zip))
        this._zip = zip
        else throw "incorrect zip"
    }
    set phoneNumber(phoneNumber){
        let phoneNumberRegex = RegExp("^[1-9]{1}[0-9]{9}$")
        if(phoneNumberRegex.test(phoneNumber))
        this._phoneNumber = phoneNumber
        else throw "incorrect phone Number"
    }
    set emailId(emailId){
        let emailIdRegex = RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$")
        if(emailIdRegex.test(emailId))
        this._emailId = emailId
        else throw "incorrect email Id"
    }
}
let contact1 =new Contact("Sreeja","Godishala","bankcolony","warangal","telangana","123456","9087654321","srijagodishala@gmail.com");
let contact2 = new Contact("Anjali","Varma","complex","pune","maharastra","908765","2345187645","anjalivarma@gmail.com");
let addressBook = new Array();
addressBook.push(contact1);
addressBook.push(contact2);
console.log(addressBook);
//4 edit contact
addressBook.find((contact)=>contact.firstName =="Anjali").firstName ="Krishna";
console.log("UC4:Edit Contact");
console.log(addressBook);
//5 delete contact
addressBook.pop(addressBook.find((contact)=>contact.firstName =="Krishna"));
console.log("UC5:Del Contact")
console.log(addressBook);
//6 counting number of contacts
function counter(count){return ++count;}
let numOfContacts=addressBook.reduce(counter,0);
console.log("UC6 Count number Of Contacts");
console.log(numOfContacts);


