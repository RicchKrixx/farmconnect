
// --- Data & Images Mapping ---
const catImages = {
    "veg": "https://images.unsplash.com/photo-1595858602619-3c36a43fbd85?auto=format&fit=crop&w=600&q=80",
    "fru": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80",
    "gra": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    "tub": "https://images.unsplash.com/photo-1596484552993-8dd60046fb84?auto=format&fit=crop&w=600&q=80",
    "leg": "https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&w=600&q=80",
    "pou": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80",
    "liv": "https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&w=600&q=80",
    "spi": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    "tomato": "/assets/tomato.jpg",
    "maize": "/assets/maize.jpg",
    "cassava": "/assets/cassava.jpg",
    "rice": "/assets/rice.jpg",
    "beans": "/assets/beans.jpg",
    "soya-beans": "/assets/soya-beans.jpg",
    "egg": "/assets/eggs.jpg",
    "g-eggs": "/assets/garden-egg.jpg",
    "cocoyam": "/assets/cocoyam.jpg",
    "yam": "/assets/yam.jpg",
    "watermelon": "/assets/watermelon.jpg",
    "cabbage": "/assets/cabbage.jpg",
    "banana": "/assets/banana.jpg",
    "plantain": "/assets/plantain.jpg",
    "goat": "/assets/goat.jpg",
    "broiler": "/assets/broilers.jpg",
    "pawpaw": "/assets/pawpaw.jpg",
    "pepper": "/assets/pepper.jpg",
    "dry-pepper": "/assets/dry-pepper.jpg",
    "pineapple": "/assets/pineapple.jpg",
    "okro": "/assets/okro.jpg",
    "ginger": "/assets/ginger.jpg",
    "onion": "/assets/onion.jpg",
    "groundnut": "/assets/groundnut.jpg",
};

var CATS=[["veg","Vegetables"],["fru","Fruits"],["gra","Grains & Cereals"],["tub","Roots & Tubers"],["leg","Legumes"],["pou","Poultry & Eggs"],["liv","Livestock"],["spi","Spices & Herbs"]];

var P=[
    [1,"Fresh tomatoes","tomato",85,"crate","Asante Valley Farm","Techiman",40,2,"veg",],
    [2,"White maize","maize",420,"bag (100 kg)","Northern Fields Co-op","Tamale",25,5,"gra",],
    [3,"Cassava","cassava",60,"bag","Amoako Family Farm","Koforidua",0,1,"tub",],
    [4,"Plantain","plantain",70,"bunch","Amoako Family Farm","Koforidua",30,3,"fru",],
    [5,"Yam (Puna)","yam",12,"tuber","Northern Fields Co-op","Tamale",120,4,"tub",],
    [6,"Fresh peppers","pepper",45,"basket","Asante Valley Farm","Techiman",8,1,"veg",],
    [7,"Onions","onion",260,"bag (25 kg)","Volta Basin Growers","Tamale",15,6,"veg",],
    [8,"Sweet pineapples","pineapple",8,"piece","Central Coast Orchard","Cape Coast",200,2,"fru",],
    [9,"Local rice","rice",380,"bag (50 kg)","Northern Fields Co-op","Tamale",18,8,"gra",],
    [10,"Eggs","egg",55,"crate (30)","Greenfield Poultry","Kumasi",22,1,"pou",],
    [11,"Okro","okro",30,"basket","Greenfield Poultry","Kumasi",14,3,"veg",],
    [12,"Garden eggs","g-eggs",35,"basket","Amoako Family Farm","Koforidua",0,9,"veg",],
    [13,"Cowpea (beans)","beans",290,"bag (50 kg)","Northern Fields Co-op","Tamale",12,7,"leg",],
    [14,"Groundnuts","groundnut",210,"bag (25 kg)","Northern Fields Co-op","Tamale",9,10,"leg",],
    [15,"Pawpaw","pawpaw",15,"piece","Central Coast Orchard","Cape Coast",60,2,"fru",],
    [16,"Watermelon","watermelon",25,"piece","Accra Plains Produce","Accra",35,4,"fru",],
    [17,"Ginger","ginger",18,"kg","Amoako Family Farm","Koforidua",50,5,"veg",],
    [18,"Shito peppers (dried)","dry-pepper",40,"kg","Asante Valley Farm","Techiman",20,12,"veg",],
    [19,"Broilers (live)","broiler",95,"bird","Greenfield Poultry","Kumasi",30,2,"pou",],
    [20,"Cocoyam","cocoyam",55,"bag","Accra Plains Produce","Accra",16,6,"tub",],
    [21,"Cabbage","cabbage",40,"head","Accra Plains Produce","Accra",44,1,"veg",],
    [22,"Goat (young)","goat",650,"animal","Volta Basin Growers","Tamale",4,11,"liv",],
    [23,"Bananas","banana",50,"bunch","Central Coast Orchard","Cape Coast",26,3,"fru",],
    [24,"Soya beans","soya-beans",320,"bag (50 kg)","Asante Valley Farm","Techiman",11,9,"leg",]
].map(function(a,i){
    return {id:a[0],name:a[1],cat:a[9],price:a[3],unit:a[4],farm:a[5],loc:a[6],stock:a[7],age:a[8], img: catImages[a[2]]}
});

