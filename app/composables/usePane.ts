import { Pane } from 'tweakpane'

let _pane: Pane | null = null

export function usePane<T extends Record<string, any>>(config: T) {
  const data: Record<string, any> = {}
  const bindingOptions: Record<string, any> = {}

  for (const [key, value] of Object.entries(config)) {
    if (typeof value === 'object' && value !== null && 'default' in value) {
      data[key] = value.default
      const { default: _, ...options } = value
      bindingOptions[key] = options
    } else {
      data[key] = value
    }
  }

  const params = reactive(data)

  onMounted(() => {
    if (!_pane) {
      _pane = new Pane({ title: 'Config' })
    }

    for (const key of Object.keys(params)) {
      (_pane as any).addBinding(params, key, bindingOptions[key])
    }
  })

  return params as { [K in keyof T]: T[K] extends { default: infer D } ? D : T[K] }
}
