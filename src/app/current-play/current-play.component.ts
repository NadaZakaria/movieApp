import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-current-play',
  templateUrl: './current-play.component.html',
  styleUrls: ['./current-play.component.css']
})
export class CurrentPlayComponent implements OnInit{

  constructor(private _DataService :DataService){}

  currentMovies: any []=[]
  firstFourCurrentPlay :any []=[]
  imgPrefix:string ='https://image.tmdb.org/t/p/w500'



  ngOnInit(): void {
    this._DataService.getCurrentPlaying().subscribe({
      next:(res)=>{
        console.log(res.results);
        
        this.currentMovies = res.results
        this.firstFourCurrentPlay = this.currentMovies.slice(0,8);
      }
    })
  }

  // pageChanged(event:any):void{
  //   this._DataService.getCurrentPlaying(event).subscribe({
  //     next:(res)=>{
  //       this.currentMovies = res.results

  //       this.page = res.page
  //       this.pageSize = res.results.length
  //       this.total = res.total_pages

  //       // this.firstFourCurrentPlay = this.currentMovies.slice(0, 4);
  //       // console.log(this.firstFourCurrentPlay);
  //     }
  //   })
    

  // }

   

}