var $ = function(i){return document.getElementById(i)};
var cart={}, wl={}, shown=8;

try {
    cart=JSON.parse(localStorage.getItem("fc-cart")||"{}");
    wl=JSON.parse(localStorage.getItem("fc-wl")||"{}");
} catch(e){}

function save(){
    try{localStorage.setItem("fc-cart",JSON.stringify(cart));localStorage.setItem("fc-wl",JSON.stringify(wl))}catch(e){}
}

function toast(m){
    var t = $("toast");
    $("toastMsg").textContent = m;
    t.classList.remove("opacity-0", "translate-y-4");
    t.classList.add("opacity-100", "translate-y-0");
    clearTimeout(toast.t);
    toast.t=setTimeout(function(){
        t.classList.add("opacity-0", "translate-y-4");
        t.classList.remove("opacity-100", "translate-y-0");
    }, 2500);
}

function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
var locs=Array.from(new Set(P.map(function(p){return p.loc}))).sort();

function opts(el,first,list){
    el.innerHTML='<option value="">'+first+'</option>'+list.map(function(x){return'<option value="'+x[0]+'">'+esc(x[1])+'</option>'}).join("")
}

opts($("cat"),"All categories",CATS);
opts($("loc"),"All locations",locs.map(function(l){return[l,l]}));
locs.forEach(function(l){$("hloc").insertAdjacentHTML("beforeend",'<option>'+l+'</option>')});

function applyHero(){
    resetF();
    $("q").value=$("hq").value;
    $("loc").value=$("hloc").value;
    $("sort").value=$("q").value?"rel":"new";
    shown=8;
    render();
    $("shop").scrollIntoView({behavior: "smooth"});
}

function resetF(){
    ["q","cat","loc","min","max"].forEach(function(i){$(i).value=""});
    $("avail").checked=false;
    $("sort").value="new";
}

function score(p,q){
    var s=0;
    if(p.name.toLowerCase().indexOf(q)>-1)s+=3;
    if(p.farm.toLowerCase().indexOf(q)>-1)s+=2;
    if(p.loc.toLowerCase().indexOf(q)>-1)s+=2;
    var c=CATS.find(function(x){return x[0]==p.cat});
    if(c && c[1].toLowerCase().indexOf(q)>-1)s+=1;
    return s;
}

function list(){
    var q=$("q").value.trim().toLowerCase(),mn=parseFloat($("min").value),mx=parseFloat($("max").value);
    var r=P.filter(function(p){
        if(q&&!score(p,q))return false;
        if($("cat").value&&p.cat!=$("cat").value)return false;
        if($("loc").value&&p.loc!=$("loc").value)return false;
        if(!isNaN(mn)&&p.price<mn)return false;
        if(!isNaN(mx)&&p.price>mx)return false;
        if($("avail").checked&&p.stock<1)return false;
        return true;
    });
    var s=$("sort").value;
    r.sort(function(a,b){return s=="pa"?a.price-b.price:s=="pd"?b.price-a.price:s=="name"?a.name.localeCompare(b.name):s=="rel"&&q?score(b,q)-score(a,q):a.age-b.age});
    return r;
}

