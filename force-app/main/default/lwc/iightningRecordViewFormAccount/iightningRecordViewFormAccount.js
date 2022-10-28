import { LightningElement } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import Name_Field from '@salesforce/schema/Account.Name';
import Type_Field from '@salesforce/schema/Account.Type';
import Industry_Field from '@salesforce/schema/Account.Industry';
import Revenue_Field from '@salesforce/schema/Account.AnnualRevenue';
import Phone_Field from '@salesforce/schema/Account.Phone';
import Rating_Field from '@salesforce/schema/Account.Rating';


export default class IightningRecordViewFormAccount extends LightningElement {
    recordId="0018Z00002fJBwRQAW";
    objectName = ACCOUNT_OBJECT;
    fields = {
        name:Name_Field, 
        type:Type_Field,
        industry:Industry_Field,
        revenue: Revenue_Field,
        phone: Phone_Field,
        rating: Rating_Field
    }
}