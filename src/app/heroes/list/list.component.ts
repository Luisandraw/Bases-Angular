import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

public gallinaNames: string[]=['Cucu','Chemil','Ponedora','Seca','Gorda','Filipina'];
public deletedGallina?: string;
//public deletedHero: string='';

removeLastGallina():void{
  this.deletedGallina = this.gallinaNames.pop();
  //const deletedGallina = this.gallinaNames.pop();
 // console.log({deletedGallina})
}

}
