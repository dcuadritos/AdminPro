import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
       {title: 'Dashboard', url: '/dashboard'},
       {title: 'ProgressBar', url: '/progress'},
       {title: 'Gráficas', url: '/graficas1'},
       {title: 'Promesas', url: '/promesas'},
       {title: 'RxJs', url: '/rxjs'}
      ]
    }
  ]

  constructor() { }

}
