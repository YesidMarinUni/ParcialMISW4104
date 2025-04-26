import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { ListarPlantaComponent } from './listar-planta.component';
import { PlantaService } from '../../services/planta.service';
import { Planta } from '../../models/plantas.model';

describe('ListarPlantaComponent', () => {
  let component: ListarPlantaComponent;
  let fixture: ComponentFixture<ListarPlantaComponent>;

  // mock data: 3 plantas
  const mockPlantas: Planta[] = [
    new Planta(1, 'Lengua de vaca', 'Sansevieria Trifasciata', 'Interior', 140, 'Templado, cálido', 'Tierra orgánica con buen drenaje, arena, cascarilla de arroz'),
    new Planta(2, 'Chachafruto', 'Schefflera actinophylla', 'Exterior', 1000, 'Todos', 'Sustrato para huerto'),
    new Planta(3, 'Espatifilo', 'Spathiphyllum Wallasii', 'Interior', 65, 'Templado, cálidodo', 'Tierra orgánica')
  ];

  class MockPlantaService {
    getPlantas() {
      return of(mockPlantas);
    }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPlantaComponent ],
      providers: [
        { provide: PlantaService, useClass: MockPlantaService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Listado de 3 plantas, se crea encabazado y 3 filas ', () => {

    const headerRows = fixture.debugElement.queryAll(By.css('table thead tr'));
    expect(headerRows.length).toBe(1, 'should have one header row');

    const bodyRows = fixture.debugElement.queryAll(By.css('table tbody tr'));
    expect(bodyRows.length).toBe(3, 'should render three data rows');
    expect(bodyRows[0].nativeElement.textContent).toContain('Lengua de vaca');
    expect(bodyRows[1].nativeElement.textContent).toContain('Chachafruto');
    expect(bodyRows[2].nativeElement.textContent).toContain('Espatifilo');
  });
});