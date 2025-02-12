import { CategorieOutput } from "./categories";

export type VideoInput = {
    title: string;
    url: string;
    categorieId: number;
  };

  export type VideoOutput = {
    id: number;
    title: string;
    url: string;
    categorie: CategorieOutput; 
    createdAt: string;
  };