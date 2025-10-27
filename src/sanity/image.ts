import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './client'

const builder = imageUrlBuilder(client)

/** Build a fully optimized Sanity image URL */
export const urlFor = (source: SanityImageSource) => builder.image(source)
