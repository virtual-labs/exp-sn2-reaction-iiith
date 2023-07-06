export const instructions = [
  {
    message:
      "Observe the structure and energy slider of each molecule in the following table.",
    elementId: ["molecules-container"],
  },
  {
    message:
      "Adjust relative energy using slider for each molecule present in Reactants, Transition State and Products, in order to obtain obtain an ideal state vs energy plot",
    elementId: [
      "chloride",
      "iodomethane",
      "transitionstate",
      "chloromethane",
      "iodide",
    ],
  },
  {
    message:
      "Note down these relative values, and compare it with actual values",
    elementId: ["myChart"],
  },
  {
    message: "Interact with molecule by rotating, and zooming around it",
    elementId: [
      "chloride-chart",
      "iodomethane-chart",
      "transitionstate-chart",
      "chloromethane-chart",
      "iodide-chart",
    ],
  },
  {
    message:
      "Click on input and output buttons to download respective gaussian files",
    elementId: ["input-button", "output-button"],
  },
  {
    message: "Analyse the data present in these gaussian files",
    elementId: [],
  },
];
