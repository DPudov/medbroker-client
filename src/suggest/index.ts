import {Base} from "../base";
import {Patient} from "../patients/types";
import {Serv} from "../servs/types";
import {Recommendation, RecommendationMode} from "./types";

const resourceName = 'suggest';

export class Suggest extends Base {
    suggestServsToUser(patient: Patient, selectedServs: Serv[], mode: RecommendationMode[] = [RecommendationMode.All]) {
        return this.request<Recommendation[]>(resourceName, {
            method: 'POST',
            body: JSON.stringify({
                patient: patient,
                selected_servs: selectedServs,
                mode: mode
            })
        })
    }
}
