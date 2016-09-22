import {Component,Input} from '@angular/core';

@Component({
  selector:'more-button',
  template:`
      <div class="more-button">
      {{text}}
      </div>
`,
  styleUrls:['./morebutton.component.less']
})

export class MoreButtonComponent{
  @Input() text:string
}
