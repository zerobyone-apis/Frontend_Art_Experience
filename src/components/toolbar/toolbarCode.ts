import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class ToolbarCode extends Vue {
  private langs: object[] = [
    { key: "es", value: "Español" },
    { key: "en", value: "English" }
  ];
  private loader: boolean = false;
  private dialogs: object = {
    pass: false,
    exit: false,
    profile: false,
    avatarMaker: false
  }
  private notifications: object[] = [];

  private colorGroups: object[] = [
    { nav: '#fff', navIcons: '#676767', menu: '#fff', menuIcons: '#676767' },
    { nav: '#009688', navIcons: '#fff', menu: '#fff', menuIcons: '#676767' },
    { nav: '#ffff', navIcons: '#676767', menu: '#424242', menuIcons: '#bdbdbd' },
    { nav: '#424242', navIcons: '#fff', menu: '#424242', menuIcons: '#bdbdbd' },
    { nav: '#039be5', navIcons: '#fff', menu: '#424242', menuIcons: '#bdbdbd' },
    { nav: '#444D61', navIcons: '#fff', menu: '#fff', menuIcons: '#676767' }
  ];

  get theme() {
    return this.$store.state.theme;
  }

  get dark(): boolean {
    return this.$store.state.theme.dark;
  }

  set dark(value: boolean) {
    this.$store.commit("setTheme", value);
  }

  get leftDrawer() {
    return this.$store.state.drawer.left;
  }

  set leftDrawer(drawer: boolean) {
    this.$store.commit('setLeftDrawer', drawer);
  }

  get rightDrawer() {
    return this.$store.state.drawer.right;
  }

  set rightDrawer(drawer: boolean) {
    this.$store.commit('setRightDrawer', drawer);
  }

  private pageRouter(route: string) {
    this.$router.push(route);
  }

  private reloadPage() {
    window.location.reload(true);
  }

  private setLang(lang: string) {
    this.$i18n.locale = lang;
    sessionStorage.setItem("languageLayout", lang);
  }

  private showLockScreen() {
    this.$store.commit("toggleLockScreen");
  }

  private changePassword() {
    let passObj: object = Object.assign({}, this.pass);
    if (passObj.current != "" || passObj.new != "" || passObj.newRepeat != "") {
      if (passObj.new == passObj.newRepeat) {
        this.loader = true;
        setTimeout(() => {
          this.loader = false;
          console.log("Contraseña cambiada correctamente");
          this.dialogs.pass = false;
        }, 300);
      } else {
        console.log("Las Contraseñas no coinciden");
      }
    } else {
      console.log("Debe ingresar los campos para poder continuar");
    }
  }

  private closeSession() {
    console.log("La sesion a sido cerrada");
    this.dialogs.exit = false;
  }

  private showProfileDialog() {
    this.dialogs.profile = true;
  }

  private showAvatarMaker() {
    this.dialogs.profile = false;
    this.dialogs.avatarMaker = true;
  }

  private closeModalAvatar() {
    this.dialogs.avatarMaker = false;
    this.dialogs.profile = true;
  }

  private setColor(group: object) {
    // Setting color object
    let colors = {
      nav: group.nav,
      menu: group.menu,
      menuIcons: group.menuIcons,
      navIcons: group.navIcons
    };
    this.$store.commit("setColors", colors);
    sessionStorage.setItem("colorLayout", JSON.stringify(colors));
  }

}
