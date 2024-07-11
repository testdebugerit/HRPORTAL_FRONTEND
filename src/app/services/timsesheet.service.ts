import { HttpClient } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class TimeSheet{
   private http=inject(HttpClient)
 
   getTimsesheet(){
    return this.http.get('http://localhost:8000/api/timsesheet')
   }
}