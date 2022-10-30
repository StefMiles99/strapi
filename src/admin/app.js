const config = {
  locales: [
    'es'
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations:{
    en:{
      'app.components.LeftMenu.navbrand.title':'Grupo Catedral',
      'app.components.LeftMenu.navbrand.workplace':'Panel de Administrador',
      'global.content-manager':'Administrar Contenido',
      Contacts:'Contactos'
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
