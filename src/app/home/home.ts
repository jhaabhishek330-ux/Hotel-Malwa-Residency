import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    RouterLink  // ✅ needed for routerLink in template
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']  // ✅ fixed (plural)
})
export class Home {}
