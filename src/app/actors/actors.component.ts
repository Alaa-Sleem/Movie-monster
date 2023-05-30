import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  constructor( private _trending:TrendingService , private _httpclient:HttpClient,private _ActivatedRoute:ActivatedRoute){}

  imgeUrl:string = 'https://image.tmdb.org/t/p/w500';
  person:any[]=[];
  mediaType='person'

  ngOnInit(): void {
    
    this._trending.getPersoon().subscribe({
      next:(data)=> this.person=data.results
      
      
    })


  }


  }


