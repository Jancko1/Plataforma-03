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

//-----Dashboard-----//
import Profile from "./Components/Profile";
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
            <Route path="/dashboard" element={<Profile />} />
            <Route path="/inicio" element={<Login/>} />
            <Route path="/register" element={<SignUp/>} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
