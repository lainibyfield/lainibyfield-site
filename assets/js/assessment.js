const questions = [
  { id: 'q01', text: 'Which feels most familiar?', options: [
    { text: 'Cravings hit at certain times or situations', code: 'T' },
    { text: 'I do not notice until I am already eating', code: 'D' },
    { text: 'I want specific textures or flavors', code: 'S' },
    { text: 'I crave food more when stressed', code: 'O' },
    { text: 'None of these feel familiar', code: '' }
  ]},
  { id: 'q02', text: 'Trying to eat better:', options: [
    { text: 'I get bored', code: 'S' },
    { text: 'I forget', code: 'D' },
    { text: 'It feels emotionally hard', code: 'O' },
    { text: 'It works until routine breaks', code: 'T' },
    { text: 'It works until I am around other people', code: 'G' },
    { text: 'I do not find it particularly hard', code: '' }
  ]},
  { id: 'q03', text: 'Eating feels hardest when:', options: [
    { text: 'I need a pick-me-up', code: 'S' },
    { text: 'I am distracted', code: 'D' },
    { text: 'I am overwhelmed', code: 'O' },
    { text: 'My routine is off', code: 'T' },
    { text: 'I am eating with others', code: 'G' },
    { text: 'Eating does not usually feel hard', code: '' }
  ]},
  { id: 'q04', text: 'You are home with nothing planned. What happens?', options: [
    { text: 'I snack as something to do', code: 'S' },
    { text: 'I eat while distracted', code: 'D' },
    { text: 'I want to go out or find someone to eat with', code: 'G' },
    { text: 'I eat randomly \u2014 without my usual structure I lose track', code: 'T' },
    { text: 'Nothing much — I am comfortable with unplanned time', code: '' }
  ]},
  { id: 'q05', text: 'You are watching a show at night. What usually happens with food?', options: [
    { text: 'I keep searching for something better to eat', code: 'S' },
    { text: 'I finish the snack without noticing — my hand just moves', code: 'D' },
    { text: 'It feels like a reward I would usually share', code: 'G' },
    { text: 'I eat because it is my scheduled wind-down time', code: 'T' },
    { text: 'I am focused on the show and do not usually eat in this setting', code: '' }
  ]},
  { id: 'q06', text: 'Think about a time you overate. What was true?', options: [
    { text: 'It tasted good so I kept going', code: 'S' },
    { text: 'I am not sure — I do not always notice when it is happening', code: 'D' },
    { text: 'I had not eaten enough earlier', code: 'F' },
    { text: 'I was at a social event and it felt like participation', code: 'G' },
    { text: 'I do not think this happens to me', code: '' }
  ]},
  { id: 'q07', text: 'Which best describes you?', options: [
    { text: 'Biological female', code: 'BF' },
    { text: 'Biological male', code: '' },
    { text: 'Prefer not to say', code: '' },
    { text: 'Not sure / intersex', code: '' }
  ]},
  { id: 'q08', text: 'Which best describes your stage?', options: [
    { text: 'Under 35', code: '' },
    { text: '35\u201340', code: 'BF' },
    { text: '40\u201350 with cycle changes', code: 'P' },
    { text: '50+', code: 'P' }
  ]},
  { id: 'q09', text: 'Lately, which feels most true about your body and appetite?', options: [
    { text: 'About the same', code: '' },
    { text: 'I get hungry more quickly', code: 'F' },
    { text: 'I can eat the same but gain more easily', code: 'P' },
    { text: 'Hunger feels unpredictable', code: 'O' }
  ]},
  { id: 'q10', text: 'Over the past 1–2 years, have you noticed:', options: [
    { text: 'No real changes', code: '' },
    { text: 'Slight energy or sleep shifts', code: 'P' },
    { text: 'More weight around my midsection without a big diet change', code: 'P' },
    { text: 'More emotional ups and downs tied to eating', code: 'O' }
  ]},
  { id: 'q11', text: 'You just ate, but 45 minutes later you are back in the kitchen. What happened?', options: [
    { text: 'Something stressed me out', code: 'O' },
    { text: 'I walked in without thinking', code: 'D' },
    { text: 'I did not eat enough earlier', code: 'F' },
    { text: 'I wanted something more satisfying', code: 'S' },
    { text: 'This does not happen to me', code: '' }
  ]},
  { id: 'q12', text: 'You had a stressful moment earlier. Later you:', options: [
    { text: 'Want something crunchy or distracting', code: 'S' },
    { text: 'Realize you ate without planning to', code: 'D' },
    { text: 'Want something warm or calming', code: 'O' },
    { text: 'Try to reset your day', code: 'T' },
    { text: 'Stress does not usually affect my eating', code: '' }
  ]},
  { id: 'q13', text: 'You planned to eat well but did not. Why?', options: [
    { text: 'What I planned was not available', code: '' },
    { text: 'Nothing available appealed to me', code: 'S' },
    { text: 'Got distracted', code: 'D' },
    { text: 'Needed comfort', code: 'O' },
    { text: 'My timing got off', code: 'F' },
    { text: 'I was with others and went along with the group', code: 'G' },
    { text: 'This does not usually happen to me', code: '' }
  ]},
  { id: 'q14', text: 'You feel very hungry late in the day. Why?', options: [
    { text: 'I kept putting off eating', code: 'F' },
    { text: 'I wanted something better later', code: 'S' },
    { text: 'I was absorbed in something else and forgot', code: 'D' },
    { text: 'I was not in the mood earlier', code: 'O' },
    { text: 'I do not usually get very hungry late in the day', code: '' }
  ]},


  { id: 'q15', text: 'When your eating feels off, what is usually happening?', options: [
    { text: 'Meals were inconsistent', code: 'F' },
    { text: 'I kept looking for something better', code: 'S' },
    { text: 'I was distracted', code: 'D' },
    { text: 'I was overwhelmed', code: 'O' },
    { text: 'My eating rarely feels off', code: '' }
  ]},
  { id: 'q16', text: 'When your eating goes sideways for a day, what caused it?', options: [
    { text: 'I wanted something more interesting', code: 'S' },
    { text: 'I lost awareness', code: 'D' },
    { text: 'My emotions spiked', code: 'O' },
    { text: 'My schedule shifted', code: 'T' },
    { text: 'I was at a social event or meal out', code: 'G' },
    { text: 'My eating rarely goes sideways', code: '' }
  ]},
  { id: 'q17', text: 'Which of the following have you tried?', options: [
    { text: 'Small changes on my own', code: '' },
    { text: 'Structured programs or diets', code: '' },
    { text: 'A combination of the above', code: 'H' },
    { text: 'Medical or clinical options', code: 'H' },
    { text: 'All of the above \u2014 I feel like I have tried everything', code: 'H' }
  ]},
  { id: 'q18', text: 'Which feels closest now?', options: [
    { text: 'I am not focused on changing my eating right now', code: '' },
    { text: 'I am just starting to think about my eating or weight', code: '' },
    { text: 'I have tried a few approaches but nothing has stuck', code: '' },
    { text: 'I have invested significant time and money trying to figure this out and still feel stuck', code: 'H' },
    { text: 'I know what I should do but something keeps getting in the way', code: 'H' }
  ]},
  { id: 'q19', text: 'How would you describe your typical physical output or training volume?', options: [
    { text: 'High intensity or long duration \u2014 four or more days a week', code: 'HO' },
    { text: 'Consistent and moderate \u2014 I rarely miss my scheduled sessions', code: 'T' },
    { text: 'I mostly move when it is social or done with others', code: 'G' },
    { text: 'Light or recreational movement as it fits into my day', code: '' },
    { text: 'I am currently not very physically active', code: '' }
  ]},
  { id: 'q20', text: 'What is your primary focus for food after a high-effort day or workout?', options: [
    { text: 'I prioritize a specific refuel to recover my energy', code: 'HO' },
    { text: 'I stick to my next scheduled meal to keep my rhythm', code: 'T' },
    { text: 'I enjoy a reward meal \u2014 often sharing it with others', code: 'G' },
    { text: 'I do not usually change my eating based on my activity', code: '' },
    { text: 'I do not eat, or eat very little, to preserve the calorie deficit from the workout', code: 'C' }
  ]},
  { id: 'q21', text: 'If your eating improved, what would help most?', options: [
    { text: 'Eating more consistently', code: 'F' },
    { text: 'Better options available', code: 'S' },
    { text: 'Paying more attention', code: 'D' },
    { text: 'Managing stress better', code: 'O' },
    { text: 'I think my eating is fine', code: '' }
  ]},
  { id: 'q22', text: 'Sometimes eating more than planned is because:', options: [
    { text: 'I did not eat enough earlier', code: 'F' },
    { text: 'It tasted good', code: 'S' },
    { text: 'I am not sure — it happens before I decide', code: 'D' },
    { text: 'Everyone around me was eating and it felt normal', code: 'G' },
    { text: 'This does not happen to me', code: '' }
  ]},
  { id: 'q23', text: 'When your day is structured:', options: [
    { text: 'Food is less interesting', code: 'S' },
    { text: 'I stay more aware', code: 'D' },
    { text: 'My meals are on my own terms', code: 'G' },
    { text: 'Eating feels easier', code: 'T' },
    { text: 'My days are usually structured', code: '' }
  ]},
  { id: 'q24', text: 'When you are alone with no plans, no one cooking, and no occasion, what usually happens with eating?', options: [
    { text: 'I eat when I feel hungry', code: '' },
    { text: 'I often forget to eat or realize later I never did', code: 'G' },
    { text: 'I eat out of habit or on a regular schedule regardless', code: 'T' },
    { text: 'I graze without really deciding to', code: 'D' },
    { text: 'I look for something interesting or satisfying', code: 'S' }
  ]},
  { id: 'q25', text: 'When someone you care about offers you food you were not planning to eat, you:', options: [
    { text: 'Usually decline without much difficulty', code: '' },
    { text: 'Often eat it because refusing feels unkind or awkward', code: 'G' },
    { text: 'Eat it if it looks good regardless of who offered', code: 'S' },
    { text: 'Eat it automatically without really deciding', code: 'D' },
    { text: 'Eat it and feel guilty or conflicted afterward', code: 'C' }
  ]},
  { id: 'q26', text: 'Before a dinner out or social event with food, you:', options: [
    { text: 'Look forward to it without much thought about food', code: '' },
    { text: 'Think ahead about what you will and will not eat', code: 'G' },
    { text: 'Feel some anxiety about what will be available', code: 'G' },
    { text: 'Plan to eat less earlier in the day to make room', code: 'G' }
  ]},
  { id: 'q27', text: 'How does your eating at home compare to eating out or at social events?', options: [
    { text: 'Much more controlled at home', code: 'G' },
    { text: 'About the same either way', code: '' },
    { text: 'Actually harder at home', code: 'S' },
    { text: 'Depends on my mood not the setting', code: 'O' }
  ]},
  { id: 'q28', text: 'After a social event where you ate carefully, what usually happens when you get home?', options: [
    { text: 'Nothing much \u2014 I move on as normal', code: '' },
    { text: 'I often eat more than I planned once I am back', code: 'G' },
    { text: 'I feel relieved and eat something comforting', code: 'O' },
    { text: 'I feel good about how the event went and stick to my plan', code: 'T' },
    { text: 'I rarely eat carefully at social events in the first place', code: '' }
  ]},
  { id: 'q29', text: 'When a meal gets delayed or pushed back, what usually happens?', options: [
    { text: 'I eat more than usual at the next opportunity', code: 'T' },
    { text: 'I get irritable or distracted until I eat', code: 'O' },
    { text: 'I do not notice much', code: 'D' },
    { text: 'I look for something to tide me over', code: 'S' },
    { text: 'This does not affect me much', code: '' }
  ]},
  { id: 'q30', text: 'Your eating feels most manageable when:', options: [
    { text: 'My day goes roughly as planned', code: 'T' },
    { text: 'I am somewhere familiar', code: 'D' },
    { text: 'I am not stressed or overwhelmed', code: 'O' },
    { text: 'I am not expected to eat a certain way or be seen eating', code: 'G' },
    { text: 'My eating feels manageable in general', code: '' }
  ]},
  { id: 'q31', text: 'When your week is unpredictable, your eating:', options: [
    { text: 'Follows the disruption — inconsistent days mean inconsistent eating', code: 'T' },
    { text: 'Follows my mood more than usual', code: 'O' },
    { text: 'Becomes more automatic \u2014 I eat whatever is around', code: 'D' },
    { text: 'Involves more unplanned meals out or social eating', code: 'G' },
    { text: 'Varies but my eating stays about the same either way', code: '' }
  ]},
  { id: 'q32', text: 'The last time your eating felt off, what was different about that day?', options: [
    { text: 'My routine had broken down', code: 'T' },
    { text: 'I was in a different place or situation', code: 'D' },
    { text: 'Something was emotionally harder', code: 'O' },
    { text: 'I was with others or at an event', code: 'G' },
    { text: 'My eating does not usually feel off', code: '' }
  ]},
  { id: 'q33', text: 'How do your eating intentions at the start of the day usually compare to how the day ends?', options: [
    { text: 'They are roughly consistent', code: '' },
    { text: 'I start well but the evening pulls me off course', code: 'F' },
    { text: 'I intend to eat very little and then lose control later', code: 'C' },
    { text: 'I do not usually set intentions around eating', code: 'D' },
    { text: 'It depends entirely on what the day brings', code: 'T' }
  ]},
  { id: 'q34', text: 'After eating more than you intended, what is most likely to happen?', options: [
    { text: 'I move on without much thought', code: '' },
    { text: 'I feel emotionally low for a while but it passes', code: 'O' },
    { text: 'I feel I need to compensate \u2014 eating less, exercising, or skipping the next meal', code: 'C' },
    { text: 'I feel stuck in a cycle that repeats regardless of what I intend', code: 'C' },
    { text: 'I return to my normal eating at the next meal', code: 'T' }
  ]},
  { id: 'q35', text: 'When eating feels out of control:', options: [
    { text: 'It passes', code: '' },
    { text: 'I feel unsettled but it resolves', code: '' },
    { text: 'I feel guilt or pressure', code: 'C' },
    { text: 'I feel stuck in the pattern', code: 'O' }
  ]},
  { id: 'q36', text: 'When you feel like you have eaten too much, what usually follows?', options: [
    { text: 'I move on without much thought', code: '' },
    { text: 'I return to my usual structure or timing', code: 'T' },
    { text: 'I find ways to get rid of it \u2014 including making myself sick', code: 'C' },
    { text: 'I feel I have failed and it affects how I eat for the rest of the day', code: 'C' },
    { text: 'I feel low and disconnected for a while afterward', code: 'O' }
  ]}
];

