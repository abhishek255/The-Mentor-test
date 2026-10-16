import assert from 'node:assert/strict';
import test from 'node:test';
import { renderOrders, getLiteralInventory } from '../src/index.mjs';

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

test('HTML-escapes order names with special characters', async () => {
  globalThis.fetch = async (url) => {
    assert.equal(url, '/orders?mode=success');
    return { ok: true, status: 200, json: async () => ({ orders: [{ name: 'A & B <x> "y"' }] }) };
  };
  assert.equal(await renderOrders({ mode: 'success' }),
    '<li data-testid="orders-list">A &amp; B &lt;x&gt; &quot;y&quot;</li>');
});

test('URL-encodes mode containing &', async () => {
  globalThis.fetch = async (url) => {
    assert.equal(url, '/orders?mode=a%26b');
    return { ok: true, status: 200, json: async () => ({ orders: [] }) };
  };
  assert.equal(await renderOrders({ mode: 'a&b' }), '');
});

test('URL-encodes mode containing ?', async () => {
  globalThis.fetch = async (url) => {
    assert.equal(url, '/orders?mode=a%3Fb');
    return { ok: true, status: 200, json: async () => ({ orders: [] }) };
  };
  assert.equal(await renderOrders({ mode: 'a?b' }), '');
});

test('getLiteralInventory returns hello export', () => {
  assert.deepEqual(getLiteralInventory({}), { exports: [{ name: 'hello' }] });
});
