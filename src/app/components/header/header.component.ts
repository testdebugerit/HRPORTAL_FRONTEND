import { CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
//isLoggedIn: boolean=false;
authService=inject(AuthService)
isLoggedIn: boolean=false;
ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(res=>{
    this.isLoggedIn= this.authService.isLoggedIn() 
    })
}
logout(){
  localStorage.removeItem("user_id");
  this.authService.isLoggedIn$.next(false)
}
}
