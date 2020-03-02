class Home {
    init({app, html}) { 

        $(app).load(html);
        $(app).data("class", this);

        $(document).on("click", "#home", this.submitForm);
    }

    submitForm(e) {
        console.log(e);
        e.preventDefault();
    
    }

    destroy() {
        $(document).off("click", "#home", this.submitForm);
    }
}

export default new Home;


class Default {
    constructor() {

    }

    init() {

    }

    destroy() {
        
    }
}