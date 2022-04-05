// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/dictionary.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var words = ["ababa", "abada", "abaja", "abala", "abana", "abaos", "abata", "abato", "abaño", "abese", "abiar", "abine", "abita", "aboba", "aboca", "abofe", "abogo", "abone", "aboye", "abran", "abres", "abrio", "absit", "abuje", "aburo", "abuso", "acaba", "acala", "acamo", "acare", "acaso", "acato", "acece", "acedo", "acepe", "acere", "aceto", "aceña", "achis", "acida", "acilo", "acion", "acnes", "acoda", "acoge", "acojo", "acolo", "acopo", "acoro", "acoso", "acoto", "acroe", "actea", "actua", "acuda", "acudo", "aculo", "acuno", "acuse", "acuti", "acuña", "adala", "adamo", "adeje", "ademe", "adian", "adien", "adiva", "adoba", "adora", "adosa", "adral", "adras", "aduar", "aduja", "adula", "aduna", "adura", "aduro", "aerea", "aetas", "afame", "afane", "afata", "afean", "afeen", "afija", "afile", "afine", "aflui", "afofa", "afoga", "afono", "aforo", "afoso", "afufa", "afuma", "agace", "agane", "agata", "agita", "agnus", "agolo", "agoro", "agoto", "agria", "aguan", "aguas", "aguda", "agues", "aguja", "aguzo", "ahajo", "ahijo", "ahilo", "ahite", "ahogo", "ahoya", "ahuac", "ahumo", "ahuso", "ainas", "airas", "airen", "airon", "aislo", "ajada", "ajaja", "ajars", "ajear", "ajeen", "ajena", "ajera", "ajice", "ajizo", "ajore", "ajote", "ajuma", "ajuna", "alabe", "alada", "alaga", "alala", "alamo", "alaui", "alban", "albea", "albin", "album", "alcea", "alcor", "alean", "alece", "alees", "aleja", "alela", "alelo", "aleta", "aleya", "alfar", "alfen", "alfiz", "algas", "alhoz", "aliar", "alico", "alies", "aligo", "alijo", "alisa", "aliña", "aljez", "almas", "almos", "alobe", "aloco", "aloje", "alole", "alome", "alons", "alota", "aloya", "altas", "alteo", "altos", "alude", "aluds", "alune", "aluzo", "alzar", "amada", "amago", "amale", "amana", "amaos", "amaro", "amase", "amate", "amañe", "ambas", "amblo", "ameba", "amela", "ameme", "amens", "amere", "amiba", "amiga", "amine", "amish", "amolo", "amone", "amovi", "amplo", "ampre", "amugo", "amulo", "amuro", "anaco", "anals", "anata", "ancha", "ancla", "ancon", "andad", "andas", "andes", "anear", "anees", "aneja", "aneto", "anexo", "angla", "angor", "anide", "anime", "anisa", "aniss", "aniña", "anjeo", "anole", "anons", "anote", "ansas", "ansio", "antes", "anton", "anuda", "anula", "anuos", "aocar", "aojas", "aojos", "aorta", "aovas", "apaga", "apara", "apata", "apaña", "apean", "apeen", "apego", "apelo", "apeno", "apere", "apiay", "apile", "apipa", "apiri", "apito", "apiño", "apoca", "apoda", "apola", "apone", "apose", "apoye", "apozo", "aproe", "aptar", "apuna", "apura", "apuse", "apuñe", "aquel", "araba", "arabo", "arais", "arani", "arare", "arase", "arañe", "arbor", "arcas", "arcen", "arche", "arcon", "ardas", "arder", "ardid", "ardor", "arduo", "areco", "arele", "arene", "areta", "arfar", "arfes", "argel", "argos", "arias", "arida", "arija", "arilo", "arlar", "arles", "armar", "armes", "arnas", "aroca", "aromo", "arpan", "arpen", "arpia", "arras", "arree", "arria", "arroz", "arrui", "artes", "arula", "aruña", "arzon", "asaco", "asais", "asare", "asazs", "ascia", "ascua", "aseas", "asedo", "aseis", "aselo", "asese", "asgan", "asias", "asido", "asilo", "asire", "asnal", "asola", "asoma", "asone", "aspar", "aspee", "aspes", "aspro", "astil", "asuma", "asumo", "asuro", "atabe", "atada", "ataja", "atala", "atame", "atape", "atare", "ataud", "ataño", "ateis", "atele", "ateos", "atese", "atete", "atezo", "atibo", "atico", "atina", "atipa", "atiza", "atoan", "atoba", "atoen", "atoje", "atols", "atono", "atoro", "atril", "atufo", "ature", "atuse", "atuvo", "audio", "aulas", "aullo", "aunas", "aupan", "aupen", "aurea", "auron", "avada", "avaha", "avala", "avara", "avece", "aveni", "avezo", "avias", "avido", "avila", "avion", "avise", "avive", "avoco", "axila", "ayaco", "ayavi", "ayeas", "ayers", "aysen", "ayudo", "ayune", "azada", "azala", "azaro", "azima", "azoar", "azoco", "azoga", "azolo", "azoro", "azote", "aztor", "azuda", "azule", "azurs", "añada", "añado", "añedi", "añeje", "añero", "añidi", "añile", "añina", "añojo", "añoro", "añuda", "babas", "babel", "babis", "bacan", "bache", "bacon", "badan", "baden", "bafle", "bagas", "bague", "baida", "baila", "bajan", "bajea", "bajen", "bajez", "bajio", "balaj", "balas", "balde", "balee", "bales", "balsa", "balto", "bambu", "banca", "banda", "banjo", "banyo", "barba", "barca", "barde", "baril", "barra", "barro", "basan", "basca", "basis", "baste", "batas", "batel", "bates", "batik", "batir", "batos", "baula", "baure", "bayal", "bayos", "bazar", "bañan", "bañen", "bañon", "beato", "beben", "bebia", "becan", "bedel", "befas", "befos", "beige", "beldo", "belfa", "belio", "belua", "bembo", "benin", "beori", "berma", "berre", "berza", "besas", "besos", "betun", "bezar", "biaza", "biche", "bicos", "bidon", "biess", "bijao", "bilao", "bilma", "bimba", "binas", "binee", "bines", "bioma", "birla", "birlo", "bisar", "bisel", "bison", "bitar", "biter", "biyin", "bizma", "bizna", "bleda", "bloco", "blusa", "bobea", "bobos", "bocea", "boceo", "bocho", "bocon", "bodes", "bofan", "bofen", "bofos", "bogas", "bogue", "boina", "bojan", "bojea", "bojeo", "bolas", "bolee", "bolla", "bolon", "bolso", "bombo", "bonga", "bonus", "boque", "borda", "boreo", "borla", "borni", "borre", "bosar", "bossa", "botar", "botee", "botes", "botor", "boxea", "boxer", "boyar", "boyes", "bozon", "braco", "brame", "brava", "brazo", "brean", "breca", "breen", "brego", "brete", "breza", "brial", "brida", "brios", "briso", "broca", "brome", "brote", "broza", "brugo", "bruji", "brume", "bruno", "bruza", "bruñe", "buaro", "bucal", "bucen", "bucha", "bucle", "budin", "bueno", "bufan", "bufen", "bufet", "bufos", "buhos", "bujeo", "bular", "bulda", "bulle", "bulon", "bunio", "burdo", "burga", "burio", "burla", "buroz", "busca", "busto", "butia", "buzar", "buzos", "cabas", "cabes", "cable", "cabre", "cacan", "cacea", "caceo", "cache", "cachu", "cacra", "cadas", "caeis", "caere", "cafre", "cagas", "cague", "caian", "caico", "caiga", "caimo", "caite", "cajea", "cajeo", "calan", "calas", "calco", "calen", "calia", "calla", "calma", "calon", "calpe", "calve", "calzo", "camas", "cambo", "camon", "campo", "canda", "cando", "caneo", "canga", "canil", "canoa", "cansa", "canta", "cantu", "capan", "capaz", "capel", "capes", "capio", "cappa", "capte", "caqui", "carau", "carba", "carda", "carea", "careo", "cargo", "cario", "carla", "carne", "carpa", "carpo", "carst", "casal", "casas", "casco", "caseo", "casia", "casma", "caspa", "catar", "catea", "cateo", "catin", "catre", "cauca", "cauje", "cauri", "cause", "cauto", "cavar", "caven", "cavio", "cayan", "cayos", "cazas", "cazuz", "cañar", "cañee", "cañes", "ccapi", "ceban", "ceben", "cebon", "cebro", "cecas", "ceceo", "ceden", "cedia", "cefea", "cefos", "cegua", "ceibo", "cejas", "celan", "celda", "celfo", "cello", "cembo", "cenar", "cenco", "cenia", "cense", "cepas", "cequi", "cerca", "cerdo", "ceres", "cerne", "ceron", "cerra", "cerro", "cesas", "cesio", "cetil", "cetra", "ceuta", "ceñar", "ceñes", "ceñis", "chace", "chafe", "chala", "chals", "chami", "chane", "chape", "chata", "chaul", "chava", "chaya", "chaza", "checo", "chela", "chelo", "chepo", "chesa", "chete", "cheve", "chica", "chicu", "chien", "chile", "chime", "chimu", "chino", "chipe", "chire", "chist", "chito", "chivo", "choca", "chofe", "cholo", "chono", "chopo", "chore", "chota", "chova", "choyo", "chuca", "chufa", "chula", "chuna", "chupi", "churo", "chute", "chuva", "chuza", "chuño", "ciais", "ciara", "ciato", "cicla", "cidra", "ciega", "cielo", "ciens", "cifre", "cilio", "cimas", "cimpa", "cines", "cinte", "circa", "cirio", "cisco", "cismo", "citan", "citen", "citra", "ciñas", "claco", "clame", "clapa", "clase", "clavo", "clica", "clips", "cliso", "clona", "clons", "cloro", "clown", "coach", "coata", "cobea", "cobla", "cobre", "cocan", "cocea", "cocer", "coche", "cocia", "cocol", "cocuy", "codea", "codex", "codon", "coevo", "cofia", "cogen", "cogia", "cogua", "coine", "coita", "cojan", "cojee", "cojon", "colar", "colea", "coleo", "colgo", "colma", "colon", "colpe", "comal", "comba", "combo", "comes", "comio", "compi", "comun", "conga", "conos", "conto", "copal", "copas", "copee", "coper", "copia", "copio", "copos", "copto", "coral", "coras", "casta", "catac", "catas", "catee", "cates", "caton", "catru", "cauce", "caula", "cauro", "causo", "cauza", "cavas", "caves", "cavon", "cayma", "cazan", "cazon", "cañal", "cañas", "cañen", "cañon", "ceaja", "cebar", "cebes", "cebos", "cebti", "cecea", "cedan", "ceder", "cedio", "cefee", "cegar", "cegue", "cejan", "cejen", "celar", "celen", "celia", "celos", "cenal", "cenas", "cenen", "cenit", "censo", "cepos", "ceral", "cerco", "cerea", "cerio", "cerni", "ceros", "cerre", "cesan", "cesen", "cesta", "cetis", "cetre", "ceuti", "ceñas", "ceñia", "ceños", "chaco", "chafo", "chale", "chama", "chamo", "chano", "chapo", "chato", "chaux", "chave", "chaye", "chazo", "chefs", "chele", "chepa", "chera", "cheso", "cheto", "chiar", "chico", "chida", "chifa", "chili", "chimi", "china", "chinu", "chips", "chiri", "chita", "chiva", "chiza", "choco", "choix", "chona", "chopa", "chops", "chori", "chote", "choya", "choza", "chuce", "chufe", "chule", "chupa", "chupo", "churu", "chuto", "chuya", "chuzo", "ciaba", "ciare", "cibal", "cicle", "cidro", "ciego", "ciemo", "cieza", "cifro", "cilla", "cimba", "cinca", "cinia", "cinto", "circe", "cirro", "cisma", "cisne", "citar", "cites", "civil", "ciñen", "clacs", "clamo", "clara", "clava", "clema", "clics", "clisa", "cliza", "clone", "clora", "clota", "clube", "coana", "coati", "cobez", "cobos", "cobro", "cocar", "cocee", "coces", "cochi", "cocio", "cocos", "codal", "codee", "codez", "codos", "cofan", "cofin", "coger", "cogio", "coima", "coipa", "coito", "cojas", "cojeo", "cojos", "colas", "colee", "coles", "colin", "colme", "color", "colta", "coman", "combe", "comen", "comia", "comis", "comta", "conca", "congo", "conta", "coona", "copan", "copea", "copen", "copes", "copie", "copla", "copra", "coque", "coran", "casos", "casto", "catan", "catch", "caten", "catey", "catos", "cauba", "cauda", "cauno", "causa", "cauta", "cavan", "cavea", "cavia", "cavos", "cayna", "cazar", "cazos", "cañan", "cañea", "cañeo", "caños", "ceajo", "cebas", "cebil", "cebra", "cecal", "cecee", "cedas", "cedes", "cedro", "cefeo", "cegas", "ceiba", "cejar", "cejes", "celas", "celes", "cella", "celta", "cenan", "cenca", "cenes", "censa", "cents", "cepti", "ceras", "cerda", "cereo", "cerna", "cerno", "cerpa", "cerri", "cesar", "ceses", "cesto", "cetme", "cetro", "ceñan", "ceñen", "ceñir", "chaca", "chafa", "chaja", "chalo", "chame", "chana", "chapa", "charo", "chats", "chauz", "chavo", "chayo", "checa", "cheje", "cheli", "chepe", "chero", "cheta", "cheva", "chias", "chics", "chido", "chila", "chima", "chimo", "chine", "chipa", "chira", "chisa", "chite", "chive", "choba", "choel", "chola", "choni", "chope", "chora", "choro", "choto", "choye", "chozo", "chuco", "chufo", "chulo", "chupe", "chura", "chuta", "chuts", "chuyo", "chuña", "ciado", "ciani", "ciase", "cicca", "ciclo", "cieca", "cieis", "cieno", "cifra", "cigua", "cimar", "cimia", "cinco", "cinta", "cipos", "circo", "cisca", "cisme", "cista", "citas", "ciñan", "ciñes", "clama", "clans", "claro", "clave", "clero", "clima", "clise", "cloco", "clono", "clore", "clote", "clubs", "coasa", "cobas", "cobil", "cobra", "cocal", "cocas", "coceo", "cocha", "cocho", "cocoa", "cocui", "codas", "codeo", "codin", "coeva", "cofas", "cofre", "coges", "cogon", "coime", "coipo", "cojal", "cojea", "cojin", "colan", "colca", "colen", "coley", "colla", "colmo", "colpa", "colza", "comas", "combi", "comer", "comic", "compa", "comto", "conde", "conil", "conte", "coord", "copar", "copec", "copeo", "copey", "copin", "copon", "copta", "coqui", "corar", "caspa", "catar", "catea", "cateo", "catin", "catre", "cauca", "cauje", "cauri", "cause", "cauto", "cavar", "caven", "cavio", "cayan", "cayos", "cazas", "cazuz", "cañar", "cañee", "cañes", "ccapi", "ceban", "ceben", "cebon", "cebro", "cecas", "ceceo", "ceden", "cedia", "cefea", "cefos", "cegua", "ceibo", "cejas", "celan", "celda", "celfo", "cello", "cembo", "cenar", "cenco", "cenia", "cense", "cepas", "cequi", "cerca", "cerdo", "ceres", "cerne", "ceron", "cerra", "cerro", "cesas", "cesio", "cetil", "cetra", "ceuta", "ceñar", "ceñes", "ceñis", "chace", "chafe", "chala", "chals", "chami", "chane", "chape", "chata", "chaul", "chava", "chaya", "chaza", "checo", "chela", "chelo", "chepo", "chesa", "chete", "cheve", "chica", "chicu", "chien", "chile", "chime", "chimu", "chino", "chipe", "chire", "chist", "chito", "chivo", "choca", "chofe", "cholo", "chono", "chopo", "chore", "chota", "chova", "choyo", "chuca", "chufa", "chula", "chuna", "chupi", "churo", "chute", "chuva", "chuza", "chuño", "ciais", "ciara", "ciato", "cicla", "cidra", "ciega", "cielo", "ciens", "cifre", "cilio", "cimas", "cimpa", "cines", "cinte", "circa", "cirio", "cisco", "cismo", "citan", "citen", "citra", "ciñas", "claco", "clame", "clapa", "clase", "clavo", "clica", "clips", "cliso", "clona", "clons", "cloro", "clown", "coach", "coata", "cobea", "cobla", "cobre", "cocan", "cocea", "cocer", "coche", "cocia", "cocol", "cocuy", "codea", "codex", "codon", "coevo", "cofia", "cogen", "cogia", "cogua", "coine", "coita", "cojan", "cojee", "cojon", "colar", "colea", "coleo", "colgo", "colma", "colon", "colpe", "comal", "comba", "combo", "comes", "comio", "compi", "comun", "conga", "conos", "conto", "copal", "copas", "copee", "coper", "copia", "copio", "copos", "copto", "coral", "coras", "corco", "coree", "cores", "coris", "corlo", "coros", "corra", "corro", "corso", "corto", "corve", "corzo", "cosca", "coser", "cosio", "cospe", "costo", "cotas", "cotin", "cotua", "covas", "covid", "coxis", "coñac", "coñeo", "crack", "crash", "craza", "creas", "credo", "crees", "creme", "crepe", "creta", "criar", "cribe", "crics", "cries", "crino", "crios", "croas", "croes", "crome", "crons", "croza", "crudo", "cruje", "cruor", "cruzo", "cuaco", "cuaja", "cuals", "cuart", "cuate", "cubil", "cubre", "cucan", "cucha", "cucho", "cueca", "cuela", "cuera", "cueto", "cueza", "cuiba", "cuida", "cuija", "cuino", "cuiva", "cujon", "culea", "culeo", "culle", "culpa", "culta", "cumbe", "cumpa", "cunas", "cunde", "cunea", "cuneo", "cupes", "cupos", "cural", "curas", "curco", "curen", "curie", "curra", "curro", "curse", "curta", "curto", "curve", "cusas", "cusco", "cuses", "cusir", "cuspa", "cutio", "cutos", "cuyas", "cuzco", "cuñal", "cuñas", "cuños", "dable", "dacio", "dador", "dagua", "daito", "dales", "dalla", "dalos", "damos", "dandi", "dango", "danta", "danza", "daran", "dares", "dario", "darlo", "darse", "datar", "datee", "dateo", "datos", "david", "dañas", "daños", "debda", "deber", "debil", "debut", "decai", "decio", "decor", "dedil", "dejan", "dejen", "delas", "delga", "della", "delta", "demos", "denla", "denme", "dense", "dento", "depto", "derek", "desda", "desea", "deses", "desos", "deste", "detal", "deudo", "dezme", "diada", "diana", "dicen", "dicho", "dicto", "diere", "dieta", "diezs", "digna", "dijes", "dilos", "dimas", "dimia", "dimis", "dinas", "diodo", "diple", "diras", "disco", "diste", "diuca", "divas", "diñar", "diñes", "doblo", "doche", "docto", "dogma", "dogre", "dolas", "dolia", "dolos", "domas", "domes", "donas", "doneo", "dopan", "dopen", "doran", "doren", "dorio", "dorna", "dosel", "dotal", "dotas", "dotor", "doñea", "draba", "drama", "dreno", "driza", "drons", "drusa", "dseta", "dubda", "ducas", "ducho", "dudar", "dudes", "duelo", "dueña", "dular", "dulia", "dumen", "dumio", "dunas", "dupdo", "duque", "duras", "duros", "ebria", "echar", "eches", "edema", "edila", "edita", "edran", "edren", "educa", "eduje", "efebo", "eflui", "egena", "eguar", "ejion", "elata", "elder", "elego", "elepe", "eleva", "elfos", "elide", "elige", "elijo", "elkin", "ellos", "eluda", "eludo", "eluis", "eluyo", "emano", "emirs", "emiti", "empra", "emula", "enana", "eneas", "enejo", "enoja", "enria", "ensay", "entlo", "entro", "envia", "enzas", "epale", "epato", "epoca", "epota", "erado", "erala", "erare", "erbio", "ereis", "erial", "erige", "erijo", "erizo", "erogo", "errar", "erres", "erute", "escay", "esmui", "espia", "espio", "estan", "estay", "estes", "estol", "estoy", "etano", "ethos", "etilo", "etneo", "etola", "eubea", "euros", "evadi", "evite", "evoco", "exida", "exija", "exile", "exime", "exito", "exore", "expie", "extra", "exudo", "fabla", "facer", "facho", "facto", "faene", "fagos", "faina", "fajar", "fajee", "fajes", "fajon", "falca", "falda", "fallo", "false", "falte", "famas", "fanos", "farad", "farde", "fario", "faron", "farra", "farsi", "fasol", "fatal", "fatua", "fauna", "faxea", "fañan", "fañen", "febeo", "fecha", "feeza", "feliz", "felpe", "feman", "femen", "fenal", "fenix", "feraz", "ferio", "feroz", "ferre", "ferry", "feten", "fetua", "feuda", "feura", "fiada", "fiana", "fiase", "ficen", "fiche", "ficto", "fideo", "fiels", "fiero", "fifas", "fifis", "figos", "fijas", "fijon", "filar", "files", "filia", "filio", "filma", "films", "filos", "finar", "finco", "finge", "finio", "finja", "finta", "fique", "firmo", "fisga", "fista", "fitos", "fizas", "flaco", "flaon", "flava", "fleja", "flema", "flete", "flipa", "floja", "flore", "flota", "fluia", "flujo", "fluya", "fobia", "focha", "focos", "foisa", "folga", "folie", "folle", "fomes", "fonil", "foral", "force", "forjo", "formo", "forra", "forte", "fosal", "fosas", "fosen", "fosor", "foton", "fracs", "frado", "frece", "freia", "frena", "freon", "frese", "frete", "freza", "frias", "frien", "friki", "frisa", "frita", "froga", "frote", "fruir", "fruta", "fruya", "fucar", "fucos", "fuera", "fuers", "fuete", "fufas", "fugan", "fugaz", "fuina", "fulgi", "fulla", "fumas", "fumon", "funco", "fundi", "funge", "funjo", "furor", "fusas", "fusil", "fuste", "futon", "gaban", "gacha", "gacho", "gafas", "gafen", "gafos", "gaita", "galan", "galea", "galga", "galla", "galos", "gamba", "gamon", "ganar", "ganes", "ganso", "garay", "garbo", "gario", "garle", "garpa", "garra", "garro", "garuo", "gasas", "gaseo", "gasta", "gatas", "gateo", "gavia", "gayas", "gazas", "gazno", "gañen", "gañil", "gañis", "gelas", "gelfe", "gemir", "genil", "genoy", "geogr", "geste", "ghana", "gibar", "gibes", "gigas", "giley", "gilvo", "gimen", "ginea", "giras", "giron", "giton", "gleba", "glide", "glosa", "gmail", "goben", "goces", "godeo", "gofra", "golas", "goleo", "golfo", "gomal", "gomel", "gomia", "gongs", "gorga", "gorme", "gorro", "gotee", "goyas", "gozar", "gozon", "graba", "grada", "grafo", "grajo", "gramo", "grane", "grant", "grape", "graso", "grato", "grave", "greca", "green", "greys", "grida", "grifo", "grima", "gripo", "grisu", "grito", "groas", "grogs", "grosa", "gruia", "gruja", "grujo", "grupi", "gruya", "gruña", "gruño", "guaca", "guaja", "guali", "guami", "guano", "guapi", "guare", "guasa", "guate", "guaye", "guazo", "guero", "gueña", "guias", "guien", "guija", "guilo", "guion", "guipo", "guiri", "guise", "guite", "guiña", "gulag", "gulay", "guras", "guros", "gusto", "guzla", "haber", "habiz", "hablo", "habre", "hacas", "hacer", "hache", "hadar", "hados", "hagas", "haiti", "halar", "halen", "halle", "hamez", "hanga", "haran", "harbe", "harda", "haria", "haron", "harta", "hasta", "hateo", "havar", "hayan", "hazla", "hazme", "heavy", "hecha", "hedes", "hedor", "helea", "helio", "henal", "hendi", "henos", "herbe", "heria", "heris", "herpe", "herro", "hespa", "hespo", "hevea", "heñia", "hiato", "hidra", "hiedo", "hielo", "hiera", "higal", "higui", "hijee", "hijos", "hilar", "hiles", "himen", "himpe", "hinco", "hipan", "hipen", "hiram", "hirma", "hisca", "hispi", "hitar", "hites", "hiyab", "hiñen", "hiñir", "hobos", "hogar", "hojee", "holco", "holeo", "hollo", "hondo", "honor", "honro", "hopas", "hopen", "hoque", "horco", "horna", "horra", "horts", "hospa", "hotos", "hoyal", "hoyas", "hoyos", "hozas", "huaje", "huasa", "huaya", "hucho", "hueco", "huele", "huero", "hueva", "huian", "huida", "huila", "huira", "hulan", "hulea", "huleo", "hulte", "humas", "humea", "humeo", "humor", "hunda", "hundo", "huras", "huron", "hurte", "husma", "husos", "huyan", "huyes", "ibera", "ibiza", "iceis", "ichus", "ictus", "idear", "ideen", "idolo", "igneo", "ijada", "ijuju", "ilesa", "iloca", "iluda", "iludo", "imada", "imano", "imbui", "imite", "impia", "imple", "impto", "incas", "incoo", "indio", "infle", "ingle", "inope", "insta", "insto", "invar", "irada", "irani", "irgan", "irian", "irisa", "iriss", "irrui", "isaac", "isbas", "islan", "isleo", "isora", "itala", "items", "itero", "itzaj", "izada", "izara", "izote", "jabis", "jabra", "jabro", "jacer", "jacos", "jacto", "jadeo", "jadie", "jaens", "jagua", "jaime", "jalan", "jalca", "jaldo", "jalen", "jalma", "jaman", "jamay", "jambo", "james", "janos", "jaqui", "jarba", "jarca", "jarpa", "jarro", "jasas", "jaspe", "jatib", "jaudo", "jaume", "javea", "jazan", "jedar", "jedes", "jegua", "jeliz", "jemes", "jerbo", "jerpa", "jetar", "jetee", "jetes", "jifas", "jigue", "jijee", "jimar", "jimes", "jinda", "jipie", "jirel", "jitan", "jiten", "jiñan", "jiñen", "jobos", "jocho", "jodas", "jodes", "jodon", "jolon", "jonio", "jopas", "jopen", "joras", "jorfe", "jorro", "jotas", "joven", "joyon", "juano", "jubon", "judea", "juega", "juete", "jugad", "jugon", "jujea", "jujua", "julio", "jumar", "jumea", "jumeo", "junce", "junin", "junte", "junzo", "jupeo", "jurar", "jurel", "jurgo", "justa", "jutas", "juzga", "kakis", "karst", "kefir", "kevin", "kitts", "koine", "kurdo", "labil", "labra", "lacan", "lacea", "laceo", "lacho", "lacon", "lacro", "lacto", "ladee", "lados", "ladro", "lagos", "laico", "lajas", "lamas", "lambe", "lamen", "lamia", "lampa", "lamud", "lanas", "landa", "langa", "lanka", "lanzo", "lapon", "lapso", "larco", "lardo", "largo", "larva", "laser", "laste", "latan", "latea", "lateo", "latia", "latir", "latos", "laudo", "laura", "lauto", "lavas", "laxan", "laxen", "layan", "layen", "lazar", "lañan", "lañen", "leals", "lecho", "leeis", "lefas", "legar", "legos", "legro", "legui", "leida", "leidy", "leiva", "lejio", "leman", "lemes", "lemur", "lenon", "lento", "lepra", "lerdo", "lesee", "lesos", "letea", "letra", "leuda", "levan", "leven", "leyva", "lezne", "leñas", "leños", "liais", "liare", "liban", "liben", "libia", "libra", "lican", "licia", "licra", "licuo", "lidie", "liega", "lieva", "ligar", "ligia", "ligua", "lijan", "lijen", "lilao", "liman", "limbo", "limon", "linar", "linde", "linee", "linfa", "linos", "lipes", "lipon", "liria", "lisia", "lisis", "lista", "litan", "liten", "litis", "litro", "liude", "lizas", "llaca", "llama", "llana", "llape", "llata", "lleco", "llena", "llera", "llevo", "llora", "llosa", "loaba", "loara", "lobas", "lobee", "local", "locee", "loche", "locus", "lodra", "logia", "logra", "loica", "lolea", "lolio", "lomba", "lomee", "lonas", "longo", "loors", "lorca", "loreo", "loros", "losar", "loses", "lotee", "lotin", "lucas", "lucha", "lucia", "lucis", "lucre", "ludas", "ludia", "ludir", "lueñe", "luian", "luira", "luiss", "lujas", "lujos", "lulus", "lumen", "lunas", "lunee", "lunes", "lupia", "lurin", "lusco", "luteo", "luxan", "luxen", "luyas", "luzca", "lycra", "macan", "macau", "macen", "macha", "macho", "macis", "macro", "mador", "maese", "maeño", "magia", "magna", "magos", "mague", "maido", "maipu", "majal", "majas", "majen", "majos", "malas", "maleo", "malle", "malos", "malve", "mamar", "mambi", "mamen", "mamia", "mamut", "manar", "manco", "mandi", "manee", "manes", "mania", "manir", "mansa", "mante", "maoma", "mapea", "maple", "maqui", "marce", "marea", "marga", "marin", "maroa", "marra", "marsa", "marte", "masai", "masas", "masea", "maseo", "masia", "masma", "maste", "matar", "matee", "mates", "matul", "maulo", "mauro", "mayan", "mayea", "mayeo", "mayos", "mazas", "mazno", "mañea", "mañio", "meaba", "meais", "meano", "mease", "mecen", "mecha", "mecia", "media", "medir", "medra", "meeis", "meiga", "mejas", "mejes", "mejor", "melca", "melis", "mello", "melua", "memes", "menan", "menda", "menen", "menge", "mensa", "menta", "mento", "meons", "merar", "merco", "merey", "merlo", "mermo", "mersa", "mesas", "mesma", "meson", "metan", "meter", "metio", "meusa", "mezas", "miado", "miais", "miara", "miaña", "micas", "micha", "micos", "midan", "mides", "mieis", "mielo", "migan", "migra", "migue", "milan", "milla", "miman", "mimen", "minal", "minas", "minda", "minga", "minia", "minue", "miope", "miras", "mirla", "miron", "mirza", "misar", "mises", "misio", "mismo", "misto", "mitas", "miton", "mitre", "mixes", "mizas", "moare", "mocar", "mocee", "moche", "mocoa", "modas", "modio", "moers", "mofas", "mofle", "mogon", "mohos", "mojao", "mojel", "mojil", "mojos", "molas", "moldo", "moles", "molla", "molsa", "momea", "momia", "momos", "monde", "monee", "monga", "monis", "monse", "monto", "moque", "morar", "morca", "morea", "mores", "morfo", "morin", "morma", "moron", "morro", "mosca", "mosoc", "mosto", "motee", "motes", "motos", "mover", "movil", "moxos", "mozas", "moñon", "muble", "mudas", "mudez", "muela", "muera", "muers", "mueve", "mufti", "mugas", "mugia", "mugir", "mugor", "muian", "muira", "mujas", "mular", "mulla", "mullo", "mulso", "multo", "muons", "muran", "muren", "muria", "murri", "musan", "musca", "museo", "musgo", "musir", "muslo", "mutas", "mutis", "mutuo", "muyen", "muñas", "muñia", "muñon", "nabal", "nabla", "nacas", "naces", "nacia", "nacre", "nadar", "nades", "nadir", "nafro", "nahoa", "naipe", "najas", "nambi", "nance", "nanee", "nansa", "nante", "napan", "napea", "napes", "narco", "nariz", "narre", "nasas", "nasos", "natia", "natri", "nauta", "naves", "nayar", "nazco", "nebel", "necea", "nechi", "negra", "negue", "neiva", "neldo", "nemea", "nemon", "nenia", "nerda", "neron", "netos", "neura", "nevis", "nials", "niazo", "nicle", "nidia", "niega", "niele", "nieto", "nievo", "nijar", "nimba", "nimia", "ninfo", "nioto", "niple", "niqui", "nitos", "nitro", "nivel", "nizam", "niñee", "niños", "nobsa", "noche", "nodal", "nogal", "nomas", "nonas", "nonos", "noral", "noria", "normo", "notar", "notes", "noval", "novas", "noves", "novio", "nubes", "nubio", "nublo", "nucir", "nuera", "nueva", "nueza", "nulpe", "numos", "nuria", "nutri", "nuyoo", "nydia", "obera", "obice", "oboes", "obrar", "obres", "obste", "obuss", "obvio", "ocaso", "ocena", "ochos", "ocias", "ocios", "ocopa", "ocoña", "ocros", "ocuje", "ocumo", "ocupo", "odiar", "odies", "oeste", "ogaño", "ohmio", "oidas", "oidle", "oidor", "oigas", "oilos", "oiran", "oislo", "ojale", "ojean", "ojeda", "ojeos", "ojito", "ojoso", "ojudo", "olais", "olaya", "oleas", "oleis", "olelo", "olera", "olete", "olida", "oliva", "ollao", "ollon", "olors", "oluta", "omate", "omero", "omine", "omiso", "omiti", "omoto", "onceo", "ondas", "ondeo", "oneci", "onice", "opaca", "opado", "opere", "opile", "opimo", "opino", "optan", "opten", "opuso", "orado", "orale", "orare", "orbes", "orces", "orden", "oreas", "oreis", "orero", "orgia", "orine", "oriol", "orlan", "orlen", "ornan", "ornea", "orneo", "orpua", "orujo", "orzar", "osada", "osara", "osase", "osean", "oseen", "oseos", "oseta", "ososo", "ostro", "osuna", "otare", "otear", "otees", "otica", "otile", "otoca", "otoño", "ovaba", "ovais", "ovalo", "ovare", "oveja", "overo", "ovino", "ovosa", "ovule", "oxear", "oxees", "oxido", "oyelo", "oyere", "ozena", "oñate", "pacae", "pacen", "pacha", "pacio", "pacta", "padel", "paezs", "pagan", "pagel", "pagua", "paico", "paina", "paira", "paita", "pajar", "pajee", "pajil", "pajos", "palau", "palco", "paleo", "palie", "palle", "palme", "palor", "palpe", "palta", "pampa", "panan", "panca", "panda", "panel", "panga", "pansa", "panul", "papan", "papaz", "papel", "papes", "papos", "parao", "parca", "parda", "pared", "paren", "pargo", "parir", "parla", "parne", "parpa", "parra", "parsi", "parti", "parva", "pasar", "pasco", "pasen", "pasil", "pasmo", "paspe", "paste", "patao", "patay", "patee", "pates", "patio", "patos", "paule", "pauna", "pauso", "pauto", "pavia", "pavos", "payar", "payes", "pazca", "pañal", "paños", "peala", "peals", "pebas", "pecar", "pecha", "pecio", "pecto", "pedio", "pedos", "peera", "pegar", "pegos", "peias", "peine", "pejin", "pelar", "pelea", "peleo", "pella", "pelon", "pelvi", "penal", "penas", "penda", "pendo", "penol", "peona", "peors", "pepla", "peque", "perca", "perez", "perla", "perna", "peron", "perro", "perus", "pesas", "pesco", "pesga", "pesol", "peste", "petan", "peten", "petit", "petro", "pezon", "peñon", "piada", "piafe", "piala", "piano", "piare", "pibon", "picao", "picea", "piche", "picia", "picon", "picos", "pidan", "pides", "pieis", "pieza", "pifie", "pigre", "pigue", "pijin", "pijuy", "pilar", "pilen", "pilin", "pillo", "pimbi", "pinas", "pinga", "pinna", "pinra", "pinto", "piojo", "piolo", "pipan", "pipen", "pipie", "pipis", "piral", "piras", "pirco", "pirex", "piron", "pirre", "pirul", "pisao", "pisba", "pisen", "pisos", "pispo", "pisto", "pitao", "pitea", "piteo", "pitio", "piula", "piune", "pivot", "pizco", "piñas", "placa", "placo", "plana", "plata", "playe", "plazo", "plañi", "pleca", "pleno", "plexo", "plisa", "ploma", "plugo", "poblo", "pobre", "pocho", "podal", "podas", "poder", "podio", "podra", "poeta", "poisa", "polar", "polco", "poleo", "polin", "polis", "polos", "pomas", "pomos", "pompo", "poner", "ponga", "ponis", "popar", "popen", "porca", "porgo", "poroy", "porta", "posan", "posca", "posei", "poses", "posma", "posos", "posta", "potar", "potee", "potes", "poyal", "poyas", "poyos", "pozol", "prado", "prava", "prear", "presi", "preve", "preña", "prima", "prion", "priva", "proal", "probe", "proel", "prois", "prona", "prosa", "pruno", "puaba", "puara", "puber", "pucha", "pucon", "pudir", "pudre", "pueda", "pueis", "pugil", "pugno", "pujas", "pulan", "pules", "pulio", "pulla", "pulpa", "pulse", "pumba", "punar", "punco", "punes", "pungi", "punir", "punjo", "punta", "punza", "pupar", "pupes", "puren", "purga", "puros", "purri", "puspa", "putas", "puteo", "putos", "puyar", "puyen", "puzle", "puñar", "quark", "quede", "queje", "queme", "quena", "quepi", "quero", "quien", "quijo", "quima", "quina", "quios", "quiso", "quite", "quivi", "quiñe", "rabas", "rabel", "rabie", "rabis", "racea", "raceo", "racho", "radar", "radia", "radon", "raere", "rafea", "rafes", "ragua", "raias", "raido", "raigo", "rains", "raizs", "rajas", "rajon", "ralbo", "ralee", "ralle", "ralos", "ralvo", "ramea", "ramio", "rampa", "ranas", "rango", "rapar", "rapel", "rapta", "raque", "raree", "rasan", "rasca", "rasen", "rasgo", "raspe", "ratas", "rateo", "ratos", "rauco", "rauli", "rayar", "rayes", "razar", "razon", "reaje", "reama", "reara", "reata", "rebla", "rebol", "recai", "reces", "recle", "recte", "redan", "redel", "redil", "redox", "regar", "regio", "regla", "regue", "rehui", "reias", "reile", "reine", "reire", "rejin", "rejus", "relee", "releo", "relsa", "relve", "remar", "remes", "renca", "rende", "renes", "renil", "renta", "reoca", "repta", "reque", "resol", "reste", "retan", "retes", "retos", "reuna", "reuno", "reveo", "revio", "reyas", "rezan", "rezno", "reñia", "riada", "ribas", "rices", "ricos", "riela", "riels", "riese", "rifas", "rifle", "rigil", "rigua", "rijas", "rilas", "rimac", "rimas", "rimes", "rindo", "ripia", "risas", "risos", "rispo", "ritmo", "rival", "rizan", "riñan", "riñes", "roana", "robar", "roben", "robla", "robos", "robre", "rocee", "roces", "rocho", "rocin", "rodal", "rodas", "rodeo", "rodio", "roera", "rogar", "rogue", "roida", "roigo", "rojea", "rojez", "rolar", "rolde", "roleo", "rolle", "rombo", "romin", "rompa", "rompo", "ronco", "rondo", "ropas", "roran", "roren", "rosal", "rosas", "rosea", "roseo", "roson", "roste", "rotal", "rotas", "rotor", "royal", "royos", "rozas", "rozno", "roñan", "roñen", "ruaba", "ruana", "ruara", "rubea", "rubia", "rubis", "rubos", "rucan", "rucha", "rucia", "rudas", "rueda", "ruega", "ruejo", "rufos", "rugas", "ruges", "rugir", "ruido", "ruino", "rujan", "rujie", "rular", "rules", "rumbe", "rumie", "rumos", "rungo", "ruque", "rusco", "rusos", "rusti", "rutar", "ruten", "ruñan", "ruñen", "sabea", "saber", "sabio", "sabor", "sacan", "sacco", "sacho", "sacio", "sacra", "saenz", "saeti", "safir", "saija", "saino", "saisa", "sajar", "sajes", "salan", "salas", "salda", "salea", "saleo", "salga", "salin", "salis", "sallo", "salmo", "salon", "salpo", "salta", "salud", "salvo", "samba", "samio", "sanan", "sanco", "sanee", "sanes", "sanja", "sanos", "santa", "sapea", "sapos", "sarao", "sardo", "saria", "sarna", "sarza", "saspi", "satin", "sauce", "sauji", "sauzs", "saxeo", "sayas", "sayos", "seais", "secan", "secon", "secta", "sedan", "sedea", "sedeo", "segas", "segui", "seibo", "seiss", "sella", "seltz", "senda", "sente", "seora", "sepas", "seque", "serba", "seria", "serla", "serme", "seron", "serra", "serte", "sesea", "seseo", "sesil", "sesos", "setos", "sexas", "sexis", "sexos", "sexys", "señas", "short", "siare", "sidas", "siega", "siens", "sieso", "sifue", "sigla", "signa", "sigua", "silao", "silbo", "silga", "siloe", "simas", "simio", "simun", "singa", "sioux", "sirgo", "sirio", "sirte", "sirvo", "sisar", "sisea", "siseo", "sison", "sitie", "situa", "sivia", "soase", "soban", "sobas", "sobes", "sobre", "socaz", "socia", "socos", "soeza", "sofia", "sojas", "solaz", "solea", "soleo", "solfa", "solis", "solos", "somas", "sonda", "sonia", "sonso", "sopan", "sopea", "sopeo", "sopla", "sopon", "sorba", "sorbo", "sordo", "sorna", "soror", "sosal", "sosia", "sotan", "soten", "sovoz", "split", "stand", "suaba", "suato", "suazi", "suben", "subia", "subis", "sucia", "sudan", "suden", "sueca", "suele", "sueno", "suevo", "sueño", "sufra", "sufro", "suite", "sulas", "suman", "sumen", "sumio", "sumos", "sunco", "super", "suple", "supon", "suras", "surda", "surdo", "surja", "surte", "sushi", "sutes", "suzon", "tabal", "tabes", "table", "tabor", "tacas", "tacet", "tacho", "tacos", "tadia", "tafos", "tahas", "taiga", "taime", "taino", "taire", "tajar", "tajee", "tajes", "tajos", "talas", "talea", "tales", "talio", "tallo", "talos", "tamal", "tamil", "tamul", "tanda", "tangi", "tanjo", "tanta", "tanza", "tapas", "tapee", "taper", "tapie", "tapir", "tapoa", "taque", "taras", "tarco", "tardo", "tares", "tarje", "taroa", "tarro", "tasan", "tasca", "tases", "tasis", "tatay", "tatue", "tauco", "tausa", "taxon", "tazan", "tazon", "tañas", "tañes", "teame", "tebea", "techa", "tecla", "tecoh", "tedio", "tegeo", "tehul", "tejan", "tejen", "tejia", "tejos", "tekit", "telas", "telef", "tello", "telon", "temar", "temen", "temia", "tempo", "tenaz", "tener", "tengo", "tenis", "tensa", "tente", "tenza", "tepes", "teque", "teran", "terma", "terne", "tersa", "tesan", "tesen", "tesla", "testa", "tetan", "teten", "tetla", "tetro", "teñia", "tiaca", "tibes", "tibie", "ticua", "tiene", "tifon", "tigra", "tigue", "tilas", "tildo", "tilla", "tilly", "timan", "timba", "times", "timor", "tinas", "tinea", "tinge", "tinta", "tinum", "tipeo", "tipoi", "tique", "tirar", "tires", "tirol", "tirro", "tirua", "tiste", "titas", "titen", "titil", "tizas", "tizno", "tiñan", "tiñes", "toaba", "toara", "tobal", "tobia", "tocar", "toces", "tocho", "tocon", "todos", "tofos", "togue", "tojos", "tolde", "tollo", "tolva", "tomas", "tomes", "tomos", "tonar", "tondo", "toner", "tongo", "tonto", "topas", "topen", "topes", "topon", "toqui", "torca", "torco", "torea", "tores", "toril", "torna", "toron", "torra", "torso", "torvo", "tosca", "toser", "tosio", "total", "totos", "tovas", "tozar", "toñil", "trabo", "traen", "trafa", "traia", "trama", "trapa", "traro", "trate", "traza", "trece", "trema", "tremo", "trens", "trepe", "trial", "trias", "trien", "trigo", "trine", "tripa", "trisa", "trita", "troca", "troja", "trole", "trone", "tropo", "troto", "trovo", "troza", "truco", "trufe", "trusa", "tubas", "tucan", "tucos", "tudel", "tueme", "tufea", "tufos", "tular", "tulla", "tullo", "tulua", "tumay", "tumbo", "tunal", "tunas", "tunda", "tundo", "tunel", "tunes", "tunja", "tupac", "tupen", "tupia", "tupir", "turas", "turbo", "turen", "turna", "turon", "turre", "tusan", "tusca", "tuses", "tutee", "tutia", "tutsi", "tweed", "ubala", "ubica", "ubres", "ufana", "ufugu", "ujule", "ulano", "ultra", "ululo", "umbra", "unais", "unalo", "unces", "uncir", "uneño", "unges", "ungir", "unias", "unido", "unilo", "unios", "unite", "untan", "unten", "unzan", "upado", "upare", "upeis", "uraca", "urato", "urdan", "urdes", "urdir", "ureña", "urgia", "urgis", "urica", "urjas", "urrao", "urudo", "usada", "usaje", "usalo", "usare", "usela", "useme", "usier", "usted", "usura", "utero", "uvada", "uvera", "uvita", "uyuni", "uñais", "uñera", "uñese", "uñias", "uñire", "uñudo", "vacas", "vacio", "vadea", "vades", "vafee", "vagar", "vagos", "vahar", "vahee", "vahes", "vaina", "vajeo", "valer", "valga", "valio", "vallo", "valor", "valso", "value", "vamos", "vaneo", "vaque", "varar", "varee", "vares", "varie", "varon", "vasca", "vasta", "vates", "vayas", "veces", "vedas", "vedia", "veias", "vejar", "vejes", "velar", "velen", "velis", "velon", "vemos", "vence", "vende", "venga", "venir", "vente", "venza", "veras", "verbo", "verge", "verja", "veros", "verso", "veste", "vetar", "vetee", "vetes", "vezan", "viada", "viajo", "viani", "vibro", "vichi", "vicia", "vicky", "video", "vidro", "viene", "viesa", "vigia", "vigor", "vilca", "vilos", "vinar", "vindi", "vinto", "violo", "viran", "viren", "virgo", "virol", "visan", "visco", "visen", "visir", "visos", "visto", "vitar", "vites", "vitor", "viudo", "vivar", "viven", "vivia", "vivis", "viñac", "vocal", "voceo", "vodka", "volas", "volee", "volon", "volvo", "vosea", "votan", "voten", "votri", "vozno", "vuele", "vueso", "vulva", "watts", "wolff", "xenon", "xitla", "yacal", "yacer", "yacio", "yagan", "yaiti", "yambo", "yampa", "yanga", "yanto", "yapas", "yaque", "yarey", "yates", "yauli", "yayos", "yazga", "yebos", "yedgo", "yelgo", "yemen", "yeral", "yergo", "yermo", "yeros", "yerro", "yerto", "yesar", "yeson", "yidis", "yodar", "yodes", "yogui", "yonan", "yoqui", "yucas", "yugos", "yunga", "yupan", "yutes", "zabra", "zacee", "zafar", "zafes", "zafir", "zafre", "zagua", "zaida", "zajon", "zalea", "zalla", "zamba", "zampe", "zanco", "zanje", "zapar", "zapee", "zapes", "zarca", "zarja", "zarpo", "zasca", "zebra", "zeina", "zendo", "zetas", "zocar", "zocos", "zoizo", "zombi", "zompo", "zonda", "zonza", "zopos", "zorro", "zotol", "zudas", "zuela", "zulla", "zumba", "zumos", "zupia", "zurci", "zurdi", "zuree", "zurra", "zurro", "zuzar", "zuñas", "zuñia", "ñambi", "ñandu", "ñapas", "ñatee", "ñenga", "ñinga", "ñisca", "ñoclo", "ñoqui", "ñoños", "ñurda", "ñuñoa"];
exports.default = words;
},{}],"src/utils.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortArray = exports.getChars = void 0;

