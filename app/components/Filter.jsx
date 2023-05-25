"use client";
import "./style.css";
import { useState, useEffect } from "react";
import list from "../list";
const Filter = ({
  filterClose,
  active,
  filterTerm,
  setFilterTerm,
}) => {
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    // Update the checked state when filterTerm prop changes
    setCheckedItems(filterTerm);
  }, [filterTerm]);

  const handleCheckboxChange = (event, id) => {
    const updatedCheckedItems = event.target.checked
      ? [...checkedItems, id]
      : checkedItems.filter((item) => item !== id);

    setCheckedItems(updatedCheckedItems);
    setFilterTerm(updatedCheckedItems);
  };

  const isCheckboxChecked = (id) => {
    return checkedItems.includes(id);
  };
  const handleClearSelection = () => {
    setCheckedItems([]);
    setFilterTerm([]);
  };
  const [showAll, setShowAll] = useState(false);
  const displayCount = showAll ? list.length : 4;

  return (
    <>
      <div className="flex-row items-center hidden gap-2 p-2 font-semibold border-2 border-gray-400 cursor-pointer md:flex rounded-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h9m4 0h3m-9 8h9M4 16h3"
            />
            <circle cx="9" cy="16" r="2" />
            <circle cx="15" cy="8" r="2" />
          </g>
        </svg>
        <p className="hidden md:block">Filters</p>
      </div>
      {active && (
        <div className="absolute z-[60] overflow-y-scroll text-lg -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2 rounded-2xl h-4/5 p-x-4">
          <div className="flex flex-col p-6 gap-y-5">
            {/* header */}
            <div className="sticky top-0 bg-white">
              <div className="absolute top-0 left-0 right-0">
                <div className="flex items-center justify-center p-5 bg-white border-b-2">
                  <p className="font-bold text-md">
                    Filters
                  </p>
                </div>
              </div>
            </div>
            {/* mainpart */}
            <div className="flex-1 overflow-y-auto mt-14">
              <div className="flex flex-col border-b-2 gap-y-5">
                <div>
                  <p className="text-lg font-bold">
                    Types Of Glamping
                    <p>
                      Checked IDs: {filterTerm.join(", ")}
                    </p>
                  </p>
                  <p className="text-sm text-zinc-400">
                    Choose glamping type what you want
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="grid grid-cols-4 grid-rows-1 gap-x-2">
                    <div className="flex flex-col items-center p-6 border rounded-md gap-y-2">
                      <div>
                        <svg
                          width="33"
                          height="28"
                          viewBox="0 0 33 28"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M31.9908 16.7169L27.3269 6.03119C26.9541 5.17694 26.1109 4.625 25.1788 4.625H18.8438V1.34375C18.8438 1.08481 18.6339 0.875 18.375 0.875H14.625C14.3661 0.875 14.1562 1.08481 14.1562 1.34375V4.625H7.82119C6.88912 4.625 6.04594 5.17694 5.67312 6.03119L1.00919 16.7169C0.671313 17.4909 0.5 18.3116 0.5 19.1562C0.5 19.2806 0.549375 19.3997 0.637313 19.4877C0.725188 19.5756 0.844438 19.625 0.96875 19.625H2.54562V26.6562C2.54562 26.9152 2.7555 27.125 3.01437 27.125H29.9856C30.2445 27.125 30.4544 26.9152 30.4544 26.6562V19.625H32.0312C32.1556 19.625 32.2748 19.5756 32.3627 19.4877C32.4506 19.3998 32.5 19.2806 32.5 19.1562C32.5 18.3116 32.3287 17.4909 31.9908 16.7169ZM29.3729 13.0625H3.62706L4.44544 11.1875H22.2679C23.0989 11.1875 23.8879 10.913 24.5312 10.4071C25.1745 10.913 25.9635 11.1875 26.7946 11.1875H28.5545L29.3729 13.0625ZM29.7821 14L30.6005 15.875H8.85706C8.12731 15.875 7.44119 15.5908 6.92519 15.0748C6.74213 14.8918 6.44531 14.8918 6.26231 15.0748C5.74625 15.5908 5.06019 15.875 4.33044 15.875H2.3995L3.21788 14H29.7821ZM15.0938 1.8125H17.9062V4.625H15.0938V1.8125ZM6.53237 6.40619C6.75606 5.89369 7.26194 5.5625 7.82119 5.5625H25.1788C25.7381 5.5625 26.2439 5.89369 26.4676 6.40619L26.9177 7.4375H9.57687C9.318 7.4375 9.10812 7.64731 9.10812 7.90625C9.10812 8.16519 9.318 8.375 9.57687 8.375H27.3269L28.1453 10.25H26.7946C26.0648 10.25 25.3787 9.96581 24.8627 9.44975C24.6796 9.26675 24.3828 9.26675 24.1998 9.44975C23.6838 9.96581 22.9977 10.25 22.2679 10.25H4.85469L5.67306 8.375H7.70188C7.96075 8.375 8.17063 8.16519 8.17063 7.90625C8.17063 7.64731 7.96075 7.4375 7.70188 7.4375H6.08225L6.53237 6.40619ZM3.48312 19.625H6.29563V24.7812C6.29563 25.0402 6.5055 25.25 6.76438 25.25H15.5625C15.8214 25.25 16.0312 25.0402 16.0312 24.7812V19.625H16.9688V26.1875H3.48312V19.625ZM13.2188 19.625V22.4375H11.6322V19.625H13.2188ZM10.6947 22.4375H9.10812V19.625H10.6947V22.4375ZM8.63937 23.375H13.6875C13.9464 23.375 14.1562 23.1652 14.1562 22.9062V19.625H15.0938V24.3125H7.23313V19.625H8.17063V22.9062C8.17063 23.1652 8.3805 23.375 8.63937 23.375ZM19.7812 25.25H23.8919V26.1875H19.7812V25.25ZM24.8294 19.625H25.7669V26.1875H24.8294V19.625ZM23.8919 24.3125H19.7812V19.625H23.8919V24.3125ZM18.8438 26.1875H17.9062V19.625H18.8438V26.1875ZM29.5169 26.1875H26.7044V19.625H29.5169V26.1875ZM1.4585 18.6875C1.50813 18.1377 1.64537 17.6028 1.86837 17.0919L1.99031 16.8125H4.33044C5.16156 16.8125 5.9505 16.538 6.59375 16.0321C7.237 16.538 8.026 16.8125 8.85706 16.8125H31.0097L31.1316 17.0919C31.3546 17.6028 31.4919 18.1377 31.5415 18.6875H1.4585Z"
                            fill="#202228"
                          />
                        </svg>
                      </div>
                      <div className="text-sm font-bold">
                        Cottage
                      </div>
                      <div className="text-sm text-zinc-400">
                        200 product
                      </div>
                    </div>
                    <div className="flex flex-col items-center p-6 border rounded-md gap-y-2">
                      <div>
                        <svg
                          width="33"
                          height="28"
                          viewBox="0 0 33 28"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M31.9908 16.7169L27.3269 6.03119C26.9541 5.17694 26.1109 4.625 25.1788 4.625H18.8438V1.34375C18.8438 1.08481 18.6339 0.875 18.375 0.875H14.625C14.3661 0.875 14.1562 1.08481 14.1562 1.34375V4.625H7.82119C6.88912 4.625 6.04594 5.17694 5.67312 6.03119L1.00919 16.7169C0.671313 17.4909 0.5 18.3116 0.5 19.1562C0.5 19.2806 0.549375 19.3997 0.637313 19.4877C0.725188 19.5756 0.844438 19.625 0.96875 19.625H2.54562V26.6562C2.54562 26.9152 2.7555 27.125 3.01437 27.125H29.9856C30.2445 27.125 30.4544 26.9152 30.4544 26.6562V19.625H32.0312C32.1556 19.625 32.2748 19.5756 32.3627 19.4877C32.4506 19.3998 32.5 19.2806 32.5 19.1562C32.5 18.3116 32.3287 17.4909 31.9908 16.7169ZM29.3729 13.0625H3.62706L4.44544 11.1875H22.2679C23.0989 11.1875 23.8879 10.913 24.5312 10.4071C25.1745 10.913 25.9635 11.1875 26.7946 11.1875H28.5545L29.3729 13.0625ZM29.7821 14L30.6005 15.875H8.85706C8.12731 15.875 7.44119 15.5908 6.92519 15.0748C6.74213 14.8918 6.44531 14.8918 6.26231 15.0748C5.74625 15.5908 5.06019 15.875 4.33044 15.875H2.3995L3.21788 14H29.7821ZM15.0938 1.8125H17.9062V4.625H15.0938V1.8125ZM6.53237 6.40619C6.75606 5.89369 7.26194 5.5625 7.82119 5.5625H25.1788C25.7381 5.5625 26.2439 5.89369 26.4676 6.40619L26.9177 7.4375H9.57687C9.318 7.4375 9.10812 7.64731 9.10812 7.90625C9.10812 8.16519 9.318 8.375 9.57687 8.375H27.3269L28.1453 10.25H26.7946C26.0648 10.25 25.3787 9.96581 24.8627 9.44975C24.6796 9.26675 24.3828 9.26675 24.1998 9.44975C23.6838 9.96581 22.9977 10.25 22.2679 10.25H4.85469L5.67306 8.375H7.70188C7.96075 8.375 8.17063 8.16519 8.17063 7.90625C8.17063 7.64731 7.96075 7.4375 7.70188 7.4375H6.08225L6.53237 6.40619ZM3.48312 19.625H6.29563V24.7812C6.29563 25.0402 6.5055 25.25 6.76438 25.25H15.5625C15.8214 25.25 16.0312 25.0402 16.0312 24.7812V19.625H16.9688V26.1875H3.48312V19.625ZM13.2188 19.625V22.4375H11.6322V19.625H13.2188ZM10.6947 22.4375H9.10812V19.625H10.6947V22.4375ZM8.63937 23.375H13.6875C13.9464 23.375 14.1562 23.1652 14.1562 22.9062V19.625H15.0938V24.3125H7.23313V19.625H8.17063V22.9062C8.17063 23.1652 8.3805 23.375 8.63937 23.375ZM19.7812 25.25H23.8919V26.1875H19.7812V25.25ZM24.8294 19.625H25.7669V26.1875H24.8294V19.625ZM23.8919 24.3125H19.7812V19.625H23.8919V24.3125ZM18.8438 26.1875H17.9062V19.625H18.8438V26.1875ZM29.5169 26.1875H26.7044V19.625H29.5169V26.1875ZM1.4585 18.6875C1.50813 18.1377 1.64537 17.6028 1.86837 17.0919L1.99031 16.8125H4.33044C5.16156 16.8125 5.9505 16.538 6.59375 16.0321C7.237 16.538 8.026 16.8125 8.85706 16.8125H31.0097L31.1316 17.0919C31.3546 17.6028 31.4919 18.1377 31.5415 18.6875H1.4585Z"
                            fill="#202228"
                          />
                        </svg>
                      </div>
                      <div className="text-sm font-bold">
                        Cottage
                      </div>
                      <div className="text-sm text-zinc-400">
                        200 product
                      </div>
                    </div>
                    <div className="flex flex-col items-center p-6 border rounded-md gap-y-2">
                      <div>
                        <svg
                          width="33"
                          height="28"
                          viewBox="0 0 33 28"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M31.9908 16.7169L27.3269 6.03119C26.9541 5.17694 26.1109 4.625 25.1788 4.625H18.8438V1.34375C18.8438 1.08481 18.6339 0.875 18.375 0.875H14.625C14.3661 0.875 14.1562 1.08481 14.1562 1.34375V4.625H7.82119C6.88912 4.625 6.04594 5.17694 5.67312 6.03119L1.00919 16.7169C0.671313 17.4909 0.5 18.3116 0.5 19.1562C0.5 19.2806 0.549375 19.3997 0.637313 19.4877C0.725188 19.5756 0.844438 19.625 0.96875 19.625H2.54562V26.6562C2.54562 26.9152 2.7555 27.125 3.01437 27.125H29.9856C30.2445 27.125 30.4544 26.9152 30.4544 26.6562V19.625H32.0312C32.1556 19.625 32.2748 19.5756 32.3627 19.4877C32.4506 19.3998 32.5 19.2806 32.5 19.1562C32.5 18.3116 32.3287 17.4909 31.9908 16.7169ZM29.3729 13.0625H3.62706L4.44544 11.1875H22.2679C23.0989 11.1875 23.8879 10.913 24.5312 10.4071C25.1745 10.913 25.9635 11.1875 26.7946 11.1875H28.5545L29.3729 13.0625ZM29.7821 14L30.6005 15.875H8.85706C8.12731 15.875 7.44119 15.5908 6.92519 15.0748C6.74213 14.8918 6.44531 14.8918 6.26231 15.0748C5.74625 15.5908 5.06019 15.875 4.33044 15.875H2.3995L3.21788 14H29.7821ZM15.0938 1.8125H17.9062V4.625H15.0938V1.8125ZM6.53237 6.40619C6.75606 5.89369 7.26194 5.5625 7.82119 5.5625H25.1788C25.7381 5.5625 26.2439 5.89369 26.4676 6.40619L26.9177 7.4375H9.57687C9.318 7.4375 9.10812 7.64731 9.10812 7.90625C9.10812 8.16519 9.318 8.375 9.57687 8.375H27.3269L28.1453 10.25H26.7946C26.0648 10.25 25.3787 9.96581 24.8627 9.44975C24.6796 9.26675 24.3828 9.26675 24.1998 9.44975C23.6838 9.96581 22.9977 10.25 22.2679 10.25H4.85469L5.67306 8.375H7.70188C7.96075 8.375 8.17063 8.16519 8.17063 7.90625C8.17063 7.64731 7.96075 7.4375 7.70188 7.4375H6.08225L6.53237 6.40619ZM3.48312 19.625H6.29563V24.7812C6.29563 25.0402 6.5055 25.25 6.76438 25.25H15.5625C15.8214 25.25 16.0312 25.0402 16.0312 24.7812V19.625H16.9688V26.1875H3.48312V19.625ZM13.2188 19.625V22.4375H11.6322V19.625H13.2188ZM10.6947 22.4375H9.10812V19.625H10.6947V22.4375ZM8.63937 23.375H13.6875C13.9464 23.375 14.1562 23.1652 14.1562 22.9062V19.625H15.0938V24.3125H7.23313V19.625H8.17063V22.9062C8.17063 23.1652 8.3805 23.375 8.63937 23.375ZM19.7812 25.25H23.8919V26.1875H19.7812V25.25ZM24.8294 19.625H25.7669V26.1875H24.8294V19.625ZM23.8919 24.3125H19.7812V19.625H23.8919V24.3125ZM18.8438 26.1875H17.9062V19.625H18.8438V26.1875ZM29.5169 26.1875H26.7044V19.625H29.5169V26.1875ZM1.4585 18.6875C1.50813 18.1377 1.64537 17.6028 1.86837 17.0919L1.99031 16.8125H4.33044C5.16156 16.8125 5.9505 16.538 6.59375 16.0321C7.237 16.538 8.026 16.8125 8.85706 16.8125H31.0097L31.1316 17.0919C31.3546 17.6028 31.4919 18.1377 31.5415 18.6875H1.4585Z"
                            fill="#202228"
                          />
                        </svg>
                      </div>
                      <div className="text-sm font-bold">
                        Cottage
                      </div>
                      <div className="text-sm text-zinc-400">
                        200 product
                      </div>
                    </div>
                    <div className="flex flex-col items-center px-8 py-6 border rounded-md gap-y-2">
                      <div>
                        <svg
                          width="33"
                          height="28"
                          viewBox="0 0 33 28"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M31.9908 16.7169L27.3269 6.03119C26.9541 5.17694 26.1109 4.625 25.1788 4.625H18.8438V1.34375C18.8438 1.08481 18.6339 0.875 18.375 0.875H14.625C14.3661 0.875 14.1562 1.08481 14.1562 1.34375V4.625H7.82119C6.88912 4.625 6.04594 5.17694 5.67312 6.03119L1.00919 16.7169C0.671313 17.4909 0.5 18.3116 0.5 19.1562C0.5 19.2806 0.549375 19.3997 0.637313 19.4877C0.725188 19.5756 0.844438 19.625 0.96875 19.625H2.54562V26.6562C2.54562 26.9152 2.7555 27.125 3.01437 27.125H29.9856C30.2445 27.125 30.4544 26.9152 30.4544 26.6562V19.625H32.0312C32.1556 19.625 32.2748 19.5756 32.3627 19.4877C32.4506 19.3998 32.5 19.2806 32.5 19.1562C32.5 18.3116 32.3287 17.4909 31.9908 16.7169ZM29.3729 13.0625H3.62706L4.44544 11.1875H22.2679C23.0989 11.1875 23.8879 10.913 24.5312 10.4071C25.1745 10.913 25.9635 11.1875 26.7946 11.1875H28.5545L29.3729 13.0625ZM29.7821 14L30.6005 15.875H8.85706C8.12731 15.875 7.44119 15.5908 6.92519 15.0748C6.74213 14.8918 6.44531 14.8918 6.26231 15.0748C5.74625 15.5908 5.06019 15.875 4.33044 15.875H2.3995L3.21788 14H29.7821ZM15.0938 1.8125H17.9062V4.625H15.0938V1.8125ZM6.53237 6.40619C6.75606 5.89369 7.26194 5.5625 7.82119 5.5625H25.1788C25.7381 5.5625 26.2439 5.89369 26.4676 6.40619L26.9177 7.4375H9.57687C9.318 7.4375 9.10812 7.64731 9.10812 7.90625C9.10812 8.16519 9.318 8.375 9.57687 8.375H27.3269L28.1453 10.25H26.7946C26.0648 10.25 25.3787 9.96581 24.8627 9.44975C24.6796 9.26675 24.3828 9.26675 24.1998 9.44975C23.6838 9.96581 22.9977 10.25 22.2679 10.25H4.85469L5.67306 8.375H7.70188C7.96075 8.375 8.17063 8.16519 8.17063 7.90625C8.17063 7.64731 7.96075 7.4375 7.70188 7.4375H6.08225L6.53237 6.40619ZM3.48312 19.625H6.29563V24.7812C6.29563 25.0402 6.5055 25.25 6.76438 25.25H15.5625C15.8214 25.25 16.0312 25.0402 16.0312 24.7812V19.625H16.9688V26.1875H3.48312V19.625ZM13.2188 19.625V22.4375H11.6322V19.625H13.2188ZM10.6947 22.4375H9.10812V19.625H10.6947V22.4375ZM8.63937 23.375H13.6875C13.9464 23.375 14.1562 23.1652 14.1562 22.9062V19.625H15.0938V24.3125H7.23313V19.625H8.17063V22.9062C8.17063 23.1652 8.3805 23.375 8.63937 23.375ZM19.7812 25.25H23.8919V26.1875H19.7812V25.25ZM24.8294 19.625H25.7669V26.1875H24.8294V19.625ZM23.8919 24.3125H19.7812V19.625H23.8919V24.3125ZM18.8438 26.1875H17.9062V19.625H18.8438V26.1875ZM29.5169 26.1875H26.7044V19.625H29.5169V26.1875ZM1.4585 18.6875C1.50813 18.1377 1.64537 17.6028 1.86837 17.0919L1.99031 16.8125H4.33044C5.16156 16.8125 5.9505 16.538 6.59375 16.0321C7.237 16.538 8.026 16.8125 8.85706 16.8125H31.0097L31.1316 17.0919C31.3546 17.6028 31.4919 18.1377 31.5415 18.6875H1.4585Z"
                            fill="#202228"
                          />
                        </svg>
                      </div>
                      <div className="text-sm font-bold">
                        Cottage
                      </div>
                      <div className="text-sm text-zinc-400">
                        200 product
                      </div>
                    </div>
                  </div>
                  <p className="mb-5 text-sm font-bold underline text-zinc-700">
                    Show More
                  </p>
                </div>
              </div>
              <div className="flex flex-col border-b-2 gap-y-5">
                <div>
                  <p className="text-lg font-bold">
                    Amenities
                  </p>
                  <p className="text-sm text-zinc-400">
                    Choose the Amenities
                  </p>
                </div>
                <div className="grid grid-cols-2">
                  {list
                    .filter(
                      (item) => item.id > 50 && item.id < 80
                    )
                    .slice(0, displayCount) // Use displayCount to limit the number of checkboxes
                    .map((item) => (
                      <div key={item.id}>
                        <input
                          type="checkbox"
                          id={item.id}
                          onChange={(e) =>
                            handleCheckboxChange(e, item.id)
                          }
                          checked={isCheckboxChecked(
                            item.id
                          )}
                        />
                        <label htmlFor={item.id}>
                          {item.name}
                        </label>
                      </div>
                    ))}
                </div>
                {!showAll ? (
                  <p
                    className="mb-5 text-sm font-bold underline cursor-pointer text-zinc-700"
                    onClick={() => setShowAll(true)}>
                    Show More
                  </p>
                ) : (
                  <p
                    className="mb-5 text-sm font-bold underline cursor-pointer text-zinc-700"
                    onClick={() => setShowAll(false)}>
                    Show Less
                  </p>
                )}
                <div className="flex flex-col border-b-2 gap-y-5">
                  <div>
                    <p className="text-lg font-bold">
                      Features
                    </p>
                    <p className="text-sm text-zinc-400">
                      Choose the features you want
                    </p>
                  </div>
                  <div className="grid grid-cols-2">
                    {list
                      .filter(
                        (item) =>
                          item.id > 30 && item.id < 40
                      )
                      .map((item) => (
                        <div key={item.id}>
                          <input
                            type="checkbox"
                            id={item.id}
                            onChange={(e) =>
                              handleCheckboxChange(
                                e,
                                item.id
                              )
                            }
                            checked={isCheckboxChecked(
                              item.id
                            )}
                          />
                          <label htmlFor={item.id}>
                            {item.name}
                          </label>
                        </div>
                      ))}
                  </div>
                  <p className="mb-5 text-sm font-bold underline text-zinc-700">
                    Show More
                  </p>
                </div>
                <div className="flex flex-col border-b-2 gap-y-5">
                  <div>
                    <p className="text-lg font-bold">
                      Features
                    </p>
                    <p className="text-sm text-zinc-400">
                      Choose the views you want
                    </p>
                  </div>
                  <div className="grid grid-cols-2">
                    {list
                      .filter(
                        (item) =>
                          item.id > 40 && item.id < 50
                      )
                      .map((item) => (
                        <div key={item.id}>
                          <input
                            type="checkbox"
                            id={item.id}
                            onChange={(e) =>
                              handleCheckboxChange(
                                e,
                                item.id
                              )
                            }
                            checked={isCheckboxChecked(
                              item.id
                            )}
                          />
                          <label htmlFor={item.id}>
                            {item.name}
                          </label>
                        </div>
                      ))}
                  </div>
                  <p className="mb-5 text-sm font-bold underline text-zinc-700">
                    Show More
                  </p>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 left-0 flex flex-row items-center justify-between w-full py-2 bg-white border-t-2 border-gray-200">
              <button
                className="text-sm font-bold text-zinc-700 "
                onClick={handleClearSelection}>
                Clear All
              </button>
              <button
                type="button"
                className="p-3 text-white transition duration-500 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-gradient-to-l"
                onClick={filterClose}>
                <p className="text-sm"> Save Filter </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Filter;
