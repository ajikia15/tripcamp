import React from "react";
export default function CategIcons({ name, id }) {
  return (
    <div>
      <ul className="flex flex-row flex-wrap nowrap">
        <li className="flex flex-col text-gray-500 place-items-center gap-x-8">
          <div className="text-gray-500 aspect-square">
            <img src={`${id}.svg`} alt="" />
          </div>
          <p className="truncate">{name}</p>
        </li>
      </ul>
    </div>
  );
}
