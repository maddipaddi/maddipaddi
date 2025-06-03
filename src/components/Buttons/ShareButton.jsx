import { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    });
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy page link"
      className="flex items-center gap-2 px-4 py-2 bg-accent rounded cursor-pointer"
    >
      {copied ? "Copied!" : "Share link to this project"}
      {copied ? <ClipboardCheck size={20} /> : <Clipboard size={20} />}
    </button>
  );
}
