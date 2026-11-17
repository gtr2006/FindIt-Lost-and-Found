"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { ItemContext } from "../context/ItemContext";

export default function ItemForm({ type }) {
  const { addItem } = useContext(ItemContext);
  const router = useRouter();
  const [form, setForm] = useState({
    title: "", category: "Electronics", location: "", date: "", description: "", contact: ""
  });
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((oldForm) => ({ ...oldForm, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title || !form.location || !form.date || !form.description || !form.contact) {
      setError("Please fill in all the fields.");
      return;
    }

    addItem({ ...form, type });
    router.push("/");
  }

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <label>Item name
        <input name="title" value={form.title} onChange={handleChange} placeholder="Example: Black wallet" />
      </label>
      <label>Category
        <select name="category" value={form.category} onChange={handleChange}>
          <option>Electronics</option>
          <option>Wallet</option>
          <option>ID Card</option>
          <option>Keys</option>
          <option>Bags</option>
          <option>Other</option>
        </select>
      </label>
      <label>Location
        <input name="location" value={form.location} onChange={handleChange} placeholder="Where was it lost or found?" />
      </label>
      <label>Date
        <input type="date" name="date" value={form.date} onChange={handleChange} />
      </label>
      <label>Description
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Describe the item. Avoid sharing private information." rows="4" />
      </label>
      <label>Contact email or phone
        <input name="contact" value={form.contact} onChange={handleChange} placeholder="Your contact details" />
      </label>
      {error && <p className="error-message">{error}</p>}
      <button className="button button-primary" type="submit">Submit {type} Report</button>
      <p className="form-note">Demo project: information is stored in temporary React state, not on a server.</p>
    </form>
  );
}
