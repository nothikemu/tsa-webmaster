varying vec3 vN;

// The globe under the Ethics mesh: three flat navy bands (lit, shade, deep) and a paper-white rim where the
// surface turns away from the camera, like the outline of a panel.
void main() {
  vec3 n = normalize(vN);
  float ndl = dot(n, normalize(vec3(-0.5, 0.6, 0.7)));
  vec3 col = ndl > 0.2 ? vec3(0.17, 0.25, 0.33) : (ndl > -0.3 ? vec3(0.11, 0.17, 0.23) : vec3(0.06, 0.1, 0.14));
  col = (1.0 - abs(n.z)) > 0.93 ? vec3(0.93, 0.91, 0.88) : col;
  gl_FragColor = vec4(col, 1.0);
}
