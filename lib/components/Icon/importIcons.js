let importAll = (requireContext) => requireContext.keys().forEach(requireContext)

try {
  importAll(require.context('@assets/icons/', true, /\.svg$/))
} catch (error) {

}