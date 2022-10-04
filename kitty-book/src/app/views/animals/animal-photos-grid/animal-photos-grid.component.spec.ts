import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPhotosGridComponent } from './animal-photos-grid.component';

describe('AnimalPhotosGridComponent', () => {
  let component: AnimalPhotosGridComponent;
  let fixture: ComponentFixture<AnimalPhotosGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalPhotosGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalPhotosGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
