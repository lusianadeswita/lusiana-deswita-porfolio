import { useEffect } from 'react'

type DocumentMeta = {
  title: string
  description: string
}

function setMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setProperty(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  )
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setProperty('og:title', title)
    setProperty('og:description', description)
    setProperty('twitter:title', title)
    setProperty('twitter:description', description)

    return () => {
      document.title = 'Lusiana Deswita — UI/UX Designer Portfolio'
    }
  }, [title, description])
}
