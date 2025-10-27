import { useEffect, useState } from "react";
import MessageCard from "../components/message-card/MessageCard";
import type { SermonPreview, SermonsPage } from "../lib/types/sermon";
import PageBanner from "../components/banner/PageBanner";
import {
  fetchSermonCategories,
  fetchSermons,
  fetchSermonsPage,
} from "../lib/api/sermonsApi";
import type { HeroSection } from "../lib/types/home";

const Sermons = () => {
  const [pageData, setPageData] = useState<SermonsPage | null>(null);
  const [sermons, setSermons] = useState<SermonPreview[]>([]);
  const [loading, setLoading] = useState(true);

  const [categories, setCategories] = useState<
    { title: string; slug: string }[]
  >([]);
  const [category, setCategory] = useState<string | undefined>();
  const [page, setPage] = useState(0);
  const limit = 6;

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [pageInfo, categoryList, sermonsList] = await Promise.all([
          fetchSermonsPage(),
          fetchSermonCategories(),
          fetchSermons(category, page * limit, (page + 1) * limit),
        ]);
        setPageData(pageInfo);
        setCategories(categoryList);
        setSermons(sermonsList);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [page]);

  if (loading) return <p className="text-center py-8">Loading sermons...</p>;
  if (!pageData) return <p className="text-center py-8">No page data found.</p>;

  return (
    <div className="main mt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold py-4">Sermons</h1>
      </div>
      {pageData && (
        <PageBanner color="light" data={pageData.hero as HeroSection} />
      )}
      <div className="container mx-auto px-4 py-12">
        <article className="text-center">
          <h4 className="text-xl uppercase font-bold text-black/50">Listen</h4>
          <h1 className="text-4xl capitalize font-bold">Sermons Archive</h1>
        </article>

        <div className="flex flex-wrap justify-center gap-3 my-10">
          <button
            onClick={() => {
              setCategory(undefined);
              setPage(0);
            }}
            className={`px-4 py-2 rounded-full border ${
              !category ? "bg-black text-white" : "border-gray-300"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => {
                setCategory(cat.slug);
                setPage(0);
              }}
              className={`px-4 py-2 rounded-full border ${
                category === cat.slug
                  ? "bg-black text-white"
                  : "border-gray-300"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
        {sermons.length === 0 ? (
          <p className="text-center text-gray-500 my-8">No sermons found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {sermons.map((sermon) => (
              <MessageCard key={sermon.slug} data={sermon} />
            ))}
          </div>
        )}
        {/* Pagination */}
        {sermons.length > limit && (
          <div className="flex justify-center gap-4 mt-12">
            <button
              className="px-4 py-2 border rounded disabled:opacity-50"
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 border rounded"
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sermons;
