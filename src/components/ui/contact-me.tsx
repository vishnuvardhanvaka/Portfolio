"use client";
import Footer from "@/app/components/Footer";
import { setEngine } from "crypto";
import { useState } from "react";
import { sendMail } from "@/app/server-actions/sendMail";
import { toast } from "sonner";


let status = false
export default function ContactMe() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function contactMe() {
    
    // e.preventDefault()

    if (fullName.length !== 0 && email.length !== 0 && message.length !== 0) {

      let promise = toast.promise(
        sendMail({
          userName: fullName,
          userEmail: email,
          message: message,
        }),
        {
          loading: 'Sending your message...',
          success: (result) => {
            console.log(result)
            status = result.status
            setFullName("");
            setEmail("");
            setMessage("");
            return 'Sent successfully!';

          },

          error: (err) => {
            console.error('Send mail error:', err);
            return 'Failed to send message.';
          },

        }
      );
      // if (status) {
      //   toast('Will reach out to you soon 🙂')
      // }

      // console.log(promise, '&&&&&&&&&&')

    }
  }


  return (
    <div
      id="contact-section"
      className="w-full py-16 px-3 mx-auto md:px-4 flex-col justify-center"
    >
      <h1 className="text-center text-4xl lg:text-5xl mb-4 lg:mb-4 font-bold">
        Contact <span className="text-[#5a85fb]">Me</span>
      </h1>
      <div className="w-full lg:w-[50%] lg:mx-auto">
        <form className="h-full items-center flex flex-col w-full justify-center px-2 lg:px-4">
          <div className="w-full lg:grid lg:grid-cols-2 gap-x-4 justify-center mx-auto">
            <input
              type="text"
              className="my-4 w-full bg-gray-700 rounded-lg py-3 px-2 pl-4 border-gray-600 placeholder-gray-400 focus:placeholder-gray-500  bg:border-transparent text-gray-300 focus:outline-none "
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              required
            />
            <input
              type="email"
              className="my-4 w-full bg-gray-700 rounded-lg py-3 px-2 pl-4 border-gray-600 placeholder-gray-400 focus:placeholder-gray-500  bg:border-transparent text-gray-300 focus:outline-none "
              placeholder="Email Address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>

          <textarea
            placeholder="Your message"
            className=" w-full lg:w-full max-h-72 min-h-40 mx-4 h-64 bg-gray-700 rounded-lg py-3 px-2 pl-4 border-gray-600 placeholder-gray-400 focus:placeholder-gray-500  bg:border-transparent text-gray-300 focus:outline-none"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          ></textarea>
          <p className="mt-3 text-xs text-gray-400">
            Let's build a world together.
          </p>
          <button
            onClick={(e) => {
              contactMe();
            }}
            type="button"
            className="w-[90%] md:w-[50%] mx-auto flex justify-center lg:mx-0 lg:block px-5 py-3 my-6 text-sm bg-blue-600 rounded-3xl lg:w-auto hover:bg-blue-500"
          >
            Send Message
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
}
