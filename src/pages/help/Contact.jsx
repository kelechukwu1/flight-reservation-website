import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="items-center border border-gray-200 mx-5 rounded mt-5 mb-5">
        <div className="flex gap-2 pt-16 px-5 items-center">
          <ion-icon
            name="call-outline"
            className="cursor-pointer"
            size="small md:large"
          ></ion-icon>

          <h1 className="font-semibold text-3xl">Contact Us</h1>
        </div>

        <div className=" px-5 pb-16">
          <h1 className="text-2xl ml-1 font-bold">Head Ofice:</h1>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <p className="text-2xl">Clef Avenu, Bishops Court, Oweri.</p>
          </div>

          <div className="flex text-2xl items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </div>
            <div>
              <p>+23490 6364 6331</p>
            </div>
          </div>

          <div className="flex text-2xl items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </div>
            <div>
              <p>obiefunakelechukwu@gmail.com</p>
            </div>
          </div>

          <div className="flex text-2xl items-center">
              <span>
                Monday to Friday: 8am - 5pm. (excluding public holidays)
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
