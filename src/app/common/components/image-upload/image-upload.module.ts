import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';

import { HttpModule } from '@angular/http';
import { ImageUploadComponent } from './image-upload.component';

import { ImageUploadService } from './image-upload.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ImageCropperModule
  ],
  providers: [
    ImageUploadService
  ],
  exports: [
    ImageUploadComponent
  ],
  declarations: [
    ImageUploadComponent
  ]
})
export class ImageUploadModule {

}
