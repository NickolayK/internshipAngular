import { Component, OnInit , ChangeDetectionStrategy , Input} from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() todos : any;

  get runChangeDetection() {
    console.log('TodosComponent - Checking the view');
    return true;
  }
}
