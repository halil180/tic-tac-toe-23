import React from "react";

function ThemePicker() {
  return (
    <select className="gradientselect" data-choose-theme>
      <option disabled value="">
        Pick a theme
      </option>
      <option value="">Default</option>
      <option value="light">Light</option>
      <option value="retro">Retro</option>
      <option value="dracula">Dracula</option>
      <option value="cyberpunk">Cyberpunk</option>
      <option value="synthwave">synthwave</option>
      <option value="valentine">valentine</option>
      <option value="luxury">luxury</option>
    </select>
  );
}

export default ThemePicker;
