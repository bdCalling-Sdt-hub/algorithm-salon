import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const RequestDetails = () => {
  const data = {
    barber_shop: {
      name: "Clipper Kingz",
      address: "45/67, Elm Street, Brooklyn, NY",
      description:
        "Clipper Kingz is your go-to place for top-notch haircuts and grooming services. Our expert barbers ensure that every cut is sharp and every shave is smooth. Whether you're looking for a classic style or something modern, we've got you covered. Relax in our comfortable chairs and enjoy a complimentary beverage while you wait.",
      tags: ["Haircuts", "Beard Trimming", "Grooming Services", "Hot Towel Shave"],
      services: ["Haircuts", "Beard Trim", "Hot Towel Shave", "Grooming Packages"],
      price_range: "$25 - $150",
      accessibility: {
        wheelchair_accessible: true,
        street_parking: true,
        public_transit_nearby: true,
      },
      available_service_hours: [
        {
          day: "Sunday",
          open_time: "10:00 AM",
          close_time: "6:00 PM",
        },
        {
          day: "Monday",
          open_time: "9:00 AM",
          close_time: "8:00 PM",
        },
        {
          day: "Tuesday",
          open_time: "9:00 AM",
          close_time: "8:00 PM",
        },
        {
          day: "Wednesday",
          open_time: "9:00 AM",
          close_time: "8:00 PM",
        },
        {
          day: "Thursday",
          open_time: "9:00 AM",
          close_time: "8:00 PM",
        },
        {
          day: "Friday",
          open_time: "9:00 AM",
          close_time: "8:00 PM",
        },
        {
          day: "Saturday",
          open_time: "9:00 AM",
          close_time: "8:00 PM",
        },
      ],
      contact_information: {
        phone: "+1-555-123-4567",
      },
      salon_specialization: "Men's Grooming",
    },
  };

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="mt-[44px] cursor-pointer flex items-center pb-3 gap-2">
          <MdOutlineKeyboardArrowLeft onClick={() => navigate(-1)} size={34} />
          <h1 className="text-[24px] text-textColor font-semibold">
            Salon Owner Detail
          </h1>
        </div>
        <div className="mt-5">
          <h2 className="text-[22px] font-bold">{data.barber_shop.name}</h2>
          <p className="text-textColor mt-2">{data.barber_shop.address}</p>
          <p className="text-textColor mt-4">{data.barber_shop.description}</p>

          <div className="mt-4">
            <h3 className="text-[18px] font-semibold">Tags:</h3>
            <ul className="list-disc pl-5 mt-2">
              {data.barber_shop.tags.map((tag, index) => (
                <li key={index} className="text-textColor">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-[18px] font-semibold">Services:</h3>
            <ul className="list-disc pl-5 mt-2">
              {data.barber_shop.services.map((service, index) => (
                <li key={index} className="text-textColor">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-[18px] font-semibold">Price Range:</h3>
            <p className="text-textColor mt-2">{data.barber_shop.price_range}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-[18px] font-semibold">Accessibility:</h3>
            <ul className="list-disc pl-5 mt-2">
              {data.barber_shop.accessibility.wheelchair_accessible && (
                <li className="text-textColor">Wheelchair Accessible</li>
              )}
              {data.barber_shop.accessibility.street_parking && (
                <li className="text-textColor">Street Parking Available</li>
              )}
              {data.barber_shop.accessibility.public_transit_nearby && (
                <li className="text-textColor">Public Transit Nearby</li>
              )}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-[18px] font-semibold">Available Service Hours:</h3>
            <ul className="pl-5 mt-2">
              {data.barber_shop.available_service_hours.map((hour, index) => (
                <li key={index} className="text-textColor">
                  {hour.day}: {hour.open_time} - {hour.close_time}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-[18px] font-semibold">Contact Information:</h3>
            <p className="text-textColor mt-2">{data.barber_shop.contact_information.phone}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-[18px] font-semibold">Salon Specialization:</h3>
            <p className="text-textColor mt-2">{data.barber_shop.salon_specialization}</p>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded">
            Accept
          </button>
          <button className="bg-red-500 text-white py-2 px-4 rounded">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;

