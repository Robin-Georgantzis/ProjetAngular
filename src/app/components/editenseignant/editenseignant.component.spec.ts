import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditenseignantComponent } from './editenseignant.component';

describe('EditenseignantComponent', () => {
  let component: EditenseignantComponent;
  let fixture: ComponentFixture<EditenseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditenseignantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditenseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
