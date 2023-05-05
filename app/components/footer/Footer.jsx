export default function Footer() {
  return (
    <div className="hidden w-full bg-gray-100 md:block lg:block">
      <div className="grid w-4/5 grid-cols-1 mx-auto gap-y-10 md:grid-cols-1 lg:grid-cols-4 py-14">
        <div className="grid space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Support</h5>
          <div className="grid-cols-3 md:grid md:grid-rows-2 md:grid-cols-3 md:gap-y-3 lg:grid-cols-1 lg:grid-rows-5 lg:gap-y-4">
            <p>Help Center</p>
            <p>Supporting people with disabilities</p>
            <p>Cancellation options</p>
            <p>Our Covid-19 Response</p>
            <p>Report a neighborhood concern</p>
          </div>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Community</h5>
          <p>Disaster relief housing</p>
          <p>Combinating discrimination</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Hosting</h5>
          <div className="grid-cols-3 md:grid md:grid-rows-2 md:grid-cols-3 md:gap-y-3 lg:grid-cols-1 lg:grid-rows-5 lg:gap-y-4">
            <p>tripmcamp your home</p>
            <p>tripcover for hosts</p>
            <p>Explore hosting resources</p>
            <p>Visit our community forum</p>
            <p>how to host responsibly</p>
          </div>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">TripCamp</h5>
          <div className="grid-cols-3 md:grid md:grid-rows-2 md:grid-cols-3 md:gap-y-3 lg:grid-cols-1 lg:grid-rows-5 lg:gap-y-4">
            <p>Newsroom</p>
            <p>learn about features</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Gift cards</p>
          </div>
        </div>
      </div>
    </div>
  );
}
