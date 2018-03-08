import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CreditCardMaskPipe } from './credit-card.pipe';
import { CreditCardService } from './credit-card.service';
import { CreditCardComponent } from './credit-card.component';
import {HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { NoopInterceptor } from '../directive/first.interceptor';

@NgModule({
  imports: [HttpModule],
  declarations: [
    CreditCardMaskPipe,
    CreditCardComponent
  ],
  providers: [CreditCardService,
     NoopInterceptor,
    ],
  exports: [CreditCardComponent]
})
export class CreditCardModule {}