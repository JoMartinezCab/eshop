import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public appName = environment.appName;
  public menu:any[] = [{
    name: 'carrito',
    link: '',
    icon: 'shopping_cart'
  },{
    name: 'Crear cuenta',
    link: '',
    icon: 'person_add'
  },{
    name: 'ingresar',
    link: '',
    icon: 'login'
  }]

}
