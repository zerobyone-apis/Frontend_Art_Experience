import { Component, Prop, Vue } from 'vue-property-decorator';
import MenuItems from '../menuItems';
import ReservationStructure from '../dialogs/structure/Reservation';

@Component({})
export default class ToolbarCode extends MenuItems {
  
  //reservation structure: contains dialog, steps
  private reservation = new ReservationStructure();

  //LeftDrawer
  get leftDrawer() {
    return this["$store"].state.drawer.left;
  }
  set leftDrawer(drawer: boolean) {
    this["$store"].commit('setLeftDrawer', drawer);
  }

}