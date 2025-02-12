import { PrismaClient } from "@prisma/client";
import { VideoInput, VideoOutput } from "../../App/types/video";
import { CategorieOutput } from "../../App/types/categories";

const prisma = new PrismaClient();

// Données de vidéos à créer
const createVideoData = (categories: CategorieOutput[]): VideoInput[] => [
  { title: "Clip musical 1", url: "https://musique1.com", categorieId: categories.find(c => c.name === "Musique")?.id ?? 0 },
  { title: "Tuto programmation", url: "https://tech.com", categorieId: categories.find(c => c.name === "Technologie")?.id ?? 0 },
  { title: "Voyage à Bali", url: "https://voyage.com", categorieId: categories.find(c => c.name === "Voyage")?.id ?? 0 },
  { title: "Blague marrante", url: "https://humour.com", categorieId: categories.find(c => c.name === "Humour")?.id ?? 0 },
  { title: "Cours de maths", url: "https://education.com", categorieId: categories.find(c => c.name === "Éducation")?.id ?? 0 },
];

// Fonction de création des vidéos
export const createVideos = async (categories: CategorieOutput[]): Promise<VideoOutput[]> => {
  const videosData = createVideoData(categories);

  // Créer les vidéos dans la base de données
  await prisma.video.createMany({
    data: videosData,
    skipDuplicates: true,
  });

  // Récupérer les vidéos avec leurs catégories
  const videos = await prisma.video.findMany({
    include: { categorie: true }, // Inclure les catégories associées
  });

  // Mapper et retourner les vidéos avec les catégories formatées
  return videos.map((video) => ({
    id: video.id,
    title: video.title,
    url: video.url,
    categorie: {
      id: video.categorie.id,
      name: video.categorie.name,
      description: video.categorie.description ?? undefined,
      createdAt: video.categorie.createdAt.toISOString(),
      updatedAt: video.categorie.updatedAt.toISOString(),
    },
    createdAt: video.createdAt.toISOString(),
  }));
};
