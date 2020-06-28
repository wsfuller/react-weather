export function isLocalStorageSupported() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (err) {
    return false;
  }
}

export function localStorageItemExists(name) {
  return localStorage.getItem(name);
}

export function createLocalStorageItem(name, value) {
  return localStorage.setItem(name, value);
}

export function updateLocalStorageItem(name, value) {
  try {
    const storageItem = localStorage.getItem(name);
    const parsedStorageItem = JSON.parse(storageItem);

    if (parsedStorageItem !== null) {
      const newLocalStorageItem = Object.assign(parsedStorageItem, value);
      return localStorage.setItem(name, JSON.stringify(newLocalStorageItem));
    }

    return localStorage.setItem(name, JSON.stringify(value));
  } catch (err) {
    return false;
  }
}
