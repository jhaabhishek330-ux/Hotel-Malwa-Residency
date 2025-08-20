import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardSubtitle, MatCardTitle } from '@angular/material/card';  // ✅ Correct import
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-booking',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatIconModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking {

}
