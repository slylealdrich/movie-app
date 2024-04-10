import type { Movie, MovieSearchResult } from "./types";

export function typeMovie(data: any): Movie {
    return {
        adult: data.adult,
        backdropPath: data.backdrop_path,
        belongsToCollection: data.belongs_to_collection,
        budget: data.budget,
        genres: [],
        homepage: data.homepage,
        id: data.id,
        imdbId: data.imdbId,
        originalLanguage: data.original_language,
        originalTitle: data.original_title,
        overview: data.overview,
        popularity: data.popularity,
        posterPath: data.poster_path,
        productionCompanies: [],
        productionCountries: [],
        releaseDate: data.release_date,
        revenue: data.revenue,
        runtime: data.runtime,
        spokenLanguages: [],
        status: data.status,
        tagline: data.tagline,
        title: data.title,
        video: data.video,
        voteAverage: data.vote_average,
        voteCount: data.vote_count,
    } as Movie;
}

export function typeMovieSearchResult(data: any): MovieSearchResult {
    return {
        adult: data.adult,
        backdropPath: data.backdrop_path,
        genreIds: data.genre_ids,
        id: data.id,
        originalLanguage: data.original_language,
        originalTitle: data.original_title,
        overview: data.overview,
        popularity: data.popularity,
        posterPath: data.poster_path,
        releaseDate: data.release_date,
        title: data.title,
        video: data.video,
        voteAverage: data.vote_average,
        voteCount: data.vote_count,
    } as MovieSearchResult;
}