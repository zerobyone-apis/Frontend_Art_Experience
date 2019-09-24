import XComponent from "../../components/XComponent";
import User from "../../models/User";

export default class BarberCode extends XComponent {

  /**
 * @name MODEL
 * @description emits the input method to the parent for define visibility of the dialog
 */
  get model(): boolean {
    return this.value;
  }

  set model(model: boolean) {
    this.$emit("input", model);
  }
}