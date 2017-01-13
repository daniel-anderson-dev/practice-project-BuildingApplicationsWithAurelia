
export class App {
    configureRouter(config, router)
    {
        this.router = router;
        config.map([
            { route: ["", "list"], moduleId: "movies/list", title: "Movies List", nav:true },
            { route: "about", moduleId: "about/about", title: "About Movies", nav:true }
        ]);
    }
}