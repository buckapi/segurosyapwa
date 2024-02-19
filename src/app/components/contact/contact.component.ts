import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(
    public global:GlobalService
  ){}

}
