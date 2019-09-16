import Vue from "vue";

export default class MenuItems extends Vue {

  private menu: any = {
    options: [
      { name: "Mi perfil", icon: "account_circle", route: "Barber" },
      { name: "Buscar barberia", icon: "search", route: "MainPage" },
      { name: "Barberias favoritas", icon: "home", route: "BarberShop" },
      { name: "Mis reservas", icon: "event", route: "BarberShop" }
    ]
  };

  //go to the route
  pageRouter(route: string) {
    console.log(route)
    this.$router.push(route);
  }

  //find the option by search menu
  get filteredConf() {
    return this.menu.options;
  }

}