"use client"

import { useCallback, useRef } from "react"

interface CacheEntry<T> {
  data: T
  timestamp: number
  expiry: number
}

export function useDataCache<T>(cacheKey: string, expiryMs: number = 5 * 60 * 1000) {
  const cacheRef = useRef<Map<string, CacheEntry<T>>>(new Map())

  const getCachedData = useCallback(
    (key: string): T | null => {
      const entry = cacheRef.current.get(key)
      if (!entry) return null

      const now = Date.now()
      if (now > entry.expiry) {
        // Remove expired entry
        cacheRef.current.delete(key)
        return null
      }

      return entry.data
    },
    [], // No dependencies - function is stable
  )

  const setCachedData = useCallback(
    (key: string, data: T) => {
      const now = Date.now()
      cacheRef.current.set(key, {
        data,
        timestamp: now,
        expiry: now + expiryMs,
      })
    },
    [expiryMs],
  )

  const clearCache = useCallback(() => {
    cacheRef.current.clear()
  }, [])

  return { getCachedData, setCachedData, clearCache }
}
