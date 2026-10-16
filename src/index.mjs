/** Synthetic source-backed mock contract entry point. */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function renderOrders(input) {
  const res = await fetch(`/orders?mode=${encodeURIComponent(input.mode)}`);
  if (!res.ok) {
    return `refused:${res.status}`;
  }
  const data = await res.json();
  if (!Array.isArray(data.orders)) {
    return 'invalid-data';
  }
  return data.orders.map(o => `<li data-testid="orders-list">${escapeHtml(o.name)}</li>`).join('');
}
