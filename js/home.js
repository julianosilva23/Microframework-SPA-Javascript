import Default from './default.js';

class Home extends Default {
 
    init({app, html}) {

        this.render(app, html);

        this.events = [
            $(app).on("click", "#home", this.submitForm)
        ]
    }

    submitForm(e) {
        console.log(e);
        e.preventDefault();
    
    }
}

export default new Home;