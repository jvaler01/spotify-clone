import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private readonly currentTime = new Date()
  private readonly currentHour = this.currentTime.getHours()
  
  greeting: string = "";
  
  ngOnInit(): void {
    if (this.currentHour < 12) {
      this.greeting = "Buenos días"
    } else if (this.currentHour < 18) {
      this.greeting = "Buenas tardes"
    } else {
      this.greeting = "Buenas noches"
    }
  }
}
