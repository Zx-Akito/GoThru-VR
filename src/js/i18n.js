Vue.use(VueI18n);

const messages = {};
export default new VueI18n({
    locale: 'en',
    messages,
    silentTranslationWarn: true
});
