'use client'

import { useEffect, useState } from 'react'
import { createProduct } from '@/domain/product'

/**
 * Data-access hook for Products.
 *
 * Responsibilities:
 * - Fetch product data
 * - Convert raw data into domain entities
 * - Expose immutable data to the UI layer
 *
 * This hook does NOT render UI.
 */

/**
 * @returns {{
 *   products: readonly import('@/domain/product').Product[],
 *   isLoading: boolean,
 *   error: Error | null
 * }}
 */
export function useProducts() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadProducts() {
      try {
        // set own url endpoint 
        const response = await fetch('/api/products')

        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        const data = await response.json()

        /**
         * Convert raw API data into immutable domain entities.
         * This ensures:
         * - consistent Product shape
         * - referential safety
         * - no mutation in UI
         */
        const domainProducts = data.map(item =>
          createProduct({
            id: item.id,
            name: item.name,
            price: item.price,
            imageUrl: item.imageUrl,
          })
        )

        if (!cancelled) {
          setProducts(domainProducts)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err)
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    loadProducts()

    return () => {
      cancelled = true
    }
  }, [])

  return {
    products,
    isLoading,
    error,
  }
}