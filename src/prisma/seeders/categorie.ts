import { PrismaClient } from "@prisma/client";
import { CategorieInput, CategorieOutput } from "../../App/types/categories";

const prisma = new PrismaClient();

// Fonction pour créer les données de catégories
const createCategoryData = (): CategorieInput[] => [
  { name: "Musique", description: "Vidéos musicales" },
  { name: "Technologie", description: "Tutos et innovations" },
  { name: "Voyage", description: "Découverte du monde" },
  { name: "Humour", description: "Sketchs et blagues" },
  { name: "Éducation", description: "Cours et apprentissage" },
];

// Fonction pour créer les catégories dans la DB
export const createCategories = async (): Promise<CategorieOutput[]> => {
  const categoriesData = createCategoryData();

  // Insérer les catégories dans la base de données
  await prisma.categories.createMany({
    data: categoriesData,
    skipDuplicates: true,
  });

  // Récupérer toutes les catégories créées
  const categories = await prisma.categories.findMany();

  // Retourner les catégories au format de CategorieOutput
  return categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    description: cat.description ?? undefined,
    createdAt: cat.createdAt.toISOString(),
    updatedAt: cat.updatedAt.toISOString(),
  }));
};

createCategories()
  .then(() => console.log("📂 Catégories initialisées !"))
  .catch(console.error)
  .finally(() => prisma.$disconnect());

