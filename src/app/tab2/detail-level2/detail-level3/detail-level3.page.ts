import { OnInit, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Book, Rendition } from 'epubjs';
import { NavParams } from '@ionic/angular';
import { NavItem } from 'epubjs/types/navigation';

@Component({
  selector: 'app-detail-level3',
  templateUrl: './detail-level3.page.html',
  styleUrls: ['./detail-level3.page.scss'],
})


export class DetailLevel3Page implements OnInit {

  @Input() id: string;
  @Input() title: string;
  public book: Book;
  public navItemList: NavItem[];
  public rendition:Rendition;

  constructor(private route: ActivatedRoute, private platform: Platform,
              public navParams: NavParams) {
    this.id = this.navParams.get('id');
    //this.title = this.navParams.get('title');
  }

  ngOnInit() {
    this.openEpub();
  }

  openEpub() {
    this.book = new Book('../../assets/1.epub');
    this.rendition = this.book.renderTo('area', { flow: 'scrolled-continuous'});
    this.rendition.display();

    this.book.loaded.metadata.then((data) => {
      this.title = data.title;
    });
/* 
    this.book.loaded.navigation.then((toc) => {
        toc.forEach((chapter) => {
          this.navItemList.push(chapter);
          return {};
        });
        return;
    }); */

    this.createMenu();
  }

  createMenu(){

    this.book.loaded.navigation.then(function(toc){
      var $nav = document.getElementById("toc"),
          docfrag = document.createDocumentFragment();
      var addTocItems =  (parent, tocItems) =>{
        var $ul = document.createElement("ul");
        tocItems.forEach(function(chapter) {
          var item = document.createElement("li");
          var link = document.createElement("a");
          link.textContent = chapter.label;
          link.href = chapter.href;
          item.appendChild(link);
          if (chapter.subitems) {
            addTocItems(item, chapter.subitems)
          }
          link.onclick = ()=>{
            var url = link.getAttribute("href");
            this.rendition.display(url);
            return false;
          };
          $ul.appendChild(item);
        });
        parent.appendChild($ul);
      };
      addTocItems(docfrag, toc);
      $nav.appendChild(docfrag);
    });
  }

  prevPage() {
    this.book.rendition.prev();
  }

  nextPage() {
    this.book.rendition.next();
  }

  dismissModal() {
    this.navParams.data.modal.dismiss();
  }
  
  displayContent(navItem: NavItem) {

    
  }
}
