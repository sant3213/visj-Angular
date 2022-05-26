import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graph2dComponent } from './graph2d.component';

describe('Graph2dComponent', () => {
  let component: Graph2dComponent;
  let fixture: ComponentFixture<Graph2dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graph2dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graph2dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
