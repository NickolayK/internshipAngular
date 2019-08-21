import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'internship';
  config = {
    position: 'top'
  };

  items = [];
  items$ = new BehaviorSubject(this.items);

  todos = [{ title: 'One' }, { title: 'Two' }];

  add() {
    this.todos = [...this.todos, { title: 'Three' }];
  }
  onClick() {
    this.config = {
      position: 'bottom'
    }
  }
  onSubmit(){
    console.log('submit')
  }
}
