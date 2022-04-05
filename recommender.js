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
 * 
 * @param {ClothingItem[]} wardrobe The available items of clothing.
 * @returns {ClothingItem} The recommended clothing item.
 */
export function recommend(wardrobe) {
  const randIndex = Math.floor(Math.random() * wardrobe.length);
  return wardrobe[randIndex];
}

