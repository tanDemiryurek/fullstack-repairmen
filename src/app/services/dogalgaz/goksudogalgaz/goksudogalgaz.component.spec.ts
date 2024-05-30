import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoksudogalgazComponent } from './goksudogalgaz.component';

describe('GoksudogalgazComponent', () => {
  let component: GoksudogalgazComponent;
  let fixture: ComponentFixture<GoksudogalgazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoksudogalgazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoksudogalgazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
