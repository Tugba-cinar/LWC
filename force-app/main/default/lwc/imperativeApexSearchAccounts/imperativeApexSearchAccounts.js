import { LightningElement } from 'lwc';

export default class ImperativeApexSearchAccounts extends LightningElement {

    get industryOptions() {
        return [
            {label: "Agriculture", value: "Agriculture"},
            {label: "Banking", value: "Banking"},
            {label: "Biotechnology", value: "Biotechnology"},
            {label: "Consulting", value: "Consulting"}
        ];
    }
}