import { isDevelopment } from './src/constants'

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
  setHeadComponents,
}) => {

  if (isDevelopment) return

  const headComponents = getHeadComponents()

  headComponents.forEach(el => {
    // yandex verification instead of gatsby generator
    if (el.props.name === 'generator') {
      el.props = Object.assign({}, el.props, { name: 'yandex-verification', content: process.env.YANDEX_VERIFICATION })
    }
  })

  replaceHeadComponents(headComponents)
}
