import { Layout } from "./Layouts";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              <span>test home</span>;
            }}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default PageRouter;