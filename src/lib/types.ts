export interface Movie {
    adult: boolean;
    backdropPath: string | null;
    belongsToCollection: boolean | null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdbId: string | null;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string | null;
    productionCompanies: ProductionCompany[];
    productionCountries: ProductionCountry[];
    releaseDate: Date;
    revenue: number;
    runtime: number;
    spokenLanguages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logoPath: string | null;
    name: string;
    originCountry: string;
}

export interface ProductionCountry {
    iso31661: string;
    name: string;
}

export interface SpokenLanguage {
    englishName: string;
    iso6391: string;
    name: string;
}

export interface MovieSearchResult {
    adult: boolean;
    backdropPath: string | null;
    genreIds: number[];
    id: number;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    popularity: number;
    posterPath: string | null;
    releaseDate: Date;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}

export interface MovieSearch {
    page: number;
    results: MovieSearchResult[];
    totalPages: number;
    totalResults: number;
}