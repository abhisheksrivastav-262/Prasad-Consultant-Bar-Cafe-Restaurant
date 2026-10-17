import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ href, label = "WhatsApp Us", className = "" }: { href: string; label?: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`btn btn-gold ${className}`}>
      <MessageCircle size={16} /> {label}
    </a>
  );
}
