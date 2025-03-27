import Image from "next/image";
import HeroSection from "@/core/common/HeroSection/HeroSection";
import "./styles.css";

export default function Home() {
  return (
    <div>
      <HeroSection
        title1={"Elevating Innovation"}
        title2={"&Lifestyle"}
        subHeading={"where innovation meets lifestyle."}
      />
      {/* <div className="hero-image">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-7xl font-bold">Elevating Innovation</h1>
          <h1 className="text-7xl font-bold">&Lifestyle</h1>
          <h3 className="text-2xl">where innovation meets lifestyle.</h3>
        </div>
      </div> */}
      <div
        className="body-website flex flex-col max-w-[1140px] items-center"
        style={{ margin: "0px auto" }}
      >
        <div className="w-[1080px] flex flex-col items-center">
          <h1
            className=" text-5xl font-semibold low-space"
            style={{ marginBottom: "40px" }}
          >
            What we sell
          </h1>
          <div className="grid grid-cols-3 gap-4 w-full">
            <div
              className="w-full text-start bg-[#f7f7f5] border-4 border-solid rounded-3xl"
              style={{ padding: "20px" }}
            >
              <h3
                className="text-4xl font-semibold"
                style={{ marginBottom: "30px" }}
              >
                Tech gadgets
              </h3>
              <p className="leading-[1]">
                Smart devices designed to simplify tasks and enhance your
                digital lifestyle.
              </p>
            </div>
            <div
              className="w-full text-start bg-[#f7f7f5] border-4 border-solid rounded-3xl"
              style={{ padding: "20px" }}
            >
              <h3
                className="text-4xl font-semibold"
                style={{ marginBottom: "30px" }}
              >
                Smart Home Solutions
              </h3>
              <p className="leading-[1]">
                Innovative products that bring convenience, comfort, and
                security to your living space.
              </p>
            </div>
            <div
              className="w-full text-start bg-[#f7f7f5] border-4 border-solid rounded-3xl"
              style={{ padding: "20px" }}
            >
              <h3
                className="text-4xl font-semibold"
                style={{ marginBottom: "30px" }}
              >
                Wearable Tech
              </h3>
              <p className="leading-[1]">
                Stylish and functional wearables for health tracking and
                everyday convenience.
              </p>
            </div>
            <div
              className="w-full text-start bg-[#f7f7f5] border-4 border-solid rounded-3xl"
              style={{ padding: "20px" }}
            >
              <h3
                className="text-4xl font-semibold"
                style={{ marginBottom: "30px" }}
              >
                Lifestyle Products
              </h3>
              <p className="leading-[1]">
                Premium essentials combining elegance, functionality, and modern
                design.
              </p>
            </div>
            <div
              className="w-full text-start bg-[#f7f7f5] border-4 border-solid rounded-3xl"
              style={{ padding: "20px" }}
            >
              <h3
                className="text-4xl font-semibold"
                style={{ marginBottom: "30px" }}
              >
                Home Products
              </h3>
              <p className="leading-[1]">
                Sophisticated decor and functional items that elevate your
                living experience.
              </p>
            </div>{" "}
            <div
              className="w-full text-start bg-[#f7f7f5] border-4 border-solid rounded-3xl"
              style={{ padding: "20px" }}
            >
              <h3
                className="text-4xl font-semibold"
                style={{ marginBottom: "30px" }}
              >
                Kitchen & Dining
              </h3>
              <p className="leading-[1]">
                High-quality kitchen tools and dining essentials for a refined
                culinary experience.
              </p>
            </div>{" "}
            <div
              className="w-full text-start bg-[#f7f7f5] border-4 border-solid rounded-3xl"
              style={{ padding: "20px" }}
            >
              <h3
                className="text-4xl font-semibold"
                style={{ marginBottom: "30px" }}
              >
                Entertainment Systems
              </h3>
              <p className="leading-[1]">
                Advanced audio, visual, and gaming solutions for immersive
                entertainment.
              </p>
            </div>{" "}
            <div
              className="w-full text-start bg-[#f7f7f5] border-4 border-solid rounded-3xl"
              style={{ padding: "20px" }}
            >
              <h3
                className="text-4xl font-semibold"
                style={{ marginBottom: "30px" }}
              >
                Personal Care Tech
              </h3>
              <p className="leading-[1]">
                Smart grooming and wellness devices designed for effortless
                self-care.
              </p>
            </div>{" "}
            <div
              className="w-full text-start bg-[#f7f7f5] border-4 border-solid rounded-3xl"
              style={{ padding: "20px" }}
            >
              <h3
                className="text-4xl font-semibold"
                style={{ marginBottom: "30px" }}
              >
                Travel Essentials
              </h3>
              <p className="leading-[1]">
                Durable, stylish products that make travel more organized and
                comfortable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-[1140px] flex flex-col justify-center items-center"
        style={{ margin: "0px auto" }}
      >
        <h2 className="text-5xl font-semibold" style={{ margin: "30px 0px" }}>
          Our Brand
        </h2>
        <a
          target="_blank"
          href="http://macedona.co/"
          className="border-4 border-solid rounded-3xl"
          style={{ padding: "30px" }}
        >
          <Image
            src="/images/Macedona.png"
            alt="image_logo"
            width={500}
            height={300}
          />
        </a>
      </div>
      <div
        className="max-w-[960px] flex flex-col justify-center items-center"
        style={{ margin: "0px auto" }}
      >
        <h2
          className="text-5xl font-semibold low-space"
          style={{ margin: "50px 0px" }}
        >
          we are a global team
        </h2>
        <div className="w-full flex justify-between">
          <div className="w-[40%] ">
            <div className="productImage1 border-2 border-solid rounded-3xl"></div>
          </div>
          <div className="w-[60%]">
            <h3
              className="text-4xl font-semibold"
              style={{ marginBottom: "20px" }}
            >
              Global Network Solutions. Partners You Can Rely On.
            </h3>
            <p className="text-xl">
              At Beygo, our extensive global network connects us with trusted
              Original Design Manufacturers (ODMs) known for quality and
              innovation. This ensures we source products that meet the highest
              standards, giving our partners the confidence to grow with us.
            </p>
          </div>
        </div>
        <div
          className="w-full flex justify-between"
          style={{ margin: "150px 0px" }}
        >
          <div className="w-[60%]">
            <h3
              className="text-4xl font-semibold"
              style={{ marginBottom: "20px" }}
            >
              Marketing Depth in UAE & India. Insight-Driven Success.
            </h3>
            <p className="text-xl">
              Our deep understanding of the UAE and Indian markets allows us to
              implement data-backed marketing strategies. With a focus on
              regional preferences and market behavior, we help products reach
              the right audience at the right time — building both trust and
              brand loyalt
            </p>
          </div>
          <div className="w-[40%]">
            <div className="productImage2 border-2 border-solid rounded-3xl"></div>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[40%]">
            <div className="productImage3 border-2 border-solid rounded-3xl"></div>
          </div>
          <div className="w-[60%]">
            <h3
              className="text-4xl font-semibold"
              style={{ marginBottom: "20px" }}
            >
              Wide Distribution Network. Delivering with Excellence.
            </h3>
            <p className="text-xl">
              We’ve built a strong, reliable distribution network designed for
              seamless product movement. With our expertise in logistics and
              supply chain management, we ensure timely deliveries while
              maintaining product quality, reinforcing your customers’ trust.
            </p>
          </div>
        </div>
        <div
          className="w-full flex justify-between"
          style={{ margin: "150px 0px" }}
        >
          <div className="w-[60%]">
            <h3
              className="text-4xl font-semibold"
              style={{ marginBottom: "20px" }}
            >
              In-House E-commerce Team. Focused on Your Growth.
            </h3>
            <p className="text-xl">
              Our experienced e-commerce team provides end-to-end support,
              ensuring a seamless online presence for your products. From
              optimizing listings to enhancing user experience, we ensure your
              brand stands out in a competitive digital landscape.
            </p>
          </div>
          <div className="w-[40%]">
            {" "}
            <div className="productImage4 border-2 border-solid rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