const container = document.getElementById('questionContainer');
const seeResultsBtn = document.getElementById('seeResultsBtn');
const clearBtn = document.getElementById('clearBtn');
const formMessage = document.getElementById('formMessage');


// ── PRE-SCREEN LAYER ARCHITECTURE ─────────────────────────────────────────────
// Layer 1: Q1-3 — General pre-screen. 2+ neutral = No Strong Pattern exit.
// Layer 2: Q4-6 — Seeker quick-screen. 2+ S answers = early Seeker exit.
// Layer 3: Q7-36 — Full assessment.

const LAYER1 = [0, 1, 2];     // indices into questions array
const LAYER2 = [3, 4, 5];     // indices into questions array
const LAYER3_START = 6;        // index where full assessment begins

let currentLayer = 1;
let prescreenComplete = false;

function countNeutralAnswers(indices) {
  return indices.reduce((count, i) => {
    const q = questions[i];
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    return count + (selected && selected.value === '' ? 1 : 0);
  }, 0);
}

function countCodeAnswers(indices, code) {
  return indices.reduce((count, i) => {
    const q = questions[i];
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    return count + (selected && selected.value === code ? 1 : 0);
  }, 0);
}

function allAnswered(indices) {
  return indices.every(i => {
    const q = questions[i];
    return document.querySelector(`input[name="${q.id}"]:checked`);
  });
}

