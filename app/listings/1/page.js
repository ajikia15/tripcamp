// import Twins from '../public/Twins.jpg';
import Image from 'next/image'


export default function Listing() {
    return (
        <div className="w-11/12 mx-auto xl:w-5/6">
            <div className="w-4/5">
                <p className="text-sm"> Address </p>
                <h1 className="text-3xl font-bold"> Title </h1>
            </div>
            <div className="flex gap-2">
                <div className="w-1/2 aspect-square bg-zinc-800 rounded-md rounded-r-none">
                    <img
                        className="object-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                        alt="Listing Image"
                    />
                </div>
                <div className="w-1/2 flex flex-col gap-y-2">
                    <div className="flex flex-row gap-2">
                        <div className="w-full h-full aspect-square bg-zinc-800">
                            <img
                                className="object-cover h-full w-full" 
                                src="https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                                alt="Listing Image" 
                            />
                        </div>
                        <div className="w-full h-full aspect-square bg-zinc-800 rounded-md rounded-br-none rounded-l-none">
                            <img
                                className="object-cover h-full w-full" 
                                src="https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                                alt="Listing Image" 
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="w-full h-full aspect-square bg-zinc-800">
                            <img
                                className="object-cover h-full w-full" 
                                src="https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                                alt="Listing Image" 
                            />
                        </div>
                        <div className="w-full h-full aspect-square bg-zinc-800 rounded-md rounded-l-none rounded-tr-none">
                            <img
                                className="object-cover h-full w-full" 
                                src="https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80"
                                alt="Listing Image" 
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-row">
                <div className="w-4/5">
                    <div className="flex flex-row items-center mt-12 mb-4">
                        <div className="flex flex-col pb-4 border-b-2 gap-y-4">
                            <h2 className="text-xl"> Price/Night </h2>
                            <p>
                                Surrounded by beautiful mountains the glamping
                                cottage offers comfortable rest for 3 persons.
                                The property has huge green garden and relax
                                zone. Guests can spend time in wild nature and
                                enjoy the real village life.
                            </p>
                            <div>
                                <p className="font-bold"> Location details </p>
                                <p>
                                    Surrounded by beautiful mountains the glamping
                                    cottage offers comfortable rest for 3 persons.
                                    The property has huge green garden and relax
                                    zone. Guests can spend time in wild nature and
                                    enjoy the real village life.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="mb-4 text-xl"> List Title </h2>
                        <div className="grid grid-cols-1 grid-rows-2 pb-2 mb-4 border-b-2 md:grid-cols-2 md:grid-rows-1">
                            <div className="">
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                            </div>
                            <div className="text-zinc-800">
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                            </div>
                        </div>
                        <h2 className="mb-4 text-xl"> List Title </h2>
                        <div className="grid pb-2 mb-4 border-b-2 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1">
                            <div className="text-zinc-800">
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                            </div>
                        </div>
                        <h2 className="mb-4 text-xl"> List Title </h2>
                        <div className="grid pb-2 mb-4 border-b-2 sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1">
                            <div className="text-zinc-800">
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                            </div>
                            <div className="text-zinc-800">
                                <div className="flex mb-2 gap-x-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20">
                                        <path
                                            fill="currentColor"
                                            d="M9.5 17a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM8 16a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1Zm3 0a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1ZM11 6c2.464 0 3.863 1.573 4.066 3.474h.062c1.586 0 2.872 1.237 2.872 2.763C18 13.763 16.714 15 15.128 15H6.872C5.286 15 4 13.763 4 12.237c0-1.526 1.286-2.763 2.872-2.763h.062C7.138 7.56 8.535 6 11 6ZM3.803 8.7a.5.5 0 0 1-.228.6l-.082.036l-.801.276a.5.5 0 0 1-.408-.909l.082-.036l.802-.276a.5.5 0 0 1 .635.31ZM8.92 4.5c.332.162.625.373.873.62c-1.762.364-3.03 1.533-3.543 3.156l-.065.224l-.046.187l-.166.03a3.76 3.76 0 0 0-1.25.504A3.28 3.28 0 0 1 8.919 4.5Zm-6.003.17L3 4.702l.762.371a.5.5 0 0 1-.354.931l-.085-.032l-.761-.371a.5.5 0 0 1 .354-.931ZM9.99 2.295a.5.5 0 0 1 .262.585l-.032.084l-.371.762a.5.5 0 0 1-.931-.354l.032-.085l.371-.762a.5.5 0 0 1 .67-.23ZM6.2 2.263l.037.082l.276.802a.5.5 0 0 1-.909.407l-.037-.082l-.275-.801a.5.5 0 0 1 .908-.408Z"
                                        />
                                    </svg>{" "}
                                    <p>name</p>
                                </div>
                            </div>
                        </div>
                        <h2 className="hidden mb-4 text-xl sm:hidden md:block lg:block">

                            List Title
                        </h2>
                    </div>
                    <div className="pb-4 mb-4 border-b-2">
                        <div className="flex items-center justify-center w-full text-white rounded-lg bg-zinc-800 h-96">
                            <p>Calendar</p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="p-4 sticky top-2 hidden md:w-[284px] md:h-[340px] md:ml-2 md:flex-col lg:flex-row lg:justify-around lg:w-[360px] lg:h-64 bg-white shadow-lg rounded-lg text-white md:flex lg:flex justify-center items-center">
                            <div className="md:w-1/2 md:h-1/2 md:mb-2 lg:h-3/4 flex md:flex-row rounded-lg bg-zinc-800 justify-center items-center">QR</div>
                            <p className="w-36 text-sm text-zinc-800 md:text-center">Scan code to Download Tripcamp application to make reservation</p>
                    </div>
                </div>
            </div>
            {/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ES RA ARIIIS BAVSHVI?!*/}
            <div className="w-full">
                <div>
                    <h2 className="mb-4 text-xl"> List Title </h2>
                    <div className="flex items-center justify-center w-full mb-2 text-white rounded-lg bg-zinc-800 h-96">
                        <p>Location</p>
                    </div>
                </div>
                <div className="pb-4 mb-4 border-b-2">
                    <p className="text-lg"> Price/Night </p>
                    <p className="text-sm text-gray-600">
                        {" "}
                        Surrounded by beautiful mountains the glamping
                        cottage offers comfortable rest for 3 persons. The
                        property has huge green garden and relax zone.
                        Guests can spend time in wild nature and enjoy the
                        real village life.{" "}
                    </p>
                </div>
                <div>
                    <h2 className="mb-4 text-xl"> Host </h2>
                    <div className="flex flex-row items-center pb-4 mb-4 border-b-2 gap-x-5">
                        <div className="flex items-center justify-center w-16 h-16 text-xs text-white bg-gray-800 rounded-full">
                            {" "}
                            Img{" "}
                        </div>
                        <div>
                            <p className="text-xl text-zinc-800">
                                {" "}
                                Name, Surname{" "}
                            </p>
                            <p className="text-xs text-gray-400">
                                {" "}
                                Info about name surname{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto">
                    <h2 className="mb-4 text-xl">
                        Things you must know
                    </h2>
                    <div className="grid grid-cols-1 text-sm md:grid-cols-3 gap-x-12 md:gap-x-24 lg:gap-x-32 mb-8">
                        <div className="flex flex-col gap-y-3">
                            <h3 className="font-semibold">Rules</h3>
                            <div className="flex justify-between">
                                <div className="text-gray-600">
                                    Free Cancelation Until
                                </div>
                                <div className="">Nov 10</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-gray-600">
                                    Free Cancelation Until
                                </div>
                                <div className="">Nov 10</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-gray-600">
                                    Free Cancelation Until
                                </div>
                                <div className="">Nov 10</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <h3 className="font-semibold">Rules</h3>
                            <div className="flex justify-between">
                                <div className="text-gray-600">
                                    Free Cancelation Until
                                </div>
                                <div className="">Nov 10</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-gray-600">
                                    Free Cancelation Until
                                </div>
                                <div className="">Nov 10</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-gray-600">
                                    Free Cancelation Until
                                </div>
                                <div className="">Nov 10</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <h3 className="font-semibold">Rules</h3>
                            <div className="flex justify-between">
                                <div className="text-gray-600">
                                    Free Cancelation Until
                                </div>
                                <div className="">Nov 10</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-gray-600">
                                    Free Cancelation Until
                                </div>
                                <div className="">Nov 10</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-gray-600">
                                    Free Cancelation Until
                                </div>
                                <div className="">Nov 10</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