function stockTxt(p){
    return p.stock<1?'<span class="inline-block px-2 py-1 bg-slate-200 text-slate-600 rounded-md text-xs font-bold"><i class="fa-solid fa-ban mr-1"></i> Out of stock</span>'
        :p.stock<=10?'<span class="inline-block px-2 py-1 bg-brand-terra/20 text-brand-terra rounded-md text-xs font-bold"><i class="fa-solid fa-triangle-exclamation mr-1"></i> Only '+p.stock+' left</span>'
        :'<span class="inline-block px-2 py-1 bg-brand-green/20 text-brand-green rounded-md text-xs font-bold"><i class="fa-solid fa-check mr-1"></i> In stock</span>';
}

function render(){
    var r=list();
    $("count").textContent=r.length+" product"+(r.length==1?"":"s");
    
    $("grid").innerHTML=r.length?r.slice(0,shown).map(function(p){
        let isWl = wl[p.id];
        return `
        <article class="glass-card rounded-2xl overflow-hidden flex flex-col fade-in border border-white/60 shadow-lg">
            <div class="aspect-[4/3] relative bg-slate-100 overflow-hidden group">
                <img src="${p.img}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="${p.name}">
                <button class="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-lg ${isWl ? 'text-red-500' : 'text-slate-300 hover:text-red-400'} transition-colors wl-btn" data-w="${p.id}" aria-label="Wishlist">
                    <i class="fa-${isWl ? 'solid' : 'regular'} fa-heart"></i>
                </button>
            </div>
            <div class="p-5 flex flex-col flex-1 gap-2 bg-white/40">
                <h3 class="font-display font-bold text-lg leading-tight text-slate-800">${esc(p.name)}</h3>
                <div class="font-display font-extrabold text-brand-forest text-xl">GH₵ ${p.price} <span class="text-sm font-normal text-slate-500">/ ${esc(p.unit)}</span></div>
                <div class="text-sm text-slate-600 mb-2 mt-1 line-clamp-1"><i class="fa-solid fa-tractor mr-1 opacity-60"></i> ${esc(p.farm)} <br><i class="fa-solid fa-location-dot mr-1 opacity-60 mt-1"></i> ${p.loc}</div>
                <div class="mb-3">${stockTxt(p)}</div>
                <div class="mt-auto flex gap-2 pt-2">
                    <button class="flex-1 py-2.5 rounded-xl border-2 border-brand-forest text-brand-forest font-bold hover:bg-brand-forest hover:text-white transition" data-v="${p.id}">View</button>
                    <button class="flex-1 py-2.5 rounded-xl bg-brand-forest text-white font-bold hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2" data-a="${p.id}" ${p.stock<1?"disabled":""}>
                        <i class="fa-solid fa-cart-plus"></i> Add
                    </button>
                </div>
            </div>
        </article>`;
    }).join("") : `
        <div class="col-span-full py-16 text-center border-2 border-dashed border-slate-300 rounded-3xl bg-white/50">
            <i class="fa-solid fa-box-open text-5xl text-slate-300 mb-4"></i>
            <h3 class="text-xl font-bold text-slate-700 mb-2">No products found</h3>
            <p class="text-slate-500 mb-6">Try adjusting your filters or search term.</p>
            <button class="px-6 py-2.5 bg-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-300 transition" onclick="resetF();render()">Clear Filters</button>
        </div>`;
    
    $("more").style.display=r.length>shown?"inline-flex":"none";
}

function add(id,n){
    var p=P.find(function(x){return x.id==id}), cur=cart[id]||0;
    n=n||1;
    if(cur+n>p.stock){toast("Only "+p.stock+" available.");return}
    cart[id]=cur+n;
    save();
    cartUI();
    toast(p.name+" added to cart!");
}

