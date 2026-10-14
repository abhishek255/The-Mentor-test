import assert from 'node:assert/strict';
import test from 'node:test';
import { renderOrders } from '../src/index.mjs';

const variants = new Map([
  ['success', { ok: true, status: 200, json: async () => ({ orders: [{ name: 'Sample order' }] }) }],
  ['refusal', { ok: false, status: 403, json: async () => ({ error: 'refused' }) }],
  ['invalid-data', { ok: true, status: 200, json: async () => ({ orders: 'not-an-array' }) }],
]);

test('renders the source-backed success mock', async () => {
  globalThis.fetch = async (url) => { assert.equal(url, '/orders?mode=success'); return variants.get('success'); };
  assert.equal(await renderOrders({ mode: 'success' }), '<li data-testid="orders-list">Sample order</li>');
});

test('preserves the source-backed refusal status', async () => {
  globalThis.fetch = async (url) => { assert.equal(url, '/orders?mode=refusal'); return variants.get('refusal'); };
  assert.equal(await renderOrders({ mode: 'refusal' }), 'refused:403');
});

test('rejects source-backed invalid response data', async () => {
  globalThis.fetch = async (url) => { assert.equal(url, '/orders?mode=invalid-data'); return variants.get('invalid-data'); };
  assert.equal(await renderOrders({ mode: 'invalid-data' }), 'invalid-data');
});
