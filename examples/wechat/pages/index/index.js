import { useRouter } from "@microprogram/router";

Page({
  data: {

  },
  onLoad() {
    useRouter()
  },
  handleNavigateTo() {
    useRouter().push('/back?name=JserWang')
  },
  handleRedirectTo() {
    useRouter().replace('/back')
  },
  handleSwitchTab() {
    // 使用switchTab方式的前提是在route的meta中设置了isTab: true
    useRouter().push('/my')
  },
  handleReLaunch() {
    useRouter().push({
      path: '/back', 
      reLaunch: true
    })
  }
})
