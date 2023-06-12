import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {


  cities =['Barcelona','Madrid','Valencia', 'Bogota', 'Tokio']
  name!:string;
  selection!:string;
  title = 'Día 4 del reto';
  criteria!:string;
  url = 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg';



  addNewCity(city:string):void{
    this.cities.push(city);
  }

  onCityClicked(city:string):void{
    this.selection=city;
  }

  onClear():void{
    this.selection='';
  }

}
