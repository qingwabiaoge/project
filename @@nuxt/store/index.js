export const state = () => ({
  //primary: 'fb00c9',
  //HOST: `http://${nuxt_config.env.HOST}:${nuxt_config.env.PORT}/api`,
  dev:process.env.NODE_ENV === "development"
})

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('global/get')
    await dispatch('components/get')
  }
}
