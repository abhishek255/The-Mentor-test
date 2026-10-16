/** Synthetic source-backed mock contract entry point. */
export async function renderOrders(input) {
  const res = await fetch(`/orders?mode=${input.mode}`);
  if (!res.ok) { const body = await res.json(); return `${body.error}:${res.status}`; }
  const body = await res.json();
  if (!Array.isArray(body.orders)) return 'invalid-data';
  // Intentional defect: order names interpolated without HTML escaping
  return body.orders.map(o => `<li data-testid="orders-list">${o.name}</li>`).join('');
}

export function getLiteralInventory(input) {
  if (!input || typeof input !== 'object') return { exports: [] };
  return { exports: [{ name: 'hello' }] };
}
