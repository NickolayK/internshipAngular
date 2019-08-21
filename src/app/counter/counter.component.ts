import { Component, OnInit , ChangeDetectorRef, ChangeDetectionStrategy , ApplicationRef ,} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count = 0;
  

  constructor(private cdr: ChangeDetectorRef , private appRef : ApplicationRef) {
    setTimeout(() => {
      this.count ++;
      // this.appRef.tick();
      // this.cdr.detach();
    }, 1000);

    setTimeout(() => {
      this.count ++;

    }, 2000);
    setTimeout(() => {
      this.count ++;

    }, 2500);
    setTimeout(() => {
      this.count ++;
      this.appRef.tick();
      this.cdr.detectChanges();
    }, 6000);
    setTimeout(() => {
      this.count ++;
      this.cdr.markForCheck();
    }, 7000);
    setTimeout(() => {
      this.count ++;
      this.cdr.detectChanges();
    }, 8000);
  }

  ngOnInit() {
  }

}
