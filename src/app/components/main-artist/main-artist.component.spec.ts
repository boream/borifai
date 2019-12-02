import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArtistComponent } from './main-artist.component';

describe('MainArtistComponent', () => {
  let component: MainArtistComponent;
  let fixture: ComponentFixture<MainArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
