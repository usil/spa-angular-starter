import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashBoardMaterials } from '../material/material.module';
import { FormsComponent } from './forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashBoardMaterials, BrowserAnimationsModule],
      declarations: [FormsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
