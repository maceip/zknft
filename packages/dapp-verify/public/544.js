!function(n,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t=e();for(var r in t)("object"==typeof exports?exports:n)[r]=t[r]}}(this,(()=>(()=>{"use strict";var n={468:(n,e,t)=>{var r=t(544);onmessage=async({data:{module:n,memory:e,receiver:t}})=>{await(0,r.ZP)(n,e),postMessage(!0),(0,r.OG)(t)}},544:(n,e,t)=>{let r,_;t.d(e,{ZP:()=>I,OG:()=>W}),n=t.hmd(n);const o=new Array(128).fill(void 0);function i(n){return o[n]}o.push(void 0,null,!0,!1);let c=o.length;function b(n){const e=i(n);return function(n){n<132||(o[n]=c,c=n)}(n),e}const u="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&u.decode();let f=null;function a(){return null!==f&&f.buffer===_.memory.buffer||(f=new Uint8Array(_.memory.buffer)),f}function w(n,e){return n>>>=0,u.decode(a().slice(n,n+e))}function g(n){c===o.length&&o.push(o.length+1);const e=c;return c=o[e],o[e]=n,e}let s=0;const d="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},l=function(n,e){const t=d.encode(n);return e.set(t),{read:n.length,written:t.length}};function y(n,e,t){if(void 0===t){const t=d.encode(n),r=e(t.length,1)>>>0;return a().subarray(r,r+t.length).set(t),s=t.length,r}let r=n.length,_=e(r,1)>>>0;const o=a();let i=0;for(;i<r;i++){const e=n.charCodeAt(i);if(e>127)break;o[_+i]=e}if(i!==r){0!==i&&(n=n.slice(i)),_=t(_,r,r=i+3*n.length,1)>>>0;const e=a().subarray(_+i,_+r);i+=l(n,e).written,_=t(_,r,i,1)>>>0}return s=i,_}function m(n){return null==n}let p=null;function h(){return null!==p&&p.buffer===_.memory.buffer||(p=new Int32Array(_.memory.buffer)),p}let v=null,A=null;function x(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let t="[";e>0&&(t+=x(n[0]));for(let r=1;r<e;r++)t+=", "+x(n[r]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(!(t.length>1))return toString.call(n);if(r=t[1],"Object"==r)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:r}const j="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>{_.__wbindgen_export_3.get(n.dtor)(n.a,n.b)}));function k(n,e,t,r){const o={a:n,b:e,cnt:1,dtor:t},i=(...n)=>{o.cnt++;const e=o.a;o.a=0;try{return r(e,o.b,...n)}finally{0==--o.cnt?(_.__wbindgen_export_3.get(o.dtor)(e,o.b),j.unregister(o)):o.a=e}};return i.original=o,j.register(i,o,o),i}function R(n,e,t){_.wasm_bindgen__convert__closures__invoke1_mut__hb0055e4dfe486d82(n,e,g(t))}function O(n,e){_.wasm_bindgen__convert__closures__invoke0_mut__h89475dd123cc72eb(n,e)}function S(n,e,t){_.wasm_bindgen__convert__closures__invoke1_mut__hf502913ed74b5ccb(n,e,g(t))}function T(n,e,t){_._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h316dbdc18d5a76fb(n,e,g(t))}function M(n,e){try{return n.apply(this,e)}catch(n){_.__wbindgen_exn_store(g(n))}}function W(n){_.wbg_rayon_start_worker(n)}const E="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>_.__wbg_wbg_rayon_poolbuilder_free(n>>>0)));class F{static __wrap(n){n>>>=0;const e=Object.create(F.prototype);return e.__wbg_ptr=n,E.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const n=this.__wbg_ptr;return this.__wbg_ptr=0,E.unregister(this),n}free(){const n=this.__destroy_into_raw();_.__wbg_wbg_rayon_poolbuilder_free(n)}numThreads(){return _.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){return _.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)>>>0}build(){_.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}function U(){const e={wbg:{}};return e.wbg.__wbindgen_object_drop_ref=function(n){b(n)},e.wbg.__wbindgen_string_new=function(n,e){return g(w(n,e))},e.wbg.__wbindgen_cb_drop=function(n){const e=b(n).original;return 1==e.cnt--&&(e.a=0,!0)},e.wbg.__wbg_fetch_f426cbfc0c2f2c46=function(n){return g(self.fetch(i(n)))},e.wbg.__wbindgen_string_get=function(n,e){const t=i(e),r="string"==typeof t?t:void 0;var o=m(r)?0:y(r,_.__wbindgen_malloc,_.__wbindgen_realloc),c=s;h()[n/4+1]=c,h()[n/4+0]=o},e.wbg.__wbindgen_error_new=function(n,e){return g(new Error(w(n,e)))},e.wbg.__wbindgen_is_object=function(n){const e=i(n);return"object"==typeof e&&null!==e},e.wbg.__wbindgen_is_undefined=function(n){return void 0===i(n)},e.wbg.__wbindgen_in=function(n,e){return i(n)in i(e)},e.wbg.__wbindgen_is_bigint=function(n){return"bigint"==typeof i(n)},e.wbg.__wbindgen_bigint_from_u64=function(n){return g(BigInt.asUintN(64,n))},e.wbg.__wbindgen_jsval_eq=function(n,e){return i(n)===i(e)},e.wbg.__wbindgen_number_new=function(n){return g(n)},e.wbg.__wbindgen_jsval_loose_eq=function(n,e){return i(n)==i(e)},e.wbg.__wbindgen_boolean_get=function(n){const e=i(n);return"boolean"==typeof e?e?1:0:2},e.wbg.__wbindgen_number_get=function(n,e){const t=i(e),r="number"==typeof t?t:void 0;(null!==v&&v.buffer===_.memory.buffer||(v=new Float64Array(_.memory.buffer)),v)[n/8+1]=m(r)?0:r,h()[n/4+0]=!m(r)},e.wbg.__wbindgen_as_number=function(n){return+i(n)},e.wbg.__wbindgen_object_clone_ref=function(n){return g(i(n))},e.wbg.__wbg_getwithrefkey_4a92a5eca60879b9=function(n,e){return g(i(n)[i(e)])},e.wbg.__wbindgen_is_string=function(n){return"string"==typeof i(n)},e.wbg.__wbindgen_link_c83fa9fa3333cb90=function(n){const e=y("data:application/javascript,"+encodeURIComponent("onmessage = function (ev) {\n            let [ia, index, value] = ev.data;\n            ia = new Int32Array(ia.buffer);\n            let result = Atomics.wait(ia, index, value);\n            postMessage(result);\n        };\n        "),_.__wbindgen_malloc,_.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=e},e.wbg.__wbg_waitAsync_92219692955aa445=function(){return g(Atomics.waitAsync)},e.wbg.__wbg_waitAsync_ecc6bb0101f0b119=function(n,e,t){return g(Atomics.waitAsync(i(n),e,t))},e.wbg.__wbg_async_d412da4fadd37b75=function(n){return i(n).async},e.wbg.__wbg_value_ceb95bfbc794ce19=function(n){return g(i(n).value)},e.wbg.__wbg_queueMicrotask_f61ee94ee663068b=function(n){queueMicrotask(i(n))},e.wbg.__wbg_queueMicrotask_f82fc5d1e8f816ae=function(n){return g(i(n).queueMicrotask)},e.wbg.__wbindgen_is_function=function(n){return"function"==typeof i(n)},e.wbg.__wbg_crypto_d05b68a3572bb8ca=function(n){return g(i(n).crypto)},e.wbg.__wbg_process_b02b3570280d0366=function(n){return g(i(n).process)},e.wbg.__wbg_versions_c1cb42213cedf0f5=function(n){return g(i(n).versions)},e.wbg.__wbg_node_43b1089f407e4ec2=function(n){return g(i(n).node)},e.wbg.__wbg_require_9a7e0f667ead4995=function(){return M((function(){return g(n.require)}),arguments)},e.wbg.__wbg_msCrypto_10fc94afee92bd76=function(n){return g(i(n).msCrypto)},e.wbg.__wbg_getRandomValues_7e42b4fb8779dc6d=function(){return M((function(n,e){i(n).getRandomValues(i(e))}),arguments)},e.wbg.__wbg_randomFillSync_b70ccbdf4926a99d=function(){return M((function(n,e){i(n).randomFillSync(b(e))}),arguments)},e.wbg.__wbg_instanceof_Blob_adb51fbe6a6a1c34=function(n){let e;try{e=i(n)instanceof Blob}catch(n){e=!1}return e},e.wbg.__wbg_url_f671f15c14807538=function(n,e){const t=y(i(e).url,_.__wbindgen_malloc,_.__wbindgen_realloc),r=s;h()[n/4+1]=r,h()[n/4+0]=t},e.wbg.__wbg_readyState_2599ffe07703eeea=function(n){return i(n).readyState},e.wbg.__wbg_setonopen_701fb056991a7b21=function(n,e){i(n).onopen=i(e)},e.wbg.__wbg_setonerror_7d239f63e6273fd7=function(n,e){i(n).onerror=i(e)},e.wbg.__wbg_setonclose_4ad41bb378f1fd66=function(n,e){i(n).onclose=i(e)},e.wbg.__wbg_setonmessage_3df13fd356f531d6=function(n,e){i(n).onmessage=i(e)},e.wbg.__wbg_setbinaryType_bfaa2b91f5e49737=function(n,e){i(n).binaryType=b(e)},e.wbg.__wbg_new_d3ba66fcfe3ebcc6=function(){return M((function(n,e){return g(new WebSocket(w(n,e)))}),arguments)},e.wbg.__wbg_newwithstrsequence_f2aa08621ea403e2=function(){return M((function(n,e,t){return g(new WebSocket(w(n,e),i(t)))}),arguments)},e.wbg.__wbg_close_85838c8d50b026da=function(){return M((function(n){i(n).close()}),arguments)},e.wbg.__wbg_send_115b7e92eb793bd9=function(){return M((function(n,e,t){i(n).send(w(e,t))}),arguments)},e.wbg.__wbg_send_d7c3cfcca5d9b9e6=function(){return M((function(n,e){i(n).send(i(e))}),arguments)},e.wbg.__wbg_log_79d3c56888567995=function(n){console.log(i(n))},e.wbg.__wbg_instanceof_Window_cee7a886d55e7df5=function(n){let e;try{e=i(n)instanceof Window}catch(n){e=!1}return e},e.wbg.__wbg_wasClean_06aba8a282b21973=function(n){return i(n).wasClean},e.wbg.__wbg_code_c25ac89aa8108189=function(n){return i(n).code},e.wbg.__wbg_reason_ab96417c470b0f79=function(n,e){const t=y(i(e).reason,_.__wbindgen_malloc,_.__wbindgen_realloc),r=s;h()[n/4+1]=r,h()[n/4+0]=t},e.wbg.__wbg_new_4db22fd5d40c5665=function(){return M((function(){return g(new Headers)}),arguments)},e.wbg.__wbg_append_b2e8ed692fc5eb6e=function(){return M((function(n,e,t,r,_){i(n).append(w(e,t),w(r,_))}),arguments)},e.wbg.__wbg_data_bbdd2d77ab2f7e78=function(n){return g(i(n).data)},e.wbg.__wbg_code_d251e90c3deab7c6=function(n){return i(n).code},e.wbg.__wbg_instanceof_Response_b5451a06784a2404=function(n){let e;try{e=i(n)instanceof Response}catch(n){e=!1}return e},e.wbg.__wbg_json_c07875c84e5205af=function(){return M((function(n){return g(i(n).json())}),arguments)},e.wbg.__wbg_setonmessage_69d6948a76937c04=function(n,e){i(n).onmessage=i(e)},e.wbg.__wbg_new_cc1b6504e92f2e3c=function(){return M((function(n,e){return g(new Worker(w(n,e)))}),arguments)},e.wbg.__wbg_postMessage_64df7b91855fc1fb=function(){return M((function(n,e){i(n).postMessage(i(e))}),arguments)},e.wbg.__wbg_newwithstrandinit_11fbc38beb4c26b0=function(){return M((function(n,e,t){return g(new Request(w(n,e),i(t)))}),arguments)},e.wbg.__wbg_timeOrigin_f38a8aa6ae1a85a1=function(n){return i(n).timeOrigin},e.wbg.__wbg_performance_3f3012faa4463882=function(n){return g(i(n).performance)},e.wbg.__wbg_now_2fd65358804c9485=function(n){return i(n).now()},e.wbg.__wbg_get_0ee8ea3c7c984c45=function(n,e){return g(i(n)[e>>>0])},e.wbg.__wbg_length_161c0d89c6535c1d=function(n){return i(n).length},e.wbg.__wbg_new_75208e29bddfd88c=function(){return g(new Array)},e.wbg.__wbg_newnoargs_cfecb3965268594c=function(n,e){return g(new Function(w(n,e)))},e.wbg.__wbg_next_586204376d2ed373=function(n){return g(i(n).next)},e.wbg.__wbg_next_b2d3366343a208b3=function(){return M((function(n){return g(i(n).next())}),arguments)},e.wbg.__wbg_done_90b14d6f6eacc42f=function(n){return i(n).done},e.wbg.__wbg_value_3158be908c80a75e=function(n){return g(i(n).value)},e.wbg.__wbg_iterator_40027cdd598da26b=function(){return g(Symbol.iterator)},e.wbg.__wbg_get_3fddfed2c83f434c=function(){return M((function(n,e){return g(Reflect.get(i(n),i(e)))}),arguments)},e.wbg.__wbg_call_3f093dd26d5569f8=function(){return M((function(n,e){return g(i(n).call(i(e)))}),arguments)},e.wbg.__wbg_new_632630b5cec17f21=function(){return g(new Object)},e.wbg.__wbg_self_05040bd9523805b9=function(){return M((function(){return g(self.self)}),arguments)},e.wbg.__wbg_window_adc720039f2cb14f=function(){return M((function(){return g(window.window)}),arguments)},e.wbg.__wbg_globalThis_622105db80c1457d=function(){return M((function(){return g(globalThis.globalThis)}),arguments)},e.wbg.__wbg_global_f56b013ed9bcf359=function(){return M((function(){return g(t.g.global)}),arguments)},e.wbg.__wbg_from_58c79ccfb68060f5=function(n){return g(Array.from(i(n)))},e.wbg.__wbg_of_94ac9e20a3c46ec5=function(n,e,t){return g(Array.of(i(n),i(e),i(t)))},e.wbg.__wbg_push_0239ee92f127e807=function(n,e){return i(n).push(i(e))},e.wbg.__wbg_instanceof_ArrayBuffer_9221fa854ffb71b5=function(n){let e;try{e=i(n)instanceof ArrayBuffer}catch(n){e=!1}return e},e.wbg.__wbg_new_1adc2b6029f48f31=function(n){return g(new ArrayBuffer(n>>>0))},e.wbg.__wbg_call_67f2111acd2dfdb6=function(){return M((function(n,e,t){return g(i(n).call(i(e),i(t)))}),arguments)},e.wbg.__wbg_isSafeInteger_a23a66ee7c41b273=function(n){return Number.isSafeInteger(i(n))},e.wbg.__wbg_now_ba25f0a487340763=function(){return Date.now()},e.wbg.__wbg_entries_488960b196cfb6a5=function(n){return g(Object.entries(i(n)))},e.wbg.__wbg_new_70828a4353259d4b=function(n,e){try{var t={a:n,b:e};const r=new Promise(((n,e)=>{const r=t.a;t.a=0;try{return function(n,e,t,r){_.wasm_bindgen__convert__closures__invoke2_mut__h7a81a440cfdd21ae(n,e,g(t),g(r))}(r,t.b,n,e)}finally{t.a=r}}));return g(r)}finally{t.a=t.b=0}},e.wbg.__wbg_resolve_5da6faf2c96fd1d5=function(n){return g(Promise.resolve(i(n)))},e.wbg.__wbg_then_f9e58f5a50f43eae=function(n,e){return g(i(n).then(i(e)))},e.wbg.__wbg_then_20a5920e447d1cb1=function(n,e,t){return g(i(n).then(i(e),i(t)))},e.wbg.__wbg_buffer_b914fb8b50ebbc3e=function(n){return g(i(n).buffer)},e.wbg.__wbg_new_e4dd61c29af24331=function(n){return g(new Int32Array(i(n)))},e.wbg.__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e=function(n,e,t){return g(new Uint8Array(i(n),e>>>0,t>>>0))},e.wbg.__wbg_new_b1f2d6842d615181=function(n){return g(new Uint8Array(i(n)))},e.wbg.__wbg_set_7d988c98e6ced92d=function(n,e,t){i(n).set(i(e),t>>>0)},e.wbg.__wbg_length_21c4b0ae73cba59d=function(n){return i(n).length},e.wbg.__wbg_instanceof_Uint8Array_c299a4ee232e76ba=function(n){let e;try{e=i(n)instanceof Uint8Array}catch(n){e=!1}return e},e.wbg.__wbg_newwithlength_0d03cef43b68a530=function(n){return g(new Uint8Array(n>>>0))},e.wbg.__wbg_subarray_adc418253d76e2f1=function(n,e,t){return g(i(n).subarray(e>>>0,t>>>0))},e.wbg.__wbg_set_961700853a212a39=function(){return M((function(n,e,t){return Reflect.set(i(n),i(e),i(t))}),arguments)},e.wbg.__wbg_stringify_865daa6fb8c83d5a=function(){return M((function(n){return g(JSON.stringify(i(n)))}),arguments)},e.wbg.__wbg_new_abda76e883ba8a5f=function(){return g(new Error)},e.wbg.__wbg_stack_658279fe44541cf6=function(n,e){const t=y(i(e).stack,_.__wbindgen_malloc,_.__wbindgen_realloc),r=s;h()[n/4+1]=r,h()[n/4+0]=t},e.wbg.__wbg_error_f851667af71bcfc6=function(n,e){let t,r;try{t=n,r=e,console.error(w(n,e))}finally{_.__wbindgen_free(t,r,1)}},e.wbg.__wbindgen_bigint_get_as_i64=function(n,e){const t=i(e),r="bigint"==typeof t?t:void 0;(null!==A&&A.buffer===_.memory.buffer||(A=new BigInt64Array(_.memory.buffer)),A)[n/8+1]=m(r)?BigInt(0):r,h()[n/4+0]=!m(r)},e.wbg.__wbindgen_debug_string=function(n,e){const t=y(x(i(e)),_.__wbindgen_malloc,_.__wbindgen_realloc),r=s;h()[n/4+1]=r,h()[n/4+0]=t},e.wbg.__wbindgen_throw=function(n,e){throw new Error(w(n,e))},e.wbg.__wbindgen_rethrow=function(n){throw b(n)},e.wbg.__wbindgen_module=function(){return g(q.__wbindgen_wasm_module)},e.wbg.__wbindgen_memory=function(){return g(_.memory)},e.wbg.__wbg_startWorkers_2ee336a9694dda13=function(n,e,_){const o=async function(n,e,_){if(0===_.numThreads())throw new Error("num_threads must be > 0.");const o={module:n,memory:e,receiver:_.receiver()};r=await Promise.all(Array.from({length:_.numThreads()},(async()=>{const n=new Worker(new URL(t.p+t.u(544),t.b),{type:void 0});return n.postMessage(o),await new Promise((e=>n.addEventListener("message",e,{once:!0}))),n}))),_.build()}(b(n),b(e),F.__wrap(_));return g(o)},e.wbg.__wbindgen_closure_wrapper2477=function(n,e,t){return g(k(n,e,971,R))},e.wbg.__wbindgen_closure_wrapper2479=function(n,e,t){return g(k(n,e,971,O))},e.wbg.__wbindgen_closure_wrapper3479=function(n,e,t){return g(k(n,e,1346,S))},e.wbg.__wbindgen_closure_wrapper5594=function(n,e,t){return g(k(n,e,2568,T))},e.wbg.__wbindgen_closure_wrapper5595=function(n,e,t){return g(k(n,e,2568,T))},e}async function q(n,e){if(void 0!==_)return _;void 0===n&&(n=new URL(t(519),t.b));const r=U();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n)),function(n,e){n.wbg.memory=e||new WebAssembly.Memory({initial:103,maximum:65536,shared:!0})}(r,e);const{instance:o,module:i}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await n,r);return function(n,e){return _=n.exports,q.__wbindgen_wasm_module=e,A=null,v=null,p=null,f=null,_.__wbindgen_start(),_}(o,i)}const I=q},519:(n,e,t)=>{n.exports=t.p+"b0eac407bfb6403d3965.wasm"}},e={};function t(r){var _=e[r];if(void 0!==_)return _.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return n[r](o,o.exports,t),o.loaded=!0,o.exports}return t.m=n,t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.u=n=>n+".js",t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.hmd=n=>((n=Object.create(n)).children||(n.children=[]),Object.defineProperty(n,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+n.id)}}),n),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="",t.b=self.location+"",t(468)})()));
//# sourceMappingURL=544.js.map