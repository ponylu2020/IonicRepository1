import { OnInit, Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import Epub, { Book, Rendition } from 'epubjs';
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
  public rendition: Rendition;

  constructor(private route: ActivatedRoute, private platform: Platform,
              public navParams: NavParams) {
    this.id = this.navParams.get('id');
  }

  ngOnInit() {
    this.openEpub();
    document.getElementById('file_input').onchange(()=>{   
       var file = this.files[0];
         if (window.FileReader) {    
                  var reader = new FileReader();    
                  reader.readAsDataURL(file);    
                  //监听文件读取结束后事件    
                reader.onloadend = function (e) {
                  $(".img").attr("src",e.target.result);    //e.target.result就是最后的路径地址
                  };    
             } 
      });

  }

  openEpub() {
    this.book = Epub('../../assets/1.epub');
    this.rendition = this.book.renderTo('area', { flow: 'scrolled-continuous' });
    this.rendition.display();

    this.book.loaded.metadata.then((data) => {
      this.title = data.title;
    });
    this.createMenu();
  }

    createMenu() {
    this.book.loaded.navigation.then( (toc) =>{
      const $nav = document.getElementById('toc'),
        docfrag = document.createDocumentFragment();
        const addTocItems = (parent, tocItems) => {
        const $ul = document.createElement ("ul");
        tocItems.forEach(function (chapter) {
          const item = document.createElement("li");
          const link = document.createElement("a");
          link.textContent = chapter.label;
          link.href = chapter.href;
          item.appendChild(link);
          if (chapter.subitems) {
            addTocItems(item, chapter.subitems)
          }
          link.onclick = () => {
            const url = link.getAttribute('href');
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
