import { LightningElement } from 'lwc';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACCOUNTID_FIELD from '@salesforce/schema/Opportunity.AccountId';
import TYPE_FIELD from '@salesforce/schema/Opportunity.Type';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import AMOUNT_FIELD from'@salesforce/schema/Opportunity.Amount';
import LEADSOURCE_FIELD from '@salesforce/schema/Opportunity.LeadSource';


export default class LightningRecordViewFormContact extends LightningElement {
    recordId = "0038Z00002tQZDYQA4";
    objectName = OPPORTUNITY_OBJECT;
    fields = {
    name:Name_field,
    title:Title_field,
    account:Account_Field,
    phone:phone_field,
    email:email_field,
    mobile:mobile_field,
    owner:owner_field
    };
}