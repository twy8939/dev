import { sayHi } from "@pnpm-monorepo/shared";
import { concurrent } from "./concurrent";

const App = () => {
  concurrent();

  sayHi("KimYongMin");
  return <h1>Main app</h1>;
};
export default App;
