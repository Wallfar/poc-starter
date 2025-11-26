import { Pane } from 'tweakpane'

let _pane: Pane | null = null

export function usePane() {
  if (!_pane) {
    _pane = new Pane({ title: 'Config' })
  }
  return _pane
}
