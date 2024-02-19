import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalService } from './services/global.service';
import { CommonModule } from '@angular/common';
import { ScriptService } from './services/script.service';
import { virtualRouter } from './services/virtualRouter.service';
import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { SergurosDetailComponent } from './components/serguros-detail/serguros-detail.component';
import { ServicesDetailComponent } from './components/services-detail/services-detail.component';
import { ProcedureComponent } from './components/procedure/procedure.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HeaderComponent,FooterComponent,HomeComponent, AboutComponent, ContactComponent, PromotionsComponent, SergurosDetailComponent, ServicesDetailComponent, ProcedureComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segurosya';
  constructor(
    public global: GlobalService,
    public script: ScriptService,
    public virtualRouter: virtualRouter ,
 ) {

  this.script.load(
    'jquery',
    'app',
    'main',
  )
    .then(() => {
      console.log('Todos los scripts se cargaron correctamente');
    })
    .catch(error => console.log(error));

    // this.epicFunction();

  }
}

