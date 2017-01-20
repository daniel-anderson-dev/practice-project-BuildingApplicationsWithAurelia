
import {inject} from 'aurelia-framework';
import {MovieData} from './movieData';

@inject(MovieData)
export class Edit
{
    constructor(movieData)
    {
        this.data = movieData;
    }

    activate(parms)
    {
        return this.data.getById(parms.id)
                        .then(movie => this.movie = movie);
    }
}