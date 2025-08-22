import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    RouterLink,
    NgFor,
    MatButtonModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  // Hero Section content
  hero = {
    title: 'Welcome to Hotel Malwa Residency',
    subtitle: 'Your Luxury Stay in Ujjain',
    tagline: 'Where modern comfort meets timeless tradition.'
  };

  // Highlights Section content
  highlights = [
    {
      title: 'Luxury Rooms',
      description: 'Minimalistic, serene, air-conditioned rooms with premium bedding and modern décor.',
      image: 'assets/626272123.jpg'
    },
    {
      title: 'Fine Dining',
      description: 'Enjoy curated delicacies at our in-house restaurant with local & international cuisines.',
      image: 'assets/649795956.jpg'
    },
    {
      title: 'Modern Amenities',
      description: 'Free Wi-Fi, conference rooms, fitness gym, and 24/7 front desk for your convenience.',
      image: 'assets/649796670.jpg'
    }
  ];
}
