import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogalgaztesisatciustasiComponent } from './dogalgaztesisatciustasi.component';

describe('DogalgaztesisatciustasiComponent', () => {
  let component: DogalgaztesisatciustasiComponent;
  let fixture: ComponentFixture<DogalgaztesisatciustasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogalgaztesisatciustasiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogalgaztesisatciustasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
