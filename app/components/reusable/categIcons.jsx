import React from "react";
export default function CategIcons(props) {
  return (
    <div>
      <ul className="flex flex-row flex-wrap nowrap aspect-square">
        <li className="flex flex-col place-items-center gap-x-8  text-gray-500">
          <div className="text-gray-500 aspect-square">
            {props.svg}
          </div>{" "}
          <p className="truncate">{props.name}</p>
        </li>
      </ul>
    </div>
  );
}
