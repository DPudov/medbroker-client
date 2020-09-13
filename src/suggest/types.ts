export enum RecommendationMode {
    All = "all",
    Smart = "smart",
    History = "history",
    Set = "set",
    Agensex = "agensex"
}

export type RecommendationMisc = {
    message: string;
    reactions: any;
}

export type Recommendation = {
    serv_code: string;
    serv_name: string;
    message: string;
    miscellaneous: RecommendationMisc;
}

export type SuggestResponse = {
    suggests: Recommendation[]
}
