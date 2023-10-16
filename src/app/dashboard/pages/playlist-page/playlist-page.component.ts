import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.scss']
})
export class PlaylistPageComponent implements OnInit, OnDestroy {
  id: string = '0';
  private routeSub: Subscription = new Subscription;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    })
  }
  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
