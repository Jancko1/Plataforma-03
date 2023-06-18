import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
//-----LOGIN-----//
import Login from "./Components/Auth/Login";
//-----REGISTER-----//
import SignUp from "./Components/Auth/SignUp";
//-----HOME-----//
import Home from "./pages/Home";
import Validation from "./routes/secure/Validation";

import { useSelector } from "react-redux";

//-----Dashboard-----//

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/inicio"
              element={
                <Validation>
                  <Home />
                </Validation>
              }
            />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
