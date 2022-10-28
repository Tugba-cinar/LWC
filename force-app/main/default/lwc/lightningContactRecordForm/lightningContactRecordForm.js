import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import FN_FIELD from '@salesforce/schema/Contact.FirstName';
import LN_FIELD from '@salesforce/schema/Contact.LastName';
import ACCOUNTN_FIELD from '@salesforce/schema/Contact.Account';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import DEPARTMENT_FIELD from '@salesforce/schema/Contact.Department';
import BIRTHDAY_FIELD from '@salesforce/schema/Contact.Birthdate';
import REPORTSTO_FIELD from '@salesforce/schema/Contact.ReportsTo';
import LEADSOURCE_FIELD from '@salesforce/schema/Contact.LeadSource';
import MOBILE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import OTHERPHONE_FIELD from '@salesforce/schema/Contact.OtherPhone';
import FAX_FIELD from '@salesforce/schema/Contact.Fax';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ASISTANT_FIELD from '@salesforce/schema/Contact.AssistantName';
import ASISTANTP_FIELD from '@salesforce/schema/Contact.AssistantPhone';

export default class LightningRecordFormAccount extends LightningElement {
   
    objectName = CONTACT_OBJECT;
    fields = [NAME_FIELD,ACCOUNTN_FIELD,FN_FIELD, LN_FIELD, TITLE_FIELD, DEPARTMENT_FIELD, BIRTHDAY_FIELD,REPORTSTO_FIELD,LEADSOURCE_FIELD,MOBILE_FIELD,OTHERPHONE_FIELD,FAX_FIELD,EMAIL_FIELD,ASISTANT_FIELD,ASISTANTP_FIELD];

    successHandler(){
        const successEvent = new ShowToastEvent ({
            title:"SUCCESS",
            message:"The CONTACT record has been saved successfully!",
            variant: "success",
        });
        this.dispatchEvent(successEvent);
    }
    errorHandler(){
        const errorEvent= NEW ShowToastEvent({
            title:"Error",
            message:"!",
            variant: "Error" 

        });
        this.dispatchEvent(errorEvent);
    }
}