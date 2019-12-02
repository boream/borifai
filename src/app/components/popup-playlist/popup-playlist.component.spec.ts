import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPlaylistComponent } from './popup-playlist.component';

describe('PopupPlaylistComponent', () => {
  let component: PopupPlaylistComponent;
  let fixture: ComponentFixture<PopupPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
