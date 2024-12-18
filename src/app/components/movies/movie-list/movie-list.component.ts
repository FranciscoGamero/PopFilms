import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Pelicula } from '../../../models/lista-peliculas-response.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { WatchListService } from '../../../services/watch-list.service';
import { AccountService } from '../../../services/authentication/account.service';
import { List } from '../../../models/user-lists-response.interface';
import { UserListsService } from '../../../services/user-lists.service';
import { CrudListasService } from '../../../services/crud-listas.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{

  sortBy: string = '';
  fechaEstrenoMin: string = '';
  fechaEstrenoMax: string = '';
  runtimeMin: string = '';
  runtimeMax: string = '';
  rateMin: string = '';
  rateMax: string = '';
  listaGeneros: string = '';

  listaPeliculasPopulares :Pelicula[] =[];

  listaDeListas: List[] = [];


paginaActual = 1;
  constructor(private movieService:MoviesService,
    private router: Router,
    private route: ActivatedRoute, private accountService: AccountService,private watchListService: WatchListService,
    private userListsService: UserListsService, 
    private crudListasService: CrudListasService
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.sortBy = params['sortBy'] || '',
      this.listaGeneros = params['genres'] || '',
      this.fechaEstrenoMin = params['releaseDateMin'] || '',
      this.fechaEstrenoMax = params['releaseDateMax'] || '', 
      this.runtimeMin = params['runtimeMin'] || '',
      this.runtimeMax = params['runtimeMax'] || '',
      this.rateMin = params['rateMin'] || '',
      this.rateMax = params['rateMax'] || ''
    });
    if(this.sortBy || this.listaGeneros || this.fechaEstrenoMin || this.fechaEstrenoMax || this.runtimeMin || this.runtimeMax || this.rateMin || this.rateMax){
      this.movieService.obtenerPeliculasPorFiltros(this.sortBy, this.listaGeneros, 
        this.fechaEstrenoMin, this.fechaEstrenoMax, this.runtimeMin, this.runtimeMax, this.rateMin, this.rateMax).subscribe((peli:any) => {
          this.listaPeliculasPopulares = peli.results.map((peli:any)=>{
          return {
            ...peli,
            posterUrl:this.movieService.getImageUrl(peli.poster_path),
          }
        });
      });
    } else {
      this.movieService.obtenerPeliculasPopulares(this.paginaActual).subscribe((data:any) => {

        this.listaPeliculasPopulares = data.results.map((peli:any)=>{
          return {
            ...peli,
            posterUrl:this.movieService.getImageUrl(peli.poster_path),
          }
        });
      });
    }

    this.userListsService.getUserLists().subscribe((resp) => {
      this.listaDeListas = resp.results;
    });
  }

  marcarComoFavorita(pelicula: Pelicula) {
    this.accountService.markAsFavorite(pelicula.id, 'movie', true);
}

  verTrailer(peli: any) {
    this.movieService.obtenerTrailerPorId(peli.id).subscribe((data) => {
      const trailer = data.results.find((video) => video.type === 'Trailer' && video.site === 'YouTube');
      const key = trailer?.key;
      console.log('Trailer key:', key);
      if (key) {
        const videoUrl = this.getVideoUrl(key);
        window.open(videoUrl, '_blank');
      } else {
        console.error('Trailer key not found');
      }
    });
  }


  getVideoUrl(keyPeli: string): string {
    return `https://www.youtube.com/watch?v=${keyPeli}`;
  }

  verFichaPelicula(id: number): void {
    // Navega a la página de detalles de la película
    this.router.navigate(['/movie', id]);
  }

  getColorEstrellas(voteAverage: number): string {
    if (voteAverage >= 3.5) {
      return 'text-success';
    } else if (voteAverage >= 2.5) {
      return 'text-warning';
    } else {
      return 'text-danger';
    }
  }
  addMovieToWatchList(peliculaId: number): void {
    this.watchListService.addToWatchList(peliculaId, 'movie', true);
  }
  cambiarPagina(): void {
    this.movieService.obtenerPeliculasPopulares(this.paginaActual).subscribe((data:any) => {
      this.listaPeliculasPopulares = data.results.map((peli:any)=>{
        return {
          ...peli,
          posterUrl:this.movieService.getImageUrl(peli.poster_path),
        }
      });
    })
  }

  addToLista(listaId: number, peliculaId: number) {
    this.crudListasService.addToLista(listaId, peliculaId).subscribe(() => {
      alert('Pelicula añadida a la lista');
    });
  }
}

