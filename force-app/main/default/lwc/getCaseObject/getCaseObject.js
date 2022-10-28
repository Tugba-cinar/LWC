import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire } from 'lwc';



import CASEN_FIELD from '@salesforce/schema/Case.CaseNumber';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import STATUS_FIELD from '@salesforce/schema/Case.Status';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';

const FIELDS = [CASEN_FIELD,SUBJECT_FIELD, STATUS_FIELD,PRIORITY_FIELD ];
export default class GetCaseRecord extends LightningElement {


recordId = '0038Z00002tQZDXQA4';
case;
    @wire(getRecord, {recordId: '$recordId', fields:FIELDS })
    caseInfoHandler({data, error}) {
        if(data) {
            console.log(data);
            this.case = data;
        }
        if(error){
            console.error(error);
        }

    }
}