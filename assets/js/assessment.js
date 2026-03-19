const questions = [
  { id: 'q2', text: 'You just ate, but 45 minutes later you are back in the kitchen. What happened?', options: [
    { text: 'Something stressed me out', code: 'O' },
    { text: 'I walked in without thinking', code: 'D' },
    { text: 'I did not eat enough earlier', code: 'F' },
    { text: 'I wanted something more satisfying', code: 'S' }
  ]},
  { id: 'q3', text: 'It is mid-afternoon and your energy drops. What do you usually do?', options: [
    { text: 'Look for something snacky', code: 'S' },
    { text: 'Grab something while doing something else', code: 'D' },
    { text: 'Want something comforting', code: 'O' },
    { text: 'Realize I barely ate earlier', code: 'F' }
  ]},
  { id: 'q4', text: 'You are watching a show at night. What usually happens?', options: [
    { text: 'I keep going back because it tastes good', code: 'S' },
    { text: 'I finish it without noticing', code: 'D' },
    { text: 'It feels like part of relaxing', code: 'O' },
    { text: 'I tend to eat around the same time', code: 'T' }
  ]},
  { id: 'q5', text: 'You had a stressful moment earlier. Later you:', options: [
    { text: 'Want something crunchy or distracting', code: 'S' },
    { text: 'Realize you ate without planning to', code: 'D' },
    { text: 'Want something warm or calming', code: 'O' },
    { text: 'Try to reset your day', code: 'T' }
  ]},
  { id: 'q6', text: 'Which feels most familiar?', options: [
    { text: 'Cravings hit at certain times or situations', code: 'T' },
    { text: 'I do not notice until I am already eating', code: 'D' },
    { text: 'I want specific textures or flavors', code: 'S' },
    { text: 'I crave food more when stressed', code: 'O' }
  ]},
  { id: 'q7', text: 'You open the pantry. What is going on?', options: [
    { text: 'Looking for something interesting', code: 'S' },
    { text: 'Already grabbing something', code: 'D' },
    { text: 'Wanting to feel better', code: 'O' },
    { text: 'Trying to stay on track', code: 'T' }
  ]},
  { id: 'q8', text: 'You planned to eat well but did not. Why?', options: [
    { text: 'It did not sound good', code: 'S' },
    { text: 'Got distracted', code: 'D' },
    { text: 'Needed comfort', code: 'O' },
    { text: 'My timing got off', code: 'F' }
  ]},
  { id: 'q9', text: 'You are home with nothing planned. What happens?', options: [
    { text: 'I snack for something to do', code: 'S' },
    { text: 'I eat while distracted', code: 'D' },
    { text: 'I eat to unwind', code: 'O' },
    { text: 'I eat randomly without structure', code: 'T' }
  ]},
  { id: 'q10', text: 'Think about a time you overate. What was true?', options: [
    { text: 'It tasted good so I kept going', code: 'S' },
    { text: 'I did not notice until later', code: 'D' },
    { text: 'I needed comfort', code: 'O' },
    { text: 'I had not eaten enough earlier', code: 'F' }
  ]},
  { id: 'q11', text: 'You feel very hungry late in the day. Why?', options: [
    { text: 'I kept putting off eating', code: 'F' },
    { text: 'I wanted something better later', code: 'S' },
    { text: 'I did not notice time passing', code: 'D' },
    { text: 'I was not in the mood earlier', code: 'O' }
  ]},
  { id: 'q12', text: 'On days you eat more at night, what is true earlier?', options: [
    { text: 'I ate lightly or skipped meals', code: 'F' },
    { text: 'Nothing felt satisfying', code: 'S' },
    { text: 'I was distracted', code: 'D' },
    { text: 'The day was draining', code: 'O' }
  ]},
  { id: 'q13', text: 'When eating, you usually:', options: [
    { text: 'Eat quickly', code: 'S' },
    { text: 'Barely notice', code: 'D' },
    { text: 'Eat slowly', code: 'O' },
    { text: 'Follow a routine', code: 'T' }
  ]},

  // Biological sex question moved here — after behavioral pattern is established
  { id: 'q1', text: 'Which of the following feels relevant to you right now?', options: [
    { text: 'I am a woman and this feels relevant', code: 'BF' },
    { text: 'I am a man', code: '' },
    { text: 'Prefer not to say', code: '' },
    { text: 'Not sure or this does not apply', code: '' }
  ]},

  { id: 'q14', text: 'Lately, which feels most true about your body and appetite?', options: [
    { text: 'About the same', code: '' },
    { text: 'I get hungry more quickly', code: 'F' },
    { text: 'I can eat the same but gain more easily', code: 'P' },
    { text: 'Hunger feels unpredictable', code: 'O' }
  ]},
  { id: 'q15', text: 'After eating, you usually feel:', options: [
    { text: 'Want something else soon', code: 'S' },
    { text: 'Neutral or unaware', code: 'D' },
    { text: 'Calmer', code: 'O' },
    { text: 'Back on track', code: 'T' }
  ]},
  { id: 'q16', text: 'When your eating feels off, what is usually happening?', options: [
    { text: 'Meals were inconsistent', code: 'F' },
    { text: 'I kept looking for something better', code: 'S' },
    { text: 'I was distracted', code: 'D' },
    { text: 'I was overwhelmed', code: 'O' }
  ]},
  { id: 'q17', text: 'Trying to eat better:', options: [
    { text: 'I get bored', code: 'S' },
    { text: 'I forget', code: 'D' },
    { text: 'It feels emotionally hard', code: 'O' },
    { text: 'It works until routine breaks', code: 'T' }
  ]},
  { id: 'q18', text: 'Your biggest challenge:', options: [
    { text: 'Things feel dull', code: 'S' },
    { text: 'I get distracted', code: 'D' },
    { text: 'Stress builds', code: 'O' },
    { text: 'My days are not consistent', code: 'T' }
  ]},
  { id: 'q19', text: 'When things go well:', options: [
    { text: 'I am engaged', code: 'S' },
    { text: 'I am focused', code: 'D' },
    { text: 'I feel calm', code: 'O' },
    { text: 'I have structure', code: 'T' }
  ]},
  { id: 'q20', text: 'Over the past 1\u20132 years, have you noticed:', options: [
    { text: 'No real changes', code: '' },
    { text: 'Slight energy or sleep shifts', code: 'O' },
    { text: 'More weight around my midsection without a big diet change', code: 'P' },
    { text: 'More emotional ups and downs tied to eating', code: 'O' }
  ]},
  { id: 'q21', text: 'When things fall apart:', options: [
    { text: 'I want something more interesting', code: 'S' },
    { text: 'I lose awareness', code: 'D' },
    { text: 'My emotions spike', code: 'O' },
    { text: 'My schedule shifts', code: 'T' }
  ]},
  { id: 'q22', text: 'Which of the following have you tried?', options: [
    { text: 'Small changes on my own', code: '' },
    { text: 'Structured programs or diets', code: '' },
    { text: 'Medical or clinical options', code: 'H' },
    { text: 'A mix of several approaches', code: 'H' }
  ]},
  { id: 'q23', text: 'How did those approaches work?', options: [
    { text: 'Hard to stay consistent', code: '' },
    { text: 'Worked for a while', code: '' },
    { text: 'Helped physically but not behaviorally', code: '' },
    { text: 'They did not address the real issue', code: '' }
  ]},
  { id: 'q24', text: 'Which feels closest now?', options: [
    { text: 'I am just starting', code: '' },
    { text: 'I have tried a few things', code: '' },
    { text: 'I have invested and still feel stuck', code: 'H' },
    { text: 'Something feels missing', code: '' }
  ]},
  { id: 'q25', text: 'Eating feels hardest when:', options: [
    { text: 'I need a pick-me-up', code: 'S' },
    { text: 'I am distracted', code: 'D' },
    { text: 'I am overwhelmed', code: 'O' },
    { text: 'My routine is off', code: 'T' }
  ]},
  { id: 'q26', text: 'Which feels most true:', options: [
    { text: 'I eat for something to do', code: 'S' },
    { text: 'I eat without thinking', code: 'D' },
    { text: 'I eat to feel better', code: 'O' },
    { text: 'I eat based on timing', code: 'T' }
  ]},
  { id: 'q27', text: 'When you try to stop snacking:', options: [
    { text: 'I feel restless', code: 'S' },
    { text: 'I do not notice', code: 'D' },
    { text: 'I feel uncomfortable', code: 'O' },
    { text: 'I try to control it', code: 'T' }
  ]},
  { id: 'q28', text: 'You trust yourself most when:', options: [
    { text: 'I am engaged', code: 'S' },
    { text: 'I am present', code: 'D' },
    { text: 'I feel settled', code: 'O' },
    { text: 'I have a plan', code: 'T' }
  ]},
  { id: 'q29', text: 'What helps you most in life:', options: [
    { text: 'Challenge', code: 'S' },
    { text: 'Hands-on tasks', code: 'D' },
    { text: 'Calm environments', code: 'O' },
    { text: 'Systems', code: 'T' }
  ]},
  { id: 'q30', text: 'If your eating improved, what would help most?', options: [
    { text: 'Eating more consistently', code: 'F' },
    { text: 'Better options', code: 'S' },
    { text: 'Paying attention', code: 'D' },
    { text: 'Managing stress', code: 'O' }
  ]},
  { id: 'q31', text: 'Sometimes eating more than planned is because:', options: [
    { text: 'I did not eat enough earlier', code: 'F' },
    { text: 'It tasted good', code: 'S' },
    { text: 'I did not notice', code: 'D' },
    { text: 'I needed comfort', code: 'O' }
  ]},
  { id: 'q32', text: 'After eating more than expected:', options: [
    { text: 'I move on', code: '' },
    { text: 'I eat lighter later', code: '' },
    { text: 'I feel like I should make up for it', code: 'C' },
    { text: 'I feel upset with myself', code: 'C' }
  ]},
  { id: 'q33', text: 'When eating feels out of control:', options: [
    { text: 'It passes', code: '' },
    { text: 'I try to adjust later', code: '' },
    { text: 'I feel guilt or pressure', code: 'C' },
    { text: 'I feel stuck in the pattern', code: 'O' }
  ]},
  { id: 'q34', text: 'Which best describes your stage?', options: [
    { text: 'Under 35', code: '' },
    { text: '35\u201340', code: '' },
    { text: '40\u201350 with cycle changes', code: 'P' },
    { text: '50+', code: '' }
  ]},
  { id: 'q35', text: 'When your day is structured:', options: [
    { text: 'Food is less interesting', code: 'S' },
    { text: 'I stay more aware', code: 'D' },
    { text: 'I feel more settled', code: 'O' },
    { text: 'Eating feels easier', code: 'T' }
  ]},
  { id: 'q36', text: 'If nothing changed, what concerns you most?', options: [
    { text: 'I will keep chasing something satisfying', code: 'S' },
    { text: 'I will keep doing this without noticing', code: 'D' },
    { text: 'I will keep using food to cope', code: 'O' },
    { text: 'I will keep falling off track', code: 'T' }
  ]}
];

