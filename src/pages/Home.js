import Avatar from "../components/Avatar";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import reset from "../styles/reset.css";
import styles from "../styles/Home.module.css";
function Home() {
  return (
    <body>
      <header>
        <NavBar />
      </header>
      <main>
        <Main />
      </main>
      <footer></footer>
    </body>
  );
}
export default Home;
