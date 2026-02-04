'use client'

import React from 'react'

/**
 * ProductCard
 *
 * Responsibilities:
 * - Render a single Product
 * - Treat product data as read-only
 * - Avoid unnecessary re-renders
 *
 * This component:
 * - does NOT fetch data
 * - does NOT mutate data
 * - does NOT own business logic
 */

/**
 * @param {{ product: import('@/domain/product').Product }} props
 */
function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img
        src={product.imageUrl}
        alt={product.name}
        loading="lazy"
      />

      <h3>{product.name}</h3>

      <p>{product.price}</p>
    </article>
  )
}

/**
 * React.memo prevents re-rendering unless:
 * - the product reference changes
 *
 * This works correctly because:
 * - Product entities are immutable
 * - updates always create new objects
 */
export default React.memo(ProductCard)
