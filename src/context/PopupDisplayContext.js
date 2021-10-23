import { createContext, useState } from "react";

export const PopupDisplayContext = createContext();

export const PopupDisplayProvider = ({ children }) => {
  const [popupDisplay, setPopupDisplay] = useState(false);

  const handlePopupDisplay = (state) => {
    setPopupDisplay(state);
  };

  return (
    <PopupDisplayContext.Provider
      value={{
        popupDisplay: popupDisplay,
        handlePopupDisplay: handlePopupDisplay,
      }}
    >
      {children}
    </PopupDisplayContext.Provider>
  );
};
