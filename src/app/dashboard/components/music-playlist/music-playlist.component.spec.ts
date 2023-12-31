import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlaylistComponent } from './music-playlist.component';

describe('MusicPlaylistComponent', () => {
  let component: MusicPlaylistComponent;
  let fixture: ComponentFixture<MusicPlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MusicPlaylistComponent]
    });
    fixture = TestBed.createComponent(MusicPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
