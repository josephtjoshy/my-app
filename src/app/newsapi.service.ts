import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url='https://newsapi.org/v2/everything?q=tesla&from=2021-06-17&sortBy=publishedAt&apiKey=bb991e6664394ab2b28739fc7e456f34';
    return this.http.get(url);
  }

}
