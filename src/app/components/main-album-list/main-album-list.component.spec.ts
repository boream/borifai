import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAlbumListComponent } from './main-album-list.component';

describe('MainAlbumListComponent', () => {
  let component: MainAlbumListComponent;
  let fixture: ComponentFixture<MainAlbumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAlbumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAlbumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
