const router = new Router();
import Home from '/js/home.js'

function run() {
      const app = $("#app");

      router.get('/about', () => {
            app.html("About - Me");
      })

      router.get('/home', () => {
            Home.init({
                  app,
                  html: 'home.html'
            });
      })

      router.init();
}

document.addEventListener('DOMContentLoaded', function() {  
      run();
}, false);

$(window).on('hashchange', function() {

      let currentClass = $(app).data("class");

      if(currentClass) {
            $(app).data("class").destroy();
      }

      router.init();
});