import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntfoundComponent } from './ontfound.component';

describe('OntfoundComponent', () => {
  let component: OntfoundComponent;
  let fixture: ComponentFixture<OntfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OntfoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OntfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
