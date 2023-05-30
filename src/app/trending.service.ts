import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor( private _httpclient:HttpClient) { }

   getTrending(mediaType:string):Observable<any>
   {
    return this._httpclient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=9137a63abee293b570e670cc48c2d43f`)
   }


   getDetails(mediaType:string,id:string):Observable<any>
   {
    return this._httpclient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=9137a63abee293b570e670cc48c2d43f&language=en-US`)
   }

   getWatch(mediaType:string,id:string):Observable<any>
   {
    return this._httpclient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/videos?api_key=9137a63abee293b570e670cc48c2d43f&append_to_response=videos`)
   }


   getSimilar(mediaType:string,id:string):Observable<any>
   {
    return this._httpclient.get(`https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=9137a63abee293b570e670cc48c2d43f&language=en-US`)
   }

  
  getMoviespages(page:any):Observable<any>
   {
        return this._httpclient.get(`https://api.themoviedb.org/3/discover/movie?api_key=9137a63abee293b570e670cc48c2d43f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
        
   }
   getTvpages(page:any):Observable<any>
   {
        return this._httpclient.get(`https://api.themoviedb.org/3/discover/tv?api_key=9137a63abee293b570e670cc48c2d43f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
        
   }
   getPersoon():Observable<any>
   {
        return this._httpclient.get(`https://api.themoviedb.org/3/person/popular?api_key=9137a63abee293b570e670cc48c2d43f&language=en-US&page=1`)
        
   }

}

 