$("grid").onclick = function(e){
    var btn = e.target.closest("button");
    if(!btn) return;
    if(btn.dataset.a) {
        add(+btn.dataset.a);
    } else if(btn.dataset.w) {
        var i=btn.dataset.w;
        wl[i] ? delete wl[i] : wl[i]=1;
        save();
        render();
        cartUI();
    } else if(btn.dataset.v) {
        view(+btn.dataset.v);
    }
};

function view(id){
    var p=P.find(function(x){return x.id==id}), c=CATS.find(function(x){return x[0]==p.cat});
    $("dlgBody").innerHTML= `
        <div class="relative h-48 md:h-64 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden bg-slate-100 rounded-t-3xl">
            <img src="${p.img}" class="w-full h-full object-cover" alt="${p.name}">
            <button id="dc-top" class="absolute top-4 right-4 w-10 h-10 bg-black/40 text-white rounded-full flex items-center justify-center hover:bg-black/60 transition"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="flex justify-between items-start mb-2">
            <h2 class="text-2xl font-display font-bold text-slate-800">${esc(p.name)}</h2>
            ${stockTxt(p)}
        </div>
        <div class="font-display font-extrabold text-brand-green text-2xl mb-4">GH₵ ${p.price} <span class="text-base font-normal text-slate-500">/ ${esc(p.unit)}</span></div>
        <div class="bg-slate-50 rounded-xl p-4 mb-6 text-sm text-slate-600 space-y-2 border border-slate-100">
            <p><i class="fa-solid fa-tag w-5 text-center opacity-60"></i> ${c ? c[1] : 'Product'}</p>
            <p><i class="fa-solid fa-tractor w-5 text-center opacity-60"></i> ${esc(p.farm)}</p>
            <p><i class="fa-solid fa-location-dot w-5 text-center opacity-60"></i> ${p.loc}</p>
            <p><i class="fa-regular fa-clock w-5 text-center opacity-60"></i> Listed ${p.age} day(s) ago</p>
        </div>
        ${p.stock>0 ? `<label class="block text-sm font-bold text-slate-700 mb-4">Quantity <input type="number" id="dq" min="1" max="${p.stock}" value="1" class="ml-2 w-20 px-3 py-2 rounded-lg border border-slate-300 outline-none focus:ring-2 focus:ring-brand-green"></label>` : ""}
        <div class="flex gap-3 mt-8">
            <button class="flex-1 py-3 rounded-xl border-2 border-slate-300 text-slate-600 font-bold hover:bg-slate-100 transition" id="dc">Close</button>
            <button class="flex-1 py-3 rounded-xl bg-brand-forest text-white font-bold hover:bg-opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg" id="da" ${p.stock<1?" disabled":""}><i class="fa-solid fa-cart-plus"></i> Add to cart</button>
        </div>
    `;
    
    let closeMod = () => $("dlg").close();
    $("dc").onclick = closeMod;
    if($("dc-top")) $("dc-top").onclick = closeMod;
    
    $("da").onclick=function(){
        var n=parseInt($("dq").value,10);
        if(!(n>=1)){toast("Enter a quantity of 1 or more.");return}
        add(id,n);
        $("dlg").close();
    };
    $("dlg").showModal();
}

