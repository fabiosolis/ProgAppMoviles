import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})
export class PerfilEstudiantePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  student = {
    name: 'Juan Pérez',
    subtitle: 'Estudiante de Matemáticas',
    email: 'juan.perez@example.com',
    age: 16,
    overallProgress: 75,
    description: 'Juan es un estudiante entusiasta con un gran interés en resolver problemas matemáticos complejos. Actualmente está enfocado en mejorar sus habilidades en álgebra y geometría.',
    interests: ['Álgebra', 'Geometría', 'Estadística'],
    recentAchievements: [
      'Primer lugar en la competencia de matemáticas de la escuela',
      'Completó el curso de Álgebra Avanzada',
      'Participación en el taller de resolución de problemas'
    ]
  };

  sendMessage() {
    // Aquí se puede agregar lógica para enviar un mensaje al estudiante
    console.log('Enviar mensaje a', this.student.name);
  }

  viewProgressDetails() {
    // Navegar a la página de detalles del progreso del estudiante
    console.log('Ver detalles del progreso para', this.student.name);
  }
}

