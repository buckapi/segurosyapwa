import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { virtualRouter } from '../../services/virtualRouter.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-serguros-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './serguros-detail.component.html',
  styleUrl: './serguros-detail.component.css'
})
export class SergurosDetailComponent {
constructor (
 public global: GlobalService,
 public virtualRouter: virtualRouter
){}
}
