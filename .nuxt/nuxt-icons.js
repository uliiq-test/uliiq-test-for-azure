export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64.1c04da.png","120x120":"/_nuxt/icons/icon_120.1c04da.png","144x144":"/_nuxt/icons/icon_144.1c04da.png","152x152":"/_nuxt/icons/icon_152.1c04da.png","192x192":"/_nuxt/icons/icon_192.1c04da.png","384x384":"/_nuxt/icons/icon_384.1c04da.png","512x512":"/_nuxt/icons/icon_512.1c04da.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