const container = document.getElementById('questionContainer');
const seeResultsBtn = document.getElementById('seeResultsBtn');
const clearBtn = document.getElementById('clearBtn');
const formMessage = document.getElementById('formMessage');
const answeredDisplay = document.getElementById('answeredCount');
const totalDisplay = document.getElementById('totalCount');

function renderQuestions() {
  if (totalDisplay) totalDisplay.textContent = questions.length;

  questions.forEach((question, index) => {
    const block = document.createElement('div');
    block.className = 'question-block';
    block.dataset.qid = question.id;

    block.innerHTML = `
      <div class="question-meta">
        <span class="question-number">${index + 1} of ${questions.length}</span>
      </div>
      <p class="question-text">${question.text}</p>
      <div class="option-list">
        ${question.options.map((option, optionIndex) => `
          <label class="option-row" for="${question.id}_${optionIndex}">
            <input
              type="radio"
              id="${question.id}_${optionIndex}"
              name="${question.id}"
              value="${option.code}"
              data-text="${option.text.replace(/"/g, '&quot;')}"
            />
            <span class="option-text">${option.text}</span>
          </label>
        `).join('')}
      </div>
    `;

    container.appendChild(block);
  });

  // Update answered count on any radio change
  container.addEventListener('change', () => {
    const count = answeredCount();
    if (answeredDisplay) answeredDisplay.textContent = count;
  });
}

