import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { Pelicula } from '../../../models/lista-peliculas-response.interface';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
=======
import { Router } from '@angular/router';
import { WatchListService } from '../../../services/watch-list.service';
import { AccountService } from '../../../services/authentication/account.service';
>>>>>>> main

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{

  languageFilter: string = '';
  sortBy: string = '';
  fechaEstrenoMin: string = '';
  fechaEstrenoMax: string = '';
  runtimeMin: string = '';
  runtimeMax: string = '';
  rateMin: string = '';
  rateMax: string = '';
  listaGeneros: string = '';

  listaPeliculasPopulares :Pelicula[] =[];
<<<<<<< HEAD

  constructor(private movieService:MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.languageFilter = params['languaje'] || '',
      this.sortBy = params['sortBy'] || '',
      this.listaGeneros = params['genres'] || '',
      this.fechaEstrenoMin = params['releaseDateMin'] || '',
      this.fechaEstrenoMax = params['releaseDateMax'] || '', 
      this.runtimeMin = params['runtimeMin'] || '',
      this.runtimeMax = params['runtimeMax'] || '',
      this.rateMin = params['rateMin'] || '',
      this.rateMax = params['rateMax'] || ''
    });
    if(this.languageFilter || this.sortBy || this.fechaEstrenoMin || this.fechaEstrenoMax || this.runtimeMin || this.runtimeMax || this.rateMin || this.rateMax){
      this.movieService.obtenerPeliculasPorFiltros(this.languageFilter, this.sortBy, this.listaGeneros.toLowerCase(), 
        this.fechaEstrenoMin, this.fechaEstrenoMax, this.runtimeMin, this.runtimeMax, this.rateMin, this.rateMax).subscribe((peli:any) => {
          this.listaPeliculasPopulares = peli.results.map((peli:any)=>{
          return {
            ...peli,
            posterUrl:this.movieService.getImageUrl(peli.poster_path),
          }
        });
=======
  paginaActual = 1;
  constructor(private movieService:MoviesService,private router: Router, private accountService: AccountService,private watchListService: WatchListService){}

  ngOnInit(): void {
    this.movieService.obtenerPeliculasPopulares(this.paginaActual).subscribe((data:any) => {
      this.listaPeliculasPopulares = data.results.map((peli:any)=>{
        return {
          ...peli,
          posterUrl:this.movieService.getImageUrl(peli.poster_path),
        }
>>>>>>> main
      });

    } else {
      this.movieService.obtenerPeliculasPopulares().subscribe((data:any) => {
        this.listaPeliculasPopulares = data.results.map((peli:any)=>{
          return {
            ...peli,
            posterUrl:this.movieService.getImageUrl(peli.poster_path),
          }
        });
      });
    }
  }

<<<<<<< HEAD
=======
  marcarComoFavorita(pelicula: Pelicula) {
    this.accountService.markAsFavorite(pelicula.id, 'movie', true);
}

>>>>>>> main

  verTrailer(peli: any) {
    this.movieService.obtenerTrailerPorId(peli.id).subscribe((data) => {
      const key = data.results[0].key;
      const videoUrl = this.getVideoUrl(key);
      window.open(videoUrl, '_blank');
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
}

