import React, { useEffect, useState } from "react";
import News from "./News";
import { getNews, Newss } from "../utils/api";

export default function Newser() {
  const [news, setNews] = useState<Newss[] | null>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const newsData = await getNews();
        setNews(newsData as Newss[]);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <h1 className=" font-bold text-2xl mb-2 mx-auto text-blue">NEWS</h1>

      {loading && (
        <p className="font-bold text-center text-xl">Loading latest news..</p>
      )}
      {error && (
        <div className=" w-full min-h-72 flex items-center justify-center text-red-500">
          {" "}
          <p className="font-bold text-center">{error}</p>
        </div>
      )}
      {news && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((news) => (
            <News
              key={news.href}
              thumbnail={news.thumbnail}
              title={news.title}
              desc={news.desc}
              href={news.href}
            />
          ))}
        </div>
      )}
    </>
  );
}
