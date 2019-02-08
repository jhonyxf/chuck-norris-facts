import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckNorrisFactComponent } from './chuck-norris-fact.component';

describe('ChuckNorrisFactComponent', () => {
  let component: ChuckNorrisFactComponent;
  let fixture: ComponentFixture<ChuckNorrisFactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckNorrisFactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckNorrisFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
