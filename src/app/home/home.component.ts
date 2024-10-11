import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
 constructor(private _DataService:DataService){}
 
 trendingMovies:any[]=[]
 currentPosterIndex :number =0
 imgPrefix:string ='https://image.tmdb.org/t/p/w500'
 backgroundImage: string = '';

 onSlideChange(event: SlidesOutputData):void{
  this.currentPosterIndex = event.startPosition || 0;
}

 updateBackground(): string {
  if (this.trendingMovies.length > 0) {
    return this.imgPrefix + this.trendingMovies[this.currentPosterIndex].backdrop_path;
  }
  return '';
}

  ngOnInit(): void {
    this._DataService.getTrendingMovies().subscribe({
      next:(res)=>{
        this.trendingMovies = res.results
      }
    })
}

  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      autoplay:true,
      // navSpeed: 700,
      smartSpeed:700,
      margin:20,
      
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 4
        },
        740: {
          items: 5
        },
        940: {
          items: 6
        }
      },
      nav: false
}
  

}
