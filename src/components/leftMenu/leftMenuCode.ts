import { Component, Vue } from "vue-property-decorator";
import MenuItems from '../menuItems';

@Component({})
export default class LeftMenuCode extends MenuItems {
    private search: string = "";
    // private menu: any = {
    //     options: [
    //         { name: "Mi perfil", icon: "account_circle", route: "Barber" },
    //         { name: "Buscar barberia", icon: "search", route: "MainPage" },
    //         { name: "Barberias favoritas", icon: "home", route: "BarberShop" },
    //         { name: "Mis reservas", icon: "event", route: "BarberShop" }
    //     ]
    // };

    //show and hide the leftsidemenu
    get drawer() {
        return this.$store.state.drawer.left;
    }
    set drawer(drawer) {
        this.$store.commit("setLeftDrawer", drawer);
    }

    //find the option by search menu
    get filteredConf() {
        return this.menu.options.filter(option => {
            return option.name.indexOf(this.search.toLowerCase()) >= 0;
        });
    }
    
    //go to the route
    pageRouter(route: string) {
        console.log(route)
        this.$router.push(route);
    }
}





