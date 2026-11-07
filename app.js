/* ===================== MESIN TAMPILAN ===================== */
let lang="id", cur="home", cat={photo:"all",video:"all",news:"all"};
try{lang=localStorage.getItem("kai-lang")||"id"}catch(e){}
const U=DATA.ui, T=o=>o&&typeof o==="object"&&("id" in o)?o[lang]:o;
const ph=(c,label,img)=>img?`<div class="ph"><img src="${img}" style="width:100%;height:100%;object-fit:cover" alt=""></div>`:
 `<div class="ph ${c}"><svg viewBox="0 0 64 64" fill="none" stroke="#fff" stroke-width="3"><rect x="14" y="8" width="36" height="38" rx="8"/><rect x="19" y="14" width="26" height="14" rx="3"/><circle cx="23" cy="38" r="2.5" fill="#fff"/><circle cx="41" cy="38" r="2.5" fill="#fff"/><path d="M20 56l6-10M44 56l-6-10"/></svg><small>${label||"Foto placeholder"}</small></div>`;
const hl=s=>String(s).replace(/(\[[^\]]+\])/g,'<span class="ph-txt">$1</span>');
const ext=u=>/^https?:/.test(u)?`href="${u}" target="_blank" rel="noopener"`:`href="${u}"`;

function svcCard(s){return `<div class="card">${ph(s.c,"",s.img)}<div class="b"><span class="tag">${T(DATA.whoLabel[s.who])}</span><h3 style="font-size:18px">${T(s.t)}</h3><p>${hl(T(s.d))}</p><a class="btn s" ${ext(s.url)}>${T(U.detail)} →</a></div></div>`}
function newsCard(n){return `<div class="card">${ph(n.c,"",n.img)}<div class="b"><div class="meta">${hl(n.date)} · ${T(DATA.info.cats[n.cat])} · <b style="color:var(--orange)">${T(U.sim)}</b></div><h3 style="font-size:17px">${T(n.t)}</h3><p>${T(n.d)}</p><a class="btn s" ${ext(n.url)}>${T(U.more)} →</a></div></div>`}
function head(t){return `<div class="pagehead"><div class="wrap"><h1>${T(t)}</h1></div></div>`}
function photoGrid(list){return `<div class="grid">${list.map(([k,c,img],i)=>`<div class="card photo" onclick="openLb(${DATA.gallery.photos.findIndex(p=>p===list[i])})">${ph(c,T(DATA.gallery.cats[k]),img)}</div>`).join("")}</div>`}
function tabs(map,key,fn){return `<div class="tabs"><button class="${cat[key]==="all"?"on":""}" onclick="${fn}('all')">${T(U.all)}</button>${Object.entries(map).map(([k,v])=>`<button class="${cat[key]===k?"on":""}" onclick="${fn}('${k}')">${T(v)}</button>`).join("")}</div>`}

