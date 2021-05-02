import { useRouter } from "@microprogram/router";

Page({
  data: {

  },
  onLoad() {
    console.log(useRouter().getRoutes())
  },
  handleNavigateTo() {
    useRouter().push('/back?name=JserWang')
  },
  handleRedirectTo() {
    useRouter().replace('/back?name=JserWang')
  },
  handleSwitchTab() {
    // 使用switchTab方式的前提是在route的meta中设置了isTab: true
    useRouter().push({
      path: '/my',
      params: {
        a: 1,
        b: {
          c: 2
        }
      }
    })
  },
  handleReLaunch() {
    useRouter().push({
      path: '/back', 
      params: {
        'id': 123
      },
      reLaunch: true
    })
  },
  handleToSubPackage() {
    useRouter().push('/blog/list?id=1')
  }
})