function showLayer(indices) {
  // Hide all question blocks first
  document.querySelectorAll('.question-block').forEach(b => {
    b.style.display = 'none';
  });
  // Show only the blocks for this layer
  indices.forEach(i => {
    const block = document.querySelectorAll('.question-block')[i];
    if (block) block.style.display = 'block';
  });
}

function showAllQuestions() {
  document.querySelectorAll('.question-block').forEach(b => {
    b.style.display = 'block';
  });
}

function showPrescreenExit(type) {
  // Store exit result and redirect to results
  // Collect Layer 1 answers anonymously — codes only, no text, no session ID
  const layer1Codes = [0, 1, 2].map(i => {
    const q = questions[i];
    const sel = document.querySelector(`input[name="${q.id}"]:checked`);
    return sel ? sel.value : null;
  });

  const exitPayload = {
    completedAt: new Date().toISOString(),
    prescreenExit: type,
    // Anonymous: week of year only, no exact timestamp stored
    weekOfYear: Math.ceil((new Date() - new Date(new Date().getFullYear(), 0, 1)) / 604800000),
    scores: getScores(),
    types: {
      primaryCode: type === 'seeker' ? 'S' : 'NP',
      secondaryCode: type === 'seeker' ? 'O' : 'NP'
    },
    flags: {
      fueling: false,
      highOutput: false,
      clinical: false,
      perimenopause: false
    },
    investmentLevel: 'lower',
    // Layer 1 answer codes only — no text, no PII, consistent with anonymous posture
    layer1Answers: layer1Codes,
    // Track whether this is a fresh NP or a return from Layer 3 completion
    npReturnFromFull: false,
    answers: collectSelectedAnswers()
  };
  localStorage.setItem('lainiAssessmentResult', JSON.stringify(exitPayload));
  window.location.href = 'results.html';
}

