export default function Card() {
  return (
    <div className="flex flex-col">
      <a href="listings/1">
        <div className="relative rounded-xl">
          <img
            className="aspect-square rounded-xl"
            src="https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          <div className="absolute text-white top-4 right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
              />
            </svg>
          </div>
        </div>
        <div>
          <a href="#" className="w-full lg:w-1/4 md:w-1/2">
            <h4 className="pt-2 text-lg font-medium">
              Underground Hygge
            </h4>
            <h5 className="py-1 mb-1 text-sm text-gray-600">
              Georgia, Racha, Ambrolauri, Jvarisa
            </h5>
            <p className="mb-1 text-sm font-semibold text-black ">
              $150/night
            </p>
          </a>
        </div>
      </a>
    </div>
  );
}
