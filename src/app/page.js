import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./footer/page";
import Header from "./header/page";
import Body from "./body/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <Header />
     

      </main>
     
     
     <body>
      <Body />
<Footer />
     </body>
    </div>
    
  );
}
