export const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array));
}

export const find = (id, array) => {
   return array.find((itemInArray) => itemInArray.id === id);
}
