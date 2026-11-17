"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ItemContext } from "../../../context/ItemContext";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const { items, requestClaim } = useContext(ItemContext);
  const item = items.find((entry) => entry.id === Number(id));

  if (!item) {
    return <div className="empty-state"><h2>Item not found</h2><Link href="/">Back to home</Link></div>;
  }

  return (
    <section className="details-card">
      <span className={item.type === "Lost" ? "tag tag-lost" : "tag tag-found"}>{item.type}</span>
      <h1>{item.title}</h1>
      <p className="muted">{item.category} · {item.location}</p>
      <div className="details-placeholder">📦</div>
      <h3>Description</h3>
      <p>{item.description}</p>
      <p><strong>Date:</strong> {item.date}</p>
      <p><strong>Contact:</strong> {item.contact}</p>
      <p><strong>Status:</strong> {item.status}</p>
      {item.type === "Found" && item.status === "Open" && (
        <button className="button button-primary" onClick={() => requestClaim(item.id)}>
          Request to claim this item
        </button>
      )}
      {item.claimRequested && <p className="success-message">Claim request added in this demo.</p>}
      <p><Link className="text-link" href="/">← Back to all items</Link></p>
    </section>
  );
}