function cartUI(){
    var ids=Object.keys(cart), n=0, t=0;
    ids.forEach(function(i){
        n+=cart[i];
        t+=cart[i] * P.find(function(p){return p.id==i}).price;
    });
    
    $("cartN").textContent=n;
    if ($("wlN")) {
    $("wlN").textContent = Object.keys(wl).length;
}
    $("tot").innerHTML=ids.length ? `<span>Total:</span> <span>GH₵ ${t.toFixed(2)}</span>` : "";
    
    $("items").innerHTML=ids.length ? ids.map(function(i){
        var p=P.find(function(x){return x.id==i});
        return `
        <div class="flex gap-4 p-4 bg-white/60 rounded-2xl border border-slate-100 items-center shadow-sm">
            <img src="${p.img}" class="w-16 h-16 rounded-xl object-cover" alt="">
            <div class="flex-1 min-w-0">
                <b class="text-slate-800 block truncate">${esc(p.name)}</b>
                <div class="text-xs text-slate-500 mb-2 truncate">${esc(p.farm)}</div>
                <div class="font-bold text-brand-green">GH₵ ${(p.price*cart[i]).toFixed(2)}</div>
            </div>
            <div class="flex items-center gap-2 bg-slate-100 rounded-lg p-1 border border-slate-200">
                <button data-d="${i}" class="w-8 h-8 rounded text-slate-600 hover:bg-white hover:shadow-sm transition">−</button>
                <span class="w-6 text-center font-bold text-sm">${cart[i]}</span>
                <button data-i="${i}" class="w-8 h-8 rounded text-slate-600 hover:bg-white hover:shadow-sm transition">+</button>
            </div>
            <button data-r="${i}" class="w-10 h-10 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition ml-1" title="Remove"><i class="fa-solid fa-trash pointer-events-none"></i></button>
        </div>`;
    }).join("") : `
        <div class="flex flex-col items-center justify-center h-full text-slate-400 space-y-4">
            <i class="fa-solid fa-basket-shopping text-6xl opacity-20"></i>
            <p>Your cart is empty.</p>
        </div>`;
}

$("items").onclick=function(e){
    var b=e.target.closest("button");
    if(!b)return;
    var d=b.dataset;
    if(d.i) add(+d.i);
    else if(d.d){cart[d.d]--;if(cart[d.d]<1)delete cart[d.d]}
    else if(d.r) delete cart[d.r];
    save();
    cartUI();
};

function drawer(o){
    var d = $("drawer");
    if(o) d.classList.add("open");
    else d.classList.remove("open");
    d.setAttribute("aria-hidden", !o);
}

$("cartBtn").onclick=function(){drawer(true)};
$("closeCart").onclick=function(){drawer(false)};

const wlBtn = $("wlBtn");

if (wlBtn) {
    wlBtn.onclick = function () {
        var n = Object.keys(wl).length;
        toast(
            n
                ? n + " saved product(s). Wishlist page comes with full build."
                : "No saved products yet."
        );
    };
}

$("toggleFiltersBtn").onclick = function() {
    $("filterSidebar").classList.toggle("hidden");
};
$("closeFiltersMobile") && ($("closeFiltersMobile").onclick = function() {
    $("filterSidebar").classList.add("hidden");
});


["q","cat","loc","min","max","avail","sort"].forEach(function(i){
    $(i).addEventListener("input",function(){shown=8;render()});
});
$("reset").onclick=function(){resetF();shown=8;render()};
$("more").onclick=function(){shown+=8;render()};

document.addEventListener("keydown",function(e){if(e.key=="Escape")drawer(false)});

var ORD=[];
try{ORD=JSON.parse(localStorage.getItem("fc-ord")||"[]")}catch(e){}
var ZONES={"Accra":15,"Kumasi":25,"Other regions":45};
var co={name:"",phone:"",email:"",ful:"delivery",zone:"Accra",addr:"",pm:"momo",net:"MTN",mp:""};

function money(n){return"GH₵ "+n.toFixed(2)}
function openD(h){$("dlgBody").innerHTML=h;if(!$("dlg").open)$("dlg").showModal()}
function groups(){var g={};Object.keys(cart).forEach(function(i){var p=P.find(function(x){return x.id==i});(g[p.farm]=g[p.farm]||[]).push({p:p,n:cart[i]})});return g}
function fee(){return co.ful=="delivery"?ZONES[co.zone]:0}

$("checkoutBtn").onclick=function(){
    if(!Object.keys(cart).length){toast("Your cart is empty.");return}
    drawer(false);
    step1();
};

$("ordBtn").onclick=function(){
    openD(`
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-display font-bold text-slate-800"><i class="fa-solid fa-box-open mr-2"></i> Your Orders</h2>
            <button id="dc-top" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            ${ORD.length ? ORD.slice().reverse().map(rcpt).join("") : '<div class="text-center py-10 text-slate-500 bg-slate-50 rounded-xl"><i class="fa-solid fa-receipt text-4xl mb-3 opacity-20"></i><br>No orders yet.</div>'}
        </div>
    `);
    let c = () => $("dlg").close();
    $("dc-top") && ($("dc-top").onclick = c);
};

