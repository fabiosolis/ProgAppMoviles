import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Clase {
  id: number;
  fecha: string;
  tema: string;
}

@Component({
  selector: 'app-proximas-clases',
  templateUrl: './proximas-clases.page.html',
  styleUrls: ['./proximas-clases.page.scss'],
})
export class ProximasClasesPage {
  clases: Clase[] = [
    { id: 1, fecha: '2024-11-10T10:00:00', tema: 'Matemáticas' },
    { id: 2, fecha: '2024-11-12T14:00:00', tema: 'Ciencias' },
    { id: 3, fecha: '2024-11-15T16:00:00', tema: 'Inglés' },
  ];

  constructor(private alertController: AlertController) {}

  async confirmCancellation(claseId: number) {
    const alert = await this.alertController.create({
      header: 'Cancelar Clase',
      message: '¿Estás seguro de que deseas cancelar esta clase?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.cancelClass(claseId);
          },
        },
      ],
    });

    await alert.present();
  }

  cancelClass(claseId: number) {
    this.clases = this.clases.filter(clase => clase.id !== claseId);
  }
}
