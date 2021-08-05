let reac = [],
  ts = [],
  prod = [];

const initChart = () => {
  const data = {
    labels: ["Reactants", "Transition State", "Products"],
    datasets: [
      {
        label: "State vs Energy Plot",
        data: [
          reac.reduce((a, b) => a + b, 0),
          ts.reduce((a, b) => a + b, 0),
          prod.reduce((a, b) => a + b, 0),
        ],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.3,
      },
    ],
  };

  return new Chart("myChart", {
    type: "line",
    data: data,
    options: {
      scales: {
        xAxes: [
          {
            offset: true,
            scaleLabel: {
              display: true,
              labelString: "State",
            },
          },
        ],
        yAxes: [
          {
            offset: true,
            scaleLabel: {
              display: true,
              labelString: "Energy*",
            },
          },
        ],
      },
    },
  });
};

let chart = initChart();

const updateChart = () => {
  chart.data.datasets[0].data = [
    reac.reduce((a, b) => a + b, 0),
    ts.reduce((a, b) => a + b, 0),
    prod.reduce((a, b) => a + b, 0),
  ];
  chart.update();
};

const generateMolecule = (container_id, molecule_data) => {
  let width = 150;
  let movie = new ChemDoodle.MovieCanvas3D(container_id, width, 150);

  movie.addFrame([ChemDoodle.readXYZ(molecule_data)], []);

  movie.styles.set3DRepresentation("Ball and Stick");
  movie.styles.atoms_displayLabels_3D = true;
  movie.styles.backgroundColor = "black";
  movie.loadMolecule(movie.frames[0].mols[0]);

  return movie;
};

const chloride = "1\n \nCl  -0.0433700000  -0.0799600000   0.0000000000";
generateMolecule("chloride-chart", chloride);

const iodomethane =
  "5\n \nI            0.3061173620   0.0001353896   0.0000861557\nC           -1.8735193700  -0.0000690343  -0.0000131229\nH           -2.2005433799   0.2316628203   0.9991454491\nH           -2.2003767307  -0.9812741146  -0.2989663895\nH           -2.2005235734   0.7493085882  -0.7003539349";
generateMolecule("iodomethane-chart", iodomethane);

const transitionstate =
  "6\n \nCl           3.1780173953   0.0323625705  -0.0112318431\nC            1.2491823238   0.0339221551  -0.0189224105\nH            1.2924950010   0.4911199491   0.9373224797\nH            1.2984704925   0.6333001494  -0.8927560076\nH            1.2951078784  -1.0227382878  -0.1008541314\nI           -1.0583590480   0.0350231702  -0.0276551979";
generateMolecule("transitionstate-chart", transitionstate);

const chloromethane =
  "5\n \nCl           0.2927797166   0.0263834706  -0.7024208392\nC           -0.4016025404  -0.0362405867   0.9635781389\nH            0.2694889229  -0.6043184281   1.5842610674\nH           -1.3651436035  -0.5123095194   0.9063981462\nH           -0.4946724957   0.9732150635   1.3250634869";
generateMolecule("chloromethane-chart", chloromethane);

const iodide = "1\n \nI  -0.1517900000  -0.2642800000   0.0000000000";
generateMolecule("iodide-chart", iodide);

const updateVal = (divRef, valueRef, arr, ind) => {
  divRef.innerHTML = valueRef.value;
  arr[ind] = parseFloat(valueRef.value);
  updateChart();
};

// event listeners
const chlorideSlider = document.getElementById("chloride-slider");
const chlorideEnergy = document.getElementById("chloride-energy");
updateVal(chlorideEnergy, chlorideSlider, reac, 0);
chlorideSlider.addEventListener("input", () => {
  updateVal(chlorideEnergy, chlorideSlider, reac, 0);
});

const iodomethaneSlider = document.getElementById("iodomethane-slider");
const iodomethaneEnergy = document.getElementById("iodomethane-energy");
updateVal(iodomethaneEnergy, iodomethaneSlider, reac, 1);
iodomethaneSlider.addEventListener("input", () => {
  updateVal(iodomethaneEnergy, iodomethaneSlider, reac, 1);
});

const transitionstateSlider = document.getElementById("transitionstate-slider");
const transitionstateEnergy = document.getElementById("transitionstate-energy");
updateVal(transitionstateEnergy, transitionstateSlider, ts, 0);
transitionstateSlider.addEventListener("input", () => {
  updateVal(transitionstateEnergy, transitionstateSlider, ts, 0);
});

const chloromethaneSlider = document.getElementById("chloromethane-slider");
const chloromethaneEnergy = document.getElementById("chloromethane-energy");
updateVal(chloromethaneEnergy, chloromethaneSlider, prod, 0);
chloromethaneSlider.addEventListener("input", () => {
  updateVal(chloromethaneEnergy, chloromethaneSlider, prod, 0);
});

const iodideSlider = document.getElementById("iodide-slider");
const iodideEnergy = document.getElementById("iodide-energy");
updateVal(iodideEnergy, iodideSlider, prod, 1);
iodideSlider.addEventListener("input", () => {
  updateVal(iodideEnergy, iodideSlider, prod, 1);
});
