import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddPlaylistComponent } from './popup-add-playlist.component';

describe('PopupAddPlaylistComponent', () => {
  let component: PopupAddPlaylistComponent;
  let fixture: ComponentFixture<PopupAddPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAddPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAddPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
