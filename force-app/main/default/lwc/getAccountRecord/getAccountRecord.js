import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';



import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUALR_FIELD from '@salesforce/schema/Account.AnnualRevenue';

const FIELDS = [NAME_FIELD,TYPE_FIELD, INDUSTRY_FIELD,ANNUALR_FIELD ];
export default class GetAccountRecord extends LightningElement {


recordId = '0018Z00002fOVwdQAG';
account;
    @wire(getRecord, {recordId: '$recordId', fields:FIELDS })
    accountInfoHandler({data, error}) {
        if(data) {
            console.log(data);
            this.account = data;
        }
        if(error){
            console.error(error);
        }

    }
}