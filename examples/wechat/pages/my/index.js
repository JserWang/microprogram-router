import { useRoute, useRouter } from "@microprogram/router"

Page({
  data: {

  },
  onShow() {
    console.log(useRoute().params)
  },
  handleSwitchTab() {
    useRouter().push({
      name: 'home'
    })
  }
})
