import Carousel from "./NewCarousel";
import Image from "next/image";

const Card = ({ listing }) => {
  return (
    <div className="w-full h-full bg-white">
      {listing.Photo[0] && (
        <Carousel loop>
          {listing.Photo.slice(0, 5).map((src, i) => {
            return (
              <div
                className="relative aspect-square flex-[0_0_100%] rounded-xl"
                key={i}
              >
                <Image
                  src={src}
                  fill
                  className="object-cover rounded-xl"
                  alt="alt"
                />
              </div>
            );
          })}
        </Carousel>
      )}
      <div style={listing.Rate ? { display: 'grid', gridTemplateColumns: '20fr 3fr' } : {}}>
        <ul className={`flex flex-col pt-2 ml-1 gap-y-0.5`}>
          <li className="text-xl font-semibold capitalize line-clamp-1">
            {listing.Name}
          </li>
          <li className="text-sm text-gray-600">
            {listing.Address.split("~").slice(0, 3).join(", ")}
          </li>
          <li className="font-semibold">
            {Math.round(listing.Price  * 1.15) }₾<span className="font-[500]">/Night</span>
          </li>
        </ul>
        {
          listing.Rate ? (
            <div className="mt-2">
              <span className="star">&#9733; </span> {listing.Rate.toFixed(1)}
            </div>
          ) : null
        }
      </div>
    </div>
  );
};
export default Card;
