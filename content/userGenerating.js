import { generateUser } from "../featureHtmlScripts/newUserGenerator.js";
import { generateQuizResult } from "../featureHtmlScripts/userPsyTest.js";
import { copyButton } from "../scripts/copybutton.js";
import { genderbend } from "../featureHtmlScripts/genderbender.js";
import { myArraysObj } from "../data/deutschGenerator.data.js";
import { convertToGerman, shiftTableRows } from "../featureHtmlScripts/tableFunctions.js";
import { thinker, thinkWords } from "../utilities/thinker.js";
import { dataKraken } from "../utilities/dataKraken.js";
import {createQuiz} from "../featureHtmlScripts/quiz.js"
import { createQuickNav } from "../components/quickNav.js";

const createUserGenerating = () => {



    return ` <main id="userGenerating">
      <section id="sectionContainer" class="d-flex justify-content-center flex-column p-5 pb-1 gap-5">
        <div
          id="identityWizard"
          class="card">
          <img src="../img/createName/identityWizard/backgroundImg.jpg" class="card-img" alt="Backgroundimage">
          <div class="card-img-overlay">
              <h3 class="card-title">Identity Wizard</h3>
          <p class="card-text">
            Erstelle einen einzigartigen Benutzernamen, indem du bis zu zwei
            Gruppen von Adjektiven und eine Gruppe von Substantiven auswählst,
            oder lass den Generator eine zufällige Kombination für dich
            erstellen.
          <br></br>
            Du kannst bis zu drei neue Namen in der Liste belassen. Pro-Tipp:
            Speichere die Namen, die dir besonders gut gefallen, mit Clippy!
          </p>
          <div
            id="wizardDiv"
            class="d-flex justify-content-center">
            <div id="wizardInput5">
            <div id="wizardInput1" class="gap-2">
              <label>Wähle bis  zu zwei Eigenschaften...</label>
              <select id="adjective1" class="form-control">
                <option value="random">Zufällig</option>
                <option value="shapes">Form</option>
                <option value="colors">Farbe</option>
                <option value="textures">Textur</option>
                <option value="sizes">Größe</option>
                <option value="ages">Alter</option>
                <option value="intensities">Intensität</option>
                <option value="tastes">Geschmack</option>
                <option value="emotions">Emotion</option>
                <option value="sounds">Klang</option>
                <option value="temperatures">Temperatur</option>
                <option value="speeds">Geschwindigkeit</option>
                <option value="qualities">Qualität</option>
                <option value="weatherTypes">Wetter</option>
                <option value="">-Keine-</option>
              </select>
              <select id="adjective2" class="form-control">
                <option value="random">Zufällig</option>
                <option value="shapes">Form</option>
                <option value="colors">Farbe</option>
                <option value="textures">Textur</option>
                <option value="sizes">Größe</option>
                <option value="ages">Alter</option>
                <option value="intensities">Intensität</option>
                <option value="tastes">Geschmack</option>
                <option value="emotions">Emotion</option>
                <option value="sounds">Klang</option>
                <option value="temperatures">Temperatur</option>
                <option value="speeds">Geschwindigkeit</option>
                <option value="qualities">Qualität</option>
                <option value="weatherTypes">Wetter</option>
                <option value="">-Keine-</option>
              </select>
            <label>...und einen Begriff:</label>
            <select name="pwdGen" id="noun" class="form-control">
              <option value="random">Zufällig</option>
              <option value="instruments">Instrument</option>
              <option value="fruits">Frucht</option>
              <option value="vegetables">Gemüse</option>
              <option value="animals">Tier</option>
              <option value="fantasyCreatures">Fantasiewesen</option>
              <option value="rpgClasses">Fantasy-Charakter</option>
              <option value="fantasyRaces">Fantasie-Volk</option>
              <option value="occupations">Beruf</option>
              <option value="vehicles">Fahrzeug</option>
              <option value="food">Essen</option>
              <option value="tools">Werkzeug</option>
              <option value="beverages">Getränk</option>
              <option value="clothingItems">Kleidungsstück</option>
              <option value="bodyParts">Körperteil</option>
              <option value="flowers">Blume</option>
              <option value="desserts">Dessert</option>
            </select>
              <button id="userGeneratorBtn" class="btn btn-primary">
                Los geht's!
              </button>
              <button id="aiUserGenBtn" class="btn btn-primary" style="display: none;">
                Überrasch mich!
              </button>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="germanAiToggle"
                  style="display:none;"
                />
                <label
                  class="form-check-label"
                  for="germanAiToggle"
                  style="display:none;"
                  >Deutsch (Beta)</label
                >
              </div>
            </div>
          </div>
          <div id="wizardInput6">          
            <table id="stats">
              <tbody id="statsBody" class="w-100 text-start">
                <tr id="statsBodyRow0" style="display: none">
                  <td id="statsBodyArray0" class="text-start"></td>
                </tr>
                <tr id="statsBodyRow1" style="display: none">
                  <td id="statsBodyUsername0" class="text-start"></td>
                </tr>
                <tr id="statsBodyRow2" style="display: none">
                  <td id="statsBodyArray1" class="text-start"></td>
                </tr>
                 <tr id="statsBodyRow3" style="display: none">
                 <td id="statsBodyUsername1" class="text-start"></td>
                </tr>
                <tr id="statsBodyRow4" style="display: none">
                 <td id="statsBodyArray2" class="text-start"></td>
                </tr>
                <tr id="statsBodyRow5" style="display: none">
                 <td id="statsBodyUsername2" class="text-start"></td>
                </tr>
                <tr id="statsBodyRow6" style="display: none">
                 <td id="statsBodyArray3" class="text-start"></td>
                </tr>
                <tr id="statsBodyRow7" style="display: none">
                 <td id="statsBodyUsername3" class="text-start"></td>
                </tr>
              </tbody>
            </table>
            <button id="deleteTableBtn" class="btn btn-primary">Alle Löschen</button>
          </div>
        </div>
      </div>
    </div>
        <div id="mindMaestro" class="card">
          <img src="../img/createName/identityWizard/backgroundImg.jpg" class="card-img" alt="Backgroundimage">
          <div class="card-img-overlay">

          <h3 class="card-title">Mind Maestro</h3>
          <p class="card-text">
            Erstelle einen einzigartigen Benutzernamen, indem du bis zu zwei
            Gruppen von Eigenschaften und eine Gruppe von Begriffen auswählst
            oder lass den Generator eine zufällige Kombination für dich
            erstellen.
          </p>
          <div
            id="quiz"
            class="d-flex w-100 justify-content-center flex-column align-items-center"
          ></div>
          </div>
        </div>
      </section>

    </main>
    <div class="quickNav"></div>
  
    `

}


