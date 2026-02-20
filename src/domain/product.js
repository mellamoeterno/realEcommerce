
/**
 * @typedef {Object} Product
 * @property {string} id        Stable unique identifier
 * @property {string} name      Display name
 * @property {number} price     Price in smallest currency unit or decimal (decide once)
 * @property {string} imageUrl  Absolute or relative image URL
 */
 
/**
 * @param {Object} params
 * @param {string} params.id
 * @param {string} params.name
 * @param {number} params.price
 * @param {string} params.imageUrl
 * @returns {Readonly<Product>}
 */
export function createProduct({ id, name, price, imageUrl }) {
  
  if (typeof id !== 'string') throw new Error('Product.id must be a string')
  if (typeof name !== 'string') throw new Error('Product.name must be a string')
  if (typeof price !== 'number') throw new Error('Product.price must be a number')
  if (typeof imageUrl !== 'string') throw new Error('Product.imageUrl must be a string')

  return Object.freeze({
    id,
    name,
    price,
    imageUrl,
  })
}
