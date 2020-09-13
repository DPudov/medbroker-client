import {Base} from "../base";
import {Patient} from "../patients/types";
import {ServShort} from "../servs/types";

const resourceName = 'confirm';

export class Confirm extends Base {
    confirmBoughtItems(patient: Patient, selectedServs: ServShort[]) {
        return this.request(resourceName, {
            method: 'POST',
            body: JSON.stringify({
                patient: patient,
                selected_servs: selectedServs,
            })
        })
    }
}
