# [1.0.0-beta.10](https://github.com/JserWang/microprogram-router/compare/v1.0.0-beta.9...v1.0.0-beta.10) (2021-05-12)

### Bug Fixes

- 当路由栈存在已有页面时，回退数值计算错误 ([8a6c8a2](https://github.com/JserWang/microprogram-router/commit/8a6c8a2dc9205f75109c382589bfcddf86877e78))

# [1.0.0-beta.9](https://github.com/JserWang/microprogram-router/compare/v1.0.0-beta.8...v1.0.0-beta.9) (2021-05-07)

### Bug Fixes

- 应先存储完参数再执行跳转，防止进入页面时参数还未存储 ([497b3fd](https://github.com/JserWang/microprogram-router/commit/497b3fdf9afd8976e06dac9da88f9eebb5245f54))

# [1.0.0-beta.8](https://github.com/JserWang/microprogram-router/compare/v1.0.0-beta.7...v1.0.0-beta.8) (2021-05-06)

### Bug Fixes

- 分包时 `page` 属性非必须属性。 ([7652da9](https://github.com/JserWang/microprogram-router/commit/7652da90c8e3785acaed8b63b7d7c9373c99d9aa))
- 当执行 `replace` 时，`setParams` 会在 `onUnload` 之前执行，导致参数会被 `hack` 方法移除。 ([1e1018a](https://github.com/JserWang/microprogram-router/commit/1e1018aee672ba515f508fb09a3acb3553cdf9e6))

# [1.0.0-beta.7](https://github.com/JserWang/microprogram-router/compare/v1.0.0-beta.6...v1.0.0-beta.7) (2021-05-03)

### Bug Fixes

- `afterEach`总是会触发 ([dcac281](https://github.com/JserWang/microprogram-router/commit/dcac2814177301f405518c87c3a5c273da62b7bb))

# 1.0.0-beta.6 (2021-05-02)

- 调整打包方式，使用 rollup 打包

# 1.0.0-beta.5 (2021-05-01)

### Bug Fixes

- 跳转模式确认后再将参数存储至`storage`中 ([6a08b29](https://github.com/JserWang/microprogram-router/commit/6a08b29b153ef35416977bca7c815fc988f5eb4b))

# 1.0.0-beta.4 (2021-05-01)

### New Features

- 使用 `storage` 存储参数值 ([799ba39](https://github.com/JserWang/microprogram-router/commit/799ba3961ecf4863e1f30121c6a987327e3d6e64))

- 支持分包配置 ([1c02993](https://github.com/JserWang/microprogram-router/commit/1c02993dba856f83745458925aaf33a9446178a9))

# 1.0.0-beta.2 (2021-04-30)

### Bug Fixes

- `path` 为 `string` 时，丢失参数 ([00ea462](https://github.com/JserWang/microprogram-router/commit/00ea462f1272b8c988053730eee16d3eec349596))

- `string` 也有 `replace` 方法 ([640f54c](https://github.com/JserWang/microprogram-router/commit/640f54c5b2fd74dc24f1e01344f7bea125552737))

- 小程序跳转链接应该用绝对路径跳转 ([de9df2f](https://github.com/JserWang/microprogram-router/commit/de9df2f8deb1073ffdb610871269901e54dbe40b))

### New Features

- 支持支付宝小程序 ([855c60c](https://github.com/JserWang/microprogram-router/commit/855c60ccec37d3fdb5775aec340d0e18a77959f5))

# 1.0.0-beta.1 (2021-04-29)
