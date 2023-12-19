'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3157991fb1c66670c1f846e96de9e8f3",
"index.html": "c2607b6d11ca3353894b84c23aa23a0c",
"/": "c2607b6d11ca3353894b84c23aa23a0c",
"CNAME": "c4e25c1c8ab5c22fc5d6fe745b045953",
"main.dart.js": "0fb416589f377bd55e506785328ef54c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b4bc6bc81f41e978c253dbedfdcd8cc",
".git/ORIG_HEAD": "f07c6c8f066056331b9c336c13781e56",
".git/config": "daa4771c45a0a50a66bb757368f42a5b",
".git/objects/68/1c1b9009714e39f6db5756a06b24c81ad8c4cd": "b5d067528fbe53df2c055e84ced33ec9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/56/6ea0cddac848411789a9fbf28bfba5dd6d7fa5": "5b5adf5d1f80f41a3e587d3883fb7a9f",
".git/objects/56/519eeb4a557756c1ad42c6eaee6e8333836059": "11ae28d6a1e8d6a083b41f4cd94526b7",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9c/64abee6f0e329c67bbe6fc15f1d8e676a9b508": "0687796d0668d615712842e10dea499e",
".git/objects/9c/49582a09c8649473947646994c69480ac014ac": "13179acc02b49ce414f53ec8dab7b779",
".git/objects/b2/08b8469c28479ee65f6f2eb6962f18581ca7fa": "a638b50794341a512134322e26d0610a",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/b3/3172a37615e1af4b747e0f83f852715b7688c3": "e154d905a6a1ac94723fe63834ea34f3",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/b4/124d95580556b2093f6df46982093ecaeb3109": "1896aef4b70a94e72567cd26c6eddf78",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0df6b27685f54c8001ab2aa27c569da33d56bc": "7d1abd550ef3c875ad56bd017cef1573",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/37c947d0f2a27e5c56e3cf479ae6b8df1ee89d": "b8968d2a953f00c2eb52232d5b7751b0",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f2/1f5f7a9aac8c625a46a3a5e2924cbbc0eda983": "68bb136fe953368de26ba47ea97349bf",
".git/objects/c8/797e2892f8223ff6568d0a1e6fbd435dc64d27": "b48de5f213584d6f23a5f2fe67f8f7fc",
".git/objects/4b/e8b02c23f70616adb8925f02f40d679a0569ee": "ef3abf6f3a1c2000f6d56d1d7a824726",
".git/objects/7d/c8c65930b0da2e662d20ee5d31309c669bb65a": "dff3f2fe9c33128e006dcebb5e8313ba",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/37638aa332dd0d9be937f7350c0eca5235bf70": "9e675043ea281d62dfd8b04d6fda6db7",
".git/objects/10/d6923aab9ca0d3e0253248539c4b2d41824d2e": "b2efe9a1c0f69d7a7f9e86b57b0c53cc",
".git/objects/4c/2a2ebe010c2985fe1ab703d0607e856aeb3ec5": "25c44b233f3911e73a7b1493a796311e",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/43/02bcc7ae1426971331eea27d8abb4487f9975e": "6ee12972d5c1f4956eb8ad216b207a4e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/f35fd9e026063939b454ae251802a05478a7b9": "0f9e3f72876b272b4c7be62fbbdc1c0f",
".git/objects/62/03038adc7a2037f136dd9b78c01c00139beac5": "6d77f6de3700cd612fc348dc3b0a4bcd",
".git/objects/62/d184a36bf97804d97dcb2e05155384eea23629": "125be4d4dd6366b1033153754d9580f4",
".git/objects/96/877a8a3079cf419091a126f6c0a42e8bdf3db5": "7f4c156370fe53704eb87a415b27684f",
".git/objects/39/785fae799976c40baefa547f281929b8b0a6be": "68e94e807ef87b96b4e1199d0a9794f0",
".git/objects/52/1bec7b4f4e097f8270f8c3ff0e14c9d3010965": "feebda85bd165f0276de344a77a54ce5",
".git/objects/d3/ea2a1805581dc7bfd0f74a0e6c240456f904e6": "12d5be87e164bdff55ee0c79d77aa4cd",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/aa/ed92c07a6c26b9925a084b9cbe6d5d7ec0d9b5": "35cf099a9820cb715689ed63c84cb200",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/4f63f7fb9bef3355411cda123ea3e2e40a8092": "c073888effd539e8380c9d20964ac643",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/f7/b594513b91ac15871b6e89e8f807fcdf1ee4c0": "d50d52d925fc5071a8babaa509ee6847",
".git/objects/fa/7a8f3ff6a38d0d5159791d863897a8c3e0a2c6": "42289ab687940e4831d3ff769ad75121",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f6/3b8b5e3162041a8d12f37de50fcbffb5c4b94d": "31e20afe8799626e2212c1b82b4037d6",
".git/objects/ce/5fa466877d9001066c5feb8e48792405999c0c": "b24267d2caeb3cb8f7f48f00e6bdd2ae",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/41/9820e079de0ada4cd3ee038086f6d135326ab0": "980929282ef4b03639b5514dc4547f75",
".git/objects/41/5831290a7b64def597ed94b87069881eb1b3a8": "7c27f9f5921cab11e60336e8086e4cab",
".git/objects/84/11be3e977e7c06408b90b2285abd4d549756b3": "ec4dc5c87e6639794b1d4f764c61a991",
".git/objects/15/dd10559086ca67079a47e99c71cbcf3bebc0f9": "efc1ae17aa35679f6ae5970bab5d44a4",
".git/objects/8c/d17cb15136f49abf0d46491f01eaccb6a1eebd": "700ce03a4a2a82e4aa0560c2b90eda81",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/8e/b6326fbd63d0607c5846d497908f4bce14458c": "5daed00eceed14623c95dd01b394eb78",
".git/objects/8e/d75e1dc0cf8974a69f0dd7496c14ab1346c017": "48e89fe2ad2ab6b31fb0b48ba5bc4476",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a02954cc48ae8ddb0508801bf9a0fa17",
".git/logs/refs/heads/master": "a02954cc48ae8ddb0508801bf9a0fa17",
".git/logs/refs/remotes/origin/master": "82a363dc372eed9f94976ee8bdb7f71f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "211cc85caddf3fa8877dd9631b860c49",
".git/refs/remotes/origin/master": "211cc85caddf3fa8877dd9631b860c49",
".git/index": "4ededb32d10147614c76d5bb7cab24a4",
".git/COMMIT_EDITMSG": "bb247e3915c342a9ccbdad8acf3d75b5",
".git/FETCH_HEAD": "0cded01bc81239d3d09a4aed5febc3bb",
"assets/AssetManifest.json": "eb89d5a5f6cd9cb00b322a3b3b5dac1e",
"assets/NOTICES": "505e870d2e7ac4a80d89d519616b4ebf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "387707864ab4fe7507d7f6077dae0a7f",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "a0cc19d049c32bcfabb9c76769183ef8",
"assets/fonts/MaterialIcons-Regular.otf": "d00847f3fd140b97f966c89fb4406c01",
"assets/assets/logo.png": "742dda00c8fce1632bb2c1b3b0a351c7",
"assets/assets/curriculum.json": "2f836c919177c5f51f7da7c657e2f066",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
