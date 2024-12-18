import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { NgbCollapseModule, NgbDropdownMenu, NgbDropdownToggle, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { provideHttpClient } from '@angular/common/http';
import { DetallePersonaComponent } from './components/detalle-persona/detalle-persona.component';
import { EdadActorPipe } from './pipes/edad-actor.pipe';
import { PosterPipe } from './pipes/poster.pipe';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MatIcon } from '@angular/material/icon';
import { DetalleSerieComponent } from './components/series/detalle-serie/detalle-serie.component';
import { MatButtonModule} from '@angular/material/button';
import { ListaSeriesComponent } from './components/series/lista-series/lista-series.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FiltroSerieComponent } from './components/filtros/filtro-serie/filtro-serie.component';
import { SearchComponent } from './components/search/search.component';
import { ApprovedComponent } from './components/shared/approved/approved.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';
import { FiltroPeliculasComponent } from './components/filtros/filtro-peliculas/filtro-peliculas.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { SeriesValoradaComponent } from './components/valorados/series/series.component';
import { PeliculasValoradasComponent } from './components/valorados/peliculas/peliculas.component';
import { WatchListComponent } from './components/perfil/watch-list/watch-list.component';
import { SeriesFavoritasComponent } from './components/series-favoritas/series-favoritas.component';
import { PeliculasFavoritasComponent } from './components/peliculas-favoritas/peliculas-favoritas.component';
import { FormCrearListaComponent } from './components/form-crear-lista/form-crear-lista.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { ListasCreadasComponent } from './components/listas-creadas/listas-creadas.component';
import { DetalleListaCreadaComponent } from './components/detalle-lista-creada/detalle-lista-creada.component';
import { TraducirTipoPipe } from './pipes/traducir-tipo.pipe';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    ListaPersonasComponent,
    DetallePersonaComponent,
    ListaSeriesComponent,
    DetalleSerieComponent,
    EdadActorPipe,
    PosterPipe,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    FiltroSerieComponent,
    SearchComponent,
    ApprovedComponent,
    BusquedaComponent,
    FiltroPeliculasComponent,
    SeriesValoradaComponent,
    PeliculasValoradasComponent,
    SeriesFavoritasComponent,
    PeliculasFavoritasComponent,
    WatchListComponent,
    FormCrearListaComponent,
    ListasCreadasComponent,
    DetalleListaCreadaComponent,
    TraducirTipoPipe,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatIcon,
    FormsModule,
    MatSliderModule,
    MatMenuModule,
    NgbCollapseModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    NgbPaginationModule,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu
  ],
  
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
