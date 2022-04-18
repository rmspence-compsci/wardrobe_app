/**
 * Create a numerical filter function for a key within an object
 * @param {string} key The key to filter by
 * @param {number} [min] The minimum numerical value an object can have
 * @param {number} [max] The maximum numerical value an object can have
 * @returns The filter function
 */
function filterByNumericalProperty(key, min, max) {
  if (min && max) return function(obj) { return obj[key] > min && obj[key] < max }
  else if (min) return function(obj) { return obj[key] > min }
  else if (max) return function(obj) { return obj[key] < max }
  else return function(obj) { return true }
}

/**
 * Create a generic filter function for a key within an object
 * @param {string} key The key to filter by
 * @param {*} value The value to check for
 * @returns The filter function
 */
function filterByPropertyValue(key, value) {
  return function(obj) { return obj[key] == value }
}

/**
 * Selects a random element from the provided array
 * @param {Array} array The array to pick from
 * @returns A random element from the array
 */
function pickRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Create a numerical sort function for a key within an object
 * @param {string} key The key to sort by
 * @param {boolean} [desc] Whether to create a descending sort function, defaults to true
 * @returns The sort function
 */
function sortByNumericalProperty(key, desc = true) {
  if (desc) return function(a, b) { return b[key] - a[key]; }
  else return function(a, b) { return a[key] - b[key]; }
}

/**
 * A clothing type.
 * @enum {string}
 */
export const ClothingType = {
  Coat: "coat",
  Hat: "hat",
  Layer: "layer",
  Pants: "pants",
  Shoes: "shoes",
  UnderGarment: "under",
};

/**
 * A user-defined item of clothing.
 * @typedef {Object} ClothingItem
 * @property {string} color
 * @property {string} name
 * @property {number} rain
 * @property {ClothingType} type
 * @property {number} warmth
 * @property {number} wind
 */

/**
 * @typedef {Object} Conditions
 * @property {number} [temperature]
 * @property {bool} [willRain]
 * @property {number} [windSpeed]
 */

/**
 * @typedef {Object} Outfit
 * @property {ClothingItem} [head]
 * @property {ClothingItem[]} legs
 * @property {ClothingItem} shoes
 * @property {ClothingItem[]} torso
 */

/**
 * An object which can recommend items of clothing for a specific set of conditions.
 */
export class Recommender {
  /**
   * @param {ClothingItem[]} wardrobe The available items of clothing.
   * @param {ClothingItem[]} [history] An optional array of previously used clothing items.
   */
  constructor(wardrobe, history = []) {
    this.wardrobe = wardrobe;
    this.history = history;
  }

  /**
   * Recommend an outfit based on the given conditions.
   * @param {Conditions} [conditions] The conditions to factor into the recommendation
   * @returns {Outfit} The recommended outfit
   */
  recommendOutfit(conditions = {}) {
    const outfit = { legs: [], torso: [] };
    let items = this.wardrobe.concat([]);

    if (conditions.windSpeed != undefined && conditions.windSpeed > 10) items = items.sort(sortByNumericalProperty("wind"));
    if (conditions.willRain) items = items.sort(sortByNumericalProperty("rain"));

    if (conditions.temperature != undefined) {
      if (conditions.temperature < 12) outfit.head = pickRandomElement(items.filter(filterByPropertyValue("type", ClothingType.Hat)));

      if (conditions.temperature < 18) outfit.torso.push(pickRandomElement(items.filter(filterByPropertyValue("type", ClothingType.Coat))));

      let tempScore = Math.min(Math.max(conditions.temperature - 16, -5), 5) + 5;
      items = items.filter(filterByNumericalProperty("warmth", tempScore - 1, tempScore + 1));
    }

    outfit.shoes = pickRandomElement(this.wardrobe.filter(filterByPropertyValue("type", ClothingType.Shoes)));
    outfit.legs.push(pickRandomElement(items.filter(filterByPropertyValue("type", ClothingType.UnderGarment))));

    outfit.legs.push(pickRandomElement(items.filter(filterByPropertyValue("type", ClothingType.Pants))));
    outfit.torso.push(pickRandomElement(items.filter(filterByPropertyValue("type", ClothingType.Layer))));

    return outfit;
  }
}
