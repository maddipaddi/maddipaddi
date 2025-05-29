export default function Bookshelf() {
  return (
    <article className="mx-auto font-heading text-2xl font-medium tracking-wide">
      <h1 className="text-center">Hi! I'm Maddie, a front-end developer.</h1>
      <p className="text-center ">Browse the bookshelf to learn more.</p>
      <div className="grid gap-y-8 p-8 mt-8 bg-primary rounded-lg shadow-2xl max-w-4xl border-b-6 border-bookshelf-border">
        {/* Shelf 1 */}
        <div className="bg-secondary grid grid-cols-4 border-t-6 border-bookshelf-border">
          <img
            src="/assets/bookspines-3-ChatGPT.png"
            className="h-32 object-contain translate-y-4"
            alt="Decorated bookspines in golden hues."
          />
          <img
            src="/assets/plant-ChatGPT.png"
            alt="Hanging plant in a terracotta pot."
            className="h-32 object-contain translate-y-8"
          />
          <img
            src="/assets/bookspines-ChatGPT.png"
            className="h-32 object-contain translate-y-4"
            alt="Decorated bookspines in earth tones."
          />
          <img
            src="/assets/feminine-bust-ChatGPT.png"
            alt="Feminine, cream-colored bust."
            className="h-32 object-contain translate-y-4"
          />
        </div>

        {/* Shelf 2 */}
        <div className="bg-secondary grid grid-cols-3 border-t-6 border-bookshelf-border">
          <div className="p-12 m-4 bg-primary">Project 1</div>
          <div className="p-12 m-4 bg-primary">Project 2</div>
          <div className="p-12 m-4 bg-primary">Project 3</div>
        </div>

        {/* Shelf 3 */}
        <div className="bg-secondary grid grid-cols-4 border-t-6 border-bookshelf-border">
          <img
            src="/assets/microscope-ChatGPT.png"
            className="h-32 object-contain translate-y-4"
            alt="Old tomey bronze microscope."
          />
          <img
            src="/assets/typewriter-ChatGPT.png"
            className="h-32 object-contain translate-y-6"
            alt="Brown typewriter with a paper loaded."
          />
          <img
            src="/assets/lantern-ChatGPT.png"
            className="h-32 object-contain translate-y-3"
            alt="Victorian looking gothic lantern."
          />
          <img
            src="/assets/bookspines-2-ChatGPT.png"
            className="h-32 object-contain translate-y-5"
            alt="Old looking browntoned bookspines."
          />
        </div>

        {/* Shelf 4 */}
        <div className="bg-secondary grid grid-cols-4 border-t-6 border-bookshelf-border">
          <img
            src="/assets/bookspines-4-ChatGPT.png"
            className="h-32 object-contain translate-y-4"
            alt="Decorated long row of bookspines."
          />

          <img
            src="/assets/books-n-fossil-ChatGPT.png"
            className="h-32 object-contain translate-y-4"
            alt="Books laying down with a fossil on top."
          />
          <img
            src="/assets/rotary-phone-ChatGPT.png"
            className="h-32 object-contain translate-y-3"
            alt="Old timey dark brown rotary phone."
          />
          <img
            src="/assets/plant-3-ChatGPT.png"
            className="h-32 object-contain translate-y-4"
            alt="Green plant in a terracotta pot."
          />
        </div>
      </div>
    </article>
  );
}
