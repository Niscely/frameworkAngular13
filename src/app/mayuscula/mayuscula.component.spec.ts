import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayusculaComponent } from './mayuscula.component';

describe('MayusculaComponent', () => {
  let component: MayusculaComponent;
  let fixture: ComponentFixture<MayusculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayusculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayusculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
