"use client";
import Image from "next/image";
import Logo from "../../public/images/logo-blue.svg";
import { HiArrowSmallRight } from "react-icons/hi2";
import { NavLinks } from "./NavLinks";
import { poppins } from "@/components/NavLinks";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";

type FormData = {
  name: string;
  email: string;
};
export const Footer = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState<
    "success" | "loading" | "error"
  >("success");
  const [modalMessage, setModalMessage] = useState("");

  const showLoading = () => {
    setModalStatus("loading");
    setModalMessage("Sending your contact details...");
    setModalOpen(true);
  };

  const showSuccess = () => {
    setModalStatus("success");
    setModalMessage(
      "Your contact details were sent successfully! Please wait for our team to get back to you."
    );
    setModalOpen(true);
  };

  const showError = (msg?: string) => {
    setModalStatus("error");
    setModalMessage(msg || "Something went wrong. Please try again.");
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked");
    //e.preventDefault();
    showLoading();
    const fields: (keyof FormData)[] = Object.keys(
      formData
    ) as (keyof FormData)[];

    // Basic validation: check if any field is empty
    const hasEmptyField = fields.some((field) => formData[field].trim() === "");

    if (hasEmptyField) {
      showError("Please fill in all the fields.");
      return;
    }

    // Construct the body as application/x-www-form-urlencoded (required by Contact Form 7 API)
    const formFields = new FormData();
    formFields.append("your-name", formData.name.trim());
    formFields.append("your-email", formData.email.trim());
    // formFields.append("your-subject", formData.subject.trim());
    // formFields.append("your-message", formData.message.trim());

    // Add CF7 specific fields
    formFields.append("_wpcf7", "95"); // Form ID
    formFields.append("_wpcf7_version", "5.7.7"); // CF7 version (adjust if needed)
    formFields.append("_wpcf7_locale", "en_US");
    formFields.append("_wpcf7_unit_tag", "wpcf7-f669341-p123-o1"); // Updated unit tag with correct form ID
    formFields.append("_wpcf7_container_post", "123"); // Post ID where form is embedded

    // API URL - use your WordPress site's actual domain [contact-form-7 id="f669341" title="Contact form 1"]
    const apiUrl =
      "http://75.119.142.187:8081/wp-json/contact-form-7/v1/contact-forms/95/feedback";

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        body: formFields,
        mode: "cors", // Explicitly set CORS mode
        // Don't set Content-Type header - let browser set it with boundary for FormData
        // headers: {
        //   "X-Requested-With": "XMLHttpRequest",
        // },
      });

      const data = await res.json();
      if (res.ok) {
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
        });
        showSuccess();
      } else {
        showError();
        console.error("Submission failed:", data);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  const handleChange = (field: keyof FormData, val: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: val,
    }));
  };

  return (
    <div className="h-[63vh] max-sm:h-[70vh] w-full bg-black text-[#BBF2FF]">
      <div className="container p-10 max-sm:p-4 h-full w-full">
        <div className="flex flex-col">
          <div className="flex items-baseline justify-between">
            <div className="flex flex-col max-sm:text-[12px]">
              <Image src={Logo} alt="logoImage" className="max-md:size-14" />
              <div className={`info mt-12 max-sm:mt-5 ${poppins.className}`}>
                <div>+1 925 644 0118</div>
                <div>info@saktra.com</div>
                <div className="mt-8">
                  <p className="max-w-2/3">Corporate Head Office,</p>
                  <p className="max-w-2/3">
                    200 Centennial Ave Suite #206 Piscataway, NJ 08854
                  </p>
                  <p className="max-w-2/3 mt-2">West Coast Regional Office,</p>
                  <p className="max-w-2/3">
                    5201 Great America Pkwy Suite #320 Santa Clara, CA 95054
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-[#BBF2FF] max-sm:pt-5">
              <div className="text-[#BBF2FF] text-[12px]">Quick Links</div>
              <ul className="mt-8 uppercase gilroy-bold">
                {NavLinks.map((link) => {
                  return (
                    <li key={link.name}>
                      <Link className="text-[14px]" href={link?.link ?? "/"}>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gilmer-regular max-sm:hidden">
              <div className="text-2xl max-sm:text-[20px]">
                To subscribe to our newsletter:
              </div>
              <div className="input flex flex-col mt-8 placeholder-[#bbf2ff]">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="placeholder-[#bbf2ff] max-sm:w-3/5"
                />
                <div className="flex gap-1 items-center justify-between mt-2.5 ">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-[80%] placeholder-[#bbf2ff]"
                    placeholder="Email"
                  />
                  <button
                    onClick={(e) => handleSubmit(e)}
                    className={`h-10 w-10 bg-[#BBF2FF] rounded-[50%] flex items-center justify-center cursor-pointer text-black
                                }`}
                  >
                    <HiArrowSmallRight />
                  </button>
                </div>
              </div>
              <div className="mt-2.5 text-[12px]">
                By signing up you agree with our{" "}
                <a className="underline" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gilmer-regular md:hidden mt-3">
            <div className="text-2xl max-sm:text-[20px]">
              To subscribe to our newsletter:
            </div>
            <div className="input flex flex-col mt-8 placeholder-[#bbf2ff]">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={(e) => handleChange("name", e.target.value)}
                className="placeholder-[#bbf2ff] max-sm:w-3/5"
              />
              <div className="flex gap-1 items-center justify-between mt-2.5 ">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-[80%] placeholder-[#bbf2ff]"
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Email"
                />
                <button
                  onClick={(e) => handleSubmit(e)}
                  className={`h-10 w-10 bg-[#BBF2FF] rounded-[50%] flex items-center justify-center cursor-pointer text-black
                                }`}
                >
                  <HiArrowSmallRight />
                </button>
              </div>
            </div>
            <div className="mt-2.5 text-[12px]">
              By signing up you agree with our{" "}
              <a className="underline" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="border-t-1 border-t-[#bbf2ff] font-light gilmer-regular max-sm:mt-5 md:mt-12 max-sm:mb-8">
            <div className="mt-4 uppercase text-[#bbf2ff] flex flex-row-reverse text-[14px]">
              Copyright © Saktra 2025 All Rights Reserved
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        status={modalStatus}
        message={modalMessage}
      />
    </div>
  );
};