const PAGES={
home:()=>`
<div class="hero"><div class="wrap"><div class="kicker">PT Kereta Api Indonesia (Persero)</div><h1>${T(DATA.hero.h)}</h1><p>${T(DATA.hero.s)}</p>
<p style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn o" onclick="go('about')">${T(U.aboutBtn)}</a><a class="btn g" onclick="go('services')">${T(U.svcBtn)}</a></p>
<div class="note">${T(U.disclaimer)}</div></div><div class="rail"></div></div>
<section><div class="wrap two"><div><div class="kicker">KAI</div><h2>${T(DATA.intro.t)}</h2><p>${T(DATA.intro.p)}</p></div>${ph("c1","")}</div></section>
<section class="alt"><div class="wrap"><h2>${T(DATA.nav[2][1])}</h2><div class="grid">${DATA.services.slice(0,4).map(svcCard).join("")}</div></div></section>
<section><div class="wrap"><h2>KAI at a Glance</h2><div class="stats">${DATA.stats.map(s=>`<div class="stat"><b class="ph-txt">${s.v}</b>${T(s.l)}</div>`).join("")}</div></div></section>
<section class="alt"><div class="wrap"><h2>${lang==="id"?"Informasi Terbaru":"Latest Information"}</h2><div class="grid">${DATA.news.slice(0,3).map(newsCard).join("")}</div><p><a class="btn" onclick="go('info')">${lang==="id"?"Semua informasi":"All information"}</a></p></div></section>
<section><div class="wrap"><h2>${lang==="id"?"Galeri Pilihan":"Featured Gallery"}</h2>${photoGrid(DATA.gallery.photos.slice(0,4).map(p=>p))}<p><a class="btn" onclick="go('gallery')">${T(DATA.nav[4][1])}</a></p></div></section>`,

about:()=>{const A=DATA.about;return head(A.title)+`
<section><div class="wrap two"><div><h2>${lang==="id"?"Profil Perusahaan":"Company Profile"}</h2><p>${hl(T(A.profile))}</p></div>
<div><div class="cbox"><h4>${T(A.visionT)}</h4><p>${hl(T(A.vision))}</p><h4>${T(A.missionT)}</h4><p>${hl(T(A.mission))}</p></div></div></div></section>
<section class="alt"><div class="wrap"><h2>${T(A.tlT)}</h2><div class="sim">${lang==="id"?"Verifikasi seluruh tahun dan fakta pada publikasi resmi KAI sebelum dipresentasikan.":"Verify all years and facts against official KAI publications before presenting."}</div><div class="tl">${A.timeline.map(x=>`<div><b>${x.y}</b><br>${hl(T(x.t))}</div>`).join("")}</div></div></section>
<section><div class="wrap"><h2>${T(A.valT)}</h2><div class="vals">${A.values.map(v=>`<div class="val"><b>${v[0]}</b><br><span style="font-size:14px;color:var(--muted)">${T(v[1])}</span></div>`).join("")}</div></div></section>`},

services:()=>head(DATA.servicesPage.t)+`<section><div class="wrap"><div class="sim">${T(DATA.servicesPage.note)}</div><div class="grid">${DATA.services.map(svcCard).join("")}</div></div></section>`,

info:()=>{const I=DATA.info;const list=DATA.news.filter(n=>cat.news==="all"||n.cat===cat.news);return head(I.title)+`
<section><div class="wrap"><h2>${T(I.svcT)}</h2><div class="grid">${I.svc.map(s=>`<div class="card"><div class="b"><h3 style="font-size:17px">${T(s.t)}</h3><p>${hl(T(s.d))}</p><a class="btn s" ${ext("https://www.kai.id")}>${T(U.detail)} →</a></div></div>`).join("")}</div></div></section>
<section class="alt"><div class="wrap"><h2>${T(I.newsT)}</h2><div class="sim">${T(U.sim)}: ${lang==="id"?"seluruh berita di bawah adalah contoh, bukan berita resmi KAI.":"all news below are samples, not official KAI news."}</div>${tabs(I.cats,"news","setNews")}<div class="grid">${list.map(newsCard).join("")}</div></div></section>`},

gallery:()=>{const G=DATA.gallery;const ps=G.photos.filter(p=>cat.photo==="all"||p[0]===cat.photo);const vs=G.videos.filter(v=>cat.video==="all"||v[0]===cat.video);return head(G.title)+`
<section><div class="wrap"><h2>${T(G.photoT)}</h2>${tabs(G.cats,"photo","setPhoto")}${photoGrid(ps)}</div></section>
<section class="alt"><div class="wrap"><h2>${T(G.videoT)}</h2>${tabs(G.vcats,"video","setVideo")}<div class="grid">${vs.map(([k,id])=>`<div class="card"><div class="vid">${id?`<iframe src="https://www.youtube.com/embed/${id}" allowfullscreen loading="lazy"></iframe>`:T(U.soon)}</div><div class="b"><h3 style="font-size:16px">${T(G.vcats[k])}</h3></div></div>`).join("")}</div></div></section>`},

org:()=>{const O=DATA.org;const n=(t,cls="")=>`<div class="node ${cls}">${T(t)}<small class="ph-txt">${T(O.name)}</small></div>`;return head(O.title)+`
<section><div class="wrap"><div class="sim">${T(O.note)}</div><div class="org">${n(O.kom)}<div class="line"></div>${n(O.du,"top")}<div class="line"></div><div class="node">${T(O.dir)}</div><div class="line"></div>
<div class="row">${O.units.map(u=>`<div class="node">${T(u)}<small class="ph-txt">${T(O.name)}</small></div>`).join("")}</div><div class="line"></div>${n(O.sek)}</div></div></section>`},

contact:()=>{const C=DATA.contact;const row=r=>`<div class="cbox"><h4>${T(r.l)}</h4><div>${hl(r.v)}</div></div>`;return head(C.title)+`
<section><div class="wrap two"><div style="display:grid;gap:14px">${[C.addr,C.cc,C.mail,C.soc].map(row).join("")}<div class="cbox"><h4>${T(C.web.l)}</h4><a ${ext(C.web.v)}>${C.web.v}</a></div>
<p style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn o" ${ext(C.web.v)}>${T(C.visit)}</a><a class="btn" ${ext(C.callUrl)}>${T(C.call)}</a></p></div>
<div class="map">${T(U.mapPh)}</div></div></section>`}
};

