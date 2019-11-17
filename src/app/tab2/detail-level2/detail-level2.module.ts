import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailLevel2Page } from './detail-level2.page';

const routes: Routes = [
  {
    path: '',
    component: DetailLevel2Page
  },
  {
    path: 'DetailLevel3',
    loadChildren: () => import('../detail-level3/detail-level3.module').then(m => m.DetailLevel3PageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailLevel2Page]
})
export class DetailLevel2PageModule {}
