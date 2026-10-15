/** Candidate 2 – repaired, all branches implemented. */
export async function renderOrders(input) {
  const res = await fetch(`/orders?mode=${input.mode}`);
  if (!res.ok) {
    return `refused:${res.status}`;
  }
  const body = await res.json();
  if (!Array.isArray(body.orders)) {
    return 'invalid-data';
  }
  return body.orders.map(o => `<li data-testid="orders-list">${o.name}</li>`).join('');
}
