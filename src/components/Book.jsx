/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeBooking } from "../redux/actions";
import { FaPlus } from "react-icons/fa";
const Book = () => {
  const data = useSelector((state) => state.data);
  const size = data.length;
  const dispatch = useDispatch();
  const [bookingData, setBookingData] = useState({});

  const handleChange = (e) => {
    const newBookingData = { ...bookingData };
    newBookingData[e.target.name] = e.target.value;
    setBookingData(newBookingData);
  };

  const handleBook = (e) => {
    e.preventDefault();
    if (size >= 5) {
      alert("Vous ne pouvez pas reservez plus de 5");
    } else {
      if (Object.keys(bookingData).length === 5) {
        dispatch(makeBooking({ ...bookingData, id: size + 1 }));
      } else {
        alert("Attention");
      }
    }
  };

  return (
    <div className="mt-[160px] mx-4 md:mt-[160px]">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form className="flex flex-col md:flex-row">
          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>De</p>
            <div className="flex flex-row">
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Selectionnez
                </option>
                <option>Istanbul</option>
                <option>Paris</option>
                <option>Londres</option>
                <option>Rome</option>
              </select>
            </div>
          </div>

          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>à</p>
            <div className="flex flex-row">

              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Selectionnez
                </option>
                <option>Istanbul</option>
                <option>Paris</option>
                <option>Londres</option>
                <option>Rome</option>
              </select>
            </div>
          </div>

          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Date Voyage</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              required
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Personnes</p>
            <div className="flex flex-row">
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Selectionnez
                </option>
                <option value="1">1 Persone</option>
                <option value="2">2 Personnes</option>
                <option value="3">3 Personnes</option>
                <option value="4">4 Personnes</option>
              </select>
            </div>
          </div>

          <div className="py-1.5 px-2.5 flex-1 border-r-2">
            <p>Classe</p>
            <div className="flex flex-row">
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketclassName"
                required
                onChange={(e) => handleChange(e)}
              >
                <option value="" hidden>
                  Selectionnez
                </option>
                <option>Premium</option>
                <option>Eco</option>
              </select>
            </div>
          </div>

          <button
            onClick={(e) => handleBook(e)}
            className="inline-flex items-center bg-red-500 text-white px-8 py-1 space-x-2"
            type="submit"
          >
            <FaPlus />
            <span className="text-sm">Réserver</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
