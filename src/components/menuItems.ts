import Vue from "vue";

export default class MenuItems extends Vue {

  private menu: any = {
    options: [
      { name: "SERVICIOS", icon: "", href: "/#services", route: "" },
      { name: "CURSOS", icon: "", href: "/#cources", route: "" },
      { name: "CONTACTENOS", icon: "", href: "/#contact", route: "" }
    ]
  };

  //go to the route
  pageRouter(route: string) {
    if (route != "") {
      console.log(route)
      this.$router.push(route);

    }
  }

  //find the option by search menu
  get filteredConf() {
    return this.menu.options;
  }
}
