export enum RecommendationMode {
    All = "all",
    Smart = "smart",
    History = "history",
    Set = "set",
    Agensex = "agensex"
}

export type RecommendationMisc = {
    message: string;
    reactions: [string, string];
}

export type Recommendation = {
    servCode: string;
    servName: string;
    message: string;
    miscellaneous: RecommendationMisc;
}
