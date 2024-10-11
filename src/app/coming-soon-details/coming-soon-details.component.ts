import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-coming-soon-details',
  templateUrl: './coming-soon-details.component.html',
  styleUrls: ['./coming-soon-details.component.css']
})
export class ComingSoonDetailsComponent {
  constructor(private _DataService :DataService){}

  comingSoonMovies: any []=[]
  page: number = 1;
  pageSize :number =0
  total :number =0
  imgPrefix:string ='https://image.tmdb.org/t/p/w500'



  ngOnInit(): void {
    this._DataService.getComingMovies().subscribe({
      next:(res)=>{
        this.comingSoonMovies = res.results
        this.page = res.page
        this.pageSize = res.results.length
        this.total = res.total_pages
      }
    })
  }

  pageChanged(event:any):void{
    this._DataService.getComingMovies(event).subscribe({
      next:(res)=>{
        this.comingSoonMovies = res.results
        this.page = res.page
        this.pageSize = res.results.length
        this.total = res.total_pages
      }
    })
    


}

}
