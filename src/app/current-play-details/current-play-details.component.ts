import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-current-play-details',
  templateUrl: './current-play-details.component.html',
  styleUrls: ['./current-play-details.component.css']
})
export class CurrentPlayDetailsComponent {

  constructor(private _DataService :DataService){}

  currentMovies: any []=[]
  firstFourCurrentPlay :any []=[]
  page: number = 1;
  pageSize :number =0
  total :number =0
  imgPrefix:string ='https://image.tmdb.org/t/p/w500'



  ngOnInit(): void {
    this._DataService.getCurrentPlaying().subscribe({
      next:(res)=>{
        this.currentMovies = res.results
        this.page = res.page
        this.pageSize = res.results.length
        this.total = res.total_pages
      }
    })
  }

  pageChanged(event:any):void{
    this._DataService.getCurrentPlaying(event).subscribe({
      next:(res)=>{
        this.currentMovies = res.results
        this.page = res.page
        this.pageSize = res.results.length
        this.total = res.total_pages
      }
    })
    

  }

   
}
