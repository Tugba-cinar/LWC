//Requirement;How do we get the account object info
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetAccountObjInfo extends LightningElement {
// we should write which adapter we want to use.in this case we want to use getobjectInfo
accDefRecordTypeId;
@wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
accountInfoHandler({data, error}) {
    if(data){
        console.log(data);
        this.accDefRecordTypeId=data.defaultRecordTypeId;
    }
    if(error){
        console.error(error);
     
    }
   
}


}