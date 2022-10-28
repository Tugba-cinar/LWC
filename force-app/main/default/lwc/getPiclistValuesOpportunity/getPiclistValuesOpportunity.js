import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';

export default class GetPicklistValulesOpportunity extends LightningElement {

    opportunityRtId;
    stageNameOptions = [];
    selectedStageName;

    @wire(getObjectInfo, {objectApiName: OPPORTUNITY_OBJECT})
    opportunityInfoHandler({data, error}) {
        if(data) {
            this.opportunityRtId = data.defaultRecordTypeId;
        }
    }

    @wire(getPicklistValues, {fieldApiName:STAGENAME_FIELD , recordTypeId: '$opportunityRtId'})
    picklistHandler({data, error}) {
        if(data) {
            console.log(data);
            this.stageNameOptions = this.picklistGenerator(data);
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
    changeHandler(event){
        this.selectedStageName = event.target.value;
    }
}