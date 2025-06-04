import Bookshelf from "../components/Bookshelf";

export default function Home() {
  return (
    <article className="mx-auto font-heading text-2xl font-medium tracking-wide bg-[#5E4F43] w-full pt-12">
      <h1 className="text-center">Hi! I'm Maddie, a front-end developer.</h1>
      <p className="text-center ">Browse the bookshelf to learn more.</p>
      <Bookshelf />
    </article>
  );
}
