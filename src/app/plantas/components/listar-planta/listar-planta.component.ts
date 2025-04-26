import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../../services/planta.service';
import { Planta } from '../../models/plantas.model';

@Component({
  selector: 'app-listar-planta',
  templateUrl: './listar-planta.component.html',
  styleUrls: ['./listar-planta.component.css'],
  standalone: false
})
export class ListarPlantaComponent implements OnInit {

  plantas: Planta[] = [];

  constructor(
    private plantaService: PlantaService
  ) { }

  ngOnInit() {
    this.getPlantas();
  }

  private getPlantas() {
    this.plantaService.getPlantas().subscribe({
      next: (data: Planta[]) => {
        this.plantas = data;
      },
      error: (err) => {
        console.error('Error fetching plantas:', err);
      }
    });
  }
}
