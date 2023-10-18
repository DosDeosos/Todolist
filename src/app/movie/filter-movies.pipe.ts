import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMovies',
})
export class FilterMoviesPipe implements PipeTransform {
  transform(movies: any[], searchQuery: string): any[] {
    if (!searchQuery) {
      return movies;
    }

    searchQuery = searchQuery.toLowerCase();

    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery)
    );
  }
}
