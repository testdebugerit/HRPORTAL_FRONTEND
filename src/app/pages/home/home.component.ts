import { CommonModule } from '@angular/common';
import { Component, OnInit,inject } from '@angular/core';
import { TimeSheet } from '../../services/timsesheet.service';
import { UserCartComponent } from '../../user-cart/user-cart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,UserCartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit{
 private timeSheet=inject(TimeSheet)
ngOnInit(): void {
    this.gettimsesheets()
}
gettimsesheets()
{
  this.timeSheet.getTimsesheet()
    .subscribe({
      next:(res)=>{
        console.log(res)
      }
    })
}
}
