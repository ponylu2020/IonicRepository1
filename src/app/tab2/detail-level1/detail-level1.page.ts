import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-detail-level1',
  templateUrl: './detail-level1.page.html',
  styleUrls: ['./detail-level1.page.scss'],
})
export class DetailLevel1Page implements OnInit {

  public menuItemsLevel = [
    {
      id: '1',
      title: [
        { id: '1/1', title: '大气环境损害鉴定评估相关法律法规' },
        { id: '1/2', title: '大气环境损害鉴定评估相关国家标准' },
        { id: '1/3', title: '大气环境损害鉴定评估相关地方标准选录' }
      ]
    },
    {
      id: '2',
      title: [
        { id: '2/1', title: '水生态环境损害鉴定评估相关法律法规' },
        { id: '2/2', title: '水质及工业水污染物排放国家标准' },
        { id: '2/3', title: '水质及污水排放地方标准选录' }
      ]
    },
    {
      id: '3',
      title: [
        { id: '3/1', title: '海洋生态环境损害鉴定评估相关法律法规' },
        { id: '3/2', title: '海洋监测规范' },
        { id: '3/3', title: '海洋监测技术规程' },
        { id: '3/4', title: '渔业生态环境监测规范' },
        { id: '3/5', title: '海洋渔业生态环境标准' }
      ]
    },
    {
      id: '4',
      title: [
        { id: '4/1', title: '土壤生态环境损害鉴定评估相关法律法规' },
        { id: '4/2', title: '土壤环境与固废污染防治标准' }
      ]
    },
    {
      id: '5',
      title: [
        { id: '5/1', title: '生态损害鉴定评估相关法律法规' },
        { id: '5/2', title: '生态损害鉴定评估相关标准' }
      ]
    },
    {
      id: '6',
      title: [
        { id: '6/1', title: '噪声、辐射、地震等环境损害鉴定评估相关法律法规' },
        { id: '6/2', title: '噪声辐射与地震减灾等国家标准' }
      ]
    },
    {
      id: '7',
      title: [
        { id: '7/1', title: '大气环境损害鉴定评估相关法律法规' },
        { id: '7/2', title: '大气环境损害鉴定评估相关国家标准' },
        { id: '7/3', title: '大气环境损害鉴定评估相关地方标准选录' }
      ]
    },
    {
      id: '8',
      title: [
        { id: '8/1', title: '水生态环境损害鉴定评估相关法律法规' },
        { id: '8/2', title: '水质及工业水污染物排放国家标准' },
        { id: '8/3', title: '水质及污水排放地方标准选录' }
      ]
    }
  ];

  public id: string;
  public title: string;
  public listItems: any[];

  constructor(private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.title = this.route.snapshot.queryParamMap.get('title');
    this.listItems = this.menuItemsLevel.find(item => item.id == this.id).title;
  }

  gotoDetail(id: number,title: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: { id, title },
      relativeTo: this.route,
    };
    // Navigate to the login page with extras
    this.router.navigate(['./DetailLevel2'], navigationExtras);
  }
}