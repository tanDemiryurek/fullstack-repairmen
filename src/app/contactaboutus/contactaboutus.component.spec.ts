import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactaboutusComponent } from './contactaboutus.component';

describe('ContactaboutusComponent', () => {
  let component: ContactaboutusComponent;
  let fixture: ComponentFixture<ContactaboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactaboutusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
