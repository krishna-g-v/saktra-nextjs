"use client";

import Image from "next/image";
import { Fragment } from "react";
import BannerImage from "../../public/images/servicesBanner.jpg";
import { GridCard } from "./CardGrid";
import { motion } from "framer-motion";
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
        <div className="tabContent text-center flex flex-col items-center justify-center mb-5 gilmer-regular">
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
              className="text-[30px] font-extrabold"
            >
              Talent Solution
            </motion.h3>
          </div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.55, ease: "easeOut" }}
            className="text-[16px] max-w-[70%] text-center max-sm:max-w-[90%]"
          >
            Connect your business with the right tech talent to meet your
            project needs and organizational goals. Our staffing services are
            designed to provide skilled professionals across various technology
            domains.
          </motion.p>
          <div className="imageText mt-10 mb-10 flex flex-row-reverse max-sm:flex-col items-center justify-around px-36 max-sm:px-10  gap-10 rounded-[14px]">
            <div className="flex flex-col w-full items-start max-sm:items-center justify-center">
              <motion.h3
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                className="text-[30px] font-extrabold text-left mb-4 max-sm:text-center max-sm:text-[24px]"
              >
                Building Global Teams Without Borders & Bottlenecks
              </motion.h3>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.55, ease: "easeOut" }}
                className="max-w-[90%] text-left max-sm:text-center max-sm:max-w-95%"
              >
                Find, attract, hire, and retain industry-best talent without the
                delays or hiring headaches. Our end-to-end Talent Solutions are
                designed to help you scale quickly and smartly.
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.55, ease: "easeOut" }}
                className="max-w-[90%] text-left mt-5 max-sm:text-center"
              >
                Whether you’re growing your team, filling a critical role, or
                setting up a new offshore operation, we help you find the right
                talent that aligns perfectly with your project goals and company
                culture.
              </motion.p>
            </div>
            <motion.div
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              animate={{ clipPath: " polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="relative"
            >
              <Image
                src={BannerImage}
                className="w-[800px] h-[240px] object-cover rounded-[14px]"
                alt=""
              />
            </motion.div>
          </div>
          <GridCard
            cards={[
              {
                cardHeader: "Staff Augmentation",
                cardSubHeader:
                  "Flexible Talent to Strengthen Your Business Operations",
                cardContent:
                  "Strengthen your operations without the long-term commitment of full-time hires. We bring the right skills and talent to your team – helping you bridge skill gaps and manage peak workloads without slowing down your momentum or stretching your resources.",
              },
              {
                cardHeader: "Direct Hire",
                cardSubHeader:
                  "Bringing the World’s Best Professionals to Your Team",
                cardContent:
                  "Find the perfect long-term fit for your team. We source, screen, and shortlist top-tier talent who have both the skills and experience required for your specific business processes. We make hiring seamless so you can focus on what matters most—growing your business.",
              },
              {
                cardHeader: "Head Hunting & Executive Hiring",
                cardSubHeader:
                  "Recruit the Right Leadership Talent Across All Business Verticals",
                cardContent:
                  "We help you onboard visionary leaders and executives who can drive your vision forward. Our targeted search approach and state-of-the-art recruitment processes ensure you attract global leaders for your board who drive growth and meet your strategic business objectives",
              },
              {
                cardHeader: "Build-Operate-Transfer (BOT)",
                cardSubHeader:
                  "Set up your offshore team efficiently, without the risk",
                cardContent:
                  "Want to expand offshore but not sure where to start? We’ll build and run the team for you, taking care of hiring, infrastructure, and operations. Once everything’s up and running, we smoothly transition the team to you, giving you a ready-to-go offshore center that’s truly yours.",
              },
              {
                cardHeader: "Master Vendor",
                cardSubHeader:
                  "One partner that manages all your staffing needs",
                cardContent:
                  "Simplify the sourcing, recruitment, and onboarding of your contingent workforce with us. As your master vendor, we’ll take care of the entire recruitment and administrative process, so you can focus on growth without administrative hassles.",
              },
              {
                cardHeader: "Niche Skill Hiring",
                cardSubHeader:
                  "Acquire the top talent for highly specialized roles ",
                cardContent:
                  "Need experts in AI, cloud security, DevSecOps, or other emerging tech? We specialize in recruiting professionals with rare, high-demand skills. Whether it’s one role or a full team, we’ve got you covered.",
              },
            ]}
          />
          <section className="py-16 bg-slate-50 w-[100vw]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  {"Let’s Making Hiring Simple, Efficient and Stress-Free"}
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  {
                    "Access top professionals worldwide through our flexible hiring solutions tailored to your business goals. We help you hire faster, better, and smarter!"
                  }
                </p>
                <button className="bg-[#0f172a] text-white hover:bg-[#0f172a]/90 h-11 rounded-md px-8 cursor-pointer">
                  {"Schedule a Consultation"}
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
        <div className="tabContent text-center flex flex-col items-center justify-center mb-5 gilmer-regular">
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
              className="text-[30px] font-extrabold"
            >
              Technology & Strategy Services
            </motion.h3>
          </div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.55, ease: "easeOut" }}
            className="text-[16px] max-w-[70%] text-center max-sm:max-w-[90%]"
          >
            Connect your business with the right tech talent to meet your
            project needs and organizational goals. Our staffing services are
            designed to provide skilled professionals across various technology
            domains.
          </motion.p>
          <div className="imageText mt-10 mb-10 flex flex-row-reverse max-sm:flex-col items-center justify-around px-36 max-sm:px-18  gap-10 rounded-[14px]">
            <div className="flex flex-col w-full items-start max-sm:items-center justify-center">
              <motion.h3
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                className="text-[30px] font-extrabold text-left mb-4 max-sm:text-center"
              >
                Build, Optimize, and Future-Proof Your Digital Ecosystem with
                Confidence
              </motion.h3>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                className="max-w-[90%] text-left max-sm:text-center max-sm:max-w-95%"
              >
                Turn your ideas into market-ready solutions with our expert tech
                strategy and seamless execution.
              </motion.p>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                className="max-w-[90%] text-left mt-5 max-sm:text-center"
              >
                Whether you are launching new digital products, modernizing
                legacy systems, or improving data and cloud capabilities, we
                deliver practical, forward-looking solutions that create real
                impact and help you stay ahead in a fast-evolving market space..
              </motion.p>
            </div>
            <motion.div
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              animate={{ clipPath: " polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="relative"
            >
              <Image
                src={BannerImage}
                className="w-[800px] h-[240px] object-cover rounded-[14px]"
                alt=""
              />
            </motion.div>
          </div>
          <GridCard
            cards={[
              {
                cardHeader: "Product Strategy",
                cardSubHeader: "User-Centered Experiences That Drive Success",
                cardContent:
                  "From crafting the right product vision to creating a strategic technology roadmap, we work with your product leadership to define clear product visions and create actionable plans that drive better outcomes and sustainable growth.",
              },
              {
                cardHeader: "Technology Consulting",
                cardSubHeader:
                  "Accelerating Digital Transformation through Tailored Tech Strategies",
                cardContent:
                  "We empower you with the right tools and technology – making your operations smoother and preparing you for what’s next. By turning complex problems into simple, practical strategies, we help you innovate, accelerate, and stay ahead of the curve.",
              },
              {
                cardHeader: "Data Solutions",
                cardSubHeader: "Realize the True Value of Your Data",
                cardContent:
                  "Transform raw data into actionable insights. From data architecture to analytics and visualization, we build expert data-driven solutions that empower better decisions and improved performance.",
              },
              {
                cardHeader: "Full Stack Development",
                cardSubHeader: "End-to-End Development, Done Right",
                cardContent:
                  "Build easy-to-use, reliable apps that grow with your business. Our team works fast, makes sure everything connects smoothly, and delivers the same great experience across all platforms.",
              },
              {
                cardHeader: "Cloud Engineering",
                cardSubHeader:
                  "Secure, Scalable Cloud Solutions That Drive Innovation",
                cardContent:
                  "We design cloud infrastructure that scales with your business. Whether you’re migrating to the cloud, setting up a multi-cloud environment, or managing day-to-day operations, we make sure you get maximum value from your cloud investment.",
              },
              {
                cardHeader: "Cyber Security",
                cardSubHeader: "Protect What Matters",
                cardContent:
                  "Keep your data, systems, and digital assets safe with our pro-active cybersecurity solutions. With active threat prevention and constant monitoring, we make sure there are no gaps in your protection.",
              },
              {
                cardHeader: "API Development & Integration",
                cardSubHeader:
                  "Ensure Seamless Data Flow Across Your Platforms",
                cardContent:
                  "Create secure, scalable APIs that link your internal systems with third-party tools. Whether it’s custom-built or complex integration, our engineers make sure your data flows smoothly and your systems work better together.",
              },
              {
                cardHeader: "DevOps & CI/CD Implementation",
                cardSubHeader:
                  "Automate Your Delivery Pipelines for Maximum Efficiency and Reliability",
                cardContent:
                  "Improve your software development lifecycle with our DevOps and CI/CD solutions. We build, test, and automate your deployments so your team can deliver quality updates quickly and efficiently.",
              },
            ]}
          />
          <section className="py-16 bg-slate-50 w-[100vw]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Let’s Build the Right Tech Together
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  {
                    "Whether you're building a new platform or optimizing an existing one, our experts are ready to support your growth with strategy, execution, and scale."
                  }
                </p>
                <button className="bg-[#0f172a] text-white hover:bg-[#0f172a]/90 h-11 rounded-md px-8 cursor-pointer">
                  Schedule a Consultation
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
        <div className="tabContent text-center flex flex-col items-center justify-center mb-5 gilmer-regular">
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
              className="text-[30px] font-extrabold"
            >
              Artificial Intelligence Services
            </motion.h3>
          </div>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.55, ease: "easeOut" }}
            className="text-[16px] max-w-[70%] text-center max-sm:max-w-[90%]"
          >
            Connect your business with the right tech talent to meet your
            project needs and organizational goals. Our staffing services are
            designed to provide skilled professionals across various technology
            domains.
          </motion.p>
          <div className="imageText mt-10 mb-10 flex flex-row-reverse max-sm:flex-col items-center justify-around px-36 max-sm:px-18  gap-10 rounded-[14px]">
            <div className="flex flex-col w-full items-start max-sm:items-center justify-center">
              <motion.h3
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                className="text-[30px] font-extrabold text-left mb-4 max-sm:text-center"
              >
                Power Your Business with Smarter AI Solutions
              </motion.h3>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                className="max-w-[90%] text-left max-sm:text-center max-sm:max-w-95%"
              >
                Discover what’s possible with AI. Whether you’re looking to
                boost efficiency, spark innovation, or open new revenue streams,
                we build tailored AI solutions that help your business move
                smarter and grow faster.
              </motion.p>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                className="max-w-[90%] text-left mt-5 max-sm:text-center"
              >
                With an extensive network of tech professionals and rigorous
                vetting processes, we deliver candidates who excel both
                technically and culturally.
              </motion.p>
            </div>
            <motion.div
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              animate={{ clipPath: " polygon(100% 0, 0 0, 0 100%, 100% 100%)" }}
              transition={{
                duration: 0.8,
                type: "tween",
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="relative"
            >
              <Image
                src={BannerImage}
                className="w-[800px] h-[240px] object-cover rounded-[14px]"
                alt=""
              />
            </motion.div>
          </div>
          <GridCard
            cards={[
              {
                cardHeader: "AI Consulting & Strategy",
                cardSubHeader: "Develop Your AI Roadmap to Success",
                cardContent:
                  "We work closely with you to understand your business requirements and how AI can really work for your business. By mixing smart planning with the right technology. we turn AI’s promise into real results you can count on.",
              },
              {
                cardHeader: "Generative AI Development",
                cardSubHeader: "Create. Innovate. Automate.",
                cardContent:
                  "We build intelligent AI-powered solutions that learn, adapt, and evolve with your business needs and customers’ expectations. Our AI models automate tasks, generate content, and help your business stand out and operate smarter.",
              },
              {
                cardHeader: "AI Bots",
                cardSubHeader:
                  "Provide Fast, Personalized Support Anytime, Anywhere",
                cardContent:
                  "Make customer interactions fast and personal with our AI-powered chatbots and virtual assistants. Built using advanced AI and machine learning, our bots understand users better, respond naturally, and help you deliver smoother, more engaging support.",
              },
              {
                cardHeader: "AI Product Development",
                cardSubHeader: "Turning Ideas into Powerful AI Innovations",
                cardContent:
                  "Turn your AI ideas into real products. Whether it’s predictive analytics, recommendation engines, or intelligent automation, we build AI-driven applications tailored to your unique needs and user experience goals.",
              },
              {
                cardHeader: "AI Integration",
                cardSubHeader: "Seamless Integrations That Drive Real Results",
                cardContent:
                  "Want to amp up your existing systems with the power of AI? We help you smoothly connect AI tools into your current workflows and platforms for smarter insights, faster decisions, and better performance – without any disruption.",
              },
              {
                cardHeader: "AI Agent / Copilot",
                cardSubHeader:
                  "Build an Intelligent Work Partner that Helps You Do More",
                cardContent:
                  "Amplify your productivity with AI agents that work as an extension of your team. Our smart assistants work alongside your staff to accelerate work and reduce errors. From writing and analysis to customer support, they help you move faster and focus on what matters most.",
              },
            ]}
          />
          <section className="py-16 bg-slate-50 w-[100vw]">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  {"Let’s Make AI Work for You"}
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  {
                    "Connect with us to discuss how AI can support your journey toward smarter operations, better customer experiences, and real business growth."
                  }
                </p>
                <button className="bg-[#0f172a] text-white hover:bg-[#0f172a]/90 h-11 rounded-md px-8 cursor-pointer">
                  Schedule a consultation
                </button>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    ),
  },
];

export const TabBar = ({ showIndex }: { showIndex: number }) => {
  return (
    <div className="container flex flex-col items-center">
      {/* <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
        className="tabs-container flex gap-[6px] bg-[#f1f5f9] p-[4px] px-[8px] rounded-[10px]"
      >
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
      </motion.div> */}
      <div className="active-content">{ServicesTabs[showIndex].tabContent}</div>
    </div>
  );
};
