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
//adding Contacts
let contact3 =new Contact("Rahul","Sharma","naimnagar","bhopal","madhyapradesh","654321","6756874593","rahulsharma@gmail.com");
let contact4 = new Contact("Aarush","Burra","gopalpur","hanamkonda","warangal","657483","9876786547","aarushburra@gmail.com");
addressBook.push(contact3)
addressBook.push(contact4);
console.log(addressBook);
//8 serach by city or state
function searchByCity(addressBook, city) {
    return addressBook.filter((contact) => contact.city == city);
  }
  
  function searchByState(addressBook, state) {
    return addressBook.filter((contact) => contact.state == state);
  }
  console.log("UC8: Searching By City And State")
  console.log(searchByCity(addressBook, "bhopal"));
  console.log(searchByState(addressBook,"warangal"));
  //UC9 View By City or State
  function viewByCity(addressBook) {
    let contactsByCity = new Map();
    addressBook.filter((contact) =>
      contactsByCity.set(contact.city, searchByCity(addressBook, contact.city))
    );
    return contactsByCity;
  }
  function viewByState(addressBook) {
    let contactsByState = new Map();
    addressBook.filter((contact) =>
      contactsByState.set(
        contact.state,
        searchByState(addressBook, contact.state)
      )
    );
    return contactsByState;
  }
  console.log("UC9:View Address Book Of Particular City Or State Person ")
  console.log(viewByCity(addressBook));
  console.log(viewByState(addressBook));
//UC10 Count By City or State
console.log("UC10 :Count by City or State")
  let countByCity = new Map();
viewByCity(addressBook).forEach((value, key) =>countByCity.set(key, value.length));
console.log(countByCity);

let countByState = new Map();
viewByState(addressBook).forEach((value, key) =>countByState.set(key, value.length));
console.log(countByState);
  