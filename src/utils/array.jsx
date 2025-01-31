export const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array));
}

export const find = (id, array) => {
   return array.find((itemInArray) => itemInArray.id === id);
}


export const findIndex = (idWithUnknownIndex, array) => {
    return array.findIndex((itemInArray) => itemInArray.id === idWithUnknownIndex);
}   

export const filter = (id, array) => {
    return array.filter((itemInArray) => itemInArray.id !== id);
}
