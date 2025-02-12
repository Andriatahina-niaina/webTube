export type CategorieInput = {
    name: string;
    description?: string;
}

export type CategorieOutput = {
    id: number;
    name: string;
    description?: string;
    createdAt: string;  
    updatedAt: string;
}