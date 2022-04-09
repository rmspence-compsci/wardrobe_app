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
   * Recommends an item based on given conditions.
   * @param {{}} [conditions] The current conditions to take into account when recommending an outfit.
   */
  recommendItem(conditions = {}) {
    const randomIndex = Math.floor(Math.random() * this.wardrobe.length),
      item = this.wardrobe[randomIndex];

    this.history.push(item);
    return item;
  }
}
