import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup; 
  isLoading: boolean = false;


  constructor(private navCtrl: NavController, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

  }

  ngOnInit() {
    console.log('Login page iniciado');
  }

  irRegistro() {
    this.navCtrl.navigateForward('/registro');
  }
  handleButtonclick() {
    if(this.loginForm.valid) {
      console.log("Datos del formulario:", this.loginForm.value);
      this.showloadingindicator();
      setTimeout(() => {
        this.irDashboard();
      }, 3150);

    }
    else {
      console.log("Formulario inválido");
    }
  }
  
  showloadingindicator() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }
    ,3000)
  }
  irDashboard() {
    this.navCtrl.navigateForward('/dashboard');
  }
}