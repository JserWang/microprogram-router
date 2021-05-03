import{o as e,c as r,a as o}from"./app.9a765ee9.js";const t='{"title":"原理解析","description":"","frontmatter":{},"relativePath":"principle/index.md","lastUpdated":1620054343487}',a={},c=o('<h1 id="原理解析"><a class="header-anchor" href="#原理解析" aria-hidden="true">#</a> 原理解析</h1><p>从常用的方法中逐条揭开路由的神秘面纱。</p><ol><li><p>调用 <code>createRouter</code>，以闭包的形式存储传入的 <code>history</code>，<a href="https://github.com/JserWang/microprogram-router/blob/main/src/matcher/index.ts#L16" target="_blank" rel="noopener noreferrer">遍历 routes</a> 将每条 <code>route</code> 生成对应的 <a href="https://github.com/JserWang/microprogram-router/blob/main/src/matcher/index.ts#L30" target="_blank" rel="noopener noreferrer">matcher</a>，并将 name 与 matcher 的映射关系、page 与 matcher 的映射关系<a href="https://github.com/JserWang/microprogram-router/blob/main/src/matcher/index.ts#L34-L41" target="_blank" rel="noopener noreferrer">存入 Map</a> 中。对小程序的生命周期进行 <a href="https://github.com/JserWang/microprogram-router/blob/main/src/patchMiniprogram.ts" target="_blank" rel="noopener noreferrer">patch</a> 来操作路由跳转后 storage 的参数移除。</p></li><li><p>调用 <code>useRouter().push</code>、<code>useRouter().replace</code>时，会通过 <a href="https://github.com/JserWang/microprogram-router/blob/main/src/matcher/index.ts#L71-L132" target="_blank" rel="noopener noreferrer"><code>matcher.resolve</code></a> 方法来解析出访问的路由记录以及参数，后根据 <a href="https://github.com/JserWang/microprogram-router/blob/main/src/router.ts#L176-L238" target="_blank" rel="noopener noreferrer">push 的策略</a>来进行相关 <code>history</code> 的方法调用，在调用完 <code>history</code> 的方法后，将参数以路由栈索引为 key 存储至 storage 中。</p></li><li><p>调用 <code>useRoute().params</code>，根据当前路由所在路由栈索引，从storage中取值。</p></li></ol><p>也许你会疑问为什么会将参数存储至 storage 中，其实在早期版本中会将路由 encode 后拼接至实际path中，但倘若页面想存储大对象时，导致 url 过长从而会影响跳转失败。所以决定使用 storage 来进行参数存储，也顺便带来了另外一个好处，页面传值不再需要encode与decode便可做到参数保真。</p><p>当你掌握以上方法后，也可以再试着去读一下 <code>vue-router</code> 的<a href="https://github.com/vuejs/vue-router-next" target="_blank" rel="noopener noreferrer">源码</a>，也许也会变的容易许多。</p>',5);a.render=function(o,t,a,n,p,s){return e(),r("div",null,[c])};export default a;export{t as __pageData};
