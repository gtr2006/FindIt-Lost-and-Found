"use client";

import { createContext, useState } from "react";

export const ItemContext = createContext();

const startingItems = [
  {
    id: 1,
    title: "Black wallet",
    type: "Lost",
    category: "Wallet",
    location: "College library",
    date: "2026-11-15",
    description: "A black wallet with cards inside. Lost near the library.",
    contact: "student@example.com",
    status: "Open",
    claimRequested: false
  },
  {
    id: 2,
    title: "Blue water bottle",
    type: "Found",
    category: "Other",
    location: "College canteen",
    date: "2026-11-16",
    description: "A blue water bottle was found on a table near the canteen.",
    contact: "helper@example.com",
    status: "Open",
    claimRequested: false
  },
  {
    id: 3,
    title: "Wireless earbuds",
    type: "Lost",
    category: "Electronics",
    location: "Bus stop",
    date: "2026-11-14",
    description: "Small white wireless earbuds in a charging case.",
    contact: "person@example.com",
    status: "Open",
    claimRequested: false
  },
  {
    id: 4,
    title: "College ID card",
    type: "Found",
    category: "ID Card",
    location: "Main entrance",
    date: "2026-11-16",
    description: "An ID card was found near the main entrance.",
    contact: "finder@example.com",
    status: "Open",
    claimRequested: false
  }
];

export function ItemProvider({ children }) {
  const [items, setItems] = useState(startingItems);

  function addItem(newItem) {
    setItems((oldItems) => [{ ...newItem, id: Date.now(), status: "Open", claimRequested: false }, ...oldItems]);
  }

  function requestClaim(id) {
    setItems((oldItems) =>
      oldItems.map((item) => item.id === id ? { ...item, claimRequested: true } : item)
    );
  }

  function updateStatus(id, newStatus) {
    setItems((oldItems) =>
      oldItems.map((item) => item.id === id ? { ...item, status: newStatus } : item)
    );
  }

  return (
    <ItemContext.Provider value={{ items, addItem, requestClaim, updateStatus }}>
      {children}
    </ItemContext.Provider>
  );
}
