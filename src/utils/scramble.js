const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

// Decodes `text` left→right. `onDone` always runs, so the real title is always restored.
// Returns a cancel function (which also restores via onDone).
export function scramble(text, onFrame, onDone, frames = 14, ms = 32) {
  let f = 0;
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    clearInterval(id);
    clearTimeout(safety);
    onDone();
  };
  const id = setInterval(() => {
    f += 1;
    if (f >= frames) {
      finish();
      return;
    }
    const k = Math.floor((f / frames) * text.length);
    onFrame(
      text
        .split("")
        .map((ch, i) => (i < k || ch === " " ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]))
        .join(""),
    );
  }, ms);
  const safety = setTimeout(finish, frames * ms + 150);
  return finish;
}
