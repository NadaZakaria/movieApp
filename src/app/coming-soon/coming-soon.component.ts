import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit{
  constructor(private _DataService:DataService){}

  ComingSoonMovies:any[]=[]
  FirstFourComingSoonMovies:any[]=[]
  imgPrefix:string ='https://image.tmdb.org/t/p/w500'


  ngOnInit(): void {
    this._DataService.getComingMovies().subscribe({
      next:(res)=>{
        this.ComingSoonMovies = res.results   
        
        this.FirstFourComingSoonMovies= this.ComingSoonMovies.slice(3,11)
      }

    })
  }

}
