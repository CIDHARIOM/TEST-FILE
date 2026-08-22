const projectorButton = document.querySelector("#fullscreenButton");

function setProjectorMode(enabled) {
  document.body.classList.toggle("projector-mode", enabled);
  projectorButton.querySelector("span:last-child").textContent = enabled
    ? "Exit projector mode"
    : "Projector mode";
  projectorButton.setAttribute("aria-pressed", String(enabled));
}

projectorButton.addEventListener("click", async () => {
  const entering = !document.body.classList.contains("projector-mode");
  setProjectorMode(entering);

  if (entering && document.documentElement.requestFullscreen) {
    try {
      await document.documentElement.requestFullscreen();
    } catch {
      // Fullscreen can be blocked by the browser; the visual mode still works.
    }
  } else if (!entering && document.fullscreenElement && document.exitFullscreen) {
    await document.exitFullscreen();
  }
});

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement && document.body.classList.contains("projector-mode")) {
    setProjectorMode(false);
  }
});

document.addEventListener("keydown", async (event) => {
  if (event.key.toLowerCase() !== "f" || event.target.matches("input, textarea")) return;

  const entering = !document.body.classList.contains("projector-mode");
  setProjectorMode(entering);

  if (entering && document.documentElement.requestFullscreen) {
    try {
      await document.documentElement.requestFullscreen();
    } catch {
      // Keep the CSS projector mode if fullscreen is not available.
    }
  } else if (!entering && document.fullscreenElement && document.exitFullscreen) {
    await document.exitFullscreen();
  }
});
