import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { virtualRouter } from '../../services/virtualRouter.service';

@Component({
  selector: 'app-ssctr',
  standalone: true,
  imports: [],
  templateUrl: './ssctr.component.html',
  styleUrl: './ssctr.component.css'
})
export class SsctrComponent {
constructor (
  public global: GlobalService,
  public virtualRouter: virtualRouter
){}
}
