import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    name; //undefined
    fullname = "Salesforce Developer"; //string
    age = 30; //number
    location = {
        city: "Florida",
        country: "United States",
        postalCode: "255585"
    }; //object
    fruits = ["Banana", "Orange", "Pomogranite", "Pineapple"]; //array

    //write methods
    getLocation() {
        return this.location.city;
    }
}