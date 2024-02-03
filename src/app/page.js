import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./pages/homePage/HomePage";

export default function Home() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}
