import { useConfigContext } from '../context/configContext'

export const useConfig = (key: string, name: string) => {
  const { config } = useConfigContext()
  // Explicitly cast config to any
  return (config as any)?.[key]?.[name]
}

export const useThemeConfig = (key: string) => {
  const { config } = useConfigContext()
  // Explicitly cast config to any
  return (config as any)?.[key]
}

export const useUiConfig = (key: string, name: string) => {
  const { uiConfig } = useConfigContext()
  // Explicitly cast uiConfig to any
  return (uiConfig as any)?.[key]?.[name]
}
