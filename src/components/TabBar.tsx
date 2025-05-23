"use client";

import Image from "next/image";
import { Fragment, useState } from "react";
import BannerImage from "../../public/images/servicesBanner.jpg";
import { GridCard } from "./CardGrid";
type Tab = {
  tabText: string;
  tabContent: React.ReactNode;
};

type Tabs = Tab[];

const ServicesTabs: Tabs = [
  {
    tabText: "Talent Solution",
    tabContent: (
      <Fragment>
        <div className="tabContent text-center flex flex-col items-center justify-center mb-5">
          <h3 className="text-[30px] font-extrabold">Talent Solution</h3>
          <p className="text-[16px] max-w-[70%] text-center">
            Connect your business with the right tech talent to meet your
            project needs and organizational goals. Our staffing services are
            designed to provide skilled professionals across various technology
            domains.
          </p>
          <div className="imageText mt-10 mb-10 flex flex-row-reverse max-sm:flex-col items-center justify-around px-36 max-sm:px-18  gap-10 rounded-[14px]">
            <div className="flex flex-col w-full items-start max-sm:items-center justify-center">
              <h3 className="text-[30px] font-extrabold text-left mb-4 max-sm:text-center">
                Expert Talent Acquisition
              </h3>
              <p className="max-w-[90%] text-left max-sm:text-center max-sm:max-w-95%">
                Our staffing experts identify and connect you with the perfect
                talent for your specific needs, ensuring the right fit for your
                projects and organizational culture.
              </p>
              <p className="max-w-[90%] text-left mt-5 max-sm:text-center">
                With an extensive network of tech professionals and rigorous
                vetting processes, we deliver candidates who excel both
                technically and culturally.
              </p>
            </div>
            <Image
              src={BannerImage}
              className="w-[800px] h-[240px] object-cover rounded-[14px]"
              alt=""
            />
          </div>
          <GridCard />
          <section className="py-16 bg-slate-50 w-[100vw]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Start Your Next Project?
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  {
                    "Let's discuss how our services can help you achieve your business goals"
                  }
                </p>
                <button className="bg-[#0f172a] text-white hover:bg-[#0f172a]/90 h-11 rounded-md px-8 cursor-pointer">
                  Contact Our Team
                </button>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    ),
  },
  {
    tabText: "Technology & Strategy",
    tabContent: (
      <Fragment>
        <div className="tabContent text-center flex flex-col items-center justify-center mb-5">
          <h3 className="text-[30px] font-extrabold">Technology & Strategy</h3>
          <p className="text-[16px] max-w-[70%] text-center">
            Connect your business with the right tech talent to meet your
            project needs and organizational goals. Our staffing services are
            designed to provide skilled professionals across various technology
            domains.
          </p>
          <div className="imageText mt-10 mb-10 flex flex-row-reverse max-sm:flex-col items-center justify-around px-36 max-sm:px-18  gap-10 rounded-[14px]">
            <div className="flex flex-col w-full items-start max-sm:items-center justify-center">
              <h3 className="text-[30px] font-extrabold text-left mb-4 max-sm:text-center">
                Expert Talent Acquisition
              </h3>
              <p className="max-w-[90%] text-left max-sm:text-center max-sm:max-w-95%">
                Our staffing experts identify and connect you with the perfect
                talent for your specific needs, ensuring the right fit for your
                projects and organizational culture.
              </p>
              <p className="max-w-[90%] text-left mt-5 max-sm:text-center">
                With an extensive network of tech professionals and rigorous
                vetting processes, we deliver candidates who excel both
                technically and culturally.
              </p>
            </div>
            <Image
              src={BannerImage}
              className="w-[800px] h-[240px] object-cover rounded-[14px]"
              alt=""
            />
          </div>
          <GridCard />
          <section className="py-16 bg-slate-50 w-[100vw]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Start Your Next Project?
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  {
                    "Let's discuss how our services can help you achieve your business goals"
                  }
                </p>
                <button className="bg-[#0f172a] text-white hover:bg-[#0f172a]/90 h-11 rounded-md px-8 cursor-pointer">
                  Contact Our Team
                </button>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    ),
  },
  {
    tabText: "AI",
    tabContent: (
      <Fragment>
        <div className="tabContent text-center flex flex-col items-center justify-center mb-5">
          <h3 className="text-[30px] font-extrabold">AI</h3>
          <p className="text-[16px] max-w-[70%] text-center">
            Connect your business with the right tech talent to meet your
            project needs and organizational goals. Our staffing services are
            designed to provide skilled professionals across various technology
            domains.
          </p>
          <div className="imageText mt-10 mb-10 flex flex-row-reverse max-sm:flex-col items-center justify-around px-36 max-sm:px-18  gap-10 rounded-[14px]">
            <div className="flex flex-col w-full items-start max-sm:items-center justify-center">
              <h3 className="text-[30px] font-extrabold text-left mb-4 max-sm:text-center">
                Expert Talent Acquisition
              </h3>
              <p className="max-w-[90%] text-left max-sm:text-center max-sm:max-w-95%">
                Our staffing experts identify and connect you with the perfect
                talent for your specific needs, ensuring the right fit for your
                projects and organizational culture.
              </p>
              <p className="max-w-[90%] text-left mt-5 max-sm:text-center">
                With an extensive network of tech professionals and rigorous
                vetting processes, we deliver candidates who excel both
                technically and culturally.
              </p>
            </div>
            <Image
              src={BannerImage}
              className="w-[800px] h-[240px] object-cover rounded-[14px]"
              alt=""
            />
          </div>
          <GridCard />
          <section className="py-16 bg-slate-50 w-[100vw]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Start Your Next Project?
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  {
                    "Let's discuss how our services can help you achieve your business goals"
                  }
                </p>
                <button className="bg-[#0f172a] text-white hover:bg-[#0f172a]/90 h-11 rounded-md px-8 cursor-pointer">
                  Contact Our Team
                </button>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    ),
  },
];

export const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="container flex flex-col items-center">
      <div className="tabs-container flex gap-[6px] bg-[#f1f5f9] p-[4px] px-[8px] rounded-[10px]">
        {ServicesTabs.map((tab, index) => {
          return (
            <div
              onClick={() => setActiveTab(index)}
              key={index}
              className={`tab cursor-pointer md:min-w-[290px] max-sm:min-w-[100px] max-sm:px-2  text-center transition-all rounded-[4px] hover:scale-[1.03] py-2 ${
                index === activeTab
                  ? "bg-[#ffffff] text-[#020817]"
                  : "text-[#64758b]"
              }`}
            >
              <div className="text-[16px] max-sm:text-[14px]">
                {tab.tabText}
              </div>
            </div>
          );
        })}
      </div>
      <div className="active-content mt-10">
        {ServicesTabs[activeTab].tabContent}
      </div>
    </div>
  );
};
