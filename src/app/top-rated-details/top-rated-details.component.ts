import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-rated-details',
  templateUrl: './top-rated-details.component.html',
  styleUrls: ['./top-rated-details.component.css']
})
export class TopRatedDetailsComponent {
  constructor(private _DataService :DataService){}

  ToptMovies: any []=[]
  page: number = 1;
  pageSize :number =0
  total :number =0
  imgPrefix:string ='https://image.tmdb.org/t/p/w500'



  ngOnInit(): void {
    this._DataService.getTopRatedMovies().subscribe({
      next:(res)=>{
        this.ToptMovies = res.results
        this.page = res.page
        this.pageSize = res.results.length
        this.total = res.total_pages
      }
    })
  }

  pageChanged(event:any):void{
    this._DataService.getCurrentPlaying(event).subscribe({
      next:(res)=>{
        this.ToptMovies = res.results
        this.page = res.page
        this.pageSize = res.results.length
        this.total = res.total_pages
      }
    })
    


}
}