export const createUserGeneratingHTML = (contentBox,style) => {


    const content = (() => {
        contentBox.innerHTML = createUserGenerating()
        createQuiz()
        createQuickNav(".quickNav");
        return contentBox.innerHTML
    })(contentBox)
    const styleSheet = "./styles/userGenerating.css";

    style.setAttribute("href", styleSheet);

    sessionStorage.setItem("styleSheet", styleSheet);
    sessionStorage.setItem("content", content);


const userGenBtn = document.getElementById("userGeneratorBtn");
const aiUserGenBtn = document.getElementById("aiUserGenBtn");
const userAiToggle = document.getElementById("germanAiToggle");
const deleteTableBtn = document.getElementById("deleteTableBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");




const token = localStorage.getItem("passwordplayground") || null;



deleteTableBtn.addEventListener("click", function () {
  for (let i = 0; i < 4; i++) {
    document.getElementById(`statsBodyArray${i}`).innerHTML = "";
    document.getElementById(`statsBodyUsername${i}`).innerHTML = "";
    document.getElementById(`statsBodyRow${i * 2}`).style.display = "none";
    document.getElementById(`statsBodyRow${i * 2 + 1}`).style.display = "none";
  }
});


  const toggle = document.getElementById("germanAiToggle");
  toggle.dispatchEvent(new Event("change")); // Trigger the change event to set initial state

let interval;

userGenBtn.addEventListener("click", function (e) {
  e.preventDefault();

    if(token)dataKraken({token,col:"generatedUsernames"})
  // Get values from inputs
  const adjective1 = document.getElementById("adjective1").value;
  const adjective2 = document.getElementById("adjective2").value;
  const selectedNoun = document.getElementById("noun").value;

  // Generate user output
  const userOutput = generateUser(adjective1, adjective2, selectedNoun);
  const germanUserOutput = [...userOutput]; // Create a copy of the array to avoid mutation
  const newUserOutput = convertToGerman(germanUserOutput, myArraysObj);
  const tBody = document.getElementById("statsBody");

  // Call the shift function with parameters
  shiftTableRows("statsBodyUsername", "statsBodyArray", "statsBodyRow", 4);

  // Fill the new generated data in the first row
  const firstRow = tBody.rows[0];
  const secondRow = tBody.rows[1];
  let firstCell = firstRow.cells[0];
  let secondCell = secondRow.cells[0];
  secondCell.innerText = `${newUserOutput[0]}`;
  document.getElementById("statsBodyRow0").style.display = "";

  // Handling for additional cells in the row
  if (newUserOutput[2] && newUserOutput[3]) {
    firstCell.innerText = `${newUserOutput[2]}&${newUserOutput[3]}, ${newUserOutput[1]}`;
  } else if (!newUserOutput[2]) {
    firstCell.innerText = `${newUserOutput[3]}, ${newUserOutput[1]}`;
  } else if (!newUserOutput[3]) {
    firstCell.innerText = `${newUserOutput[2]}, ${newUserOutput[1]}`;
  } else {
    firstCell.innerText = `${newUserOutput[1]}`;
  }

  // Update the first row's content container
  const usernameCellFirstRow = document.getElementById("statsBodyUsername0");
  usernameCellFirstRow.innerHTML = ""; // Clear existing content for new data

  const contentContainerFirstRow = document.createElement("div");
  contentContainerFirstRow.className = "table-cell-content";

  const textContainerFirstRow = document.createElement("span");
  textContainerFirstRow.innerText = newUserOutput[0] || ""; // Set new data

  contentContainerFirstRow.appendChild(textContainerFirstRow);

  // Add the copy button only if there is text to copy
  if (textContainerFirstRow.innerText.trim() !== "") {
    contentContainerFirstRow.appendChild(copyButton("statsBodyUsername0"));
  }

  usernameCellFirstRow.appendChild(contentContainerFirstRow);
});

aiUserGenBtn.addEventListener("click", async function () {
  const adjective1 = document.getElementById("adjective1").value;
  const adjective2 = document.getElementById("adjective2").value;
  const selectedNoun = document.getElementById("noun").value;
  const userOutput = generateUser(adjective1, adjective2, selectedNoun);


  if(token) dataKraken({token,col:"generatedUsernames"})
  aiUserGenBtn.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">${thinkWords[0]}</span>
    `;

  aiUserGenBtn.disabled = true;

  let interval;
  interval = setInterval(() => {
    thinker(aiUserGenBtn);
  }, 2000);

  try {
    const gender = await genderbend(userOutput);
    const germanUserOutput = [...userOutput]; // Create a copy of the array to avoid mutation

    const newUserOutput = convertToGerman(germanUserOutput, myArraysObj);
    for (let i = 0; i < 3; i++) {
      newUserOutput[0] = gender[i];
      updateAttempts(newUserOutput, "statsBody");
    }
  } catch (error) {
    console.error("Error fetching AI response:", error);
  } finally {
    clearInterval(interval);
    aiUserGenBtn.innerHTML = "Generieren";
    aiUserGenBtn.disabled = false;
  }
});

userAiToggle.addEventListener("change", function () {
  if (this.checked) {
    // Toggle is active
    userGenBtn.classList.add("d-none");
    userGenBtn.disabled = true; // Disable button

    aiUserGenBtn.classList.remove("d-none");
    aiUserGenBtn.disabled = false; // Enable button
  } else {
    // Toggle is inactive
    userGenBtn.classList.remove("d-none");
    userGenBtn.disabled = false; // Enable button

    aiUserGenBtn.classList.add("d-none");
    aiUserGenBtn.disabled = true; // Disable button
  }
});

function updateAttempts(result, table) {
  const dataArr = result.filter((x) => x !== "");

  const tBody = document.getElementById(table);
  const tr = document.createElement("tr");

  const rowCount = tBody.rows.length + 1;
  const id = "username" + "_" + rowCount + "_" + table;

  for (let i = 0; i < 2; i++) {
    const td = document.createElement("td");

    if (i === 0) {
      td.textContent = dataArr[i];
    } else {
      for (let j = 1; j < dataArr.length; j++) {
        td.textContent += dataArr[j] + "/";
      }
    }

    if (td.textContent.endsWith("/"))
      td.textContent = td.textContent.slice(0, -1);

    td.id = id;
    tr.appendChild(td);
  }
  let rows = Array.from(tBody.getElementsByTagName("tr"));
  tBody.innerHTML = "";
  tBody.append(tr, ...rows);

  const username = document.getElementById(id);
  username.append(copyButton(id));
}

const quizBtn = document.getElementById("submitButton");

quizBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if(token) dataKraken({token,col:"generatedUsernames"})
  let testResult;

  const quizOutput = generateQuizResult();
  const newQuizOutput = convertToGerman(quizOutput, myArraysObj);

  testResult = newQuizOutput[0];

  const captionH = document.getElementById("captionH");
  const captionP = document.getElementById("captionPUsername");

  captionH.innerText = `Hey, du scheinst dich für ${newQuizOutput[2]}, ${newQuizOutput[3]} und ${newQuizOutput[1]} zu interessieren! Weil es deine Einzigartigkeit unterstreicht, ist dein neuer Onlinename nun: `;
  captionP.innerText = testResult;
  captionP.append(copyButton("captionPUsername"));

  // Hide prev arrow
  prevBtn.style.display = "none";
  // Hide the submit button
  quizBtn.style.display = "none";

  // Create a reset button
  const resetBtn = document.createElement("button");
  resetBtn.id = "resetButton";
  resetBtn.classList.add("btn", "btn-primary", "mb-4");
  resetBtn.textContent = "Reset Quiz";
  resetBtn.style.display = "inline-block"; // Ensure it's visible
  quizBtn.parentNode.appendChild(resetBtn);

  // Add event listener to the reset button
  resetBtn.addEventListener("click", function () {
    resetQuiz(captionH, captionP);
  });
});

function resetQuiz(captionH, captionP) {
  // Uncheck all radio buttons
  const checkboxes = document.querySelectorAll('input[type="radio"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  captionH.innerText = "Vielen Dank für deine Teilnahme!";
  captionP.innerText =
    "Bitte klick auf den Button, um deine Antworten zu senden.";
  // Reset the carousel to the first slide
  const carousel = new bootstrap.Carousel(
    document.getElementById("questionCarousel")
  );
  carousel.to(0); // Move to the first slide (index 0)

  // Hide the "prev" button in the carousel and enable "next" button
  document.getElementById("prevBtn").style.display = "none";

  // Show the submit button again
  quizBtn.style.display = "inline-block";

  // Remove the reset button
  const resetBtn = document.getElementById("resetButton");
  resetBtn.remove();
}

const carousel = document.querySelectorAll("#prevBtn,#nextBtn");

const enableNextButton = () => {
  const activeSlide = document.querySelector(".carousel-item.active");
  const radioButtons = activeSlide.querySelectorAll('input[type="radio"]');

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      nextBtn.disabled = false; // Enable the "Next" button when a radio button is selected
      nextBtn.style.display = "block";
    });
  });
};

enableNextButton();

const arrowBtn = () => {
  const active = document.querySelector(".carousel-item.active");
  const slideIndex = [...active.parentElement.children].indexOf(active) + 1;

  if (slideIndex === 2) {
    prevBtn.style.display = "block";
  } else if (slideIndex === 1) {
    prevBtn.style.display = "none";
  } else if (slideIndex === 6) {
    nextBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  // Disable the "Next" button until a radio button is selected
  nextBtn.disabled = true;
  nextBtn.style.display = "none";
  enableNextButton();
};

[prevBtn, nextBtn].forEach((btn) => btn.addEventListener("click", arrowBtn));

document
  .getElementById("questionCarousel")
  .addEventListener("slid.bs.carousel", arrowBtn);





}

