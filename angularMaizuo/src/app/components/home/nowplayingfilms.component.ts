import {Component} from '@angular/core';

@Component({
  selector:'nowplaying-flims',
  template:`
       <ul>
       <more-button [text]="moreText"></more-button>
      </ul>
`
})

export class NowPlayingFilmsComponent{
  moreText:string = '更多热映电影';
}
