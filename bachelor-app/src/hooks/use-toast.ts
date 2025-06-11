"use client"

import { useState, useEffect } from "react"

type ToastVariant = "default" | "destructive"

interface ToastProps {
  title: string
  description?: string
  variant?: ToastVariant
  duration?: number
}

interface Toast extends ToastProps {
  id: string
  visible: boolean
}

// Simple toast state management
const toasts: Toast[] = []
let listeners: Array<() => void> = []

function notifyListeners() {
  listeners.forEach((listener) => listener())
}

export function toast(props: ToastProps) {
  const id = Math.random().toString(36).substring(2, 9)
  const newToast: Toast = {
    id,
    visible: true,
    duration: 5000,
    variant: "default",
    ...props,
  }

  toasts.push(newToast)
  notifyListeners()

  // Auto-hide toast after duration
  setTimeout(() => {
    const index = toasts.findIndex((t) => t.id === id)
    if (index !== -1) {
      toasts[index].visible = false
      notifyListeners()

      // Remove from array after animation
      setTimeout(() => {
        const removeIndex = toasts.findIndex((t) => t.id === id)
        if (removeIndex !== -1) {
          toasts.splice(removeIndex, 1)
          notifyListeners()
        }
      }, 300)
    }
  }, newToast.duration)

  return id
}

export function useToast() {
  const [toastList, setToastList] = useState<Toast[]>(toasts)

  useEffect(() => {
    const updateToasts = () => {
      setToastList([...toasts])
    }

    listeners.push(updateToasts)
    return () => {
      listeners = listeners.filter((listener) => listener !== updateToasts)
    }
  }, [])

  return { toasts: toastList }
}
