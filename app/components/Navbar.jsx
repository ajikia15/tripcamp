export default function Navbar() {
  return (
    <div className= "w-full py-2 rounded-full shadow-sm cursor-pointer border-4rem md:w-auto hover:shadow-md transation"> 

 <div className="pl-6 font-semibold">TripCamp</div>
  <div className="flex flex-row justify-between item-center"
  >

    <div className="px-6 text-sm font-semibold">
      when
      <p>anytime</p>
      </div>
      <div className="flex-1 hidden px-6 text-sm font-semibold text-center border-x-[1px] sm:block">
        price
        <p>any amount</p>
      </div>
      <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm font-semibold">
        <div className="hidden sm:block">
          who
          <p>2 guests</p>
        </div>
        <div className="p-2 text-white bg-blue-700 rounded-full">

        </div>

      </div>
  </div>
  </div>
  );
}