function buildContinueBtn() {
  // Add a Continue button between layers
  let btn = document.getElementById('continueBtn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'continueBtn';
    btn.className = 'continue-btn';
    btn.textContent = 'Continue';
    btn.style.cssText = `
      display: none;
      margin: 1.5rem auto;
      padding: 0.75rem 2.5rem;
      background: var(--accent, #7a5c3e);
      color: #faf7f2;
      border: none;
      border-radius: 4px;
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.1rem;
      cursor: pointer;
      letter-spacing: 0.04em;
    `;
    btn.addEventListener('click', handleContinue);
    // Insert before the submit button
    const submitWrap = document.querySelector('.submit-wrap') || 
                       document.getElementById('seeResultsBtn').parentNode;
    container.parentNode.insertBefore(btn, submitWrap);
  }
  return btn;
}

function handleContinue() {
  if (currentLayer === 1) {
    // Check Layer 1 — if 2+ neutral, exit to No Strong Pattern
    if (!allAnswered(LAYER1)) {
      formMessage.textContent = 'Please answer all three questions to continue.';
      return;
    }
    const neutralCount = countNeutralAnswers(LAYER1);
    if (neutralCount >= 2) {
      showPrescreenExit('noPattern');
      return;
    }
    // Move to Layer 2
    currentLayer = 2;
    formMessage.textContent = '';
    showLayer(LAYER2);
    updatePrescreenProgress(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (currentLayer === 2) {
    // Check Layer 2 — if 2+ Seeker, exit to Seeker result
    if (!allAnswered(LAYER2)) {
      formMessage.textContent = 'Please answer all three questions to continue.';
      return;
    }
    const seekerCount = countCodeAnswers(LAYER2, 'S');
    if (seekerCount >= 2) {
      showPrescreenExit('seeker');
      return;
    }
    // Move to Layer 3 — full assessment
    currentLayer = 3;
    prescreenComplete = true;
    formMessage.textContent = '';
    showAllQuestions();
    document.getElementById('continueBtn').style.display = 'none';
    updatePrescreenProgress(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function updatePrescreenProgress(layer) {
  // Update total count in progress bar
  const totalEl = document.getElementById('totalCount');
  if (layer === 1)      { if (totalEl) totalEl.textContent = '3'; }
  else if (layer === 2) { if (totalEl) totalEl.textContent = '6'; }
  else                  { if (totalEl) totalEl.textContent = questions.length; }

  // Update layer indicator dots
  const dots = [
    document.getElementById('dot1'),
    document.getElementById('dot2'),
    document.getElementById('dot3')
  ];
  const layerLabel = document.getElementById('layerLabel');
  const labels = [
    'A few questions to get started',
    'A little more about your pattern',
    'Full assessment'
  ];
  dots.forEach((d, i) => {
    if (d) d.className = 'layer-dot' + (i < layer ? ' active' : '');
  });
  if (layerLabel) layerLabel.textContent = labels[layer - 1] || '';

  // Show/hide submit and continue buttons
  const submitBtn = document.getElementById('seeResultsBtn');
  const continueBtn = document.getElementById('continueBtn');
  if (submitBtn)  submitBtn.style.display  = (layer === 3) ? 'block' : 'none';
  if (continueBtn) continueBtn.style.display = (layer < 3)  ? 'block' : 'none';
}

function initPrescreen() {
  // Start with Layer 1 only
  buildContinueBtn();
  showLayer(LAYER1);
  updatePrescreenProgress(1);
  document.getElementById('continueBtn').style.display = 'block';
  // Hide the main submit button until Layer 3
  const submitBtn = document.getElementById('seeResultsBtn');
  if (submitBtn) submitBtn.style.display = 'none';
}

function renderQuestions() {
  questions.forEach((question, index) => {
    const block = document.createElement('div');
    block.className = 'question-block';

    block.innerHTML = `
      <span class="question-number">Question ${index + 1}</span>
      <p class="question-text">${question.text}</p>
      <div class="option-list">
        ${question.options.map((option, optionIndex) => `
          <label class="option-row" for="${question.id}_${optionIndex}">
            <input type="radio" id="${question.id}_${optionIndex}" name="${question.id}" value="${option.code}" data-text="${option.text.replace(/"/g, '&quot;')}" />
            ${option.text}
          </label>
        `).join('')}
      </div>
    `;

    container.appendChild(block);
  });
}

function answeredCount() {
  return questions.reduce((total, question) => total + (document.querySelector(`input[name="${question.id}"]:checked`) ? 1 : 0), 0);
}

function getScores() {
  const scores = { S: 0, O: 0, D: 0, T: 0, F: 0, G: 0, C: 0, P: 0, BF: 0, H: 0, HO: 0 };

  questions.forEach((question) => {
    const selected = document.querySelector(`input[name="${question.id}"]:checked`);
    if (!selected) return;
    const code = selected.value;
    if (code && Object.prototype.hasOwnProperty.call(scores, code)) {
      scores[code] += 1;
    }
  });

  return scores;
}

function getTopTypes(scores) {
  // Normalize by number of questions each code appears in
  // so patterns with fewer questions are not structurally disadvantaged
  const questionCounts = { S: 19, O: 21, D: 22, T: 19, G: 19 };

  const ranked = ['S', 'O', 'D', 'T', 'G']
    .map((key) => [key, scores[key] / questionCounts[key]])
    .sort((a, b) => b[1] - a[1]);

  return { primaryCode: ranked[0][0], secondaryCode: ranked[1][0] };
}

function collectSelectedAnswers() {
  return questions.map((question) => {
    const selected = document.querySelector(`input[name="${question.id}"]:checked`);
    return {
      id: question.id,
      question: question.text,
      answer: selected ? selected.dataset.text : null,
      code: selected ? selected.value : null
    };
  });
}

function buildPayload() {
  const scores = getScores();
  const { primaryCode, secondaryCode } = getTopTypes(scores);

  const payload = {
    completedAt: new Date().toISOString(),
    scores,
    types: {
      primaryCode,
      secondaryCode
    },
    flags: {
      fueling: scores.F >= 3,
      highOutput: scores.HO >= 2,
      clinical: scores.C >= 2,
      perimenopause: scores.BF >= 1 && scores.P >= 2
    },
    investmentLevel: scores.H >= 2 ? 'higher' : scores.H === 1 ? 'moderate' : 'lower',
    answers: collectSelectedAnswers()
  };

  localStorage.setItem('lainiAssessmentResult', JSON.stringify(payload));
}

function handleSubmit() {
  if (!prescreenComplete) {
    handleContinue();
    return;
  }
  const count = answeredCount();
  if (count !== questions.length) {
    formMessage.textContent = `Please answer all ${questions.length} questions before viewing your results. You have completed ${count}.`;
    return;
  }
  formMessage.textContent = '';
  buildPayload();
  window.location.href = 'results.html';
}

function handleClear() {
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.checked = false;
  });
  formMessage.textContent = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

renderQuestions();
initPrescreen();
seeResultsBtn.addEventListener('click', handleSubmit);
clearBtn.addEventListener('click', handleClear);
