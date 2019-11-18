import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailLevel2Page } from './detail-level2.page';
import { DetailLevel3Page } from './detail-level3/detail-level3.page';

const routes: Routes = [
  {
    path: '',
    component: DetailLevel2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailLevel2Page, DetailLevel3Page],
  entryComponents: [DetailLevel3Page]
})
export class DetailLevel2PageModule {}
