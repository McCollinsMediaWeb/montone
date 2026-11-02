export function Logo({ light = false }: { light?: boolean }) {
  return <span className={`logo ${light ? "logo-light" : ""}`} aria-label="Montone home"><span>MONT</span><i>O</i><span>NE</span></span>;
}
