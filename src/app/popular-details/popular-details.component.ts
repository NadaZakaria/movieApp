import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-popular-details',
  templateUrl: './popular-details.component.html',
  styleUrls: ['./popular-details.component.css']
})
export class PopularDetailsComponent {
  constructor(private _DataService :DataService){}

  populartMovies: any []=[]
  firstFourCurrentPlay :any []=[]
  page: number = 1;
  pageSize :number =0
  total :number =0
  imgPrefix:string ='https://image.tmdb.org/t/p/w500'



  ngOnInit(): void {
    this._DataService.getCurrentPlaying().subscribe({
      next:(res)=>{
        this.populartMovies = res.results
        this.page = res.page
        this.pageSize = res.results.length
        this.total = res.total_pages
      }
    })
  }

  pageChanged(event:any):void{
    this._DataService.getPopularMovies(event).subscribe({
      next:(res)=>{
        this.populartMovies = res.results
        this.page = res.page
        this.pageSize = res.results.length
        this.total = res.total_pages
      }
    })
    

  }

}
