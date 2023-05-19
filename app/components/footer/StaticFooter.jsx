"use client";
export default function StaticFooter() {
  return (
    <div className="w-full p-4 text-lg bg-white rounded-t-2xl">
      <div className="grid w-4/5 grid-cols-1 mx-auto gap-y-10 md:grid-cols-1 lg:grid-cols-4 py-14">
        <div className="grid space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Support</h5>
          <ul className="grid-cols-3 md:grid md:grid-rows-2 md:grid-cols-3 md:gap-y-3 lg:grid-cols-1 lg:grid-rows-5 lg:gap-y-4 [&>*]:cursor-pointer">
            <li>Help Center</li>
            <li>Supporting people with disabilities</li>
            <li>Cancellation options</li>
            <li>Our Covid-19 Response</li>
            <li>Report a neighborhood concern</li>
          </ul>
        </div>
        <ul className="space-y-4 text-xs text-gray-800 [&>*]:cursor-pointer">
          <li>
            <h5 className="font-bold">Community</h5>
          </li>
          <li>Disaster relief housing</li>
          <li>Combating discrimination</li>
          <li>Anonymous Sign in</li>
        </ul>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Hosting</h5>
          <ul className="grid-cols-3 md:grid md:grid-rows-2 md:grid-cols-3 md:gap-y-3 lg:grid-cols-1 lg:grid-rows-5 lg:gap-y-4 [&>*]:cursor-pointer">
            <li>tripcamp your home</li>
            <li>tripcover for hosts</li>
            <li>Explore hosting resources</li>
            <li>Visit our community forum</li>
            <li>how to host responsibly</li>
          </ul>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">TripCamp</h5>
          <ul className="grid-cols-3 md:grid md:grid-rows-2 md:grid-cols-3 md:gap-y-3 lg:grid-cols-1 lg:grid-rows-5 lg:gap-y-4 [&>*]:cursor-pointer">
            <li>Newsroom</li>
            <li>learn about features</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Gift cards</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
