import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Link , ResponseLink } from '../models/linkModel';


@Injectable({
  providedIn: 'root'
})
export class LinksServiceService {
  private apiServiceUrl = environment.apiBaseUrl;
  private endpoint = '/link';
  constructor(private http: HttpClient) { }

  public getLinks(): Observable<Link[]>{
    return this.http.get<Link[]>(this.apiServiceUrl + this.endpoint);
  }
  public addLink(link : Link): Observable<ResponseLink>{
    return this.http.post<ResponseLink>(this.apiServiceUrl + this.endpoint,link);
  }
  
  public deleteLink(id : String): Observable<ResponseLink>{
    return this.http.delete<ResponseLink>(this.apiServiceUrl + this.endpoint + '/?id=' + id);
  }

  public getLinksById(id : String) : Observable<ResponseLink>{
    return this.http.get<ResponseLink>(this.apiServiceUrl + this.endpoint + '/?id=' + id);
  }
  public  updateLink(link : Link): Observable<ResponseLink>{
    return this.http.put<ResponseLink>(this.apiServiceUrl + this.endpoint,link);
  }
  
}
