import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { virtualRouter } from '../../services/virtualRouter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.css'
})
export class PromotionsComponent {
  constructor(
    public global:GlobalService,
    public virtualRouter: virtualRouter
  ){}

}
