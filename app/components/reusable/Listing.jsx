export default function Listing() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="hidden md:block lg:block border-b border-b-gray-200 pb-3">
        <div className="flex flex-row w-5/6 mx-auto place-items-center">
          <h2 className="font-bold"> TripCamp </h2>
          <div className="flex flex-row place-items-center mx-auto text-[14px] gap-x-6 border border-gray-200 rounded-full pl-6 pr-2 pt-2 pb-2">
            <div>
              <p> Destination </p>
            </div>
            <div className="border h-5"></div>
            <div> 
              <p> Date </p>
            </div>
            <div className="border h-5"></div>
            <div>
              <p> Price </p>
            </div>
            <div className="border h-5"></div>
            <div className="flex flex-row place-items-center gap-x-6">
              <p> Guests </p>
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm"> Address </p>
        <h1 className="text-3xl font-bold"> Title </h1>
      </div>
      <div>
        <p> Photos </p>
      </div>
      <div className="flex flex-row mt-12 mb-4 items-center">
        <div className="flex flex-col gap-y-4 border-b-2 pb-4 w-3/4">
          <h2 className="text-xl"> Price/Night </h2>
          <p> Surrounded by beautiful mountains the glamping cottage offers comfortable rest for 3 persons. The property has huge green garden and relax zone. Guests can spend time in wild nature and enjoy the real village life. </p>
          <div>
            <p className="font-bold"> Location details </p>
            <p> Surrounded by beautiful mountains the glamping cottage offers comfortable rest for 3 persons. The property has huge green garden and relax zone. Guests can spend time in wild nature and enjoy the real village life. </p>
          </div>
        </div>
        <div className="hidden md:w-[284px] md:h-[340px] md:ml-2 md:flex-col lg:flex-row lg:justify-around lg:w-[360px] lg:h-64 bg-white shadow-lg rounded-lg text-white md:flex lg:flex justify-center items-center">
          <div className="md:w-32 md:h-32 lg:w-32 lg:h-32 flex md:flex-row rounded-lg bg-zinc-800 justify-center items-center">QR</div>
          <p className="w-full text-sm text-zinc-800 lg:w-1/2 md:text-center md:w-36 md:mt-2 ">Scan code to Download Tripcamp application to make reservation</p>
        </div>
      </div>
      <div className="w-4/5">
        <h2 className="text-xl mb-4"> List Title </h2>
        <div className="grid sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 border-b-2 pb-2 mb-4">
          <div className="text-zinc-800">
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
          </div>
          <div className="text-zinc-800">
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
          </div>
        </div>
        <h2 className="text-xl mb-4"> List Title </h2>
        <div className="grid sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 border-b-2 pb-2 mb-4">
          <div className="text-zinc-800">
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
          </div>
        </div>
        <h2 className="text-xl mb-4"> List Title </h2>
        <div className="grid sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 border-b-2 pb-2 mb-4">
          <div className="text-zinc-800">
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
          </div>
          <div className="text-zinc-800">
            <div className="flex gap-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"/></svg>              <p>name</p>
            </div>
          </div>
        </div>
        <h2 className="hidden sm:hidden md:block lg:block text-xl mb-4"> List Title </h2>
      </div>
      <div className="hidden sm:hidden md:block lg:block mb-4 border-b-2 pb-4 w-4/5">
        <div className="w-full bg-zinc-800 h-96 flex justify-center items-center text-white rounded-lg">
          <p>Calendar</p>
        </div>
      </div>
      <div className="hidden sm:hidden md:block lg:block">
        <h2 className="text-xl mb-4"> List Title </h2>
        <div className="w-full bg-zinc-800 h-96 flex justify-center items-center text-white rounded-lg mb-2">
            <p>Location</p>
        </div>
      </div>
      <div className="pb-4 border-b-2 mb-4">
        <p className="text-lg"> Price/Night </p>
        <p className="text-sm text-gray-600"> Surrounded by beautiful mountains the glamping cottage offers comfortable rest for 3 persons. The property has huge green garden and relax zone. Guests can spend time in wild nature and enjoy the real village life. </p>
      </div>
      <div>
        <h2 className="text-xl mb-4"> Host </h2>
        <div className="flex flex-row items-center gap-x-5 pb-4 border-b-2 mb-4">
          <div className="bg-gray-800 rounded-full w-16 h-16 text-white text-xs flex items-center justify-center"> Img </div>
          <div>
            <p className="text-xl text-zinc-800"> Name, Surname </p>
            <p className="text-xs text-gray-400"> Info about name surname </p>
          </div>
        </div>
      </div>
      <div className="pb-12">
        <div className="mx-auto">
          <h2 className="text-xl mb-4"> Things you must know </h2>
          <div className="grid sm:grid-cols-1 sm:grid-rows-3 md:grid-cols-1 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-x-12">
            <div className="grid sm:hidden md:block lg:block grid-rows-1 grid-cols-2 gap-x-[200px] truncate">
              <div className="grid grid-rows-6 grid-cols-1">
                <div>
                  <p className="text-lg text-zinc-800"> List title </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
              </div>
              <div>
                <div>
                  <p>desc</p>
                </div>
                <div>
                  <p>desc</p>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-2 gap-x-[200px] truncate">
            <div className="grid grid-rows-6 grid-cols-1">
                <div>
                  <p className="text-lg text-zinc-800"> List title </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
              </div>
              <div>
                <div>
                  <p>desc</p>
                </div>
                <div>
                  <p>desc</p>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-cols-2 gap-x-[200px] truncate">
            <div className="grid grid-rows-6 grid-cols-1">
                <div>
                  <p className="text-lg text-zinc-800"> List title </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
                <div>
                    <p className="text-base text-zinc-600"> List Item </p>
                </div>
              </div>
              <div>
                <div>
                  <p>desc</p>
                </div>
                <div>
                  <p>desc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
