import Image from "next/image";

import IntroImage from "~/assets/img/intro.png";
import ComparisonSlider from "~/components/ComparisonSlider";
import ContactForm from "~/components/ContactForm";

import LawnMowingImage from "~/assets/img/services/lawn-mowing.png";
import IvyRemoval from "~/assets/img/services/ivy-removal.png";
import IvyTrimming from "~/assets/img/services/ivy-trimming.png";
import HedgeTrimming from "~/assets/img/services/hedge-trimming.png";
import LawnEdging from "~/assets/img/services/lawn-edging.png";
import LeavesClearing from "~/assets/img/services/leaves-clearing.png";
import Mulching from "~/assets/img/services/mulching.png";
import Pruning from "~/assets/img/services/pruning.png";
import Weeding from "~/assets/img/services/weeding.png";

const VACANCIES = [
  {
    name: "Gardener",
    requirements: [
      "Over 18 years old",
      "Right to work in the Uk",
      "Strong organizational skills and attention to detail, particularly in maintaining a safe and orderly workshop environment.",
      "Excellent communication and interpersonal skills, with the ability to effectively interact within organization",
      "Ambitious, self-motivated person.",
    ],
    benefits: [
      "Flexibility - You choose the days you want to work on. Full-time and part-time.",
      "Career development in our organization for effective work performance.",
      "Clarity of schedule and tasks",
    ],
  },
  {
    name: "Operations Manager",
    requirements: [
      "Over 18 years old",
      "Right to work in the Uk",
      "Strong organizational skills and attention to detail, particularly in maintaining a safe and orderly workshop environment.",
      "Excellent communication and interpersonal skills, with the ability to effectively interact within organization",
      "Ambitious, self-motivated person.",
      "Went through different roles in our organization",
    ],
    benefits: [
      "Higher than the average salary on a similar position",
      "Career development in our organization for effective work performance.",
      "Clarity of schedule and tasks",
    ],
  },
];

export default function Home() {
  return (
    <main>
      <section
        id="intro"
        className="relative py-[140px] text-center md:py-[200px]"
      >
        <h1 className="text-[29px] md:text-[64px]">Aesthetic Gardens</h1>
        <h2 className="text-xl md:text-[40px]">Make world prettier</h2>
        <Image
          className="-z-10"
          objectFit="cover"
          fill
          src={IntroImage}
          alt="Intro image"
        />
      </section>
      <section id="about" className="mt-[50px] px-[10px] text-center">
        <h2 className="text-[29px] md:text-[40px]">ABOUT US</h2>
        <p className="mx-auto max-w-[470px] text-[20px]">
          The garden maintenance service organization was established with a
          special attitude to the nature of the founders. A special attitude has
          developed into a business we happily share with our clients.
        </p>
        <p className="mx-auto mt-[18px] max-w-[661px] text-[20px]">
          We provide high standard garden maintenance services. We beautify,
          clean and make presentable and aesthetically pleasing gardens. Our
          company has experience in this sector and work with different scale of
          work.
        </p>
        <h4 className="mt-[30px] text-[24px]">
          Our work consists of three stages.
        </h4>
        <div className="mt-[22px] flex flex-col items-center gap-[22px]">
          <div className="relative aspect-square w-[80px] rounded-full bg-[#9BE49B]">
            <div className="absolute left-1/2 top-[-11px] -translate-x-1/2 text-[64px] text-[#619D61]">
              1
            </div>
          </div>
          <h5 className="text-[20px]">
            Clear and detailed discussion and approval of the work process.
          </h5>
          <div className="relative aspect-square w-[80px] rounded-full bg-[#9BE49B]">
            <div className="absolute left-1/2 top-[-12px] -translate-x-1/2 text-[64px] text-[#619D61]">
              2
            </div>
          </div>
          <h5 className="text-[20px]">
            The process of work carried out by professionals of their industry.
          </h5>
          <div className="relative aspect-square w-[80px] rounded-full bg-[#9BE49B]">
            <div className="absolute left-1/2 top-[-14px] -translate-x-1/2 text-[64px] text-[#619D61]">
              3
            </div>
          </div>
          <h5 className="text-[20px]">
            Completed result with satisfied customers.
          </h5>
        </div>
      </section>
      <section id="work" className="mx-auto mt-[50px]">
        <h2 className="text-center text-[29px] md:text-[40px]">HOW WE WORK</h2>
        <ComparisonSlider />
      </section>
      <section id="services" className="mx-auto mt-[50px]">
        <h2 className="text-center text-[29px] md:text-[40px]">OUR SERVICES</h2>
        <div className="mx-auto mt-4 grid max-w-[900px] grid-cols-2 gap-8 md:grid-cols-3">
          {[
            {
              icon: <Image src={LawnMowingImage} alt="Lawn mowing" />,
              label: "Lawn mowing",
            },
            {
              icon: <Image src={Weeding} alt="Weeding" />,
              label: "Weeding",
            },
            {
              icon: <Image src={HedgeTrimming} alt="Hedge trimming" />,
              label: "Hedge trimming",
            },
            {
              icon: <Image src={Pruning} alt="Pruning" />,
              label: "Bush and trees pruning",
            },
            {
              icon: <Image src={LeavesClearing} alt="Leaves clearing" />,
              label: "Leaves clearing",
            },
            {
              icon: <Image src={LawnEdging} alt="Lawn edging" />,
              label: "Lawn edging",
            },
            {
              icon: <Image src={IvyRemoval} alt="Ivy removal" />,
              label: "Ivy removal",
            },
            {
              icon: <Image src={IvyTrimming} alt="Ivy trimming" />,
              label: "Ivy trimming",
            },
            {
              icon: <Image src={Mulching} alt="Mulching" />,
              label: "Mulching",
            },
          ].map(({ icon, label }) => (
            <div className="flex flex-col items-center text-center" key={label}>
              {icon}
              <p className="w-[140px]">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="career" className="mx-auto mt-[50px] px-[10px] text-center">
        <h2 className="text-[29px] md:text-[40px]">CAREER OPPORTUNITIES</h2>
        <p className="mx-auto mt-9 max-w-[780px] text-lg">
          We have built a unique approach proven by successful market
          experience. We are convinced that the success of our organization
          consists of clear and well-structured internal relationships.We offer
          a growth system in the organization for every employee from gardeners
          with training and preparation to managerial positions with a salary
          manager above the London average.
        </p>
        <h3 className="mt-[50px] text-2xl">VACANCIES</h3>
        {VACANCIES.map(({ requirements, name, benefits }) => (
          <div className="mt-[40px]" key={name}>
            <h4 className="text-2xl">{name}</h4>
            <h4 className="mt-3 text-2xl">Requirements:</h4>
            <ol className="mt-3 flex flex-col gap-2">
              {requirements.map((requirement, index) => (
                <li className="text-xl" key={requirement}>
                  {index + 1}. {requirement}
                </li>
              ))}
            </ol>
            <h4 className="mt-3 text-2xl">Benefits:</h4>
            <ol className="mt-3 flex flex-col gap-2">
              {benefits.map((benefit, index) => (
                <li className="text-xl" key={benefit}>
                  {index + 1}. {benefit}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>
      <section id="contact" className="mx-auto mb-20 mt-[60px] max-w-[534px]">
        <h2 className="text-center text-[29px] md:text-[40px]">CONTACT US</h2>
        <ContactForm />
      </section>
    </main>
  );
}
