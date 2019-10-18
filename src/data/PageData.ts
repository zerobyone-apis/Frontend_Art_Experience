export default class PageData {

  private homeInfo: any = {
    name: "Art Experience",
    slogan: "gestion de Barbershops",
    number: "099 999 999",
    email: "artexperience@gmail.com",
    aboutUsTitle: "Acerca de Nosotros",
    aboutUs: "Art Experience brinda servicios de calidad dedicados a gestion de barberias y administracion de reservas para clientes.",
    servicesTitle: "Nuestros Servicios",
    services: "Brindamos servicios de calidad que facilitan su trabajo y aumenta su productividad.",
    coursesTitle: "Nuestros Cursos",
    courses: "Ofrecemos cursos para aumentaran su experiencia",
    contactUsTitle: "Contactenos",
    contactUs: "Comuniquese con nosotros para mas informacion"
  }

  public pictures: any = [
    "https://mybarbershopbroward.files.wordpress.com/2016/09/barber-wallpaper-23.jpg"
  ];

  public hours: any =  {
    week: ["11:00", "11:50", "12:40", "13:30", "14:20", "16:00", "16:50", "17:40", "18:30"],
    saturday: ["10:00", "10:40", "11:20", "12:20", "13:00", "13:40", "14:20", "15:00", "15:40", "16:20", "17:00", "17:40"]
  }

  public employees: any = [
    {
      info: {
        name: "Maximiliano Olivero",
        job: "Barbero",
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
        job: "Peluquero",
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
      img: "https://hairstyleonpoint.com/wp-content/uploads/2017/04/v-shaped-low-fade-mens-haircut.jpg",
      name: "Avanzado",
      duration: "5 meses",
      info: "Curso avanzado de corte y estilo.",
      url: "Read More"
    }
  ];

  public jobs: any = [
    {
      name: "Corte clasico",
      cost: 250,
      img: "https://cms.modumb.com/storage/videos/_635x585/0894-miniatura-2129.jpg"
    },
    {
      name: "Degrade",
      cost: 280,
      img: "http://www.altacapacitacion.com.uy/wp-content/uploads/2018/04/tecnica-degrade.jpg"
    },
    {
      name: "Degrade + cejas",
      cost: 320,
      img: "https://kena.com/wp-content/uploads/2017/08/8e141af7b324d1cc9fcabb00f2914525-natural-eye-makeup-natural-eyes-300x300.jpg"
    },
    {
      name: "Degrade + barba",
      cost: 350,
      img: "https://cortesdecabellohombre.com/wp-content/uploads/2018/01/Barba-Espesa-con-degradado-y-pelo-hacia-atras.jpg"
    },
    {
      name: "Corte vip",
      cost: 550,
      img: "https://blog.newoldman.com.br/wp-content/uploads/2018/12/Barba-degrade-Como-fazer-manter-e-imagens-para-inspirar-5-e1544829028226.jpg"
    }
  ];
}