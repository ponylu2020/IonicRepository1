import { OnInit, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Book } from 'epubjs';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail-level3',
  templateUrl: './detail-level3.page.html',
  styleUrls: ['./detail-level3.page.scss'],
})


export class DetailLevel3Page implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() parentCtrl: any;
  public book: Book;

  constructor(private route: ActivatedRoute, private platform: Platform,
              public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.title = this.navParams.get('title');
    this.parentCtrl = this.navParams.get('parentCtrl');
  }

  ngOnInit() {
    this.openEpub();
  }

  openEpub() {
    this.book = new Book('../../assets/1.epub');
    const rendition = this.book.renderTo('area', { flow: 'scrolled-doc' });
    rendition.display();
  }

  prevPage() {
    this.book.rendition.prev();
  }

  nextPage() {
    this.book.rendition.next();
  }

  dismissModal() {
    if (this.parentCtrl) {
      this.parentCtrl.dismiss().then(() => { this.parentCtrl = null; });
    }
  }

}
