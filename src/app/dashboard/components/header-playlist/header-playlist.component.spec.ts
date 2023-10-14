import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPlaylistComponent } from './header-playlist.component';

describe('HeaderPlaylistComponent', () => {
  let component: HeaderPlaylistComponent;
  let fixture: ComponentFixture<HeaderPlaylistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderPlaylistComponent]
    });
    fixture = TestBed.createComponent(HeaderPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
