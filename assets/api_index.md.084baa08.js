import{o as a,c as e,a as t}from"./app.9a765ee9.js";const s='{"title":"API 参考","description":"","frontmatter":{"sidebar":"auto"},"headers":[{"level":2,"title":"createRouter","slug":"createrouter"},{"level":3,"title":"参数","slug":"参数"},{"level":2,"title":"createWechatHistory","slug":"createwechathistory"},{"level":2,"title":"createAlipayHistory","slug":"createalipayhistory"},{"level":2,"title":"useRoute","slug":"useroute"},{"level":2,"title":"useRouter","slug":"userouter"},{"level":2,"title":"TypeScript","slug":"typescript"},{"level":2,"title":"Router 属性","slug":"router-属性"},{"level":3,"title":"options","slug":"options"},{"level":2,"title":"Router 方法","slug":"router-方法"},{"level":3,"title":"afterEach","slug":"aftereach"},{"level":3,"title":"back","slug":"back"},{"level":3,"title":"beforeEach","slug":"beforeeach"},{"level":3,"title":"beforeResolve","slug":"beforeresolve"},{"level":3,"title":"getRoutes","slug":"getroutes"},{"level":3,"title":"go","slug":"go"},{"level":3,"title":"hasRoute","slug":"hasroute"},{"level":3,"title":"push","slug":"push"},{"level":3,"title":"replace","slug":"replace"},{"level":2,"title":"RouterOptions","slug":"routeroptions"},{"level":3,"title":"history","slug":"history"},{"level":3,"title":"routes","slug":"routes"},{"level":2,"title":"RouteRecord","slug":"routerecord"},{"level":3,"title":"page","slug":"page"},{"level":3,"title":"path","slug":"path"},{"level":3,"title":"root","slug":"root"},{"level":3,"title":"children","slug":"children"},{"level":3,"title":"name","slug":"name"},{"level":3,"title":"meta","slug":"meta"},{"level":2,"title":"RouteLocation","slug":"routelocation"},{"level":2,"title":"RouteLocationNormalized","slug":"routelocationnormalized"},{"level":3,"title":"fullPath","slug":"fullpath"},{"level":3,"title":"fullPagePath","slug":"fullpagepath"},{"level":3,"title":"meta","slug":"meta-2"},{"level":3,"title":"name","slug":"name-2"},{"level":3,"title":"page","slug":"page-2"},{"level":3,"title":"params","slug":"params"},{"level":3,"title":"path","slug":"path-2"},{"level":2,"title":"NavigationGuard","slug":"navigationguard"}],"relativePath":"api/index.md","lastUpdated":1620057181666}',n={},o=t('<h1 id="api-参考"><a class="header-anchor" href="#api-参考" aria-hidden="true">#</a> API 参考</h1><h2 id="createrouter"><a class="header-anchor" href="#createrouter" aria-hidden="true">#</a> createRouter</h2><p>创建一个可以被小程序程序使用的路由实例。查看 <a href="#routeroptions"><code>RouterOptions</code></a> 中的所有可以传递的属性列表。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">createRouter</span><span class="token punctuation">(</span>options<span class="token operator">:</span> RouterOptions<span class="token punctuation">)</span><span class="token operator">:</span> Router\n</code></pre></div><h3 id="参数"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>options</td><td><a href="#routeroptions">RouterOptions</a></td><td>Options 用来初始化 router</td></tr></tbody></table><h2 id="createwechathistory"><a class="header-anchor" href="#createwechathistory" aria-hidden="true">#</a> createWechatHistory</h2><p>创建一个微信小程序路由</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">createWechatHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> RouterHistory\n</code></pre></div><h2 id="createalipayhistory"><a class="header-anchor" href="#createalipayhistory" aria-hidden="true">#</a> createAlipayHistory</h2><p>创建一个支付宝小程序路由</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">createAlipayHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> RouterHistory\n</code></pre></div><h2 id="useroute"><a class="header-anchor" href="#useroute" aria-hidden="true">#</a> useRoute</h2><p>获取当前路由地址</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> RouteLocationNormalized\n</code></pre></div><h2 id="userouter"><a class="header-anchor" href="#userouter" aria-hidden="true">#</a> useRouter</h2><p>返回 router 实例。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Router\n</code></pre></div><h2 id="typescript"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h2><p>下面是 Microprogram Router 使用的一些接口和类型。文档引用它们是为了让你了解对象中现有的属性。</p><h2 id="router-属性"><a class="header-anchor" href="#router-属性" aria-hidden="true">#</a> Router 属性</h2><h3 id="options"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3><ul><li><p><strong>类型</strong>：<a href="#routeroptions"><code>RouterOptions</code></a></p></li><li><p><strong>详细内容</strong>：</p><p>创建 Router 时传递的原始配置对象。只读的。</p></li></ul><h2 id="router-方法"><a class="header-anchor" href="#router-方法" aria-hidden="true">#</a> Router 方法</h2><h3 id="aftereach"><a class="header-anchor" href="#aftereach" aria-hidden="true">#</a> afterEach</h3><p>添加一个导航钩子，在每次导航后执行。返回一个删除注册钩子的函数。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token function">afterEach</span><span class="token punctuation">(</span>guard<span class="token operator">:</span> NavigationHookAfter<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n</code></pre></div><p><em>参数</em></p><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>guard</td><td>NavigationHookAfter</td><td>要添加的导航钩子</td></tr></tbody></table><h4 id="示例"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  \n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="back"><a class="header-anchor" href="#back" aria-hidden="true">#</a> back</h3><p>如果可能的话，通过调用 <code>history.back()</code> 回溯历史。相当于 <code>router.go(1)</code>。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>\n</code></pre></div><h3 id="beforeeach"><a class="header-anchor" href="#beforeeach" aria-hidden="true">#</a> beforeEach</h3><p>添加一个导航守卫，在任何导航前执行。返回一个删除已注册守卫的函数。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token function">beforeEach</span><span class="token punctuation">(</span>guard<span class="token operator">:</span> NavigationGuard<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n</code></pre></div><p><em>参数</em></p><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>guard</td><td><a href="#navigationguard"><code>NavigationGuard</code></a></td><td>要添加的导航守卫</td></tr></tbody></table><h3 id="beforeresolve"><a class="header-anchor" href="#beforeresolve" aria-hidden="true">#</a> beforeResolve</h3><p>添加一个导航守卫，在导航即将解析之前执行。在这个状态下，所有的组件都已经被获取，并且其他导航守卫也已经成功。返回一个删除已注册守卫的函数。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token function">beforeResolve</span><span class="token punctuation">(</span>guard<span class="token operator">:</span> NavigationGuard<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n</code></pre></div><p><em>参数</em></p><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>guard</td><td><a href="#navigationguard"><code>NavigationGuard</code></a></td><td>要添加的导航守卫</td></tr></tbody></table><h4 id="示例-2"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h4><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token parameter">to</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>requiresAuth <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isAuthenticated<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="getroutes"><a class="header-anchor" href="#getroutes" aria-hidden="true">#</a> getRoutes</h3><p>获取所有 <a href="#routerecord">路由记录</a>的完整列表。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token function">getRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> RouteRecord<span class="token punctuation">[</span><span class="token punctuation">]</span>\n</code></pre></div><h3 id="go"><a class="header-anchor" href="#go" aria-hidden="true">#</a> go</h3><p>允许你在历史中前进或后退。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token function">go</span><span class="token punctuation">(</span>delta<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>\n</code></pre></div><p><em>参数</em></p><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>delta</td><td><code>number</code></td><td>相对于当前页面，你要移动到的历史位置</td></tr></tbody></table><h3 id="hasroute"><a class="header-anchor" href="#hasroute" aria-hidden="true">#</a> hasRoute</h3><p>确认是否存在指定名称的路由。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token function">hasRoute</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>\n</code></pre></div><p><em>参数</em></p><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>name</td><td><code>string | symbol</code></td><td>要确认的路由名称</td></tr></tbody></table><h3 id="push"><a class="header-anchor" href="#push" aria-hidden="true">#</a> push</h3><p>通过在历史堆栈中推送一个 entry，以编程方式导航到一个新的 URL。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token function">push</span><span class="token punctuation">(</span>to<span class="token operator">:</span> RouteLocation<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>NavigationFailure <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span>\n</code></pre></div><p><em>参数</em></p><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>to</td><td><a href="#routelocation"><code>RouteLocation</code></a></td><td>要导航到的路由地址</td></tr></tbody></table><h3 id="replace"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace</h3><p>通过替换历史堆栈中的当前 entry，以编程方式导航到一个新的 URL。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code><span class="token function">replace</span><span class="token punctuation">(</span>to<span class="token operator">:</span> RouteLocation<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>NavigationFailure <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span>\n</code></pre></div><p><em>参数</em></p><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>to</td><td><a href="#routelocation"><code>RouteLocation</code></a></td><td>要导航到的路由地址</td></tr></tbody></table><h2 id="routeroptions"><a class="header-anchor" href="#routeroptions" aria-hidden="true">#</a> RouterOptions</h2><h3 id="history"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h3><p>用于路由区分不同的小程序跳转方式。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code>history<span class="token operator">:</span> RouterHistory\n</code></pre></div><h4 id="示例-3"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例</h4><div class="language-js"><pre><code><span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  history<span class="token operator">:</span> <span class="token function">createWechatHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token comment">// 其他配置...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="routes"><a class="header-anchor" href="#routes" aria-hidden="true">#</a> routes</h3><p>应该添加到路由的初始路由列表。</p><p><strong>函数签名：</strong></p><div class="language-typescript"><pre><code>routes<span class="token operator">:</span> RouteRecord<span class="token punctuation">[</span><span class="token punctuation">]</span>\n</code></pre></div><h2 id="routerecord"><a class="header-anchor" href="#routerecord" aria-hidden="true">#</a> RouteRecord</h2><p>当用户通过 <a href="#routeroptions"><code>routes</code> option</a> 来添加路由时，可以得到路由记录。 有三种不同的路由记录:</p><ul><li>单一视图记录：有一个 <code>component</code> 配置</li><li>多视图记录 (<a href="./../guide/basics/named-routes.html">命名视图</a>) ：有一个 <code>components</code> 配置</li></ul><h3 id="page"><a class="header-anchor" href="#page" aria-hidden="true">#</a> page</h3><ul><li><p><strong>类型</strong>：<code>string</code></p></li><li><p><strong>详细内容</strong>：</p><p>小程序实际页面地址。</p></li></ul><h3 id="path"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h3><ul><li><p><strong>类型</strong>：<code>string</code></p></li><li><p><strong>详细内容</strong>：</p><p>记录的路径。应该以 <code>/</code> 开头，除非该记录是分包中的另一条记录的子记录。可以定义参数：<code>/users/:id</code> 匹配 <code>/users/1</code> 以及 <code>/users/JserWang</code>。</p></li><li><p><strong>更多的内容请看</strong>：<a href="./../guide/basics/dynamic-matching.html">动态路由匹配</a></p></li></ul><h3 id="root"><a class="header-anchor" href="#root" aria-hidden="true">#</a> root</h3><ul><li><p><strong>类型</strong>：<code>string</code></p></li><li><p><strong>详细内容</strong>：</p><p>作为分包的根路径。</p></li><li><p><strong>更多的内容请看</strong>：<a href="./../guide/advanced/sub-package.html">分包配置</a></p></li></ul><h3 id="children"><a class="header-anchor" href="#children" aria-hidden="true">#</a> children</h3><ul><li><p><strong>类型</strong>：<a href="#routerecord"><code>RouteRecord</code></a> 数组 (可选)</p></li><li><p><strong>详细内容</strong>：</p><p>用于配置当前记录的分包。</p></li><li><p><strong>更多的内容请看</strong>：<a href="./../guide/advanced/sub-package.html">分包配置</a></p></li></ul><h3 id="name"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><ul><li><p><strong>类型</strong>：<code>string | symbol</code> (可选)</p></li><li><p><strong>详细内容</strong>：</p><p>路由记录独一无二的名称。</p></li></ul><h3 id="meta"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h3><ul><li><p><strong>类型</strong>：<a href="#routemeta"><code>RouteMeta</code></a> (可选)</p></li><li><p><strong>详细内容</strong>：</p><p>在记录上附加自定义数据。</p></li><li><p><strong>更多的内容请看</strong>：<a href="./../guide/advanced/meta.html">Meta 字段</a></p></li></ul><h2 id="routelocation"><a class="header-anchor" href="#routelocation" aria-hidden="true">#</a> RouteLocation</h2><p>用户级的路由地址，可以传递给 <code>router.push()</code>，<code>replace</code>。</p><p>原始位置可以是一个 <code>字符串</code>，比如 <code>/users/JserWang</code>，也可以是一个对象：</p><div class="language-js"><pre><code><span class="token comment">// 这三种形式是等价的</span>\nrouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/users/JserWang&#39;</span><span class="token punctuation">)</span>\nrouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/users/JserWang&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\nrouter<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> username<span class="token operator">:</span> <span class="token string">&#39;JserWang&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>原始路由地址还支持一个额外的配置 <code>replace</code> 来调用导航守卫中的 <code>router.replace()</code>，而不是 <code>router.push()</code>。请注意，即使在调用 <code>router.push()</code>时，它也会在内部调用 <code>router.replace()</code> ：</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/user/JserWang&#39;</span><span class="token punctuation">,</span> replace<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// 相当于</span>\nrouter<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/user/JserWang&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="routelocationnormalized"><a class="header-anchor" href="#routelocationnormalized" aria-hidden="true">#</a> RouteLocationNormalized</h2><p>标准化的路由地址。在导航守卫中，<code>to</code> 和 <code>from</code> 总是属于这种类型。</p><h3 id="fullpath"><a class="header-anchor" href="#fullpath" aria-hidden="true">#</a> fullPath</h3><ul><li><p><strong>类型</strong>：<code>string</code></p></li><li><p><strong>详细内容</strong>：</p><p>RouteRecord 中的 path 与 stringifyQuery(params) 的拼接，与路由地址有关。</p></li></ul><h3 id="fullpagepath"><a class="header-anchor" href="#fullpagepath" aria-hidden="true">#</a> fullPagePath</h3><ul><li><p><strong>类型</strong>：<code>string</code></p></li><li><p><strong>详细内容</strong>：</p><p>RouteRecord 中的 page 与 stringifyQuery(params) 的拼接，与路由地址有关。</p></li></ul><h3 id="meta-2"><a class="header-anchor" href="#meta-2" aria-hidden="true">#</a> meta</h3><ul><li><p><strong>类型</strong>：<code>RouteMeta</code></p></li><li><p><strong>详细内容</strong>：</p><p>RouteRecord中配置的 meta，与路由地址有关。</p></li><li><p><strong>更多的内容请看</strong>：<a href="./../guide/advanced/meta.html">Meta 字段</a></p></li></ul><h3 id="name-2"><a class="header-anchor" href="#name-2" aria-hidden="true">#</a> name</h3><ul><li><p><strong>类型</strong>：<code>string | symbol | undefined | null</code></p></li><li><p><strong>详细内容</strong>：</p><p>路由记录的名称。</p></li></ul><h3 id="page-2"><a class="header-anchor" href="#page-2" aria-hidden="true">#</a> page</h3><ul><li><p><strong>类型</strong>：<code>string</code></p></li><li><p><strong>详细内容</strong>：</p><p>RouteRecord 中 page，与路由地址有关。</p></li></ul><h3 id="params"><a class="header-anchor" href="#params" aria-hidden="true">#</a> params</h3><ul><li><p><strong>类型</strong>：<code>Record&lt;string, string | string[]&gt;</code></p></li><li><p><strong>详细内容</strong>：</p><p>从 <code>path</code> 中提取的已解码参数字典。</p></li></ul><h3 id="path-2"><a class="header-anchor" href="#path-2" aria-hidden="true">#</a> path</h3><ul><li><p><strong>类型</strong>：<code>string</code></p></li><li><p><strong>详细内容</strong>：</p><p>RouteRecord 中 path，与路由地址有关。</p></li></ul><h2 id="navigationguard"><a class="header-anchor" href="#navigationguard" aria-hidden="true">#</a> NavigationGuard</h2><ul><li><p><strong>Arguments</strong>：</p><ul><li><a href="#routelocationnormalized"><code>RouteLocationNormalized</code></a> to - 我们要导航到的路由地址</li><li><a href="#routelocationnormalized"><code>RouteLocationNormalized</code></a> from - 我们从哪里来的路由地址</li></ul></li><li><p><strong>详细内容</strong>：</p><p>可以通过函数来控制路由导航。如果你返回一个值（或一个 Promise ），则可以省略 <code>next</code> 回调，并且我们鼓励这样做。可能的返回值 (和 <code>next</code>的参数) 有：</p><ul><li><code>undefined | void | true</code>: 验证导航</li><li><code>false</code>: 取消导航</li><li><a href="#routelocation"><code>RouteLocation</code></a>: 重定向到一个不同的位置</li></ul></li><li><p><strong>更多的内容请看</strong>：<a href="./../guide/advanced/navigation-guards.html">导航守卫</a></p></li></ul>',133);n.render=function(t,s,n,p,r,c){return a(),e("div",null,[o])};export default n;export{s as __pageData};
