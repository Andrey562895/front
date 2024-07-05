import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMedia',
  standalone: true
})
export class ToMediaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    if (value.includes(".mp4")) {
      const video = new HTMLVideoElement();
      video.src = value;
      video.width = 250;
      video.height = 250;

      return video;
    }
    else {
      const image = new Image();
      image.src = value;
      image.width = 250;
      image.height = 250;

      return image;
    }
  }
}
