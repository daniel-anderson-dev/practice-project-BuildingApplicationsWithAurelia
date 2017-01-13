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

    getAll()
    {
        return this.http.get(baseUrl)
                           .then(response => {
                               return response.content;
                           });
    }
}