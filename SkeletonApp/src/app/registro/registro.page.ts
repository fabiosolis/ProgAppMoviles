import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController, 
    private router: Router 
  ) {
    this.registroForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.registroForm.valid) {
      const formData = this.registroForm.value;

      

      
      const toast = await this.toastController.create({
        message: 'Registro exitoso. Será redirigido para poder iniciar sesión.',
        duration: 2000, 
        position: 'middle',
      });
      await toast.present();

      
      setTimeout(() => {
        this.router.navigate(['/login']); 
      }, 2000); 
    }
  }
}