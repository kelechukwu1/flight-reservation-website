import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookFlight = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-950 p-2">
      <div className="mt-5">
        <img
          className="mx-auto bg-no-repeat h-72 bg-center rounded-full bg-contain"
          src="/booked.png"
          alt="booked image"
        />
      </div>
      <div className="m-14 md:mx-36 lg:mx-[20rem]">
        <div className="text-center items-center text-gray-400 border rounded p-10 lg:px-[10rem]">
          <h1 className="text-white text-3xl">Your booking is confirmed.</h1>
          <div className="text-2xl p-3">
            <div>
              Copy your reference number to enable you pay for your booked
              flight.
            </div>
            <div>
              Reference number:{" "}
              <span className="text-gray-200 font-bold underline underline-offset-2">
                13JYDN
              </span>
            </div>
            <div>
              Your booking will expire at 15 Jun, 04:55am. Payment must be made
              before expiration. Please make allowance for 30 minutes minium
              before the expiration time, for the bank to process your payment.
              Pay with Quickteller or at any bank branch.
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-3xl">Booking Reference:</p>
            <div className="items-center flex text-center justify-center gap-2">
              <h1 className="text-3xl font-bold text-white underline underline-offset-2">
                13JYDN
              </h1>
              <ion-icon name="copy-outline" size="small"></ion-icon>
            </div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-gray-100 hover:bg-gray-200 transition ease-in-out duration-500 p-3 text-3xl text-blue-950 rounded">
              <Link to="/bookedFlights">View Booking</Link>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/" className="text-3xl text-gray-300">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookFlight;
