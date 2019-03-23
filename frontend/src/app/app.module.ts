import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DataService } from './service/data.service';
import { FormsModule } from '@angular/forms';

import { GrdFilterPipe } from './pipe/grid-pipe';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,GrdFilterPipe
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
