import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DupDemoComponent } from './dup-demo.component';

describe('DupDemoComponent', () => {
  let component: DupDemoComponent;
  let fixture: ComponentFixture<DupDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DupDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
