import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { virtualRouter } from '../../services/virtualRouter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-detail.component.html',
  styleUrl: './services-detail.component.css'
})
export class ServicesDetailComponent {
  constructor(
    public global: GlobalService,
    public virtualRouter: virtualRouter
  ){}

}
