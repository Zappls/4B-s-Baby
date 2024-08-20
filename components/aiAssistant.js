
import { aiApiCall } from "../utilities/aiApiCall.js";

const configAi = {
    sysContent: `Du bist ein Internet Security Bot und stellst dich als Ernesto Sanchez vor. Du gibst kurze knackige und wenn es geht mit einer Brise humor gewürzten antworten. du antwortest immer in der sprache in der mit dir gesprochen wird`,

};


const aiAssistant = () => {
  return `
  <button class="btn btn-primary" id="aiAssistant" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Ai Bot
</button>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Security Bot</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div class="langBot d-flex">
  </div>
<div class="form-floating">
  <textarea id="question" class="form-control mb-4" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
</div>
    <button id="submitQ" type="button" class="btn btn-primary"> Senden</button>
    <p id="aiAnswer"><p>
  </div>
</div>
    
    `;
};


export const createAssistant = (target) => {
  
  document.querySelector(target).innerHTML += aiAssistant();

  document.getElementById("submitQ").addEventListener("click", async() => {
    
      const ele = document.getElementById("aiAnswer")
      const question = document.getElementById("question").value
      const sysContent = configAi.sysContent
      const answer =  await aiApiCall(question,sysContent)
  
      ele.innerHTML = answer
  
  })

}