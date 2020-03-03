class Default {
    render(app, html) {
        $(app).load(html);
        $(app).data("class", this);
    }

    /**
     * Remove todos os eventos atribuitos
     */
    destroy() {
        this.events.forEach(event => {
            event.off();
        });
    }
}

export default Default;