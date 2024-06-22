
import LoginPage from "./login/page";
import HomePage from "../components/HomePage";
export default function Home() {
  const user = false
  return (
    <>
      {user ? (<HomePage/> ) : (<LoginPage />)}
    </>
  );
}
