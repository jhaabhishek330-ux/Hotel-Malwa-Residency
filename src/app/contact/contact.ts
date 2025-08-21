import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-contact',
  imports: [MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCard, MatCardModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

}
