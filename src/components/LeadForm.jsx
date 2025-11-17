import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const res = await fetch(`${BACKEND_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' }),
      })
      if (!res.ok) throw new Error('Anfrage fehlgeschlagen')
      setStatus({ loading: false, success: 'Danke! Wir melden uns in Kürze.', error: null })
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message })
    }
  }

  return (
    <section id="anfrage" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Kostenloses Erstgespräch sichern</h2>
        <p className="mt-2 text-gray-700">Trag dich ein – wir melden uns innerhalb von 24 Stunden.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 bg-white p-6 rounded-xl border">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input required name="name" value={form.name} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Max Muster" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">E-Mail</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="max@mail.ch" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Telefon (optional)</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="+41 ..." />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nachricht (optional)</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="mt-1 w-full border rounded-md px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Kurz zu deiner Situation..." />
          </div>
          <button type="submit" disabled={status.loading} className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-black transition disabled:opacity-50">
            {status.loading ? 'Sende...' : 'Absenden'}
          </button>
          {status.success && <div className="text-green-700 bg-green-50 border border-green-200 p-3 rounded-md">{status.success}</div>}
          {status.error && <div className="text-red-700 bg-red-50 border border-red-200 p-3 rounded-md">{status.error}</div>}
        </form>
        <p className="mt-4 text-xs text-gray-500">Mit Absenden erklärst du dich mit der Verarbeitung deiner Daten zum Zweck der Kontaktaufnahme einverstanden.</p>
      </div>
    </section>
  )
}
