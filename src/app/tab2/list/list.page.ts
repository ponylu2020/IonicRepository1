import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public title: Observable<string>;

  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public route: ActivatedRoute) {

  }


  ngOnInit() {
    this.title = this.route.paramMap
      .pipe(map(params => params.get('title') || 'None'));
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
