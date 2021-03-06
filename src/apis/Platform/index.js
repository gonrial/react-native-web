import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'

const Platform = {
  OS: 'web',
  userAgent: canUseDOM ? window.navigator.userAgent : ''
}

export default Platform
