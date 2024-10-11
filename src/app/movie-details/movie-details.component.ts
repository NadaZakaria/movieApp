import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private _DataService:DataService, private _ActivatedRoute :ActivatedRoute){}

  movieDetails: any =''
  mId:string=""
  imgPrefix:string ='https://image.tmdb.org/t/p/w500'



  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((id)=> this.mId = id["id"])
   
    this._DataService.getSpecMovie(this.mId).subscribe({
      next:(res)=> {
        console.log(res);
        
        this.movieDetails= res
      }
  
    })
  }

  getBackgroundImage(): string {
    if (this.movieDetails) {
      return 'https://image.tmdb.org/t/p/w500' + this.movieDetails.backdrop_path;
    }
    return '';
  }


  
}
