/** Candidate 1 – intentionally incomplete (success only). */
export async function renderOrders(input) {
  const res = await fetch(`/orders?mode=${input.mode}`);
  if (input.mode === 'success') {
    const body = await res.json();
    return body.orders.map(o => `<li data-testid="orders-list">${o.name}</li>`).join('');
  }
  // TODO: refusal branch not implemented – candidate 1 is intentionally incomplete
  // TODO: invalid-data branch not implemented – candidate 1 is intentionally incomplete
  return '';
}
