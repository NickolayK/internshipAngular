import { Component, OnInit , Input ,ChangeDetectionStrategy} from '@angular/core';
import { Observable } from 'rxjs' 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input() items: Observable<any[]>;
  _items: any[];

  ngOnInit() {
    this.items.subscribe(items => {
      this._items = items;
      console.log(this._items)
    });
  }
}
