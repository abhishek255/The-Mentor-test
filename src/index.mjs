/** Synthetic source-backed mock contract entry point. */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export async function renderOrders(input) {
  const safeMode = encodeURIComponent(input.mode);
  const res = await fetch(`/orders?mode=${safeMode}`);
  if (!res.ok) { const body = await res.json(); return `${body.error}:${res.status}`; }
  const body = await res.json();
  if (!Array.isArray(body.orders)) return 'invalid-data';
  return body.orders.map(o => `<li data-testid="orders-list">${escapeHtml(o.name)}</li>`).join('');
}

export function getLiteralInventory(input) {
  if (!input || typeof input !== 'object') return { exports: [] };
  return { exports: [{ name: 'hello' }] };
}
