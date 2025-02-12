import { PrismaClient } from "@prisma/client";
import { createCategories } from "../seeders/categorie";  // Assure-toi du bon chemin
import { createVideos } from "../seeders/video";            // Assure-toi du bon chemin

const prisma = new PrismaClient();

// Fonction principale de seed
const main = async () => {
  console.log("Starting seed...");
  console.time("Total seed duration");

  try {
    // Créer les catégories
    const categories = await createCategories();
    console.log("📁 Catégories initialisées !");

    // Créer les vidéos en utilisant les catégories créées
    await createVideos(categories);
    console.log("🎥 Vidéos initialisées !");
    
  } catch (error) {
    console.error("Une erreur est survenue lors de l'initialisation des données :", error);
  } finally {
    console.timeEnd("Total seed duration");
    await prisma.$disconnect();
  }
};

// Si ce fichier est exécuté directement
main()
  .then(() => console.log("✅ Données initialisées avec succès !"))
  .catch(console.error);
