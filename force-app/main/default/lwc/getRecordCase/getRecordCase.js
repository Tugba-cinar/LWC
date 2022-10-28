import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';

import ACCOUNTN_FIELD from '@salesforce/schema/Case.Account.Name';
import SUBJECT_FIELD from '@salesforce/schema/Case.Status';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';
import REASON_FIELD from '@salesforce/schema/Case.Reason';
import TYPE_FIELD from '@salesforce/schema/Case.Type';
import STATUS_FIELD from '@salesforce/schema/Case.Status';

const FIELDS = [ACCOUNTN_FIELD, SUBJECT_FIELD, PRIORITY_FIELD,REASON_FIELD, TYPE_FIELD, STATUS_FIELD];

export default class GetRecordCase extends LightningElement {
    recordId = '5008Z00001wfc6CQAQ';
    accountName;
    subject;
    priority;
    reason;
    type;
    status;

    @wire(getRecord, {recordId: '$recordId', fields: FIELDS})
    caseInfoHandler({data, error}){
        if(data){
            console.log(data);
            this.accountName =getFieldValue(data, ACCOUNTN_FIELD);
            this.subject= getFieldValue(data, SUBJECT_FIELD);
            this.priority = getFieldValue(data,PRIORITY_FIELD);
            this.reason = getFieldValue(data,REASON_FIELD);
            this.type = getFieldValue(data,TYPE_FIELD);
            this.status = getFieldValue(data, STATUS_FIELD);
        }
        if(error){
            console.error(error);
        }
    }
}