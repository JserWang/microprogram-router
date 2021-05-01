import { useRoute, useRouter } from "@microprogram/router";

Page({
  data: {

  },
  onShow() {
    console.log(useRoute().params)
  },
  handleNavigateBack() {
    useRouter().back()
  },
})
