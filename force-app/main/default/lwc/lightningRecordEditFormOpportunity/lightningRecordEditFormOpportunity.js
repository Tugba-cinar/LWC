/*Build a lightning record edit form for creating/updating an opportunity record. And the form should contain the following fields -
Opportunity Name
StageName
Type*/
import {api,LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import OPPNAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import ACCOUNT_FIELD from '@salesforce/schema/Opportunity.AccountId';
import CLOSE_FIELD from '@salesforce/schema/Opportunity.CloseDate';


export default class LightningRecordEditFormContact extends LightningElement {
    @api recordId;
    //recordId = "0068Z00001XgH3oQAF";
    objectName = OPPORTUNITY_OBJECT;

    fields={
        opportunityname:OPPNAME_FIELD,
        stagename: STAGE_FIELD,
        type: TYPE_FIELD,
        amount:AMOUNT_FIELD,
        accountname:ACCOUNT_FIELD,
        closedate: CLOSE_FIELD 
 
        
    };
       successHandler(){
        const successToast = new ShowToastEvent({
            title:"Success",
            message:"OPP has been saved successfully!",
            variant:"Success"
        });
        this.dispatchEvent(successToast);
       }


}