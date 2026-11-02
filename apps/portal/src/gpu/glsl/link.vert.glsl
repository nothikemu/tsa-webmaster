// Neighbour links. Each segment end carries its own position and the other end's position, so
// opacity can fall off with the *current* length (stretched links fade out).
uniform float uMaxLen;
uniform float uOpacity;
uniform vec3 uPointer;
uniform float uRadius;
uniform float uPresence;
#ifdef USE_POS_TEX
uniform sampler2D uPosTex;
attribute vec2 aRef;
attribute vec2 aRefOther;
#else
attribute vec3 aOther;
#endif
attribute float aBase;
attribute float aT;

varying float vA;
varying vec3 vC;

void main() {
#ifdef USE_POS_TEX
  vec3 p = texture2D(uPosTex, aRef).xyz;
  vec3 q = texture2D(uPosTex, aRefOther).xyz;
#else
  vec3 p = position;
  vec3 q = aOther;
#endif
  float len = distance(p, q);
  float fall = 1.0 - smoothstep(uMaxLen * 0.4, uMaxLen, len);
  float infl = uPresence * (1.0 - smoothstep(0.0, uRadius, length(p - uPointer)));
  vA = aBase * fall * uOpacity * (1.0 + infl * 1.6);
  vec3 blue = vec3(0.30, 0.52, 1.00);
  vec3 violet = vec3(0.56, 0.42, 1.00);
  vec3 cyan = vec3(0.30, 0.90, 1.00);
  vC = mix(mix(blue, violet, aT), cyan, clamp(infl, 0.0, 1.0));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
