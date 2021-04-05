module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Los archivos sass se cargaran en todos los componentes, creo que para el caso de normalize es buena idea solo cargarlo en App.vue
        prependData: `@import "@/scss/_variables.scss";`,
      },
    },
  },
};
