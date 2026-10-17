/** Synthetic source-backed mock contract entry point. Intentionally incomplete starter for the live task. */

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function renderOrders(input) {
  const url = `/orders?mode=${encodeURIComponent(input.mode)}`;
  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.json();
    return `${body.error}:${res.status}`;
  }
  const body = await res.json();
  if (!Array.isArray(body.orders)) {
    return 'invalid-data';
  }
  return body.orders.map(o => `<li data-testid="orders-list">${escapeHtml(o.name)}</li>`).join('');
}

export function getLiteralInventory(input) {
  if (input !== null && typeof input === 'object' && !Array.isArray(input)) {
    return { exports: [{ name: 'hello' }] };
  }
  return { exports: [] };
}
