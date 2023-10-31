import { Component, Input } from '@angular/core';
import { Constants } from 'src/app/utils/constants';

@Component({
  selector: 'app-tresure-icon',
  templateUrl: './tresure-icon.component.html',
  styleUrls: ['./tresure-icon.component.scss']
})
export class TresureIconComponent {

  @Input()
  public treasureIcon: string = '🏆'

  

}
