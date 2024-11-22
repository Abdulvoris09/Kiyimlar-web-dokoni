import React, { useState } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Magazin from "./components/Magazin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api, api2, api3 } from "../public/data";
import CardLike from "./layouts/CardLike";
import Blog from "./components/Блог";
import ReactLayouts from "./layouts/ReactLayouts";
import Guitar from "./components/Guitar";
import BlockMalumot from "./components/BlogMalumot";
import Sinup from "./components/Sinup";
import Login from "./components/Login";
import Error404 from "./layouts/Error404";
import AyolKiyim from "./components/AyolKiyim";
import Frame from "./components/Frame";
import KitsData from "./components/Kitsdata";

export default function App() {
  const [shop, setShop] = useState([]);
  const [like, setLike] = useState([]);

  // Universal Add to Cart function
  const addToCart = (id, apiData) => {
    const found = shop.find((e) => e.id === id);

    if (!found) {
      const productToAdd = apiData.find((e) => e.id === id);
      setShop([...shop, { ...productToAdd, miqdor: 1 }]);

      toast.success("Cartga qo'shildi", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Bu oldindan mavjud", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // Universal Add to Like function
  const addToLike = (id, apiData) => {
    const found = like.find((e) => e.id === id);
    if (!found) {
      const productToAdd = apiData.find((e) => e.id === id);
      setLike([...like, { ...productToAdd, miqdor: 1 }]);
    }
  };

  const removeLike = (id) => {
    const updatedShop = like.filter((e) => e.id !== id);
    setLike(updatedShop);
  };

  const addCartPul = (product, d) => {
    const ind = shop.findIndex((e) => e.id === product.id);
    const tempArr = [...shop];
    tempArr[ind].miqdor += d;

    if (tempArr[ind].miqdor === 0) {
      tempArr[ind].miqdor = 1;
    }
    setShop([...tempArr]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <ReactLayouts
            shop={shop}
            like={like}
            addToCart={addToCart}
            addToLike={addToLike}
            removeLike={removeLike}
          />
        }
      >
        <Route
          path="/"
          element={
            <Frame
              addToCart={addToCart}
              addToLike={addToLike}
              removeLike={removeLike}
            />
          }
        />
        <Route
          path="/erkaklerkiyimlari/:id"
          element={<Guitar addToCart={(id) => addToCart(id, api)} />}
        />
        <Route
          path="/ayolarkimlari/:id"
          element={<AyolKiyim addToCart={(id) => addToCart(id, api2)} />}
        />
        <Route
          path="/bolalar/:id"
          element={<KitsData addToCart={(id) => addToCart(id, api3)} />}
        />
        <Route
          path="/магазин"
          element={
            <Magazin
              shop={shop}
              setShop={setShop}
              addCartPul={addCartPul}
            />
          }
        />
        <Route
          path="/like"
          element={
            <CardLike
              shop={shop}
              like={like}
              addToLike={addToLike}
              removeLike={removeLike}
            />
          }
        />
        <Route path="/ьлог" element={<Blog />} />
        <Route path="/malumotlar/:id" element={<BlockMalumot />} />
        <Route path="/signup" element={<Sinup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}
