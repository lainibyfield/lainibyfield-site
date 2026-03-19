const questions = [
  { id: 'q1', text: 'After a meal, do you find yourself looking for more food — and why?', options: [
    { text: 'Something stressed me out', code: 'O' },
    { text: 'I walk back in without thinking', code: 'D' },
    { text: 'I did not eat enough earlier', code: 'F' },
    { text: 'I wanted something more satisfying', code: 'S' },
    { text: 'Not really', code: '' }
  ]},
  { id: 'q2', text: 'How does your energy change mid-afternoon?', options: [
    { text: 'It drops and I look for something snacky', code: 'S' },
    { text: 'It drops and I grab something while doing something else', code: 'D' },
    { text: 'It drops and I want something comforting', code: 'O' },
    { text: 'It drops and I realize I barely ate earlier', code: 'F' },
    { text: "It stays pretty even", code: '' }
  ]},
  { id: 'q3', text: 'When you watch something at night, do you eat — and why?', options: [
    { text: 'Yes — I keep going back because it tastes good', code: 'S' },
    { text: 'Yes — I finish it without noticing', code: 'D' },
    { text: 'Yes — it feels like part of relaxing', code: 'O' },
    { text: 'Yes — I tend to eat around the same time', code: 'T' },
    { text: "Not really", code: '' }
  ]},
  { id: 'q4', text: 'You had a stressful moment earlier. Later you:', options: [
    { text: 'Want something crunchy or distracting', code: 'S' },
    { text: 'Realize you ate without planning to', code: 'D' },
    { text: 'Want something warm or calming', code: 'O' },
    { text: 'Try to reset your day', code: 'T' },
    { text: "Stress doesn't usually lead me to food", code: '' }
  ]},
  { id: 'q5', text: 'Which feels most familiar?', options: [
    { text: 'Cravings hit at certain times or situations', code: 'T' },
    { text: 'I do not notice until I am already eating', code: 'D' },
    { text: 'I want specific textures or flavors', code: 'S' },
    { text: 'I crave food more when stressed', code: 'O' },
    { text: "None of these feel familiar", code: '' }
  ]},
  { id: 'q6', text: 'You open the pantry. What is going on?', options: [
    { text: 'Looking for something interesting', code: 'S' },
    { text: 'Already grabbing something', code: 'D' },
    { text: 'Wanting to feel better', code: 'O' },
    { text: 'Trying to stay on track', code: 'T' },
    { text: "I'm there to clean up or put something away", code: '' }
  ]},
  { id: 'q7', text: 'Think of a day when your eating felt off track. What was usually going on?', options: [
    { text: 'Nothing sounded appealing', code: 'S' },
    { text: 'I got distracted', code: 'D' },
    { text: 'I needed comfort', code: 'O' },
    { text: 'My timing got off', code: 'F' },
    { text: "My eating felt on track that day", code: '' }
  ]},
  { id: 'q8', text: 'When you are home with unstructured time, what tends to happen with eating?', options: [
    { text: 'I snack for something to do', code: 'S' },
    { text: 'I eat while distracted', code: 'D' },
    { text: 'I eat to unwind', code: 'O' },
    { text: 'I forget to eat entirely', code: 'F' },
    { text: "My eating doesn't really change", code: '' }
  ]},
  { id: 'q9', text: 'On unstructured days, how would you describe your eating pattern?', options: [
    { text: 'Random and scattered', code: 'T' },
    { text: 'Tied to whatever I am doing', code: 'D' },
    { text: 'More emotional than usual', code: 'O' },
    { text: 'Lighter than usual — I just do not think about it', code: 'F' },
    { text: 'Pretty much the same as any other day', code: '' }
  ]},
  { id: 'q10', text: 'Think about a time you overate. What was true?', options: [
    { text: 'It tasted good so I kept going', code: 'S' },
    { text: 'I did not notice until later', code: 'D' },
    { text: 'I needed comfort', code: 'O' },
    { text: 'I had not eaten enough earlier', code: 'F' },
    { text: "I don't think I overeat in that way", code: '' }
  ]},
  { id: 'q11', text: 'You feel very hungry late in the day. Why?', options: [
    { text: 'I kept putting off eating', code: 'F' },
    { text: 'I wanted something better later', code: 'S' },
    { text: 'I did not notice time passing', code: 'D' },
    { text: 'I was not in the mood earlier', code: 'O' },
    { text: "I don't usually get very hungry late in the day", code: '' }
  ]},
  { id: 'q12', text: 'On days you eat more at night, what is true earlier?', options: [
    { text: 'I ate lightly or skipped meals', code: 'F' },
    { text: 'Nothing felt satisfying', code: 'S' },
    { text: 'I was distracted', code: 'D' },
    { text: 'The day was draining', code: 'O' },
    { text: "I don't usually eat more at night", code: '' }
  ]},
  { id: 'q13', text: 'When eating, you usually:', options: [
    { text: 'Eat quickly', code: 'S' },
    { text: 'Barely notice', code: 'D' },
    { text: 'Eat slowly', code: 'O' },
    { text: 'Follow a routine', code: 'T' },
    { text: "I don't notice a strong pattern either way", code: '' }
  ]},

  // Combined biological sex + age question — drives perimenopause overlay
  // Context note renders above this question in the HTML via data-context attribute
  // q13 — biological sex + age, drives perimenopause overlay
  { id: 'q14', 
    context: 'The next question helps personalize your result. Hormonal changes can affect appetite, weight distribution, and hunger patterns in specific ways.',
    text: 'Which applies to you?', options: [
    { text: 'I have ovaries and am between 38 and 55', code: 'BF_P' },
    { text: 'I have ovaries and am outside that range', code: 'BF' },
    { text: 'I do not have ovaries', code: '' },
    { text: 'Prefer not to say', code: '' }
  ]},

  { id: 'q15', text: 'Lately, which feels most true about your body and appetite?', options: [
    { text: 'About the same', code: '' },
    { text: 'I get hungry more quickly', code: 'F' },
    { text: 'I can eat the same but gain more easily', code: 'P' },
    { text: 'Hunger feels unpredictable', code: 'O' },
    { text: "None of these feel true for me", code: '' }
  ]},
  { id: 'q16', text: 'After eating, you usually feel:', options: [
    { text: 'Want something else soon', code: 'S' },
    { text: 'Neutral or unaware', code: 'D' },
    { text: 'Calmer', code: 'O' },
    { text: 'Back on track', code: 'T' },
    { text: "I don't notice much after eating", code: '' }
  ]},
  { id: 'q17', text: 'When your eating feels off, what is usually happening?', options: [
    { text: 'Meals were inconsistent', code: 'F' },
    { text: 'I kept looking for something better', code: 'S' },
    { text: 'I was distracted', code: 'D' },
    { text: 'I was overwhelmed', code: 'O' },
    { text: "My eating doesn't usually feel off", code: '' }
  ]},
  { id: 'q18', text: 'Trying to eat better:', options: [
    { text: 'I get bored', code: 'S' },
    { text: 'I forget', code: 'D' },
    { text: 'It feels emotionally hard', code: 'O' },
    { text: 'It works until routine breaks', code: 'T' },
    { text: "Eating well isn't really a struggle for me", code: '' }
  ]},
  { id: 'q19', text: 'Your biggest challenge:', options: [
    { text: 'Things feel dull', code: 'S' },
    { text: 'I get distracted', code: 'D' },
    { text: 'Stress builds', code: 'O' },
    { text: 'My days are not consistent', code: 'T' },
    { text: "I don't identify a pattern here", code: '' }
  ]},
  { id: 'q20', text: 'When things go well:', options: [
    { text: 'I am engaged', code: 'S' },
    { text: 'I am focused', code: 'D' },
    { text: 'I feel calm', code: 'O' },
    { text: 'I have structure', code: 'T' },
    { text: "I don't notice a strong connection", code: '' }
  ]},
  { id: 'q21', text: 'Over the past 1\u20132 years, have you noticed:', options: [
    { text: 'No real changes', code: '' },
    { text: 'Slight energy or sleep shifts', code: 'O' },
    { text: 'More weight around my midsection without a big diet change', code: 'P' },
    { text: 'More emotional ups and downs tied to eating', code: 'O' },
    { text: "None of these apply", code: '' }
  ]},
  { id: 'q22', text: 'When things fall apart:', options: [
    { text: 'I want something more interesting', code: 'S' },
    { text: 'I lose awareness', code: 'D' },
    { text: 'My emotions spike', code: 'O' },
    { text: 'My schedule shifts', code: 'T' },
    { text: "Things falling apart doesn't affect my eating much", code: '' }
  ]},
  { id: 'q23', text: 'Which of the following have you tried?', options: [
    { text: 'Small changes on my own', code: '' },
    { text: 'Structured programs or diets', code: '' },
    { text: 'Medical or clinical options', code: 'H' },
    { text: 'A mix of several approaches', code: 'H' }
  ]},
  { id: 'q24', text: 'How did those approaches work?', options: [
    { text: 'Hard to stay consistent', code: '' },
    { text: 'Worked for a while', code: '' },
    { text: 'Helped physically but not behaviorally', code: '' },
    { text: 'They did not address the real issue', code: '' }
  ]},
  { id: 'q25', text: 'Which feels closest now?', options: [
    { text: 'I am just starting', code: '' },
    { text: 'I have tried a few things', code: '' },
    { text: 'I have invested and still feel stuck', code: 'H' },
    { text: 'Something feels missing', code: '' }
  ]},
  { id: 'q26', text: 'Eating feels hardest when:', options: [
    { text: 'I need a pick-me-up', code: 'S' },
    { text: 'I am distracted', code: 'D' },
    { text: 'I am overwhelmed', code: 'O' },
    { text: 'My routine is off', code: 'T' },
    { text: "Eating doesn't feel especially hard for me", code: '' }
  ]},
  { id: 'q27', text: 'Which feels most true:', options: [
    { text: 'I eat for something to do', code: 'S' },
    { text: 'I eat without thinking', code: 'D' },
    { text: 'I eat to feel better', code: 'O' },
    { text: 'I eat based on timing', code: 'T' },
    { text: "None of these feel true for me", code: '' }
  ]},
  { id: 'q28', text: 'When you try to stop snacking:', options: [
    { text: 'I feel restless', code: 'S' },
    { text: 'I do not notice', code: 'D' },
    { text: 'I feel uncomfortable', code: 'O' },
    { text: 'I try to control it', code: 'T' },
    { text: "I don't really snack unintentionally", code: '' }
  ]},
  { id: 'q29', text: 'You trust yourself most when:', options: [
    { text: 'I am engaged', code: 'S' },
    { text: 'I am present', code: 'D' },
    { text: 'I feel settled', code: 'O' },
    { text: 'I have a plan', code: 'T' },
    { text: "I don't notice a strong connection here", code: '' }
  ]},
  { id: 'q30', text: 'What helps you most in life:', options: [
    { text: 'Challenge', code: 'S' },
    { text: 'Hands-on tasks', code: 'D' },
    { text: 'Calm environments', code: 'O' },
    { text: 'Systems', code: 'T' },
    { text: "None of these stand out", code: '' }
  ]},
  { id: 'q31', text: 'If your eating improved, what would help most?', options: [
    { text: 'Eating more consistently', code: 'F' },
    { text: 'Better options', code: 'S' },
    { text: 'Paying attention', code: 'D' },
    { text: 'Managing stress', code: 'O' },
    { text: "I don't feel like my eating needs improvement", code: '' }
  ]},
  { id: 'q32', text: 'Sometimes eating more than planned is because:', options: [
    { text: 'I did not eat enough earlier', code: 'F' },
    { text: 'It tasted good', code: 'S' },
    { text: 'I did not notice', code: 'D' },
    { text: 'I needed comfort', code: 'O' },
    { text: "I don't usually eat more than planned", code: '' }
  ]},
  { id: 'q33', text: 'After eating more than expected:', options: [
    { text: 'I move on', code: '' },
    { text: 'I eat lighter later', code: '' },
    { text: 'I feel like I should make up for it', code: 'C' },
    { text: 'I feel upset with myself', code: 'C' },
    { text: "I don't usually eat more than expected", code: '' }
  ]},
  { id: 'q34', text: 'When eating feels out of control:', options: [
    { text: 'It passes', code: '' },
    { text: 'I try to adjust later', code: '' },
    { text: 'I feel guilt or pressure', code: 'C' },
    { text: 'I feel stuck in the pattern', code: 'O' },
    { text: "Eating doesn't usually feel out of control", code: '' }
  ]},
  { id: 'q35', text: 'When your day is structured:', options: [
    { text: 'Food is less interesting', code: 'S' },
    { text: 'I stay more aware', code: 'D' },
    { text: 'I feel more settled', code: 'O' },
    { text: 'Eating feels easier', code: 'T' },
    { text: "Structure doesn't really change my eating", code: '' }
  ]},
  { id: 'q36', text: 'If nothing changed, what concerns you most?', options: [
    { text: 'I will keep chasing something satisfying', code: 'S' },
    { text: 'I will keep doing this without noticing', code: 'D' },
    { text: 'I will keep using food to cope', code: 'O' },
    { text: 'I will keep falling off track', code: 'T' },
    { text: "I don't have a concern like this", code: '' }
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
      ${question.context ? `<p class="question-context">${question.context}</p>` : ''}
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
    // Handle compound code BF_P — scores both BF and P
    if (code === 'BF_P') {
      scores.BF += 1;
      scores.P += 1;
    } else if (code && Object.prototype.hasOwnProperty.call(scores, code)) {
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
      perimenopause: scores.BF >= 1 && scores.P >= 1
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
