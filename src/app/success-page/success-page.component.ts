import { ExampleService } from './../example.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss'],
})
export class SuccessPageComponent implements OnInit {
  response!: string;
  constructor(private exampleService: ExampleService) {}

  ngOnInit(): void {}

  callExample() {
    this.exampleService.exampleCall().subscribe((res) => {
      console.log(res);
      this.response = JSON.stringify(res);
    });
  }
}
