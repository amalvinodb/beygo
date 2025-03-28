import Image from "next/image";
import "./footer.css";

export default function Page() {
  return (
    <div className="footer-section drop-shadow-xl h-auto flex flex-col border-4 border-solid items-center justify-between">
      <div
        className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-4"
        style={{ padding: "40px 120px" }}
      >
        <div className="md:block hidden">
          <a href="/">
            <div className="footer-logo">
              <span className="b">b</span>
              <span className="e">e</span>
              <span className="y">y</span>
              <span className="g">g</span>
              <span className="o">o</span>
            </div>
          </a>
        </div>
        <div>
          <ul className="list-disc h-full flex flex-col justify-around gap-4">
            <li className="text-xl font-semibold">Company</li>
            <li className="text-xl font-semibold">About Us</li>
            <li className="text-xl font-semibold">Contact Us</li>
            <li className="text-xl font-semibold">Privacy Policy</li>
            <li className="text-xl font-semibold">Terms & Condetions</li>
          </ul>
        </div>
        <div>
          <ul className="list-disc h-full flex flex-col justify-around gap-4">
            <li className="text-xl font-semibold">Support</li>
            <li className="text-xl font-semibold">FAQS</li>
            <li className="text-xl font-semibold">Shipping & Returns</li>
            <li className="text-xl font-semibold">Customer Service</li>
          </ul>
        </div>
        <div>
          <div className="list-disc h-full flex flex-col justify-around gap-4">
            <h2 className="text-2xl font-bold">Contact</h2>
            <ul className="list-disc h-full flex flex-col justify-around gap-4">
              <li className="text-lg font-semibold">
                <a href="mailto:hello@beygo.in">hello@beygo.in</a>
              </li>
              <li className="text-lg font-semibold">
                <a href="tel:+91 9947437984">+91 9947437984</a>
              </li>
              <li className="text-lg font-semibold">
                <p>
                  10th Floor, Heavenly Plaza, <br />
                  Chembumukku, Vazhakkala, <br />
                  Kakkanad, Kochi, <br />
                  Kerala 682021
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="justify-self-end text-[8px] md:text-sm w-full text-center">
        Copyright© 2025 Beygo International, All Rights Reserved
      </div>
    </div>
  );
}
