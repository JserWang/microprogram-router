import { useRouter } from '@microprogram/router';

Component({
  options: {},
  externalClasses: [],
  properties: {
    to: {
      type: null,
      optionalTypes: [String, Object],
      value: ''
    },
    replace: {
      type: Boolean,
      value: false
    },
    reLaunch: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  methods: {
    handleClick() {
      const { to } = this.data
      if (typeof to === "object") {
        useRouter().push({
          replace: this.data.replace,
          reLaunch: this.data.reLaunch,
          ...to
        })
      } else {
        useRouter().push(to)
      }
    }
  }
})
