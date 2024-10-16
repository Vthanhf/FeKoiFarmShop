import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase"

// eslint-disable-next-line no-unused-vars
const uploadFile = async (file) => {
    //luu cai file nay len firebase
    const storageRef = ref(storage, file.name);
    const response = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(response.ref);
    return url;
};

export default uploadFile;