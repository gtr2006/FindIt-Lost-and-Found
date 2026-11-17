"use client";

import ItemForm from "../../components/ItemForm";

export default function ReportFoundPage() {
  return (
    <section className="form-page">
      <p className="eyebrow">HELP SOMEONE</p>
      <h1>Report a found item</h1>
      <p className="muted">Share basic details so the owner can identify and claim their item.</p>
      <ItemForm type="Found" />
    </section>
  );
}
