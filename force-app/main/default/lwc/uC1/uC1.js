import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
username = "";

handleChange(event){//event = onkeyup={handleChange}
    this.username = event.target.value;
}
get userRole(){
    return [
        {label: "Salesforce Admin", value: "Salesforce Admin"},
        {label: "Salesforce Developer", value: "Salesforce Developer"},
        {label: "Salesforce Architect", value: "Salesforce Architect "}

];
}
}