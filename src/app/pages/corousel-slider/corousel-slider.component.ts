import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgbCarouselConfig,NgbCarousel , NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { constants } from 'src/app/constants';

@Component({
  selector: 'app-corousel-slider',
  templateUrl: './corousel-slider.component.html',
  styleUrls: ['./corousel-slider.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CorouselSliderComponent implements OnInit {

  Constants = new constants();

  slider_items = this.Constants.SLIDER_ITEMS;

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
  
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit(): void {
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
    // console.log("SELAM",this.carousel.slides.first.id)
    // console.log("SELAM2",this.carousel.activeId)
    // carousel sondan başa dönmesi için first.id == activeId oldugu durumda, verdiğimiz süre kadar
    // bekleterek active carouselin slidenın last olarak değiştirmek gerekiyor
  }
}



