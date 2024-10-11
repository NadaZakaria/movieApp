import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
  constructor(private _DataService:DataService){}

  topRatedMovies:any[]=[]
  FirstFourTopRatedMovies:any[]=[]
  imgPrefix:string ='https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    this._DataService.getTopRatedMovies().subscribe({
      next:(res)=>{
        this.topRatedMovies = res.results   
        
        this.FirstFourTopRatedMovies= this.topRatedMovies.slice(0,8)
      }

    })
  }

}
