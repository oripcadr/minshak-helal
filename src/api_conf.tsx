


type globalAppVariables = {
  api_dev_local: string;
  api_dev_build: string;
  dev_public: string
  prod:string;
  current: string;
};

declare global {
  var  app: globalAppVariables;
}

// set the values.
globalThis.app = {
    api_dev_local: 'http://localhost:40115',
    api_dev_build: 'http://5.29.141.19:40115',

    dev_public: 'http://api.dev.front.lapidotoffice-hq.co.il',
    prod: 'http://api.lapidotoffice-hq.co.il',

  // current:'http://5.29.141.19:40130',
   current:'http://localhost:4000',

  //current:'http://localhost:40130'

   // current:'https://api-irena.trianglek-hq.co.il',
  //current:'https://api-main.minshak-hq.co.il',

};


// Freeze so these can only be defined in this file.
Object.freeze(globalThis.app);
