import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import { virtualRouter } from '../../services/virtualRouter.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(
  public global:GlobalService,
  public virtualRouter: virtualRouter
){}
}
