import { Component,OnInit  } from '@angular/core';
import { TrendingService } from '../trending.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit { 
  constructor( private _trending:TrendingService , private _httpclient:HttpClient,private _ActivatedRoute:ActivatedRoute){}

  imgeUrl:string = 'https://image.tmdb.org/t/p/w500';
  movies:any[]=[];
  pages:any[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  pagea:any[]=[]
  mediaType='movie'
  element:any;
  ngOnInit(): void {
  
     
    this._ActivatedRoute.paramMap.subscribe((params=>{
      this.element=params.get('pag');
      this._trending.getMoviespages(this.element).subscribe({
        next:(data)=>
        {
    
          this.pagea=data.results.filter((pagea:any)=>pagea.poster_path !==null)
          console.log(this.pagea);
          console.log(this.element);
          
        }
      })
   
      }))



  }


 


}