function getChars(word) {
  return Array.from(word);
}

exports.getChars = getChars;

function sortArray(array, side, getValue) {
  if (side === void 0) {
    side = "desc";
  }

  if (getValue === void 0) {
    getValue = function getValue(value) {
      return value;
    };
  }

  return array.sort(function (a, b) {
    return side === "desc" ? getValue(b) - getValue(a) : getValue(a) - getValue(b);
  });
}

exports.sortArray = sortArray;
},{}],"src/WordleAnalyzer.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WordleAnalyzer = void 0;

var utils_1 = require("./utils");

var WordleAnalyzer =
/** @class */
function () {
  function WordleAnalyzer(words) {
    this.words = words;
    this.bestWord = '';
  }

  WordleAnalyzer.prototype.distribucion = function (arrayPalabras) {
    var distribucion;
    distribucion = {};

    for (var i = 0; i < arrayPalabras.length; i++) {
      // si previamente ordenamos los caracteres de la palabra en un array
      var chars = (0, utils_1.sortArray)((0, utils_1.getChars)(arrayPalabras[i]));

      for (var j = 0; j < chars.length; j++) {
        var char = chars[j]; // si no encuentra la clave significa que no se a agregado el objeto a la distribucion

        if (distribucion[char] === undefined) {
          distribucion[char] = 1;
        } else {
          distribucion[char] = distribucion[char] + 1;
        }
      }
    }

    return distribucion;
  };

  WordleAnalyzer.prototype.getRankWord = function (distribucionLetras, words) {
    var rank = {};

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var chars = (0, utils_1.getChars)(word);
      var sum = 0;

      for (var j = 0; j < chars.length; j++) {
        var char = chars[j];
        sum += distribucionLetras[char];
      }

      rank[word] = sum;
    }

    return rank;
  };

  WordleAnalyzer.prototype.getMaxValue = function (distribucionByWord) {
    var maxValue; // definimos el valor como 0 cambiaremos este valor si el valor almacenado en el objeto es mas alto que el
    // es mas alto que el anterior

    maxValue = 0;

    for (var key in distribucionByWord) {
      if (distribucionByWord[key] > maxValue) {
        maxValue = distribucionByWord[key];
      }
    }

    return maxValue;
  };

  WordleAnalyzer.prototype.getBestWordRanked = function (wordsRanked, value) {
    var objeto;
    objeto = {};

    for (var key in wordsRanked) {
      if (wordsRanked[key] === value) {
        objeto[key] = wordsRanked[key];
      }
    }

    return objeto;
  };

  return WordleAnalyzer;
}();

