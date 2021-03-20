import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuList: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuList.push(new MenuItem("Categoria", "fa fa-cubes", null, [], false));
    this.menuList.push(new MenuItem("Cursos", "fa fa-graduation-cap", 'https://www.google.com', [], false));
    this.menuList.push(new MenuItem("Status", "fa fa-ticket", null, [], false));
    this.menuList.push(new MenuItem("Novo", "fa fa-plus-square-o", null, [], true));
    this.menuList.push(new MenuItem("Notificações", "fa fa-bell-o", null, [], false));
    this.menuList.push(new MenuItem("Teste", "fa fa-cubes", null, [], true));
  }

  debug() {
    alert('funcionou')
  }
}
