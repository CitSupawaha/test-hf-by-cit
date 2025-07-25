import Header from "../components/Header";
import Register from "../components/Register";
import { ResizablePanelGroup } from "../components/ui/resizable";

const Hero = () => {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="w-full  mx-auto"
      style={{ flex: "none" }}
    >
      <div className="h-[20%]">
        <Header />
      </div>
      <div className="h-[80%]">
        <Register />
      </div>
    </ResizablePanelGroup>
  );
};

export default Hero;
