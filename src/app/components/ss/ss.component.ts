import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { virtualRouter } from '../../services/virtualRouter.service';

@Component({
  selector: 'app-ss',
  standalone: true,
  imports: [],
  templateUrl: './ss.component.html',
  styleUrl: './ss.component.css'
})
export class SsComponent {
constructor (
  public global: GlobalService,
  public virtualRouter: virtualRouter
){}
}
