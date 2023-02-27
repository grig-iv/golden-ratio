import { writable } from 'svelte/store';

const { subscribe, update } = writable(false);

export const controller = {
  subscribe,
  open: () => update((_: boolean) => true),
  close: () => update((_: boolean) => false),
  toggle: () => update((open: boolean) => !open),
};

export let state  = {
    open: false
}
