import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCardComponent } from './show-card/show-card.component';
import { MaterialsModule } from 'src/app/materials/materials.module';



@NgModule({
  declarations: [
    ShowCardComponent
  ],
  imports: [
    MaterialsModule,
    CommonModule
  ],
  exports: [ShowCardComponent]
})
export class DumyComponentsModule { }
