import {Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';

export default function Card({product}) {
  const {price, compareAtPrice} = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <Link to={`/product/${product.handle}`}>
      <div className="grid gap-4 border border-gray-200 rounded p-4 shadow hover:shadow-lg transition duration-300 ease-in">
        <div className="shadow-sm rounded relative">
          {isDiscounted && (
            <label className="subpixel-antialiased absolute top-0 right-0 m-4 text-right text-notice text-red-600 text-xs">
              Sale
            </label>
          )}
          <Image
            className="object-contain h-48 w-full"
            data={product.variants.nodes[0].image}
            alt={product.title}
          />
        </div>
        <div className="grid gap-1">
          <h3 className="max-w-prose text-copy w-full overflow-hidden whitespace-nowrap text-ellipsis ">
            {product.title}
          </h3>
          <div className="flex gap-4">
            <span className="max-w-prose whitespace-pre-wrap inherit text-copy flex gap-4">
              <Money withoutTrailingZeros data={price} />
              {isDiscounted && (
                <Money
                  className="line-through opacity-50"
                  withoutTrailingZeros
                  data={compareAtPrice}
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