function answeredCount() {
  return questions.reduce((total, question) => {
    return total + (document.querySelector(`input[name="${question.id}"]:checked`) ? 1 : 0);
  }, 0);
}

function getScores() {
  const scores = { S: 0, O: 0, D: 0, T: 0, F: 0, C: 0, P: 0, BF: 0, H: 0 };
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
  const ranked = ['S', 'O', 'D', 'T']
    .map((key) => [key, scores[key]])
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
    types: { primaryCode, secondaryCode },
    flags: {
      fueling: scores.F >= 3,
      clinical: scores.C >= 2,
      perimenopause: scores.BF >= 1 && scores.P >= 2
    },
    // investmentLevel is payload-only — never rendered to the user
    investmentLevel: scores.H >= 2 ? 'higher' : scores.H === 1 ? 'moderate' : 'lower',
    answers: collectSelectedAnswers()
  };

  localStorage.setItem('lainiAssessmentResult', JSON.stringify(payload));
}

function handleSubmit() {
  const count = answeredCount();
  if (count !== questions.length) {
    formMessage.textContent = `Please answer all ${questions.length} questions before continuing. You have completed ${count}.`;
    formMessage.classList.add('visible');
    // Scroll to first unanswered
    for (const question of questions) {
      const answered = document.querySelector(`input[name="${question.id}"]:checked`);
      if (!answered) {
        const block = document.querySelector(`[data-qid="${question.id}"]`);
        if (block) block.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      }
    }
    return;
  }
  formMessage.textContent = '';
  formMessage.classList.remove('visible');
  buildPayload();
  window.location.href = 'results.html';
}

function handleClear() {
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.checked = false;
  });
  formMessage.textContent = '';
  formMessage.classList.remove('visible');
  if (answeredDisplay) answeredDisplay.textContent = '0';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

renderQuestions();
seeResultsBtn.addEventListener('click', handleSubmit);
clearBtn.addEventListener('click', handleClear);
