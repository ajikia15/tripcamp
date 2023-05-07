"use server";
import Card from "./reusable/Card";
export default async function TempListings() {
  return (
    <div className="grid w-full place-items-center">
      <div className="grid w-11/12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:w-4/5 xl:w-5/6 ">
        {[...Array(5)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
}
