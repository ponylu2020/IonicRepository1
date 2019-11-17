import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public selectedItem = '具体条文';

  public menuItemsLevel = [
    { id: '1', title: '大气环境损害鉴定评估相关法律法规与标准' },
    { id: '2', title: '水生态环境损害鉴定评估相关法律法规与标准' },
    { id: '3', title: '海洋生态环境损害鉴定评估相关法律法规与标准' },
    { id: '4', title: '土壤生态环境损害鉴定评估法律法规与标准' },
    { id: '5', title: '生态损害鉴定评估法律法规与标准' },
    { id: '6', title: '噪声、辐射、地震等环境损害鉴定评估相关法律法规与标准' },
    { id: '7', title: '其它法律法规与标准' },
    { id: '8', title: '最新法律法规与标准' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  gotoDetail(id: string, title: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: { id, title },
      relativeTo: this.route,
    };
    // Navigate to the login page with extras
    this.router.navigate(['./DetailLevel1'], navigationExtras);
  }
}
