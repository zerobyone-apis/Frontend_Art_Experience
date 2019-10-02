
import XComponent from "../../components/XComponent";
import User from "../../models/User";

export default class HomeCode extends XComponent {

    private homeInfo: any = {
        number: "099 999 999",
        email: "artexperience@gmail.com"
    }

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
        "https://mybarbershopbroward.files.wordpress.com/2016/09/barber-wallpaper-23.jpg",
        "https://c.wallhere.com/photos/7f/46/xe2s_fuji35mmf14_fujinon_fujifilm_fuji_portugal_conceptual_portrait-942864.jpg!d"
    ];

    public employees: any = [
        {
            info: {
                name: "Maximiliano Olivero",
                job: "FullStack Developer",
                instagram: "https://www.instagram.com/zero_by_one/",
                facebook: "https://www.facebook.com/profile.php?id=100010314702327"
            },
            picture: {
                img: "https://instagram.fmvd4-1.fna.fbcdn.net/vp/ee793e4d2e3c93a0ab9bc4f4ae14f239/5E3690D5/t51.2885-19/s150x150/51832663_382908072507752_2052880357581127680_n.jpg?_nc_ht=instagram.fmvd4-1.fna.fbcdn.net",
                scala: 100,
                x: 0,
                y: 0
            }
        },
        {
            info: {
                name: "Damian Rodriguez",
                job: "Fullstack Developer",
                instagram: "https://www.instagram.com/damianezetiel/",
                facebook: "https://www.facebook.com/TheUniqueDesign"
            },
            picture: {
                img: "https://instagram.fmvd4-1.fna.fbcdn.net/vp/1e189700600076f5dee4867e46e34909/5E1822F5/t51.2885-19/s150x150/14478313_1450150071665952_6746916811926667264_a.jpg?_nc_ht=instagram.fmvd4-1.fna.fbcdn.net",
                scala: 100,
                x: 0,
                y: 0
            }
        },
        
    ];

    public services: any = [
        {
            icon: "event",
            name: "Gestion de reservas",
            info: "La gestion automatizada de las reservas mejora el rendimiento y la facilidad de uso.",
            url: "Read More"
        },
        {
            icon: "home",
            name: "Perfil de la barberia",
            info: "Tendra toda la informacion de su barberia, incluyendo a sus barberos, productos y promociones",
            url: "Read More"
        },
        {
            icon: "people",
            name: "Perfil del barbero",
            info: "Contendra toda la informacion del barbero, incluyendo sus trabajos y opiniones de los clientes",
            url: "Read More"
        },
        {
            icon: "star",
            name: "Sistema de puntuaciones",
            info: "Tendra una puntuacion su barberia, la cual aumentara el numero de clientes",
            url: "Read More"
        },
        {
            icon: "info",
            name: "Notificaciones",
            info: "Se mantendra informado de toda la actividad de sus clientes",
            url: "Read More"
        }
    ];

    public courses: any = [
        {
            icon: "event",
            img: "https://www.inquirer.com/resizer/orhvGzXeXNLr2xpL6_d81Lv-IQE=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/PTR2I5SGUNHJJGUGMHSGXFFCKU.jpg",
            name: "Basico",
            duration: "3 meses",
            info: "Curso basico de corte y estilo.",
            url: "Read More"
        },
        {
            icon: "home",
            img: "https://static.wixstatic.com/media/bd10eec5564a47b78638ff005f18261d.jpg/v1/crop/x_1203,y_720,w_6156,h_4191/fill/w_602,h_600,al_c,q_85,usm_0.66_1.00_0.01/Barber%20Shop.webp",
            name: "Perfeccionamiento",
            duration: "4 meses",
            info: "Curso de perfeccionamiento de corte y estilo.",
            url: "Read More"
        },
        {
            icon: "people",
            img:"https://hairstyleonpoint.com/wp-content/uploads/2017/04/v-shaped-low-fade-mens-haircut.jpg",
            name: "Avanzado",
            duration: "5 meses",
            info: "Curso avanzado de corte y estilo.",
            url: "Read More"
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