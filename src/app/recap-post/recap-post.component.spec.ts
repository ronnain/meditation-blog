import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapPostComponent } from './recap-post.component';

describe('RecapPostComponent', () => {
  let component: RecapPostComponent;
  let fixture: ComponentFixture<RecapPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
