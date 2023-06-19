"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"


const language = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Python" },

]

const frameworks = [
  { skill: "React.js (Basic)" },
  { skill: "Next.js (Basic)" },
 
]

const technologies = [
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Tailwind CSS (Basic)" },
 
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-24">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Gareth and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> self taught software engineer
              based in Pretoria, South Africa
            </p>
            <br />
            <p>
              I graduated from The University Of Pretoria, in 2021
              with a BEng in Civil Engineering. I worked in the field for a year and a half before deciding to
              make a career change.
            </p>
            <br />
            <p>
              I am a dedicated and <span className="font-bold text-teal-500">
              hardworking individual
              </span>{" "} with a passion for both the business and technical aspects of the industry. 
              My strong <span className="font-bold text-teal-500">
              analytical skills
              </span>{" "} and <span className="font-bold text-teal-500">
              problem-solving abilities
              </span>{" "}, combined with my love for coding and technology, allow me to approach engineering and business challenges with a unique perspective.
              I am excited to bring my skills and enthusiasm to a dynamic and innovative team.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From playing sports, hiking and playing chess.
              I am a <span className="font-bold text-teal-500">
              very quick learner
              </span>{" "} and I am always excited to learn and try new things.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Languages</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {language.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <br />
            <h1 className="text-2xl font-bold mb-6">Frameworks</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {frameworks.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <br />
            <h1 className="text-2xl font-bold mb-6">Technologies</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {technologies.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            
            <div className="flex flex-row items-center space-x-2 mb-8 my-6 pb-6 md:pt-8">
          <a href="https://github.com/GarethCott" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/gareth-cottrell/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
