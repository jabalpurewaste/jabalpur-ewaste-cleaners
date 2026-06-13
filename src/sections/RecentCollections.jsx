import { useEffect, useState } from "react";
import { getCollections } from "../services/collectionService";
function RecentCollections() {

  const [collections, setCollections] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchCollections();

  }, []);

  async function fetchCollections() {

    try {

      const response =
        await getCollections();

      if (response.success) {

        setCollections(
          response.collections.slice(0, 6)
        );

      }

    } catch (error) {

      console.error(
        "Error loading collections",
        error
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <section className="py-24 bg-gray-50 dark:bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-green-700 text-sm font-bold mb-4">
          Recent Collection
        </div>

        {loading ? (

          <div className="text-center">
            Loading Collections...
          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-8">

            {collections.map((item, index) => (

              <div
                key={index}
                className="
                rounded-3xl
                bg-white
                shadow-xl
                p-8
                border-l-8
                border-green-600
                hover:-translate-y-2
                duration-300
                "
              >

                <h3 className="text-2xl font-semibold text-slate-900">
                  {item.organization}
                </h3>

                <span
                  className="
                  px-3
                  py-1
                  rounded-full
                  bg-green-100
                  text-green-700
                  inline-block
                  mt-3
                  "
                >
                  {item.quantity}
                </span>

                <p className="mt-4 text-gray-900">
                  Date : {item.date}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>

  );
}

export default RecentCollections;