import {useLoaderData} from '@remix-run/react';
import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen-react';

export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}
export default function Collections() {
  const {collections} = useLoaderData();

  return (
    <section className="w-full gap-4 p-4">
      <h2 className="text-4xl whitespace-pre-wrap font-bold inline-block py-6">
        Collections
      </h2>
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-3">
        {collections.nodes.map((collection) => {
          return (
            <Link to={`/products/${collection.handle}`} key={collection.id}>
              <div className="grid gap-4 border border-gray-200 rounded p-4 shadow hover:shadow-lg transition duration-300 ease-in ">
                {collection?.image && (
                  <Image
                  className='object-contain h-48 w-full'
                    alt={`Image of ${collection.title}`}
                    data={collection.image}
                    key={collection.id}
                    sizes="(max-width: 32em) 100vw, 33vw"
                    crop="center"
                  />
                )}
                <h2 className="whitespace-pre-wrap max-w-prose font-medium text-copy p-2">
                  {collection.title}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

const COLLECTIONS_QUERY = `#graphql
query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart") {
      nodes {
        id
        title
        handle
        image {
            altText
            width
            height
            url
          }
      }
    }
  }
  `;
