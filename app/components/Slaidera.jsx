import Carousel from "./NewCarousel";
import Image from "next/image";

export default function Slaidera({ listing }) {
  return (
    <div className="w-full h-full">
      <Carousel loop>
        {listing.Photo.slice(0, 5).map((src, i) => {
          return (
            <div
              className="relative aspect-square flex-[0_0_100%] rounded-xl "
              key={i}>
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
      <ul className="flex flex-col gap-0 ml-1">
        <li className="text-xl font-semibold">
          {listing.Name}
        </li>
        <li className="text-sm text-gray-600">
          {listing.Address.split("~")
            .slice(0, 3)
            .join(", ")}
        </li>
        <li className="font-semibold">
          {listing.Price}$
          <span className="font-[500]">/Night</span>
        </li>
      </ul>
    </div>
  );
}
