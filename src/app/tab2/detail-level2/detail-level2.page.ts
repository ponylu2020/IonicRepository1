import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetailLevel3Page } from './detail-level3/detail-level3.page';


@Component({
  selector: 'app-detail-level2',
  templateUrl: './detail-level2.page.html',
  styleUrls: ['./detail-level2.page.scss'],
})
export class DetailLevel2Page implements OnInit {

  public menuItemsLevel = [
    {
      id: '1/1',
      title: [
        { id: '1/1/1', title: '具体法律条文111' },
        { id: '1/1/2', title: '具体法律条文112' },
        { id: '1/1/3', title: '具体法律条文113' }
      ]
    },
    {
      id: '1/2',
      title: [
        { id: '1/2/1', title: '具体法律条文121' },
        { id: '1/2/2', title: '具体法律条文122' },
        { id: '1/2/3', title: '具体法律条文123' }
      ]
    },
    {
      id: '1/3',
      title: [
        { id: '1/3/1', title: '具体法律条文131' },
        { id: '1/3/2', title: '具体法律条文132' },
        { id: '1/3/3', title: '具体法律条文133' }
      ]
    },
    {
      id: '2/1',
      title: [
        { id: '2/1/1', title: '具体法律条文211' },
        { id: '2/1/2', title: '具体法律条文212' },
        { id: '2/1/3', title: '具体法律条文213' }
      ]
    },
    {
      id: '2/2',
      title: [
        { id: '2/2/1', title: '具体法律条文221' },
        { id: '2/2/2', title: '具体法律条文222' },
        { id: '2/2/3', title: '具体法律条文223' }
      ]
    },
    {
      id: '2/3',
      title: [
        { id: '2/3/1', title: '具体法律条文231' },
        { id: '2/3/2', title: '具体法律条文232' },
        { id: '2/3/3', title: '具体法律条文233' }
      ]
    }
  ];

  public id: string;
  public title: string;
  public listItems: any[];

  constructor(private router: Router, private route: ActivatedRoute,
              public modalController: ModalController) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.title = this.route.snapshot.queryParamMap.get('title');
    this.listItems = this.menuItemsLevel.find(item => item.id === this.id).title;
  }

/*   gotoDetail(id: number, title: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: { id, title },
      relativeTo: this.route,
    };
    // Navigate to the login page with extras
   this.router.navigate(['./DetailLevel3'], navigationExtras);
  } */
  async presentModal(id: number, title: string) {
    const modal = await this.modalController.create({
      component: DetailLevel3Page,
      componentProps: {
        id,
        title
      }

    });
    return await modal.present();
  }
}
