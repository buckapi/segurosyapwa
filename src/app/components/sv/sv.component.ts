import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { virtualRouter } from '../../services/virtualRouter.service';

@Component({
  selector: 'app-sv',
  standalone: true,
  imports: [],
  templateUrl: './sv.component.html',
  styleUrl: './sv.component.css'
})
export class SvComponent {
constructor (
  public global: GlobalService,
  public virtualRouter: virtualRouter
){}
}
