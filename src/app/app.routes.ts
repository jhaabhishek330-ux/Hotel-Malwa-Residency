// app/app.routes.ts
import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Rooms } from './rooms/rooms';
import { Gallery } from './gallery/gallery';
import { Contact } from './contact/contact';
import { Booking } from './booking/booking';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'rooms', component: Rooms },
  { path: 'gallery', component: Gallery },
  { path: 'booking', component: Booking },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' } // fallback to Home
];
