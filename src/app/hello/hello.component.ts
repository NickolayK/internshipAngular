import { Component, OnInit, Input , ChangeDetectionStrategy} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./hello.component.scss']
  
})
export class HelloComponent implements OnInit {

  count = 0;
  add() {
    this.count++;
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
  constructor( private http : HttpClient) {
    setTimeout(() => this.count = 5, 0);

    setInterval(() => this.count ++ , 100);

    Promise.resolve().then(() => this.count = 5); 

  }

  ngOnInit() {
  }

}
