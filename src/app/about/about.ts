import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatIconModule], // Required for <mat-icon> and directives
  templateUrl: './about.html',
  styleUrls: ['./about.scss'] // ✅ fixed typo
})
export class About { }  // Keep class name as About
