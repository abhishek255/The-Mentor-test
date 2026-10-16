/** Synthetic source-backed mock contract entry point. Intentionally incomplete starter for the live task. */

function htmlEscape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function renderOrders(input) {
  const mode = encodeURIComponent(String(input.mode));
  const response = await fetch(`/orders?mode=${mode}`);
  if (!response.ok) {
    return `refused:${response.status}`;
  }
  const data = await response.json();
  if (!Array.isArray(data.orders)) {
    return 'invalid-data';
  }
  return data.orders.map(o => `<li data-testid="orders-list">${htmlEscape(o.name)}</li>`).join('');
}

// Corrected: exports[0].name is 'hello' (letter o)
export function getLiteralInventory(input) {
  void input;
  return { protocol: 'registered-module-export-inventory/v1', exports: [{ name: 'hello', kind: 'callable' }] };
}
