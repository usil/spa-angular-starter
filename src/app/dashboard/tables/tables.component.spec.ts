import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashBoardMaterials } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TablesComponent } from './tables.component';

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashBoardMaterials, BrowserAnimationsModule],
      declarations: [TablesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
