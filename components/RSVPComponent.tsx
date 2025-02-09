"use client";

import { FormEvent, useState } from "react";

const RSVPComponent = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      message,
    };

    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const content = await response.json();
    console.log(content);

    alert("Thank you ");

    setName("");
    setMessage("");
  };

  return (
    <>
      <div className="flex items-center justify-center p-20">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="textarea"
              id="text"
              cols={30}
              rows={10}
              className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-black"
            />

            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-lg bg-[#ecb131] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RSVPComponent;
