import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesError403Component } from './pages-error403.component';

describe('PagesError403Component', () => {
  let component: PagesError403Component;
  let fixture: ComponentFixture<PagesError403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesError403Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesError403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
