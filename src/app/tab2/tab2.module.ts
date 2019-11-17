import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: Tab2Page
      },
      {
        path: 'DetailLevel1',
        loadChildren: () => import('./detail-level1/detail-level1.module').then(m => m.DetailLevel1PageModule)
      }
    ])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule { }
