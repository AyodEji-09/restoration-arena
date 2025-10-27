import { client } from "../../sanity/client";
import { allSermonsQuery, sermonCategoriesQuery, sermonsByCategoryQuery, sermonsPageQuery } from "../../sanity/queries/sermonsQuery";
import type { SermonPreview, SermonsPage } from "../types/sermon";

export async function fetchSermons(
    categorySlug?: string,
    start = 0,
    end = 6
): Promise<SermonPreview[]> {
    if (categorySlug) {
        return await client.fetch(sermonsByCategoryQuery, { slug: categorySlug, start, end });
    } else {
        return await client.fetch(allSermonsQuery, { start, end });
    }
}

export async function fetchSermonsPage(): Promise<SermonsPage> {
    return await client.fetch(sermonsPageQuery);
}
export async function fetchSermonCategories() {
    return await client.fetch<{ title: string; slug: string }[]>(sermonCategoriesQuery);
  }
