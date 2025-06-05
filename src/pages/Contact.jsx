import { Computer, Link, Mail } from "lucide-react";

export default function Contact() {
  return (
    <article>
      <div className="flex flex-wrap justify-center mb-8 gap-8 items-center">
        <div className="px-4">
          <h1 className="text-3xl font-heading font-semibold mt-16 mb-8 text-center">
            Contact me
          </h1>
          <ul className="flex flex-wrap gap-2 bg-background text-black p-8 md:max-w-xl">
            <li className="flex flex-wrap gap-2 p-2">
              <Mail className="flex-shrink-0" /> Email me at:{" "}
              <span className="font-medium">madelen.sletteberg@gmail.com</span>
            </li>
            <li className="flex flex-wrap gap-2 p-2">
              <Link className="flex-shrink-0" /> Connect with me on
              <a
                href="https://www.linkedin.com/in/madelen-sletteberg-17a435257/"
                className="underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex flex-wrap gap-2 p-2">
              <Computer className="flex-shrink-0" /> Check out my
              <a
                href="https://github.com/maddipaddi"
                className="underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub profile
              </a>
            </li>
          </ul>
        </div>
        <div className="md:min-w-lg px-4">
          <img
            src="/assets/rotary-phone-ChatGPT.png"
            alt="Old timey dark brown rotary phone."
            className="w-70 translate-y-16 lg:translate-y-20"
          />
        </div>
      </div>
      <div className="bg-primary h-16 border-b-4 border-bookshelf-border"></div>
    </article>
  );
}
