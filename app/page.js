"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { ItemContext } from "../context/ItemContext";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const { items } = useContext(ItemContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Electronics", "Wallet", "ID Card", "Keys", "Bags", "Other"];

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <section className="hero">
        <p className="eyebrow">COMMUNITY LOST & FOUND</p>
        <h1>Lost something? <span>Find it here.</span></h1>
        <p className="hero-text">
          Report lost belongings, share found items and help your community reunite with what matters.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/report-lost">Report Lost Item</Link>
          <Link className="button button-light" href="/report-found">Report Found Item</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">BROWSE REPORTS</p>
            <h2>Recent items</h2>
          </div>
          <span className="muted">{filteredItems.length} items found</span>
        </div>

        <input
          className="search-input"
          type="text"
          placeholder="Search by item name or location..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="filter-row">
          {categories.map((name) => (
            <button
              key={name}
              className={category === name ? "filter active-filter" : "filter"}
              onClick={() => setCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>

        {filteredItems.length > 0 ? (
          <div className="item-grid">
            {filteredItems.map((item) => <ItemCard key={item.id} item={item} />)}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No items found</h3>
            <p>Try another search or category.</p>
          </div>
        )}
      </section>
    </div>
  );
}
