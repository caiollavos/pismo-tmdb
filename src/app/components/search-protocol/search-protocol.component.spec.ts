import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProtocolComponent } from './components/earch-protocol.component';

describe('SearchProtocolComponent', () => {
  let component: SearchProtocolComponent;
  let fixture: ComponentFixture<SearchProtocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProtocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
