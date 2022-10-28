import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account.Industry';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';


export default class GetIndustryPicklists extends LightningElement {
    accRtId;
    selectedIndustry
    industryOptions = [];
    
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfoHandler({data, error}) {
        if(data){
            this.accRtId = data.defaultRecordTypeId;
        }
        if(error) {
            console.error(error);
        }
    }
    @wire(getPicklistValues, {fieldApiName:INDUSTRY_FIELD, recordTypeId: '$accRtId'})
    picklistHandler({data, error}) {
        if(data) {
            console.log(data);
            this.industryOptions = this.picklistGenerator(data);
        }
        if(error){
            console.error(error);
        }
    }

picklistGenerator(data) {
    return data.values.map(item => ({
        label: item.label,
        value: item.value
    }));
}
industryChangeHandler(event){
    this.selectedIndustry = event.target.value;
}
}
