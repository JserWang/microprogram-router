import { useRoute } from "@microprogram/router"

Page({
  data: {

  },
  onShow() {
    console.log(useRoute().params)
  }
})
