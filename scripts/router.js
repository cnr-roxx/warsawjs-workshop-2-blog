(function (root) {
    'use strict';
    class Router {
        constructor() {
            this.router = new root.Routy.Router();
            this.setupRoutes();
            this.router.run();
        }

        setupRoutes() {
            this.router
                .add('/posts', function () {
                    $(document).trigger('router:home');
                })
                .add('/posts/:id', function () {
                    $(document).trigger('router:post');
                })
                .otherwise('/posts');
        }

    }

    root.Blog.Router = Router;


}(window));