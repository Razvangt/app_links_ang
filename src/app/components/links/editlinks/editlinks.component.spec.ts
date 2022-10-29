import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlinksComponent } from './editlinks.component';

describe('EditlinksComponent', () => {
  let component: EditlinksComponent;
  let fixture: ComponentFixture<EditlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditlinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
