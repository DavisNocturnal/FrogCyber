export const categoryMap = {"tag":{"/":{"path":"/tags/","map":{"Algorithm":{"path":"/tags/algorithm/","keys":["v-0c96670e"]},"Thuật toán":{"path":"/tags/thu%E1%BA%ADt-to%C3%A1n/","keys":["v-0c96670e"]},"Giải thuật":{"path":"/tags/gi%E1%BA%A3i-thu%E1%BA%ADt/","keys":["v-0c96670e"]},"Backend":{"path":"/tags/backend/","keys":["v-77e2f3a3"]},"Authentication":{"path":"/tags/authentication/","keys":["v-77e2f3a3"]},"Authoriztion":{"path":"/tags/authoriztion/","keys":["v-77e2f3a3"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
