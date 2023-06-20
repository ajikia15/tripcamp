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
      <ul className="flex flex-col pt-2 ml-1 gap-y-0.5">
        <li className="text-xl font-semibold capitalize">{listing.Name}</li>
        <li className="text-sm text-gray-600 truncate">
          {listing.Address.split("~").slice(0, 3).join(", ")}
        </li>
        <li className="font-semibold">
          {listing.Price}₾<span className="font-[500]">/Night</span>
        </li>
      </ul>
    </div>
  );
};
export default Card;
