import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./pages/components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

export { router };


import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHashElement() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const elemento = document.querySelector(hash);

            if (elemento) {
                setTimeout(() => {
                    elemento.scrollIntoView({
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    }, [hash]);

    return null;
}

export default ScrollToHashElement;