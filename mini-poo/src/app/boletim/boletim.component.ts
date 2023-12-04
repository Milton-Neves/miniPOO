import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';

class Boletim {
  bim1: number;
  bim2: number;

  constructor(bim1: number, bim2: number) {
    this.bim1 = bim1;
    this.bim2 = bim2;
  }

  calcularMediaParcial(): number {
    return (this.bim1 * 2 + this.bim2 * 3) / 5;
  }

  calcularMediaFinal(): number {
    const mediaParcial = this.calcularMediaParcial();
    if (mediaParcial < 60) {
      const af = 70;
      return (mediaParcial + af) / 2;
    } else {
      return mediaParcial;
    }
  }
}

@Component({
  selector: 'app-boletim',
  standalone: true,
  imports: [],
  templateUrl: './boletim.component.html',
  styleUrl: './boletim.component.css',
})
export class BoletimComponent implements OnInit {
  bim1: number = 0;
  bim2: number = 0;
  mediaParcial: number = 0;
  mediaFinal: number = 0;
  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    const boletim = new Boletim(70, 80);
    console.log('Média Parcial:', boletim.calcularMediaParcial());
    console.log('Média Final:', boletim.calcularMediaFinal());
  }
  calcularMedias(): void {
    const boletim = new Boletim(this.bim1, this.bim2);
    this.mediaParcial = boletim.calcularMediaParcial();
    this.mediaFinal = boletim.calcularMediaFinal();
  }
}
