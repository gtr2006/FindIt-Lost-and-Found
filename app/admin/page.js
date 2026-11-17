"use client";

import { useContext } from "react";
import { ItemContext } from "../../context/ItemContext";

export default function AdminPage() {
  const { items, updateStatus } = useContext(ItemContext);

  return (
    <section className="section">
      <p className="eyebrow">SITE MANAGEMENT</p>
      <h1>Admin dashboard</h1>
      <p className="muted">Demo admin view. Change the status of reports to practise managing listings.</p>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Item</th><th>Type</th><th>Location</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>{item.location}</td>
                <td><span className="status">{item.status}</span></td>
                <td>
                  <button className="small-button" onClick={() => updateStatus(item.id, item.status === "Open" ? "Resolved" : "Open")}>
                    Mark {item.status === "Open" ? "resolved" : "open"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!items.length && <div className="empty-state">No reports available.</div>}
    </section>
  );
}
