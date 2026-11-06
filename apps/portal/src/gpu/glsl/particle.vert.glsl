// Soft-sprite particles. Position comes from a vertex attribute (CPU, WASM and WebGPU tiers)
// or from the GPGPU position texture (USE_POS_TEX).
uniform float uSize;
uniform float uPixelRatio;
uniform vec3 uPointer;
uniform float uRadius;
uniform float uPresence;
#ifdef USE_POS_TEX
uniform sampler2D uPosTex;
attribute vec2 aRef;
#endif
attribute vec3 aRest;
attribute float aSeed;

varying vec3 vColor;
varying float vAlpha;

void main() {
#ifdef USE_POS_TEX
  vec3 p = texture2D(uPosTex, aRef).xyz;
#else
  vec3 p = position;
#endif
  float disp = length(p - aRest);
  float infl = uPresence * (1.0 - smoothstep(0.0, uRadius, length(p - uPointer)));
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  // Depth attenuation: nearer particles are larger.
  float depthScale = 1.0 / max(0.5, -mv.z);
  gl_PointSize = uSize * uPixelRatio * depthScale * (0.7 + 0.6 * aSeed + infl * 1.1 + disp * 1.6);
  gl_Position = projectionMatrix * mv;

  float t = clamp((aRest.x + 2.4) / 4.8, 0.0, 1.0);
  vec3 blue = vec3(0.70, 0.65, 1.00);
  vec3 violet = vec3(1.00, 0.45, 0.86);
  vec3 cyan = vec3(0.36, 0.95, 1.00);
  vColor = mix(mix(blue, violet, t), cyan, clamp(infl + disp * 1.4, 0.0, 1.0));
  vAlpha = 0.30 + 0.35 * aSeed + infl * 0.45 + clamp(disp, 0.0, 0.5) * 0.4;
}
