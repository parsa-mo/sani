import { storage } from "../Firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const FetchImages = async (folderName) => {
  try {
    const imagesRef = ref(storage, folderName);
    const result = await listAll(imagesRef);

    const urlPromises = result.items.map((imageRef) =>
      getDownloadURL(imageRef),
    );
    const urls = await Promise.all(urlPromises);

    return urls.map((url, index) => ({
      url,
      alt: `Image ${index}`,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return []; // Return an empty array in case of an error
  }
};

export { FetchImages };
