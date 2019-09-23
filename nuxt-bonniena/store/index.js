export const state = () => ({
  primary: 'fb00c9'
})

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('global/get')
    await dispatch('components/get')
  }
}
