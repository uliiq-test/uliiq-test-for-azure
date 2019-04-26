import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

declare let window: any;
//TODO: isClientは非推奨。代わりに、process.client の使用を推奨されているが、
// typescriptでprocess.clientが利用できない。正確にはNodeJSのprocessのinterfaceを拡張することで利用できるのだが、
// 「index.d.ts」で拡張定義を記載してもエラーが起きるため、原因が解決するまで、isClientを利用する
export default ({ store, req, isDev, isClient }) => {
  createPersistedState({
    key: 'wish-hub',
    storage: {
      getItem: key =>
        isClient
          ? Cookies.getJSON(key)
          : cookie.parse(req.headers.cookie || '')[key],
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 365, secure: !isDev }), // 365日間 cookie storage を保持する
      removeItem: key => Cookies.remove(key)
    }
  })(store)
}