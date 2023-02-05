import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesSectionComponent } from './repositories-section.component';

describe('RepositoriesSectionComponent', () => {
  let component: RepositoriesSectionComponent;
  let fixture: ComponentFixture<RepositoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoriesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
