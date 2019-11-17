import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Book } from 'epubjs';

@Component({
  selector: 'app-detail-level3',
  templateUrl: './detail-level3.page.html',
  styleUrls: ['./detail-level3.page.scss'],
})


export class DetailLevel3Page implements OnInit {

  public id: string;
  public title: string;
  public book: Book;

  constructor(private route: ActivatedRoute, private platform: Platform) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('id');
    this.title = this.route.snapshot.queryParamMap.get('title');
    this.openPdf();
  }

  openPdf() {
    this.book = new Book('../../assets/1.epub');
    const rendition = this.book.renderTo('area', { flow: 'scrolled-doc' });
    //this.hideTabs();
    const displayed = rendition.display();
  }
  hideTabs() {

    const tabBar = document.getElementById('ion-tabs-main');
    tabBar.style.transition = 'visibility 500ms, opacity 500ms,margin-bottom 200ms';
    tabBar.style.visibility = 'hidden';
    tabBar.style.opacity = '0';
    setTimeout(() => {
      tabBar.style['margin-bottom'] = '-60px';

    }, 500);
  }
  prevPage() {
    this.book.rendition.prev();
  }

  nextPage() {
    this.book.rendition.next();
  }
}
