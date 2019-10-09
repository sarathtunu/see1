import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprotalComponent } from './homeprotal.component';

describe('HomeprotalComponent', () => {
  let component: HomeprotalComponent;
  let fixture: ComponentFixture<HomeprotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeprotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeprotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
