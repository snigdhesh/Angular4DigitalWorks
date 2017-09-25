import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {TrendGraphComponent} from './trendgraph.component';
import{TrendGraphService} from './treandgraph.component.service';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendGraphComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule
  ],
  providers: [TrendGraphService,
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
