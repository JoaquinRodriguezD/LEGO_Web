import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiBolsaComponent } from './mi-bolsa.component';

describe('MiBolsaComponent', () => {
  let component: MiBolsaComponent;
  let fixture: ComponentFixture<MiBolsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiBolsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
