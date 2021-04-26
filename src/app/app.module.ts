import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuanTriGheModule } from './quan-tri-ghe/quan-tri-ghe.module';
import { TrangChuModule } from './trang-chu/trang-chu.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TrangChuModule, QuanTriGheModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
