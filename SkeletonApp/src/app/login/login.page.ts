import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  
  constructor(private authService: AuthService, private navCtrl: NavController) {}

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      response => {
        // Manejar la respuesta del login
        this.navCtrl.navigateRoot('/home');
      },
      error => {
        // Manejar el error del login
        console.error(error);
      }
    );
  }
}
