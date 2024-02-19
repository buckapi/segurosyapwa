import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { virtualRouter } from '../../services/virtualRouter.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-procedure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './procedure.component.html',
  styleUrl: './procedure.component.css'
})
export class ProcedureComponent {
  constructor (
    public global: GlobalService,
    public virtualRouter: virtualRouter
  ){}
}
