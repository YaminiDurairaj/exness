import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',

  styleUrl: './swiper.component.scss',
})
export class SwiperComponent {
  constructor(private sanitizer: DomSanitizer) {}
  getSafeYouTubeUrl(url: string): SafeResourceUrl {
    const videoId = this.getYouTubeId(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + videoId
    );
  }
  // List of video objects to be shown in the carousel
  videoList = [
    {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=FVtbm3JeFbU',
      poster: 'poster1.jpg',
    },
    {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=yrz_XQ7E7oo',
      poster: 'poster2.jpg',
    },
    {
      type: 'youtube',
      src: 'https://www.youtube.com/watch?v=gvuFk71vB0M',
      poster: 'poster3.jpg',
    },
  ];

  // Extract YouTube video ID from the full YouTube URL
  getYouTubeId(url: string): string {
    const regExp = /[\\?\\&]v=([^\\?\\&]+)/;
    const match = url.match(regExp);
    const videoId = match ? match[1] : '';
    console.log('YouTube Video ID:', videoId); // Check if ID is correct
    return videoId;
  }

  // Index of the currently active slide
  activeIndex = 0;

  // Go to the previous slide
  prevSlide() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.videoList.length - 1;
    }
  }

  // Go to the next slide
  nextSlide() {
    if (this.activeIndex < this.videoList.length - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
  }

  // Go to a specific slide
  goToSlide(index: number) {
    this.activeIndex = index;
  }
}
