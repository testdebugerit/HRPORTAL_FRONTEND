import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../validators/confirm-password.validators';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export default class RegisterComponent implements OnInit{
  fb=inject(FormBuilder);
authService=inject(AuthService);
router=inject(Router)
  registerForm!:FormGroup;
 
  ngOnInit(): void {
      this.registerForm=this.fb.group({
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        email:['',Validators.compose([Validators.required,Validators.email])],
        userName:['',Validators.required],
        password:['',Validators.required],
        confirmPassword:['',Validators.required]
          },
          {
        validator:confirmPasswordValidator('password','confirmPassword')    
          }
        )
  }
register(){
this.authService.registerService(this.registerForm.value)
.subscribe({
  next:(res)=>{
    alert("user created");
    this.registerForm.reset();
    this.router.navigate(['login'])
  },
  error:(err)=>{
    console.log(err);
  }
})


  //console.log(this.registerForm.value)
}
}
