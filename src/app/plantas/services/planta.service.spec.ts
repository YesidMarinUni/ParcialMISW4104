/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantaServiceService } from './planta.service';

describe('Service: PlantaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantaServiceService]
    });
  });

  it('should ...', inject([PlantaServiceService], (service: PlantaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
