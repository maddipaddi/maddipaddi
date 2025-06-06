import { Link } from "react-router";

export default function HoverableShelfItem({
  to,
  imgSrc,
  alt,
  label,
  translate,
}) {
  return (
    <Link
      to={to}
      aria-label={label}
      className="group relative active:scale-95 active:translate-y-0.5 outline-none focus-visible:ring-1 focus-visible:ring-background focus-visible:ring-offset-1"
    >
      <img
        src={imgSrc}
        alt={alt}
        className={`h-32 object-contain ${translate} transition-transform duration-200  motion-safe:group-hover:scale-105 group-hover:-translate-y-1 drop-shadow-[2px_4px_2px_rgba(0,0,0,0.4)]`}
      />
      <span className="bg-background absolute -translate-y-20 right-1 -translate-x-3 text-lg text-copy font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition group-hover:shadow-[0_4px_12px_rgba(192,163,110,0.4)]">
        {label}
      </span>
    </Link>
  );
}
