import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
//-----LOGIN-----//
import Login from "./Login/Login";
//-----REGISTER-----//
import SingUp from "./Login/SingUp";
//-----HOME-----//
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singIn" element={<Login />} />
            <Route path="/singUp" element={<SingUp />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
