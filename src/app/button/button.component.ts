import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{ 'background-color': color }">
      {{ label }}
    </button>`,
  styleUrls: ['./button.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() color!: string;
  @Input() label!: string;

}
