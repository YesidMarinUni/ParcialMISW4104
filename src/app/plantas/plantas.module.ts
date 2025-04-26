import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasComponent } from './plantas.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantaService } from './services/planta.service';
import { ListarPlantaComponent } from './components/listar-planta/listar-planta.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    PlantasComponent,
    ListarPlantaComponent
  ],
  exports: [
    PlantasComponent,
    ListarPlantaComponent
  ],
  providers: [
    PlantaService
  ],
})
export class PlantasModule { }
