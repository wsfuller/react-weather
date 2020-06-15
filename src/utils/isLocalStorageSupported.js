function isLocalStorageSupported() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (err) {
    return false;
  }
}

export default isLocalStorageSupported;
