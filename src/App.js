import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Notfound } from "./Components/Notfound";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";
import { createContext } from "react";
import {Test} from "./Components/Test";
import { QueryClient, QueryClientProvider} from "react-query";
import { Mytest } from "./Components/Mytest";

export const siteName = createContext();
const App = () => {
const client = new QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:false,refetchOnMount:false}}})
  return (
    <QueryClientProvider client={client}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/test" element={<Test/>}/>
            <Route path="/test/:id?" element={<Mytest/>}/>
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
</QueryClientProvider>
  );
};

export default App;
