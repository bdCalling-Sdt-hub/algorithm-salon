import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import image from "../../../assets/Rectangle 2521.png";

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
        }
      ],
      contact_information: {
        phone: "+1-555-123-4567",
      },
      salon_specialization: "Men's Grooming",
    }
  };

  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg">
        <div className="flex items-center p-4 border-b">
          <MdOutlineKeyboardArrowLeft onClick={() => navigate(-1)} size={34} className="cursor-pointer" />
          <h1 className="text-[24px] text-gray-700 font-semibold ml-4">
            Salon Owner Detail
          </h1>
        </div>

        {/* Image and Basic Info */}
        <div className="p-4">
          <img
            src={image} // Replace with actual image URL
            alt="Barber Shop"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className="text-[22px] font-bold text-gray-800">{data.barber_shop.name}</h2>
          <p className="text-gray-600 mt-2">{data.barber_shop.address}</p>
          <p className="text-gray-600 mt-4">{data.barber_shop.description}</p>
        </div>

        {/* Tags and Services */}
        <div className="px-4 py-4 bg-gray-50">
          <h3 className="text-[18px] font-semibold text-gray-700">Tags:</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {data.barber_shop.tags.map((tag, index) => (
              <li key={index} className="bg-blue-100 text-blue-700 py-1 px-3 rounded-full text-sm">
                {tag}
              </li>
            ))}
          </ul>

          <h3 className="text-[18px] font-semibold text-gray-700 mt-6">Services:</h3>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            {data.barber_shop.services.map((service, index) => (
              <li key={index}>
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing, Accessibility, and Hours */}
        <div className="px-4 py-4">
          <div className="mb-6">
            <h3 className="text-[18px] font-semibold text-gray-700">Price Range:</h3>
            <p className="text-gray-600 mt-2">{data.barber_shop.price_range}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-[18px] font-semibold text-gray-700">Accessibility:</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              {data.barber_shop.accessibility.wheelchair_accessible && (
                <li>Wheelchair Accessible</li>
              )}
              {data.barber_shop.accessibility.street_parking && (
                <li>Street Parking Available</li>
              )}
              {data.barber_shop.accessibility.public_transit_nearby && (
                <li>Public Transit Nearby</li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-gray-700">Available Service Hours:</h3>
            <ul className="mt-2 text-gray-600">
              {data.barber_shop.available_service_hours.map((hour, index) => (
                <li key={index} className="flex justify-between py-1">
                  <span>{hour.day}:</span>
                  <span>{hour.open_time} - {hour.close_time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact and Specialization */}
        <div className="px-4 py-4 bg-gray-50">
          <div className="mb-6">
            <h3 className="text-[18px] font-semibold text-gray-700">Contact Information:</h3>
            <p className="text-gray-600 mt-2">{data.barber_shop.contact_information.phone}</p>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold text-gray-700">Salon Specialization:</h3>
            <p className="text-gray-600 mt-2">{data.barber_shop.salon_specialization}</p>
          </div>
        </div>

        {/* Accept and Reject Buttons */}
        <div className="p-4 flex justify-around">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full text-lg shadow-md transition">
            Accept
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full text-lg shadow-md transition">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;

