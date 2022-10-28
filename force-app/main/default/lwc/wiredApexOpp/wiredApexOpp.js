import { LightningElement, wire } from 'lwc';

import { getObjectInfo, getPicklistValue } from 'lightning/uiObjectInfoApi';
import getOpp from '@salesforce/apex/OppController.getOpp';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';


const COLUMNS=[

    {label: "Opportunity Name", fieldName: "Name", type:"text"},
    {label: "Type", fieldName: "Type", type:"text"},
    {label: "Amount", fieldName: "StageName", type:"currency"},
    {label: "CloseDate", fieldName: "CloseDate", type:"date"}, 
    {label: "StageName", fieldName: "StageName", type:"text"}, 
]

export default class WiredApexOpp extends LightningElement {
    oppRecordId;
    stageOptions=[];
    selectedStage;
    opps;
    columns=COLUMNS;

    @wire(getObjectInfo, {objectApiName:OPPORTUNITY_OBJECT})

   objectInfoHandler({data, error}){
        if(data){
            this.oppRecordId = data.defaultRecordTypeId;
        }
      
    }
    @wire (getPicklistValue,{fieldApiName:STAGE_FIELD,recordTypeId:oppRecordId})
    stageNameHandler({data, error}){
        this.stageOptions=this.picklistGenerator(data);
    }
    picklistGenerator(data){
        return data.values.map(item =>({
            label:item.label,
            value:item.value
        }));
    }
    changeHandler(event){
        this.selectStage=event.target.value;
        getOpp({stage:this.selectStage})
          .then(result=>{
            this.opps=result;
          })
          .catch(error=>{
            console.log(error);
          })
    }
}                                                            
