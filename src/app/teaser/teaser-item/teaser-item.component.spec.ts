import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserItemComponent } from './teaser-item.component';

describe('TeaserItemComponent', () => {
  let component: TeaserItemComponent;
  let fixture: ComponentFixture<TeaserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaserItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
