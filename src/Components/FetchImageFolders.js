import { storage } from "../Firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const FetchImageFolders = async (mainFolderName) => {
  try {
    const mainFolderRef = ref(storage, mainFolderName);
    const result = await listAll(mainFolderRef);

    // Get subfolders
    const folderPromises = result.prefixes.map(async (folderRef) => {
      const folderName = folderRef.name;
      const folderPath = `${mainFolderName}/${folderName}`;
      const folderContents = await listAll(ref(storage, folderPath));

      // Fetch images in each folder
      const imagePromises = folderContents.items.map((imageRef) =>
        getDownloadURL(imageRef),
      );
      const imageUrls = await Promise.all(imagePromises);

      return {
        folderName,
        images: imageUrls.map((url, index) => ({
          url,
          alt: `Image ${index} from ${folderName}`,
        })),
      };
    });

    // Resolve all folder promises
    const foldersWithImages = await Promise.all(folderPromises);

    return foldersWithImages;
  } catch (error) {
    console.error("Error fetching folders and images:", error);
    return [];
  }
};

export { FetchImageFolders };
