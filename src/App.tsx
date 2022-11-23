import ComponentPubSubSolution from "./state-management-solutions/2-pub-sub";
import ComponentUseReducerSolution from "./state-management-solutions/1-use-reducer-solution";
import StoreWithSubscription from "./state-management-solutions/3-use-store-with-subscription";

function App() {
  return (
    <>
      <ComponentUseReducerSolution />
      <ComponentPubSubSolution />
      <StoreWithSubscription />
    </>
  );
}

export default App;
