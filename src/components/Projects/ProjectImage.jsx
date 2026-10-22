/* eslint-disable react/prop-types */
// Fills the frame (zoomed); `pos` picks which part of the image stays in view.
export default function ProjectImage({ src, alt = "", pos = "center top", className = "" }) {
  return (
    <div className={`pf-media ${className}`}>
      <img src={src} alt={alt} style={{ objectPosition: pos }} />
    </div>
  );
}
