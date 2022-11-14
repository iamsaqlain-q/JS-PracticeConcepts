function init() {
    let language = 'JavaScript';
    function displayLang() { // displayLang() is the inner function, a closure
      console.log(language);
    }
    displayLang();
  }
  init();

  //stack using closure