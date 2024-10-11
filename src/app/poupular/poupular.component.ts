import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-poupular',
  templateUrl: './poupular.component.html',
  styleUrls: ['./poupular.component.css']
})
export class PoupularComponent implements OnInit{
  constructor(private _DataService:DataService){}

  popularMovies:any[]=[]
  FirstFourpopularMovies:any[]=[]
  imgPrefix:string ='https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    this._DataService.getPopularMovies().subscribe({
      next:(res)=>{
        this.popularMovies = res.results   
        
        this.FirstFourpopularMovies = this.popularMovies.slice(6,14)
      }

    })
  }

}
