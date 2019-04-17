import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'UI-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent  {
  slides: { image: string }[] = [];
  activeSlideIndex = 0;
 
  constructor() {
    this.slides.push({image:`assets/50-material-bgs.jpg`});
    this.slides.push({image:`assets/background.jpg`});
    this.slides.push({image:`assets/50-material-bgs.jpg`});
    this.slides.push({image:`assets/background.jpg`});
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }
 
  addSlide(): void {
    this.slides.push({
      image: `assets/background.jpg`
    });
  }
 
  removeSlide(index?: number): void {
    const toRemove = index ? index : this.activeSlideIndex;
    this.slides.splice(toRemove, 1);
  }

}
