import Bookshelf from "../components/Bookshelf";

export default function Home() {
  return (
    <article className="mx-auto font-heading text-2xl font-medium tracking-wide bg-[url('/assets/wallpaper2-ChatGPT.png')] w-full pt-12">
      <div className="p-4 text-center bg-[rgba(40,30,20,0.85)] rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-xl mx-auto">
        <h1 className="mb-2">Hi! I'm Maddie, a front-end developer.</h1>
        <p>Browse the bookshelf to learn more.</p>
      </div>

      <Bookshelf />
    </article>
  );
}
