import { useRoute, useRouter } from "@microprogram/router"

Page({
  data: {

  },
  onShow() {
    console.log(useRoute().params)
  },
  handleNavigateTo() {
    useRouter().push('/back?name=SameRoute')
  },
  handleGoHome() {
    useRouter().push('/')
  }
})
