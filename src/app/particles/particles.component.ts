// particles.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {
  particles: Array<{
    size: number;
    posX: number;
    posY: number;
    duration: number;
    delay: number;
    opacity: number;
  }> = [];

  ngOnInit() {
    this.generateParticles(50); // Número de partículas
  }

  generateParticles(count: number) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        size: Math.random() * 5 + 1, // Tamaño entre 1-6px
        posX: Math.random() * 100, // Posición horizontal aleatoria
        posY: Math.random() * 100, // Posición vertical aleatoria
        duration: Math.random() * 10 + 10, // Duración animación 10-20s
        delay: Math.random() * 5, // Retardo inicial 0-5s
        opacity: Math.random() * 0.5 + 0.3 // Opacidad 0.3-0.8
      });
    }
  }
}