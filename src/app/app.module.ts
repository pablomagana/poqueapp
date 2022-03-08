import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PoquelistComponent } from './poquelist/poquelist.component';
import { PoqueCardComponent } from './poque-card/poque-card.component';
import { FormsModule } from '@angular/forms';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AppComponent, PoquelistComponent, PoqueCardComponent],
  imports: [
    BrowserModule,
    ModalDialogModule.forRoot(),
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
