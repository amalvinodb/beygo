import Image from "next/image";
import "./about.css";
import HeroSection from "@/core/common/HeroSection/HeroSection";

export default function About() {
  return (
    <div>
      <HeroSection
        title1={"Beyond Go,"}
        title2={"Elevating Every Lifestyle"}
        subHeading={"where innovation meets lifestyle."}
      />
      <div className="max-w-[1140px]" style={{ margin: "30px auto", padding: '0px 10px' }}>
        <div className="flex flex-col gap-4">
          <h3 className="text-5xl font-bold">Beygo. Beyond Go.</h3>
          <p className="text-xl">
            Welcome to Beygo — a brand born from the belief that progress knows
            no limits. The name itself, Beygo, represents the spirit of
            continuous growth — a mindset that refuses to settle and constantly
            strives for something greater.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-4 ">
              <div className="profile-picture border-2 w-[400px] h-[400px] border-solid flex flex-col justify-between items-center"></div>
              <h3 className="text-3xl font-bold">AZIF ALI, Founder, CEO</h3>
            </div>
            <div>
              <p className="text-xl">
                Founded by Azif Ali, Beygo is more than just a retailer. It’s a
                dynamic platform designed to bridge the gap between quality
                products and consumers who seek them. Every step we take is
                driven by our commitment to innovation, adaptability, and
                excellence.
              </p>
              <br />
              <p className="text-xl">
                Azif’s entrepreneurial journey began with an ambition to break
                conventions and bring transformative ideas to life. From
                understanding market trends to forming strategic partnerships,
                he has consistently focused on creating opportunities for both
                brands and consumers. Under his leadership, Beygo has built a
                reputation for trust, quality, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4" style={{ margin: "50px 0px" }}>
          <h3 className="text-5xl font-bold">Our Vision</h3>
          <p className="text-xl">
            At Beygo, we’re committed to bringing exceptional products to the
            UAE and Indian markets. We collaborate with leading Original Design
            Manufacturers (ODMs) to ensure every product meets the highest
            standards of quality and innovation.
          </p>
          <p className="text-xl">
            But we don’t stop there. With an insight-driven marketing approach
            and a deep understanding of regional consumer behavior, we ensure
            that products reach the right audience at the right time. Backed by
            a wide distribution network and a dedicated in-house e-commerce
            team, we offer seamless operations that prioritize reliability and
            efficiency.
          </p>
          <p className="text-xl">
            Recognizing the ever-evolving nature of retail, Beygo is also
            building an integrated e-commerce ecosystem that enables multiple
            brands to operate under one digital roof. By offering personalized
            solutions across various categories, we empower both emerging and
            established brands to grow.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-5xl font-bold">Looking Ahead</h3>
          <p className="text-xl">
            The journey at Beygo is one of constant evolution. While we continue
            to grow as a trusted name in e-commerce, we’re also preparing to
            make our mark in premium retail. Our aim is to provide a
            distinguished shopping experience for customers who value quality,
            authenticity, and sophistication.
          </p>
          <p className="text-xl">
            By 2027, we plan to introduce quick commerce solutions in Dubai.
            This initiative will revolutionize the shopping experience, offering
            ultra-fast deliveries and unmatched convenience — a reflection of
            our commitment to staying ahead of market trends. Our expansion will
            create a dynamic ecosystem where products reach customers with
            remarkable speed and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}
