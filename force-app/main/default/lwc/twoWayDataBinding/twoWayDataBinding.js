import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
fullname = "Tugba";
title = "Salesforce Developer";
handleChange(event){//event = onkeyup={handleChange}
    this.title = event.target.value;

}
}