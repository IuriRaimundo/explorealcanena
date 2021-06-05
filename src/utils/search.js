import { firestoreOperations, storageOperations } from '../utils/utils';

const filterResults = (snapshot, userInput) => {
  // Formatar pesquisa tal como os ids dos locais são formatados
  userInput = userInput.toLowerCase().replace(/ /g, '-');

  const removeEndHyphen = (str) => {
    if (str.slice(-1) === '-') {
      str = str.substring(0, str.length - 1);
      return removeEndHyphen(str);
    } else {
      return str;
    }
  };

  userInput = removeEndHyphen(userInput);

  let result;
  snapshot.forEach((doc) => {
    if (doc.id.includes(userInput)) {
      result = doc;
    }
  });

  return result ? result : null;
};

const search = async (userInput) => {
  const snapshot = await firestoreOperations.getAllPlaces();
  const result = filterResults(snapshot, userInput);
  result.imagemPesquisa = await storageOperations.getImageURL('places', 'imagem-pesquisa', result.id);
  return result;
};

export const searchOperations = {
  search,
};
