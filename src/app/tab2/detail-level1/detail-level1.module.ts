import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailLevel1Page } from './detail-level1.page';

const routes: Routes = [
  {
    path: '',
    component: DetailLevel1Page
  },
  {
    path: 'DetailLevel2',
    loadChildren: () => import('../detail-level2/detail-level2.module').then(m => m.DetailLevel2PageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailLevel1Page]
})
export class DetailLevel1PageModule {}
