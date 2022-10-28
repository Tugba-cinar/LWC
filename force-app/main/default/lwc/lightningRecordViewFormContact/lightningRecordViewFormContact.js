import { LightningElement } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import Name_field from '@salesforce/schema/Contact.Name';
import Title_field from '@salesforce/schema/Contact.Title';
import Account_Field from '@salesforce/schema/Contact.AccountId';
import phone_field from '@salesforce/schema/Contact.Phone';
import email_field  from'@salesforce/schema/Contact.Email';
import mobile_field from '@salesforce/schema/Contact.MobilePhone';
import owner_field from '@salesforce/schema/Contact.OwnerId';

export default class LightningRecordViewFormContact extends LightningElement {
    recordId = "0038Z00002tQZDYQA4";
    objectName = CONTACT_OBJECT;
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