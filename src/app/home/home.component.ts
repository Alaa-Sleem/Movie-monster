import { Component,OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _trending:TrendingService , private _httpclient:HttpClient){}

  imgeUrl:string = 'https://image.tmdb.org/t/p/w500';
  trendingMovies:any[]=[];
  trendingTv:any[]=[];
  trendingActors:any[]=[];  
  ngOnInit(): void {

    this._trending.getTrending('movie').subscribe({
      
      next:(data)=> this.trendingMovies=data.results.slice(0,16)
      
      
    })
    this._trending.getTrending('tv').subscribe({
      
      next:(data)=> this.trendingTv=data.results.slice(0,16)
      
      
    })
    this._trending.getTrending('person').subscribe({
      
      next:(data)=> this.trendingActors=data.results.slice(0,16)
      
      
    })
    
    
    
    
  }
  

}
