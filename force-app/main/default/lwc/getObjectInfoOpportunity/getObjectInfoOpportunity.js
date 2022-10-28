import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';

import OPPORTUNITY_OBJECT from '@salesforce/schema/opportunity';

export default class GetObjectInfoContact extends LightningElement {
    defaultRtId;
    supplierRtId;

    @wire(getObjectInfo,{objectApiName:OPPORTUNITY_OBJECT})
    contactInfoHandler({data, error}){
        if(data){
            console.log(data);
            this.defaultRtId =data.defaultRecordTypeId;
            const rtids = data.recordTypesInfos;
            this.refinedRtId = Object.keys(rtids).find(rtid => rtids[rtid].name ==="Refined Petrolium");
        }
        if(error){
            console.log(error);
        }
    }
}