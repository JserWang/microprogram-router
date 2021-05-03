import{o as n,c as s,a}from"./app.9a765ee9.js";const t='{"title":"路由元信息","description":"","frontmatter":{},"headers":[{"level":2,"title":"TypeScript","slug":"typescript"}],"relativePath":"guide/advanced/meta.md","lastUpdated":1620044393826}',p={},o=a('<h1 id="路由元信息"><a class="header-anchor" href="#路由元信息" aria-hidden="true">#</a> 路由元信息</h1><p>有时，你可能希望将任意信息附加到路由上，如标题名称、谁可以访问路由等。这些事情可以通过接收属性对象的<code>meta</code>属性来实现，并且它可以在路由地址和导航守卫上都被访问到。定义路由的时候你可以这样配置 <code>meta</code> 字段：</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/posts/new&#39;</span><span class="token punctuation">,</span>\n    page<span class="token operator">:</span> <span class="token string">&#39;pages/post/new/index&#39;</span><span class="token punctuation">,</span>\n    meta<span class="token operator">:</span> <span class="token punctuation">{</span> requiresAuth<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre></div><p>那么如何访问这个 <code>meta</code> 字段呢？</p><p>一个路由匹配到的所有路由记录会暴露为 <code>route</code> 对象(还有在导航守卫中的路由对象)。</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span><span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 而不是去检查每条路由记录</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>requiresAuth <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>auth<span class="token punctuation">.</span><span class="token function">isLoggedIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 此路由需要授权，请检查是否已登录</span>\n    <span class="token comment">// 如果没有，则重定向到登录页面</span>\n    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>\n      <span class="token comment">// 保存我们所在的位置，以便以后再来</span>\n      query<span class="token operator">:</span> <span class="token punctuation">{</span> redirect<span class="token operator">:</span> to<span class="token punctuation">.</span>fullPath <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span> \n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p>meta 能做的不仅仅是校验登录这么一件简单的事，希望你能学会举一反三领会到 meta 与导航守卫结合的好处</p></div><h2 id="typescript"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2><p>可以通过扩展 <code>RouteMeta</code> 接口来输入 meta 字段：</p><div class="language-ts"><pre><code><span class="token comment">// typings.d.ts or router.ts</span>\n<span class="token keyword">import</span> <span class="token string">&#39;@microprogram-router&#39;</span>\n\n<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;microprogram-router&#39;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 是可选的</span>\n    requiresAuth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n    <span class="token comment">// 每个路由都必须声明</span>\n    title<span class="token operator">:</span> <span class="token builtin">boolean</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',10);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};