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
    set firstName(firstName){this._firstName=firstName;}
    set lastName(lastName){this._lastName=lastName;}
    set address(address){this._address=address;}
    set city(city){this._city=city;}
    set state(state){this._state=state;}
    set zip(zip){this._zip=zip;}
    set phoneNumber(phoneNumber){this._phoneNumber=phoneNumber;}
    set emailId(emailId){this._emailId=emailId;}
}
 let contact =new Contact("sreeja","godishala","hnk","wgl","telangana","12345","9087654321","srijagodishala@gmail.com");
 console.log(contact); 

