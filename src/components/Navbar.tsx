import { Menu, TrainFront, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Historical Trend", href: "#trend" },
  { label: "Stationarity", href: "#stationarity" },
  { label: "Models", href: "#models" },
  { label: "Forecast", href: "#forecast" },
  { label: "Conclusion", href: "#conclusion" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="shell nav-inner">
        <a className="brand" href="#top" aria-label="Railway research dashboard home">
          <span className="brand-mark"><TrainFront size={19} aria-hidden="true" /></span>
          <span>Railway Research</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
