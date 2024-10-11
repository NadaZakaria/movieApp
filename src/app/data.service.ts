import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }

  
  getTrendingMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmFhNGI3ZWFiZDQ3ZTlhODA2NWI0NmUyNGM4MDNkMSIsIm5iZiI6MTcyMjc4Nzg1OC4wNzQzNjUsInN1YiI6IjY2YThjZDhjZTc0Y2Y3Yjc2NGViYzViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q_18G2JzB_ws5fH3Yn-Hwuqy-elXzNdG9fUNpcI6ejw'
      }
    })
  }

  getCurrentPlaying(pageNum :number = 1):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNum}`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmFhNGI3ZWFiZDQ3ZTlhODA2NWI0NmUyNGM4MDNkMSIsIm5iZiI6MTcyMzA0NjEzNy42MzQwNDksInN1YiI6IjY2YThjZDhjZTc0Y2Y3Yjc2NGViYzViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T5mH_hd_Ees7KMKsX9Vc9aMbhhNnjnRlHYEUTfBJxtE'
      }
    })
  }

  getPopularMovies(pageNum :number = 1):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&${pageNum}`,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmFhNGI3ZWFiZDQ3ZTlhODA2NWI0NmUyNGM4MDNkMSIsIm5iZiI6MTcyMzA0NjEzNy42MzQwNDksInN1YiI6IjY2YThjZDhjZTc0Y2Y3Yjc2NGViYzViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T5mH_hd_Ees7KMKsX9Vc9aMbhhNnjnRlHYEUTfBJxtE'
      }
    })
  }

  getTopRatedMovies(pageNum :number = 1):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&${pageNum}`,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmFhNGI3ZWFiZDQ3ZTlhODA2NWI0NmUyNGM4MDNkMSIsIm5iZiI6MTcyMzA0NjEzNy42MzQwNDksInN1YiI6IjY2YThjZDhjZTc0Y2Y3Yjc2NGViYzViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T5mH_hd_Ees7KMKsX9Vc9aMbhhNnjnRlHYEUTfBJxtE'
      }
    })
  }

  getComingMovies(pageNum :number = 1):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&${pageNum}`,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmFhNGI3ZWFiZDQ3ZTlhODA2NWI0NmUyNGM4MDNkMSIsIm5iZiI6MTcyMzA0NjEzNy42MzQwNDksInN1YiI6IjY2YThjZDhjZTc0Y2Y3Yjc2NGViYzViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T5mH_hd_Ees7KMKsX9Vc9aMbhhNnjnRlHYEUTfBJxtE'
      }
    })
  }

  getSpecMovie(movie_id : string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,{
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmFhNGI3ZWFiZDQ3ZTlhODA2NWI0NmUyNGM4MDNkMSIsIm5iZiI6MTcyMjc4Nzg1OC4wNzQzNjUsInN1YiI6IjY2YThjZDhjZTc0Y2Y3Yjc2NGViYzViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q_18G2JzB_ws5fH3Yn-Hwuqy-elXzNdG9fUNpcI6ejw'
      }
    })
  }
}
