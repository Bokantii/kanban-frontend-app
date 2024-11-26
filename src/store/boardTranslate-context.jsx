import { createContext } from "react";
import { useState } from "react";
export const TranslateContext = createContext();
export const TranslateProvider = ({ children }) => {
  const [translateX, setTranslateX] = useState("0%");
  const [boards, setBoards] = useState([
    { id: 0, title: "Initial Board", columns: [] },
  ]);
  const [activeBoardIndex, setActiveBoardIndex] = useState(0);
  const toggleTranslateX = (isSideBarShown) => {
    setTranslateX(isSideBarShown ? "20.83%" : "0%");
  };
  const createNewBoard = (title) => {
    const newBoard = { id: Date.now(), title, columns: [] };
    setBoards((prevBoards) => [...prevBoards, newBoard]
    );
  };
  const selectBoard = (index) => {
    setActiveBoardIndex(index);
  };
  return (
    <TranslateContext.Provider
      value={{
        translateX,
        toggleTranslateX,
        activeBoardIndex,
        boards,
        selectBoard,
        createNewBoard,
      }}
    >
      {children}
    </TranslateContext.Provider>
  );
};
