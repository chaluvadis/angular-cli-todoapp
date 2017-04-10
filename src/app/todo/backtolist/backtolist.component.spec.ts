import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktolistComponent } from './backtolist.component';

describe('BacktolistComponent', () => {
  let component: BacktolistComponent;
  let fixture: ComponentFixture<BacktolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacktolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
