import Link from "next/link";

export default function ItemCard({ item }) {
  return (
    <article className="item-card">
      <div className="item-picture">{item.category === "Electronics" ? "🎧" : item.category === "Wallet" ? "👛" : item.category === "ID Card" ? "🪪" : item.category === "Keys" ? "🔑" : item.category === "Bags" ? "🎒" : "📦"}</div>
      <div className="item-card-content">
        <div className="card-top">
          <span className={item.type === "Lost" ? "tag tag-lost" : "tag tag-found"}>{item.type}</span>
          <span className="muted small-text">{item.date}</span>
        </div>
        <h3>{item.title}</h3>
        <p className="muted">{item.category} · {item.location}</p>
        <p className="card-description">{item.description}</p>
        <Link className="text-link" href={`/item/${item.id}`}>View details →</Link>
      </div>
    </article>
  );
}
