import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase"

// eslint-disable-next-line no-unused-vars
const uploadFile = async (file) => {
    //luu cai file nay len firebase
    const storageRef = ref(storage, file.name);
    const response = await uploadBytes(storageRef, file);
    //lay duong dan den file vua tao
    const downloadURL = await getDownloadURL(response, ref);
    return downloadURL;
};

export default uploadFile;