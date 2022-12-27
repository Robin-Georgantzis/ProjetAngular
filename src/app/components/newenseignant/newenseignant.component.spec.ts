import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewenseignantComponent } from './newenseignant.component';

describe('NewenseignantComponent', () => {
  let component: NewenseignantComponent;
  let fixture: ComponentFixture<NewenseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewenseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
