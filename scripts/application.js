(
    function(root) {
        'use strict';

        let Router = root.Blog.Router;
        let AddPostFormView = root.Blog.AddPostFormView;

        class Application {
            constructor() {
                this.setupListeners();
                new Router();
            }

            setupListeners() {
                $(document).on('router:home', () => this.onRouterHomeHandler());
                $(document).on('router:post', () => this.onRouterPostHandler());
                $(document).on('add-post-form:submit', () => this.onAddPostFormSubmitHandler());


            }

            onRouterHomeHandler() {
                this.clearDOMContainer();
                new AddPostFormView();
            }

            onRouterPostHandler() {
                this.clearDOMContainer();
                $('#view-container').html('<h1>Post</h1>');
            }

            onAddPostFormSubmitHandler() {
                this.clearDOMContainer();
                $('#view-container').html('<h1>Dodałem post</h1>');
            }

            clearDOMContainer() {
                $('#view-container').empty();
            }

        }
        new Application();
    } (window)
);