import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    CommonModule,       // <-- Add this
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss']
})
export class Rooms {
  rooms = [
    {
      name: 'Classic Deluxe Room',
      image: 'assets/649802809.jpg',
      description: 'Simplistically serene, air-conditioned comfort, white walls with golden yellow decor, attached bathroom, mini bar, unlimited Wi-Fi, TV, and 24-hour room service.',
      price: 2500,
      oldPrice: 3000,
      status: 'Available',
      stars: [true,true,true,true,false]
    },
    {
      name: 'Deluxe Room',
      image: 'assets/649802078.jpg',
      description: 'Spacious, modern decor, king-size bed, garden view, complimentary breakfast, and premium amenities for a relaxing stay.',
      price: 3500,
      oldPrice: null,
      status: 'Few Left',
      stars: [true,true,true,true,true]
    },
    {
      name: 'Premium Suite',
      image: 'assets/649802150.jpg',
      description: 'Luxury suite with living area, bathtub, exclusive services, and artistic interiors for VIP guests.',
      price: 5000,
      oldPrice: 6000,
      status: 'Sold Out',
      stars: [true,true,true,true,true]
    },
    {
      name: 'Standard Room',
      image: 'assets/649802505.jpg',
      description: 'Cozy, minimalistic room with balcony, modern amenities, and a peaceful ambiance for a restful stay.',
      price: 2000,
      oldPrice: null,
      status: 'Available',
      stars: [true,true,true,false,false]
    }
  ];
}
