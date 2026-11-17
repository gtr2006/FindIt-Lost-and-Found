"use client";

import ItemForm from "../../components/ItemForm";

export default function ReportLostPage() {
  return (
    <section className="form-page">
      <p className="eyebrow">CREATE A REPORT</p>
      <h1>Report a lost item</h1>
      <p className="muted">Tell the community what you lost and where you last saw it.</p>
      <ItemForm type="Lost" />
    </section>
  );
}
