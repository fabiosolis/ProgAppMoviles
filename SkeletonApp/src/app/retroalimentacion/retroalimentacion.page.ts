import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retroalimentacion',
  templateUrl: './retroalimentacion.page.html',
  styleUrls: ['./retroalimentacion.page.scss'],
})
export class RetroalimentacionPage implements OnInit {

  // Ejemplos
  feedbacks: Array<{ date: Date; comment: string }> = [
    { date: new Date('2024-10-01'), comment: 'Gran mejora en la comprensión de los conceptos básicos de movimiento.' },
    { date: new Date('2024-10-15'), comment: 'Continúa trabajando en la resolución de problemas complejos. Poner enfásis en la práctica de resolución con decimales' },
    { date: new Date('2024-11-01'), comment: 'Excelente desempeño en el último examen.' },
  ];
  
  constructor() {}

  ngOnInit() {

    console.log('RetroalimentaciónPage cargada');
  }


}