import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineEditingComponent } from './inline-editing/inline-editing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { DynamicControlsComponent } from './dynamic-controls/dynamic-controls.component';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { RxjsCombineLatestComponent } from './rxjs-combine-latest/rxjs-combine-latest.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data-service/in-memory-data.service';
import { ProductsService } from './in-memory-data-service/products.service';
import { NumberLoopPipe } from './in-memory-data-service/number-loop.pipe';


@NgModule({
  declarations: [	
    AppComponent,
    InlineEditingComponent,
    DynamicControlsComponent,
    MenuComponent,
    HeaderComponent,
    RxjsCombineLatestComponent,
    NumberLoopPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
