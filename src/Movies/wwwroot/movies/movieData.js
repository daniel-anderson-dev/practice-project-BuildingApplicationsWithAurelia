import {inject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-http-client'

// Pointing to a JSON data file for the sake of following instructions.
let baseUrl = './miscellaneous/movies.json';

@inject(HttpClient)
export class MovieData
{
    constructor(httpClient)
    {
        this.http = httpClient;
    }

    getById(id)
    {
        // Not using a real API, so I will exploit the ID to return the desired
        //  object from the array of json data objects.
        //  It's a hack.
        return this.http.get(baseUrl)
                        .then(response => response.content[id-1]);
    }

    getAll()
    {
        return this.http.get(baseUrl)
                           .then(response => {
                               return response.content;
                           });
    }
}