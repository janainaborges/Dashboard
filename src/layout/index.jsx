import { Navbar } from "../components/Navbar";

export function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{width:"100%", height:"100vh"}}>{children}</div>
    </div>
  );
}
