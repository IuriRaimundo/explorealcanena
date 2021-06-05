import { app } from './firebase';
import 'firebase/storage';

const storageRef = app.storage().ref();

const placeFolderRef = storageRef.child('places');

// Para imagens da mesma pasta
const getImageURL = async (type, folder, id, num) => {
  const imagePrefix = {
    'imagem-pequena': 'peq-',
    'imagem-pesquisa': 'pesq-',
    'imagens-grandes': 'gran-',
  };
  if (folder === 'imagens-grandes') {
    let urls = [];
    // i = 1 para iniciar a contagem no 1 tal como as imagens
    for (let i = 1; i < num + 1; i++) {
      await storageRef
        .child(`${type}/${id}/${folder}/${imagePrefix[folder]}${id}${i}.jpg`)
        .getDownloadURL()
        .then((url) => {
          urls.push(url);
        });
    }
    return urls;
  }
  const url = await storageRef.child(`${type}/${id}/${folder}/${imagePrefix[folder]}${id}.jpg`).getDownloadURL();
  return url;
};

// Para imagens de pastas diferentes
const getDifferentFolderImagesURL = async (type, folder, idArray) => {
  const imagePrefix = {
    'imagem-pequena': 'peq-',
    'imagem-pesquisa': 'pesq-',
    'imagens-grandes': 'gran-',
  };
  let urls = [];
  for (let i = 0; i < idArray.length; i++) {
    await storageRef
      .child(`${type}/${idArray[i]}/${folder}/${imagePrefix[folder]}${idArray[i]}.jpg`)
      .getDownloadURL()
      .then((url) => {
        urls.push(url);
      });
  }
  return urls;
};

export const storageOperations = {
  getImageURL,
  getDifferentFolderImagesURL,
};
