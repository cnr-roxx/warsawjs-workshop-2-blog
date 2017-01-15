(function (root) {
    'use-strict';

    let $ = root.$;

    class AddPostFormView {

        constructor() {

            // Pobieramy template
            this.template = $('#template-add-post').html();

            // Renderujemy
            this.render();

            // 3. Pobrać referencje do formularza
            this.$form = $('#add-post-form');
            this.setupListeners();

            // 4. Ustawić listenery na submit
        }


        render() {
            let $container = $('#view-container');
            let containerCompiled = root.Handlebars.compile(this.template); //renderujemy Handlebarsami template
            $container.append(containerCompiled); // wstrzykujemy wyrenderowany tmaplate do kontenera
        }

        setupListeners() {
            this.$form.submit((event) => this.submitFormHandler(event));
        }

        submitFormHandler(event) {
            $(document).trigger('add-post-form:submit');
        }
    }

    root.Blog.AddPostFormView = AddPostFormView;

} (window));