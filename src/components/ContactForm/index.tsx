"use client";

import { useForm } from "@formspree/react";
import { useRef, useEffect, LegacyRef } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID!,
  );
  const formRef = useRef<HTMLFormElement>();

  useEffect(() => {
    if (state.succeeded === true) {
      formRef.current?.reset();
      toast("Thanks for your message!", { type: "success" });
      reset();
    }
    if (state.errors) {
      toast("Something went wrong. Try again", { type: "error" });
      reset();
    }
  }, [reset, state.errors, state.succeeded]);

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef as LegacyRef<HTMLFormElement>}
      className="flex flex-wrap justify-between gap-y-[22px]"
    >
      <div className="flex w-[45%] flex-col">
        <label>Name</label>
        <input
          required
          name="Name"
          className="h-[44px] rounded-[10px] border-[3px] border-white bg-transparent p-2 outline-none"
        />
      </div>
      <div className="flex w-[45%] flex-col">
        <label>Surname</label>
        <input
          required
          name="Surname"
          className="h-[44px] rounded-[10px] border-[3px] border-white bg-transparent p-2 outline-none"
        />
      </div>
      <div className="flex w-[45%] flex-col">
        <label>Email</label>
        <input
          required
          type="email"
          name="Email"
          className="h-[44px] rounded-[10px] border-[3px] border-white bg-transparent p-2 outline-none"
        />
      </div>
      <div className="flex w-[45%] flex-col">
        <label>Phone number</label>
        <input
          required
          type="tel"
          name="Phone number"
          className="h-[44px] rounded-[10px] border-[3px] border-white bg-transparent p-2 outline-none"
        />
      </div>
      <div className="flex w-full flex-col">
        <label>Message</label>
        <textarea
          required
          name="Message"
          rows={4}
          className="resize-none rounded-[10px] border-[3px] border-white bg-transparent p-2 outline-none"
        />
      </div>
      <div className="flex w-full justify-center">
        <button
          type="submit"
          className="h-[72px] w-[170px] rounded-[10px] border-[3px] border-white bg-[#528A52]"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
