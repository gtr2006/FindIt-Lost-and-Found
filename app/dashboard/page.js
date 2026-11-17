"use client";

import { useContext } from "react";
import Link from "next/link";
import { ItemContext } from "../../context/ItemContext";
import ItemCard from "../../components/ItemCard";

export default function DashboardPage() {
  const { items } = useContext(ItemContext);

  return (
    <section className="section">
      <p className="eyebrow">YOUR ACTIVITY</p>
      <h1>My dashboard</h1>
      <p className="muted">This demo dashboard shows all reports added during this session.</p>
      <div className="stats-grid">
        <div className="stat-card"><strong>{items.length}</strong><span>Total reports</span></div>
        <div className="stat-card"><strong>{items.filter((item) => item.type === "Lost").length}</strong><span>Lost reports</span></div>
        <div className="stat-card"><strong>{items.filter((item) => item.type === "Found").length}</strong><span>Found reports</span></div>
      </div>
      <div className="section-heading">
        <h2>All reports</h2>
        <Link className="text-link" href="/">Browse website</Link>
      </div>
      {items.length ? <div className="item-grid">{items.map((item) => <ItemCard key={item.id} item={item} />)}</div> :
        <div className="empty-state"><h3>No reports yet</h3><p>Create your first lost or found report.</p></div>}
    </section>
  );
}