exports.WordleAnalyzer = WordleAnalyzer;
},{"./utils":"src/utils.ts"}],"src/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var dictionary_1 = __importDefault(require("./dictionary"));

var WordleAnalyzer_1 = require("./WordleAnalyzer");
/* creamos la estructura de nuestro objeto json distribucion = { "a": 0, .....}
 *
 * asi llenamos el objeto con la distribucionde las letras esta distribuicion sera el numero de repeticiones de cada letra
 * que sera tomado como el peso de la letra dentro del alfabeto.
*/

/*
 * 'a' = 2145; numero de repeticiones de la letra 'a' es igual al peso
 */


var wordAnalyzer = new WordleAnalyzer_1.WordleAnalyzer(dictionary_1.default);
var distribucionLetras; //distribucionLetras = wordAnalyzer.distribucion(words);

distribucionLetras = wordAnalyzer.distribucion(dictionary_1.default);
/*
NOTA: suponemos una distribucion de la siguiente forma: ejemplo demostrativo no corresponde a los datos reales
letra  | peso de la letra
________________
a      |  1123
b      |  1454
c      |  25456
.......
*/

/* Podemos pensar entonces en recorrer cada palabra del array words y hacer una suma de los pesos de las letras
 * para cada palabra y asi obtener el peso de la palabra , cada peso sumado le dara un peso a la palabra el cual
 * usaremos para identificar las palabras con mayor peso. Esto nos permitira saber cuales son las palabras que tienen
 * mas letras en comun de las palabras del array words
 */

var distribucionByWord;
distribucionByWord = wordAnalyzer.getRankWord(distribucionLetras, dictionary_1.default); //console.log(distribucionByWord);
// nos disponemos a obtener el valor mas alto de todas las palabras

var maxValue;
maxValue = wordAnalyzer.getMaxValue(distribucionByWord); //console.log(maxValue);
// usamos maxValue e imprimimos el objeto con ese valor

var mejorPalabra;
mejorPalabra = wordAnalyzer.getBestWordRanked(distribucionByWord, maxValue);
console.log("La mejor Palabra para inmiciar el juego es '" + Object.keys(mejorPalabra)[0] + "' con un rank de " + Object.values(mejorPalabra)[0]);
},{"./dictionary":"src/dictionary.ts","./WordleAnalyzer":"src/WordleAnalyzer.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55947" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map