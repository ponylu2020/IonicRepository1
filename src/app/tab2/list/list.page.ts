import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public title: string;

  constructor(public route: ActivatedRoute) {

  }


  ngOnInit() {
    this.title = this.route.snapshot.queryParamMap.get('detailTitle');
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
