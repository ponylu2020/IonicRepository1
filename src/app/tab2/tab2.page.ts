import { ListPage } from './list/list.page';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public selectedItem = '具体条文';

  public itemPages = [
    {
      title: '污染物性质鉴定',
      url: '/home',
      icon: 'home'
    },
    {
      title: '地表水和沉积物',
      url: '/list',
      icon: 'list'
    }];

  public menuItems = ['生态环境损害鉴定评估通用法律',
    '生态环境保护相关法规·规章及规范性文件',
    '生态环境监测监察相关法规·规章及规范性文件',
    '生态环境损害经济惩处与执法相关法规·规章及规范性文件',
    '生态环境损害执法相关法规·规章及规范性文件',
    '生态环境保护工业污染物排放标准',
    '生态环境保护清洁生产行业标准',
    '生态环境保护工程规划设计与损害鉴定标准',
    '大气环境损害鉴定评估相关法律法规与标准'];

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  gotoDetail(title: string){
    const navigationExtras: NavigationExtras = {
      queryParams: { detailTitle: title },
      relativeTo: this.route,
    };
    // Navigate to the login page with extras
    this.router.navigate(['/tabs/tab2/list', { id: '1', foo: 'foo' }]);
  }
}
