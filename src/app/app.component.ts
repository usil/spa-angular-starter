import { ExampleService } from './example.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
  clickSubscription!: Subscription;

  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {
    const click$ = fromEvent(document, 'click');
    this.clickSubscription = click$.pipe(debounceTime(500)).subscribe(() => {
      // this.exampleService.ping().subscribe();
      // here call to ping
    });
  }

  ngOnDestroy(): void {
    this.clickSubscription?.unsubscribe();
  }
  title = 'template-dashboard';
}
