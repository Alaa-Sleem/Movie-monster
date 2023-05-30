import { Component,OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor( private _trending:TrendingService ,private _ActivatedRoute:ActivatedRoute){}
  imgeUrl:string ='https://image.tmdb.org/t/p/w500';
  youtubeUrl:string='https://www.youtube.com/watch?v='
   details:any;
   genres:any[]=[];
   wathch:any[]=[];
   keywatch:any[]=[];
   similar:any[]=[];
   media_type:string='';
 
  ngOnInit(): void {
    let{ mediaType,id}=this._ActivatedRoute.snapshot.params;
    this.media_type=mediaType;
    this._trending.getDetails(mediaType,id).subscribe({
      next:(data)=>
      {
        this.details=data
        
      }

      
    })

    this._trending.getDetails(mediaType,id).subscribe({
      next:(data)=>this.genres=data.genre
      
      
    })

    if(mediaType == "movie" || mediaType == 'tv')
    {
      this._trending.getWatch(mediaType,id).subscribe({
        next:(data)=>
        {
          
    
          this.wathch=data.results.filter((item:any)=>item.type =='Trailer'|| item.type =='Teaser').slice(0,1)
          this.keywatch=this.wathch[0].key
          
        }
        
        
      })
    }

    if(mediaType == "movie" || mediaType == 'tv')
    {
     
      this._trending.getSimilar(mediaType,id).subscribe({
        next:(data)=>
        {
         
            this.similar=data.results.filter((trends:any)=>trends.poster_path !==null).slice(0,10)
        }
      
        
        
      })
    }
   

    

  }
  
    // a function to get detail of similar movies
    otherDetails(media_type:string,id:string)
    {
      this._trending.getDetails(media_type,id).subscribe({
        next:(data)=>
        {
          
          this.details=data
  
        }
      })
  
      this._trending.getSimilar(media_type,id).subscribe({
        next:(data)=>
        {
          if(media_type == "movie" || media_type == 'tv')
          {
            this.similar=data.results.filter((trends:any)=>trends.poster_path !==null).slice(0,10)

          }

            
        }
        
      })

      if(media_type == "movie" || media_type == 'tv')
        {
          this._trending.getWatch(media_type,id).subscribe({
            next:(data)=>
            {
              this.wathch=data.results.filter((item:any)=>item.type =='Trailer'|| item.type =='Teaser').slice(0,1)
              this.keywatch=this.wathch[0].key
            }
            
            
          })
        }
   

      
  
    }


}
