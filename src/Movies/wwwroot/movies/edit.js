import {inject} from 'aurelia-framework';
import {MovieData} from './movieData';
import {Router} from 'aurelia-router';

@inject(MovieData, Router)
export class Edit
{
    constructor(movieData, router)
    {
        this.data = movieData;
        this.router = router;
    }

    activate(parms)
    {
        return this.data.getById(parms.id)
                        .then(movie => this.movie = movie);
    }

    save()
    {
        this.data.save(this.movie)
                    .then(movie =>
                    {
                        let url = this.router.generate('details', { id: movie.id });
                        this.router.navigate(url);
                    });
    }
}