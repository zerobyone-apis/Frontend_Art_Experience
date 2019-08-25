import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class LeftMenuCode extends Vue {
    private search: string = "";
    private menu: any = {
        configuration: [
            { name: "inicio", icon: "home", route: "MainPage" },
            { name: "mi perfil", icon: "people", route: "UserPage" },
            { name: "mi barberia", icon: "home", route: "BarberPage" }
        ]
    };

    get filteredConf() {
        return this.menu.configuration.filter(option => {
            return option.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0;
        });
    }

    get drawer() {
        return this.$store.state.drawer.left;
    }

    set drawer(drawer) {
        this.$store.commit("setLeftDrawer", drawer);
    }

    pageRouter(route: string) {
        console.log(route)
        this.$router.push(route);
    }
}