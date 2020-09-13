import {Patient} from "../patients/types";
import {ServShort} from "../servs/types";


const nock = require('nock');
const MedBroker = require('../../dist');

describe('Confirm resource', () => {
    test('confirm returns Ok on normal request', async () => {
        const scope = nock('https://medbroker.app/v2/')
            .post('/confirm', {
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
                ]
            })
            .reply(200, {});

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

        await MedBrokerClient.confirmBoughtItems(patient, selectedServs);
        scope.done();
    })
})
