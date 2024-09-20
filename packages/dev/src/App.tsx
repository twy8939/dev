import { sayHi } from "@pnpm-monorepo/shared";
import { main } from "./concurrent";

const App = () => {
  main();

  // sayHi("KimYongMin");
  return <h1>Main app</h1>;
};
export default App;
