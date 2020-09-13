import {Recommendation, RecommendationMode, SuggestResponse} from "./types";
import {Patient} from "../patients/types";
import {ServShort} from "../servs/types";


const nock = require('nock');
const MedBroker = require('../../dist');

describe('Suggest resource', () => {
    test('suggest returns a list of recommendations', async () => {
        const scope = nock('https://medbroker.app/v2/')
            .post('/suggest', {
                patient: {
                    patient_id: 2809195,
                    sex: 1,
                    birthday: 1987
                },
                selected_servs: [
                    {
                        serv_code: "090069",
                    },
                    {
                        serv_code: "090022"
                    }
                ],
                mode: [
                    "smart",
                    "history"
                ]
            })
            .reply(200, {
                suggests: [
                    {
                        serv_code: "300026",
                        serv_name: "Диагностика заболеваний сердца",
                        message: "Часть выбранных вами услуг входит в набор \"Диагностика заболеваний сердца\".\nВозможно, вас интересует имеенно он.",
                        miscellaneous: {
                            message: "Пожалуйста, оцените рекомендацию",
                            reactions: {
                                excellent: "5",
                                very_good: "4",
                                good: "3",
                                satisfactory: "2",
                                acceptable: "1",
                                fail: "0"
                            }
                        }
                    }
                ]
            });

        const MedBrokerClient = new MedBroker({apiKey: 'XYZ'});
        const patient: Patient = {
            patient_id: 2809195,
            sex: 1,
            birthday: 1987,
        };

        const selectedServs: ServShort[] = [
            {
                serv_code: "090069",
            },
            {
                serv_code: "090022"
            }
        ];

        const mode: RecommendationMode[] = [
            RecommendationMode.Smart,
            RecommendationMode.History
        ];

        const recommendations: SuggestResponse = await MedBrokerClient.suggestServsToUser(patient, selectedServs, mode);
        const expectedRecommendations: Recommendation[] = [
            {
                serv_code: "300026",
                serv_name: "Диагностика заболеваний сердца",
                message: "Часть выбранных вами услуг входит в набор \"Диагностика заболеваний сердца\".\nВозможно, вас интересует имеенно он.",
                miscellaneous: {
                    message: "Пожалуйста, оцените рекомендацию",
                    reactions: {
                        excellent: "5",
                        very_good: "4",
                        good: "3",
                        satisfactory: "2",
                        acceptable: "1",
                        fail: "0"
                    }
                }
            }
        ]
        expect(recommendations.suggests).toEqual(expectedRecommendations);
        scope.done();
    })
})
