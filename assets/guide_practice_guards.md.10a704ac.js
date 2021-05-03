import{o as n,c as a,a as s}from"./app.9a765ee9.js";const t='{"title":"导航守卫","description":"","frontmatter":{},"relativePath":"guide/practice/guards.md","lastUpdated":1620047569306}',p={},o=s('<h1 id="导航守卫"><a class="header-anchor" href="#导航守卫" aria-hidden="true">#</a> 导航守卫</h1><p>通过进阶中介绍的路由导航可以鉴权外，在 <code>afterEach</code> 中，我们还可以为小程序设置标题，如微信小程序中：</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>\n    page<span class="token operator">:</span> <span class="token string">&#39;pages/index/index&#39;</span><span class="token punctuation">,</span>\n    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n      title<span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>\n      isTab<span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;my&#39;</span><span class="token punctuation">,</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/my&#39;</span><span class="token punctuation">,</span>\n    page<span class="token operator">:</span> <span class="token string">&#39;pages/my/index&#39;</span><span class="token punctuation">,</span>\n    meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n      title<span class="token operator">:</span> <span class="token string">&#39;我的&#39;</span><span class="token punctuation">,</span>\n      isTab<span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  history<span class="token operator">:</span> <span class="token function">createWechatHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  routes\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nrouter<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> title <span class="token punctuation">}</span> <span class="token operator">=</span> to<span class="token punctuation">.</span>meta\n  title <span class="token operator">&amp;&amp;</span> wx<span class="token punctuation">.</span><span class="token function">setNavigationBarTitle</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div>',3);p.render=function(s,t,p,e,c,u){return n(),a("div",null,[o])};export default p;export{t as __pageData};