function step1(err){
    openD(`
        <h2 class="text-2xl font-display font-bold text-slate-800 mb-6">Delivery Details</h2>
        <div class="space-y-4">
            <div><label class="block text-sm font-bold text-slate-700 mb-1">Full name</label><input id="cn" value="${esc(co.name)}" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-green outline-none transition"></div>
            <div><label class="block text-sm font-bold text-slate-700 mb-1">Phone (e.g. 024 123 4567)</label><input id="cp" type="tel" value="${esc(co.phone)}" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-green outline-none transition"></div>
            <div><label class="block text-sm font-bold text-slate-700 mb-1">Email</label><input id="ce" type="email" value="${esc(co.email)}" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-green outline-none transition"></div>
            <div><label class="block text-sm font-bold text-slate-700 mb-1">How do you want to get your order?</label><select id="cf" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-green outline-none transition"><option value="delivery">Delivery</option><option value="collection">Farm collection (free)</option></select></div>
            <div id="zl"><label class="block text-sm font-bold text-slate-700 mb-1">Delivery City</label><select id="cz" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-green outline-none transition">${Object.keys(ZONES).map(function(z){return'<option value="'+z+'">'+z+' – '+money(ZONES[z])+'</option>'}).join("")}</select></div>
            <div id="al"><label class="block text-sm font-bold text-slate-700 mb-1">Delivery address</label><input id="ca" value="${esc(co.addr)}" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-green outline-none transition"></div>
        </div>
        <div id="er" class="text-red-500 text-sm font-medium mt-4 ${err?'':'hidden'}"><i class="fa-solid fa-circle-exclamation"></i> ${err||""}</div>
        <div class="flex gap-3 mt-8">
            <button class="flex-1 py-3 rounded-xl border-2 border-slate-300 text-slate-600 font-bold hover:bg-slate-100 transition" id="dc">Cancel</button>
            <button class="flex-1 py-3 rounded-xl bg-brand-forest text-white font-bold hover:bg-opacity-90 transition shadow-md" id="dn">Continue</button>
        </div>
    `);
    
    $("cf").value=co.ful;
    $("cz").value=co.zone;
    var tg=function(){var d=$("cf").value=="delivery";$("zl").style.display=$("al").style.display=d?"block":"none"};
    tg();
    $("cf").onchange=tg;
    $("dc").onclick=function(){$("dlg").close()};
    
    $("dn").onclick=function(){
        co.name=$("cn").value.trim();co.phone=$("cp").value.replace(/\s/g,"");
        co.email=$("ce").value.trim();co.ful=$("cf").value;
        co.zone=$("cz").value;co.addr=$("ca").value.trim();co.mp=co.mp||co.phone;
        
        var e=co.name.length<2?"Enter your full name.":!/^(\+233|0)\d{9}$/.test(co.phone)?"Enter a valid Ghana phone number.":!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(co.email)?"Enter a valid email address.":co.ful=="delivery"&&co.addr.length<5?"Enter your delivery address.":"";
        if(e){$("er").innerHTML='<i class="fa-solid fa-circle-exclamation"></i> '+e; $("er").classList.remove("hidden"); return}
        step2();
    }
}

