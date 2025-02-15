import { PrismaClient } from "@prisma/client";
import { CategorieInput, CategorieOutput } from "../../App/types/categories";

const prisma = new PrismaClient();

const createCategoryData = (): CategorieInput[] => [
  { name: "Musique", description: "Vidéos musicales" },
  { name: "Technologie", description: "Tutos et innovations" },
  { name: "Voyage", description: "Découverte du monde" },
  { name: "Humour", description: "Sketchs et blagues" },
  { name: "Éducation", description: "Cours et apprentissage" },
];

export const createCategories = async (): Promise<CategorieOutput[]> => {
  const categoriesData = createCategoryData();

  await prisma.categories.createMany({
    data: categoriesData,
    skipDuplicates: true,
  });

  const categories = await prisma.categories.findMany();

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
