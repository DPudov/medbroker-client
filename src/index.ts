import {applyMixins} from "./utils";
import {Suggest} from "./suggest";
import {Confirm} from "./confirm";
import {Base} from "./base";


class MedBroker extends Base {
}

interface MedBroker extends Suggest, Confirm {

}

applyMixins(MedBroker, [Suggest, Confirm]);

export default MedBroker
