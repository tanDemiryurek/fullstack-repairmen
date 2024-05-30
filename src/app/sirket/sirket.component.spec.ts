import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirketComponent } from './sirket.component';

describe('SirketComponent', () => {
  let component: SirketComponent;
  let fixture: ComponentFixture<SirketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SirketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SirketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});