class Utils {
/**
   * @static camelCased
   * @param { Object } object
   * @description converts keys in an object from snake_case to camelCase
   * @returns a new object
   * @memberof Services
   */
  static camelCased(object) {
    const newObject = {};
    Object.entries(object).forEach((entry) => {
      const newKey = entry[0].replace(/(_\w)/g, match => match[1].toUpperCase());
      newObject[newKey] = entry[1];
    });
    return newObject;
  }
}

export default Utils;
