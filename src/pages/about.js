import About from "../Components/About";
import { useToggleBackground } from "../context/ToggleBackgroundContext";

const about = () => {
  const { toggleBackground } = useToggleBackground();
  return (
    // <Layout>
      <About toggleBackground={toggleBackground} />
    // </Layout>
  );
};
export default about;
