
import XComponent from "../../components/XComponent";
import User from "../../models/User";

export default class HomeCode extends XComponent {

    private loginFields: any = {
        login: [
            { text: "username", icon: "account_circle", value: "" },
            { text: "password", icon: "vpn_key", value: "" }
        ],
        register: [
            { text: "username", icon: "account_circle", value: "" },
            { text: "password", icon: "vpn_key", value: "" },
            { text: "email", icon: "email", value: "" },
        ]
    }

    public pictures: any = [
        "https://stylesatlife.com/wp-content/uploads/2018/09/Mexican-Haircuts-For-Guys-and-Girls.jpg",
        "https://root.coreylittle.com/williamsonsource/2017/10/pompadour.jpg",
        "https://blogocosa.com/wp-content/uploads/2019/05/pompadour-undercut-newest-30-tren-st-undercut-hairstyles-for-men-collection.jpg",
        "https://media.haircutinspiration.com/photos/20181204005057/Fade-beard-buzzcut-%40patty_cuts.jpg"
    ];

    public services: any = [
        {
            img: "event",
            name: "Gestion de reservas",
            info: "La gestion automatizada de las reservas mejora el rendimiento y la facilidad de uso."
        },
        {
            img: "home",
            name: "Perfil de la barberia",
            info: "Tendra toda la informacion de su barberia, incluyendo a sus barberos, productos y promociones"
        },
        {
            img: "people",
            name: "Perfil del barbero",
            info: "Contendra toda la informacion del barbero, incluyendo sus trabajos y opiniones de los clientes"
        },
        {
            img: "star",
            name: "Sistema de puntuaciones",
            info: "Tendra una puntuacion su barberia, la cual aumentara el numero de clientes"
        },
        {
            img: "info",
            name: "Notificaciones",
            info: "Se mantendra informado de toda la actividad de sus clientes"
        }
    ];


    public customers: any = [
        {
            info: {
              name: "ZeroByOne",
              job: "CEO",
              email: "zerobyone@gmail.com",
              phone: "099 999 999",
              stars: 5
            },
            picture: {
              img: "http://es.web.img3.acsta.net/r_640_360/newsv7/16/04/15/12/49/422146.jpg",
              scala: 100,
              x: 0,
              y: 0
            },
            banner: {
              img: "https://s.yimg.com/ny/api/res/1.2/OoBy44.dLtaLgobVIO7fNA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NzQ0O2g9Mzcy/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d4345e2367382e3b40a1e43f5016972b",
              scala: 100,
              x: 0,
              y: 0
            }
          },
    
          {
            info: {
              name: "Damian Rodriguez",
              job: "CEO",
              email: "damianezretirl1@gmail.com",
              phone: "099 999 999",
              stars: 4
            },
            picture: {
              img: "https://i.ytimg.com/vi/9aFVSkncq00/maxresdefault.jpg",
              scala: 100,
              x: 0,
              y: 0
            },
            banner: {
              img: "https://diarioavance.com/wp-content/uploads/2017/03/matrix.jpg",
              scala: 100,
              x: 0,
              y: 0
            }
          }
    ];

    public home: any = {
        pageDesign: {
            banner: {
                img: "https://static.vecteezy.com/system/resources/previews/000/539/084/non_2x/barbershop-logo-design-vector.jpg",
                scala: 100,
                x: 0,
                y: 0
            },

            logo: {
                img: "https://i.etsystatic.com/13221305/r/il/ab6ed6/1210022632/il_794xN.1210022632_eygv.jpg",
                scala: 100,
                x: 0,
                y: 0
            }
        }
    }












    //old
    private user: User = new User();

    private rules: any = {
        required: [(v: any) => !!v || this.translate("VALIDATIONS.required")],
        email: [
            (v: any) => !!v || this.translate("VALIDATIONS.required"),
            (v: any) => /.+@.+/.test(v) || this.translate("VALIDATIONS.email")
        ],
        password: [
            (v: any) => !!v || this.translate("VALIDATIONS.required"),
            (v: any) => (v || "").length > 8 || this.translate("VALIDATIONS.password")
        ],
        repitPassword: [
            (v: any) => !!v || this.translate("VALIDATIONS.required"),
            (v: any) => (v || "").length > 8 || this.translate("VALIDATIONS.password"),
            (v: any) => (v == this.user.password) || "las contrase;as no coiciden"
        ],
        phone: []
    };

    private stepsLogin: any = [
        {
            title: "Acceder",
            fields: [
                {
                    is: "input",
                    name: "username",
                    label: "nombre de usuario",
                    hint: "USER.hintUsername",
                    icon: "person",
                    rules: this.rules.required,
                    required: true
                },
                {
                    is: "input",
                    type: "password",
                    name: "password",
                    label: "contraseña",
                    hint: "USER.hintPassword",
                    icon: "vpn_key",
                    rules: this.rules.required,
                    required: true
                }
            ]
        }
    ];

    private stepsRegistration: any = [
        {
            title: "Registrarse",
            fields: [
                {
                    is: "input",
                    name: "name",
                    label: "nombre",
                    hint: "USER.hintName",
                    icon: "person",
                    rules: this.rules.required,
                    required: true
                },
                {
                    is: "input",
                    name: "username",
                    label: "nombre de usuario",
                    hint: "USER.hintUsername",
                    icon: "person",
                    rules: this.rules.required,
                    required: true
                },
                {
                    is: "input",
                    name: "picture",
                    label: "imagen de perfil",
                    hint: "USER.hintPicture",
                    icon: "account_circle",
                    rules: this.rules.required,
                    required: true
                }
            ]
        },
        {
            title: "Registrarse",
            fields: [
                {
                    is: "input",
                    name: "email",
                    label: "email",
                    hint: "USER.hintemail",
                    icon: "email",
                    rules: this.rules.required,
                    required: true
                },
                {
                    is: "input",
                    type: "password",
                    name: "password",
                    label: "contraseña",
                    hint: "USER.hintPassword",
                    icon: "vpn_key",
                    rules: this.rules.required,
                    required: true
                },
                {
                    is: "input",
                    type: "password",
                    name: "repitPassword",
                    label: "repita contraseña",
                    hint: "USER.hintPassword",
                    icon: "vpn_key",
                    rules: this.rules.required,
                    required: true
                }
            ]
        }
    ];

    /**
     * @name ADD
     * @description add item
     */
    async register(user) {
        try {
            this.user = Object.assign(this.user, user);
            await this.user.add();

            this.$store.commit("setUserInfo", JSON.stringify(this.user));
            this.$router.push("/MyEvents");
            this.dialogs.register = false;
        } catch (error) {
            this.$notify({
                group: 'foo', type: 'warn',
                title: 'Error',
                text: error.data.message
            });
        }
    }

    /**
     * @name LOGIN
     * @description add item
     */
    async login(user) {
        try {
            this.user = Object.assign(this.user, user);
            await this.user.get();

            this.$store.commit("setUserInfo", JSON.stringify(this.user));
            this.$router.push("/MyEvents");
            this.dialogs.login = false;
        } catch (error) {
            this.$notify({
                group: 'foo', type: 'warn',
                title: 'Error de autenticacion',
                text: error.data.message
            });
        }
    }
}