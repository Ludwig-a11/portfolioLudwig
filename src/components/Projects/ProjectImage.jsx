/* eslint-disable react/prop-types */
// Shows the whole image (contain) over a blurred copy of itself, so nothing is cropped.
export default function ProjectImage({ src, alt = "", className = "" }) {
  return (
    <div className={`pf-media ${className}`} style={{ "--media": `url("${src}")` }}>
      <img src={src} alt={alt} />
    </div>
  );
}
