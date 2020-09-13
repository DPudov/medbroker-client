import {Base} from "../base";
import {Patient} from "../patients/types";
import {ServShort} from "../servs/types";
import {RecommendationMode, SuggestResponse} from "./types";

const resourceName = 'suggest';

export class Suggest extends Base {
    suggestServsToUser(patient: Patient, selectedServs: ServShort[], mode: RecommendationMode[] = [RecommendationMode.All]) {
        const response = this.request<SuggestResponse>(resourceName, {
            method: 'POST',
            body: JSON.stringify({
                patient: patient,
                selected_servs: selectedServs,
                mode: mode
            })
        });
    }
}
