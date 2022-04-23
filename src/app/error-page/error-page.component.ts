import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  code!: string;
  ngOnInit(): void {
    const params = this.route.snapshot.queryParams;
    const code = (params as { code: string }).code;
    if (code === '500') {
      this.code = '500';
    } else {
      this.code = 'UNKNOWN';
    }
  }
}
