import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "E-commerce Admin Dashboard",
    description:
      "A E-commerce backend dashboard to create, edit, delete products and view API end points for frontend. For login details, visit github page.",
    image: "/admin-dashboard.png",
    github: "https://github.com/GarethCott/ecommerce-admin-dashboard",
    link: "https://ecommerce-admin-dashboard-chi.vercel.app",
  },
  {
    name: "E-commerce Store",
    description:
      "The frontend store of my e-commerce project. Uses API routes from backend dashboard to display products.",
    image: "/store.png",
    github: "https://github.com/GarethCott/ecommerce-store",
    link: "https://ecommerce-store-liart-one.vercel.app",
  },
  {
    name: "TrendSwap (A reddit clone)",
    description:
      "A reddit clone built with Next.js. Using planetscale, Redis, tailwind",
    image: "/Trendswap.png",
    github: "https://github.com/GarethCott/TrendSwap",
    link: "https://trend-swap.vercel.app",
  },
  {
    name: "Portfolio with a blog and dashboard",
    description:
      "A portfolio project with a blog section created in Nextjs. This project uses CRUD operations to create and display blog posts",
    image: "/Portfolio.png",
    github: "https://github.com/GarethCott/Portfolio",
    link: "https://portfoliowebsitebuild.vercel.app",
  },
  {
    name: "PropmtSearch app with CRUD functionality",
    description:
      "A web app that allows you to create Prompts with hash tags. Has CRUD operations and a search bar to filter through Prompts",
    image: "/PromptSearch.png",
    github: "https://github.com/GarethCott/prompt-search-app",
    link: "https://main--prompt-search.netlify.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
