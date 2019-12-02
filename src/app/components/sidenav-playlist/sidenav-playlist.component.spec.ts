import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavPlaylistComponent } from './sidenav-playlist.component';

describe('SidenavPlaylistComponent', () => {
  let component: SidenavPlaylistComponent;
  let fixture: ComponentFixture<SidenavPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
