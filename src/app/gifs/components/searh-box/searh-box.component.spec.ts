import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhBoxComponent } from './searh-box.component';

describe('SearhBoxComponent', () => {
  let component: SearhBoxComponent;
  let fixture: ComponentFixture<SearhBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearhBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearhBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
