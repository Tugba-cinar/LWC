import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import OPPORTUNITY_OBJECT from '@Salesforce/schema/Opportunity';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import STAGENAME_FIELD from '@Salesforce/schema/Opportunity.StageName';

import { createRecord } from 'lightning/uiRecordApi';

export default class CreateRecordOpportunity extends LightningElement {
    formdata = {};
    
    opportunityRtId;
    stageOptions = [];
    selectedStageName;

    @wire(getObjectInfo, {objectApiName: OPPORTUNITY_OBJECT})
    opportunityInfoHandler({data, error}) {
        if(data) {
            this.opportunityRtId = data.defaultRecordTypeId;
        }
        // if(error) {
        //     console.log(error);
        // }
    }

    @wire(getPicklistValues, {fieldApiName: STAGENAME_FIELD, recordTypeId: '$opportunityRtId'})
    picklistHandler({data, error}) {
        if(data) {
            console.log(data);
            this.stageOptions = this.picklistGenerator(data);
        }
        if(error) {
            console.error(error);
        }
    }

    picklistGenerator(data) {
        return data.values.map(item => ({
            label: item.label,
            value: item.value
        }));
    }

    changeHandler(event) {
        const {name, value} = event.target;
        this.formdata[name] = value;
        console.log(this.formdata);
    }

    createOpportunity() {
        const recordInput = {
            apiName: OPPORTUNITY_OBJECT.objectApiName,
            fields: this.formdata
        }
        createRecord(recordInput)
            .then(result => {
                console.log(result);
                this.template.querySelector('form.opportunity').reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    successHandler() {
        const successEvent = new ShowToastEvent({
            title: 'Success',
            message: "The Opportunity record has been saved successfully!",
            variant: "Success"

        });
        this.dispatchEvent(successEvent);
    }

    errorHandler() {
        const successEvent = new ShowToastEvent({
            title: 'Error',
            message: "The Opportunity record has not been saved successfully!",
            variant: "Error"

        });
        this.dispatchEvent(successEvent);
    }
}