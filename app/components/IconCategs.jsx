import Image from "next/image";
export default function IconCategs({ name, id }) {
  return (
    <div>
      <ul className="flex flex-row flex-wrap nowrap">
        <li className="flex flex-col text-gray-500 place-items-center gap-x-8 ">
          <div className="text-red-400 fill-sky-400">
            <Image
              src={`/${id}.svg`}
              alt="House Category"
              width={30}
              height={30}
            />
          </div>
          <p className="truncate">{name}</p>
        </li>
      </ul>
    </div>
  );
}
