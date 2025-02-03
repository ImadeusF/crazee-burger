export const deepClone = (array) => {
    return JSON.parse(JSON.stringify(array));
}

export const findObjectById = (id, array) => {
   return array.find((itemInArray) => itemInArray.id === id);
}


export const findIndexById = (idWithUnknownIndex, array) => {
    return array.findIndex((itemInArray) => itemInArray.id === idWithUnknownIndex);
}   

export const removeObjectById = (id, array) => {
    return array.filter((itemInArray) => itemInArray.id !== id);
}

export const isEmpty = (array) => {
    return array.length === 0;
}