function renderNav(){document.getElementById("nav").innerHTML=DATA.nav.map(([k,l])=>`<a class="${cur===k?"on":""}" onclick="go('${k}')">${T(l)}</a>`).join("");
 document.getElementById("l-id").className=lang==="id"?"on":"";document.getElementById("l-en").className=lang==="en"?"on":""}
function renderFoot(){const C=DATA.contact;document.getElementById("foot").innerHTML=`<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">
<div><h4>PT Kereta Api Indonesia (Persero)</h4><p>${T(DATA.intro.p).slice(0,110)}…</p></div>
<div><h4>${T(U.quick)}</h4>${DATA.nav.map(([k,l])=>`<a onclick="go('${k}')">${T(l)}</a>`).join("")}</div>
<div><h4>${T(U.contact)}</h4><div>${hl(C.addr.v)}</div><div>${hl(C.cc.v)}</div><div>${hl(C.mail.v)}</div></div>
<div><h4>${T(U.social)}</h4><div>${hl(C.soc.v)}</div></div></div><div class="disc">${T(U.disclaimer)}</div>`}
function render(){document.documentElement.lang=lang;renderNav();renderFoot();
 const app=document.getElementById("app");app.innerHTML=`<div class="page on">${PAGES[cur]()}</div>`;
 document.getElementById("nav").classList.remove("open")}
function go(p){if(!PAGES[p])p="home";cur=p;try{history.replaceState(null,"","#"+p)}catch(e){}render();scrollTo({top:0,behavior:"instant"})}
function setLang(l){lang=l;try{localStorage.setItem("kai-lang",l)}catch(e){}render()}
function setPhoto(k){cat.photo=k;render()} function setVideo(k){cat.video=k;render()} function setNews(k){cat.news=k;render()}
function openLb(i){const p=DATA.gallery.photos[i];document.getElementById("lbin").innerHTML=ph(p[1],"",p[2])+`<p>${T(DATA.gallery.cats[p[0]])}</p>`;document.getElementById("lb").classList.add("on")}
addEventListener("scroll",()=>{document.getElementById("top").style.display=scrollY>400?"block":"none"});
addEventListener("hashchange",()=>{const h=location.hash.slice(1);if(h&&h!==cur){cur=PAGES[h]?h:"home";render()}});
cur=PAGES[location.hash.slice(1)]?location.hash.slice(1):"home";render();
