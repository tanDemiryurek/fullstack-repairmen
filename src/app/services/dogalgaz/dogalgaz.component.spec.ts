import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogalgazComponent } from './dogalgaz.component';

describe('DogalgazComponent', () => {
  let component: DogalgazComponent;
  let fixture: ComponentFixture<DogalgazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogalgazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogalgazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
