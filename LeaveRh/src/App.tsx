import routes, { renderRoutes } from "./modules/shared/routes";

function App() {
  return <div>{renderRoutes(routes)}</div>;
}

export default App;
