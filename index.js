const router = new Router();
import Home from '/static/app/js/home.js'

const basePath = 'static/app';

function run() {
      const app = $("#app");

      router.get('/about', function(req) {
            app.html("About - Me");
      })

      router.get('/home', function(req) {
            Home.init({
                  app,
                  html: basePath+'/home.html'
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