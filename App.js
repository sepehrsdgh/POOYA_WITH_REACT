import RightSection from "./RightSection";

import LeftSection from "./LeftSection";
const App = () => {
  return (
    <div className="min-h-screen flex flex-col mb-3 sm:flex-row sm:my-8 sm:flex sm:justify-center sm:items-center sm:h-screen" >
      <RightSection />
      <LeftSection />
    </div>
  );
};

export default App;
