import { LightningElement, wire } from 'lwc';
import getAccsByType from '@salesforce/apex/AccountController.getAccsByType';
export default class WiredApexWithParameterAccounts extends LightningElement {
    accountType = "Prospect";
    accounts;
    @wire(getAccsByType, {type: '$accountType'})
    accHandler({data, error}){
        if(data){
            this.accounts = data;
        }
        if(error){
            console.error(error);
        }
    }
}