function step2(err){
    var g=groups(),f=fee(),tot=0,h='<h2 class="text-2xl font-display font-bold text-slate-800 mb-4">Review & Pay</h2><div class="max-h-[40vh] overflow-y-auto mb-4 space-y-3 pr-2">';
    
    Object.keys(g).forEach(function(farm){
        var s=0;
        h+=`<div class="bg-slate-50 p-4 rounded-xl border border-slate-200"><b class="block text-brand-forest mb-2"><i class="fa-solid fa-tractor mr-1 text-sm"></i> ${esc(farm)}</b>`;
        h+=g[farm].map(function(x){
            s+=x.p.price*x.n;
            return `<div class="flex justify-between text-sm text-slate-600 mb-1 border-b border-slate-100 pb-1"><span>${x.n} × ${esc(x.p.name)} (${esc(x.p.unit)})</span> <span class="font-medium text-slate-800">${money(x.p.price*x.n)}</span></div>`;
        }).join("");
        h+=`<div class="flex justify-between text-sm text-slate-500 mt-2"><span>${f?'Delivery ('+co.zone+')':'Farm collection'}</span> <span>${f?money(f):'free'}</span></div>`;
        h+=`<div class="flex justify-between font-bold text-slate-800 mt-2 pt-2 border-t border-slate-200"><span>Farm Subtotal</span> <span>${money(s+f)}</span></div></div>`;
        tot+=s+f;
    });
    
    h+=`</div>
        <div class="flex justify-between items-center bg-brand-forest text-white p-4 rounded-xl font-display font-bold text-xl mb-6 shadow-md"><span>Total</span> <span>${money(tot)}</span></div>
        <div class="space-y-4">
            <div><label class="block text-sm font-bold text-slate-700 mb-1">Payment method</label><select id="pm" class="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:ring-2 focus:ring-brand-green outline-none transition"><option value="momo">Mobile Money</option><option value="pod">Pay on delivery / collection</option></select></div>
            <div id="mm" class="p-4 bg-yellow-50 rounded-xl border border-yellow-200 space-y-3">
                <div><label class="block text-sm font-bold text-slate-700 mb-1">Network</label><select id="nt" class="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-brand-green outline-none transition"><option>MTN</option><option>Telecel</option><option>AT</option></select></div>
                <div><label class="block text-sm font-bold text-slate-700 mb-1">Mobile Money number</label><input id="mp" type="tel" value="${esc(co.mp)}" class="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white focus:ring-2 focus:ring-brand-green outline-none transition"></div>
            </div>
        </div>
        <div id="er" class="text-red-500 text-sm font-medium mt-2 ${err?'':'hidden'}"><i class="fa-solid fa-circle-exclamation"></i> ${err||""}</div>
        <div class="flex gap-3 mt-6">
            <button class="flex-1 py-3 rounded-xl border-2 border-slate-300 text-slate-600 font-bold hover:bg-slate-100 transition" id="db">Back</button>
            <button class="flex-[2] py-3 rounded-xl bg-brand-forest text-white font-bold hover:bg-opacity-90 transition shadow-md flex items-center justify-center gap-2" id="pay"><i class="fa-solid fa-check"></i> Place Order</button>
        </div>
    `;
    
    openD(h);
    $("pm").value=co.pm; $("nt").value=co.net;
    var t=function(){$("mm").style.display=$("pm").value=="momo"?"block":"none"};
    t(); $("pm").onchange=t;
    $("db").onclick=function(){step1()};
    
    $("pay").onclick=function(){
        co.pm=$("pm").value; co.net=$("nt").value; co.mp=$("mp").value.replace(/\s/g,"");
        if(co.pm=="momo"&&!/^(\+233|0)\d{9}$/.test(co.mp)){
            $("er").innerHTML='<i class="fa-solid fa-circle-exclamation"></i> Enter a valid Mobile Money number.'; 
            $("er").classList.remove("hidden");
            return;
        }
        place();
    }
}

