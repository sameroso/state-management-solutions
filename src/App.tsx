import ComponentPubSubSolution from "./state-management-solutions/2-pub-sub";
import ComponentUseReducerSolution from "./state-management-solutions/1-use-reducer-solution";
import StoreWithSubscription from "./state-management-solutions/3-use-store-with-subscription";
import StoreWithSelector from "./state-management-solutions/4-use-store-with-selector";
import StoreWithSelectorWithSyncExternalStore from "./state-management-solutions/5-use-store-with-use-sync-external-store";

function App() {
  return (
    <>
      <ComponentUseReducerSolution />
      <ComponentPubSubSolution />
      <StoreWithSubscription />
      <StoreWithSelector />
      <StoreWithSelectorWithSyncExternalStore />
    </>
  );
}

export default App;
