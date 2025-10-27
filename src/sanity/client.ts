import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: '2025-07-01',
    useCdn: true, // or conditionally: import.meta.env.MODE === 'production'
})