function place(){
    var g=groups(), bad=null;
    Object.keys(g).forEach(function(k){g[k].forEach(function(x){if(x.n>x.p.stock)bad=x.p})});
    
    if(bad){
        toast(bad.name+" is no longer available in that quantity.");
        $("dlg").close();
        Object.keys(cart).forEach(function(i){
            var p=P.find(function(x){return x.id==i});
            if(cart[i]>p.stock){p.stock<1?delete cart[i]:cart[i]=p.stock}
        });
        save(); cartUI(); render(); return;
    }
    
    openD(`
        <div class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-brand-forest border-t-transparent mb-4"></div>
            <h2 class="text-2xl font-display font-bold text-slate-800">${co.pm=="momo"?"Approve on your phone":"Placing your order"}</h2>
            <p class="text-slate-500 mt-2">${co.pm=="momo"?"Waiting for Mobile Money approval…":"One moment…"}</p>
        </div>
    `);
    
    setTimeout(function(){
        var f=fee(), made=[], base=Date.now(), n=0;
        Object.keys(g).forEach(function(farm){
            var s=0, items=g[farm].map(function(x){s+=x.p.price*x.n; x.p.stock-=x.n; return {name:x.p.name,unit:x.p.unit,qty:x.n,price:x.p.price}});
            n++; var paid=co.pm=="momo";
            made.push({ref:"FC-"+base.toString(36).toUpperCase()+n, tx:paid?"FC-"+Math.floor(Math.random()*9e7+1e7):"", date:new Date().toLocaleString("en-GB"), farm:farm, items:items, sub:s, fee:f, total:s+f, paid:paid, net:co.net, ful:co.ful, zone:co.zone, addr:co.addr, name:co.name, status:"Confirmed"});
        });
        
        ORD=ORD.concat(made);
        cart={};
        try{localStorage.setItem("fc-ord",JSON.stringify(ORD))}catch(e){}
        save(); cartUI(); render();
        
        openD(`
            <div class="text-center mb-6">
                <div class="w-16 h-16 bg-brand-green/20 text-brand-green rounded-full flex items-center justify-center text-3xl mx-auto mb-4"><i class="fa-solid fa-check"></i></div>
                <h2 class="text-3xl font-display font-bold text-slate-800">Order Confirmed!</h2>
                <p class="text-slate-600 mt-2">Thank you, ${esc(co.name)}. A receipt was sent to ${esc(co.email)}.</p>
            </div>
            <div class="max-h-[40vh] overflow-y-auto mb-6 space-y-4 pr-2">
                ${made.map(rcpt).join("")}
            </div>
            <button class="w-full py-4 rounded-xl bg-brand-forest text-white font-bold text-lg hover:bg-opacity-90 transition shadow-lg" id="dc">Continue Shopping</button>
        `);
        $("dc").onclick=function(){$("dlg").close()};
    }, co.pm=="momo"?1500:800);
}

function rcpt(o){
    return `
    <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div class="flex justify-between items-start mb-3 border-b border-slate-100 pb-3">
            <div>
                <b class="text-lg text-slate-800">Receipt ${o.ref}</b>
                <div class="text-sm text-slate-500">${o.date}</div>
            </div>
            <span class="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded uppercase tracking-wider">${o.status}</span>
        </div>
        <div class="font-bold text-brand-forest mb-2"><i class="fa-solid fa-tractor mr-1 text-sm opacity-70"></i> ${esc(o.farm)}</div>
        <div class="space-y-1 mb-3">
            ${o.items.map(function(i){
                return `<div class="flex justify-between text-sm text-slate-600"><span>${i.qty} × ${esc(i.name)} @ ${money(i.price)}/${esc(i.unit)}</span> <span>${money(i.qty*i.price)}</span></div>`;
            }).join("")}
        </div>
        <div class="text-sm text-slate-500 border-t border-slate-100 pt-3 space-y-1">
            <div class="flex justify-between"><span>Subtotal</span> <span>${money(o.sub)}</span></div>
            <div class="flex justify-between"><span>${o.ful=="delivery"?'Delivery ('+esc(o.zone)+')':'Farm collection'}</span> <span>${o.ful=="delivery"?money(o.fee):'Free'}</span></div>
            <div class="flex justify-between text-base font-bold text-slate-800 pt-1"><span>Total</span> <span>${money(o.total)}</span></div>
        </div>
        <div class="mt-4 p-3 rounded-lg ${o.paid?'bg-green-50 text-green-700 border border-green-200':'bg-yellow-50 text-yellow-700 border border-yellow-200'} text-xs font-medium">
            ${o.paid?`<i class="fa-solid fa-circle-check mr-1"></i> <b>PAID</b> via Mobile Money (${o.net})<br>Tx: ${o.tx}`:`<i class="fa-solid fa-clock mr-1"></i> <b class="uppercase">PAY ON ${o.ful=="delivery"?"DELIVERY":"COLLECTION"}</b><br>Payment is due upon receiving items.`}
        </div>
    </div>`;
}

