const questions = [
  { id: 'q01', text: 'Which of these sounds most like you?', options: [
    { text: 'Cravings hit at certain times or situations', code: 'T' },
    { text: 'I do not notice until I am already eating', code: 'D' },
    { text: 'I want specific textures or flavors', code: 'S' },
    { text: 'I crave food more when stressed', code: 'O' },
    { text: 'My eating feels fairly steady', code: '' }
  ]},
  { id: 'q02', text: 'Trying to eat better:', options: [
    { text: 'I get bored', code: 'S' },
    { text: 'I forget', code: 'D' },
    { text: 'It feels emotionally hard', code: 'O' },
    { text: 'It works until routine breaks', code: 'T' },
    { text: 'It works until I am around other people', code: 'G' },
    { text: 'Eating generally goes the way I intend', code: '' }
  ]},
  { id: 'q03', text: 'Eating feels hardest when:', options: [
    { text: 'I need a pick-me-up', code: 'S' },
    { text: 'I am distracted', code: 'D' },
    { text: 'I am overwhelmed', code: 'O' },
    { text: 'My routine is off', code: 'T' },
    { text: 'I am eating with others', code: 'G' },
    { text: 'Eating stays pretty manageable for me', code: '' }
  ]},
  { id: 'q04', text: 'If you have a lot of free time at home, what happens?', options: [
    { text: 'I snack as something to do', code: 'S' },
    { text: 'I eat while distracted', code: 'D' },
    { text: 'I want to go out or find someone to eat with', code: 'G' },
    { text: 'I eat randomly \u2014 without my usual structure I lose track', code: 'T' },
    { text: 'I find other things to do — food rarely crosses my mind', code: '' }
  ]},
  { id: 'q05', text: 'You are watching a show at night. What usually happens with food?', options: [
    { text: 'I keep searching for something better to eat', code: 'S' },
    { text: 'I finish the snack without noticing — my hand just moves', code: 'D' },
    { text: 'It feels like a reward I would usually share', code: 'G' },
    { text: 'I eat because it is my scheduled wind-down time', code: 'T' },
    { text: 'Watching and eating stay separate for me', code: '' }
  ]},
  { id: 'q06', text: 'Think about a time you overate. What was true?', options: [
    { text: 'It tasted good so I kept going', code: 'S' },
    { text: 'I am not sure — I do not always notice when it is happening', code: 'D' },
    { text: 'I had not eaten enough earlier', code: 'F' },
    { text: 'I was at a social event and it felt like participation', code: 'G' },
    { text: 'My eating stays pretty even overall', code: '' }
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
    { text: '40\u201350', code: '' },
    { text: '50+', code: 'P' }
  ]},
  { id: 'q09', text: 'Lately, setting aside any intentional changes, which feels most true about your body?', options: [
    { text: 'About the same', code: '' },
    { text: 'I get hungry more quickly', code: 'F' },
    { text: 'I can eat the same but gain more easily', code: 'P' },
    { text: 'Hunger feels unpredictable', code: 'O' }
  ]},
  { id: 'q10', text: 'Over the past 1–2 years, setting aside any intentional changes you have made, have you noticed:', options: [
    { text: 'No real changes', code: '' },
    { text: 'Slight energy or sleep shifts', code: 'P' },
    { text: 'More weight around my midsection without a big diet change', code: 'P' },
    { text: 'More emotional ups and downs tied to eating', code: 'O' },
    { text: 'My energy drops significantly after certain foods or meals', code: '' }
  ]},
  { id: 'q11', text: 'You just ate, and 45 minutes later you are back in the kitchen. What is most likely?', options: [
    { text: 'I went in for something else \u2014 dishes, water, another errand', code: '' },
    { text: 'Something stressed me out', code: 'O' },
    { text: 'I walked in without really deciding to \u2014 the kitchen just drew me in', code: 'D' },
    { text: 'I did not eat enough of the right things earlier', code: 'F' },
    { text: 'I wanted something more satisfying', code: 'S' },
    { text: 'My kitchen trips have a clear purpose', code: '' }
  ]},
  { id: 'q12', text: 'After a stressful moment, what usually happens with eating?', options: [
    { text: 'Want something crunchy or distracting', code: 'S' },
    { text: 'Realize you ate without planning to', code: 'D' },
    { text: 'Want something warm or calming', code: 'O' },
    { text: 'My appetite disappears — sadness, grief, or stress shuts it down', code: 'O' },
    { text: 'Try to reset your day', code: 'T' },
    { text: 'My eating stays steady through stress', code: '' }
  ]},
  { id: 'q13', text: 'When eating plans change, what is usually the reason?', options: [
    { text: 'What I planned was not available', code: '' },
    { text: 'Nothing available appealed to me', code: 'S' },
    { text: 'Got distracted', code: 'D' },
    { text: 'Needed comfort', code: 'O' },
    { text: 'My timing got off', code: 'F' },
    { text: 'I was with others and went along with the group', code: 'G' }
  ]},
  { id: 'q14', text: 'You feel very hungry late in the day. Why?', options: [
    { text: 'I kept putting off eating', code: 'F' },
    { text: 'I wanted something better later', code: 'S' },
    { text: 'I was absorbed in something else and forgot', code: 'D' },
    { text: 'I was not in the mood earlier', code: 'O' },
    { text: 'My hunger stays consistent through the day', code: '' }
  ]},


  { id: 'q15', text: 'When eating feels off track, what is usually happening?', options: [
    { text: 'I had not eaten enough or on schedule', code: 'F' },
    { text: 'I kept looking for something better', code: 'S' },
    { text: 'I was on autopilot', code: 'D' },
    { text: 'I was overwhelmed', code: 'O' },
    { text: 'My eating stays pretty consistent', code: '' }
  ]},
  { id: 'q16', text: 'When eating goes off plan, what usually caused it?', options: [
    { text: 'I wanted something more interesting', code: 'S' },
    { text: 'My emotions spiked', code: 'O' },
    { text: 'My schedule shifted', code: 'T' },
    { text: 'I was at a social event and went along with what others were eating', code: 'G' },
    { text: 'I was eating out and the environment pulled me off course', code: '' },
    { text: 'My eating stays on track most days', code: '' }
  ]},
  { id: 'q17', text: 'Which of the following have you tried?', options: [
    { text: 'Small changes on my own', code: '' },
    { text: 'Structured programs or diets', code: '' },
    { text: 'A combination of the above', code: 'H' },
    { text: 'Medical or clinical options', code: 'H' },
    { text: 'All of the above \u2014 I feel like I have tried everything', code: 'H' }
  ]},
  { id: 'q18', text: 'When it comes to your eating patterns, where are you right now?', options: [
    { text: 'My eating feels fine — I am here out of curiosity', code: '' },
    { text: 'I have already made significant changes — I am focused on maintaining them', code: '' },
    { text: 'I am not focused on changing my eating right now', code: '' },
    { text: 'I am just starting to pay attention to how I eat', code: '' },
    { text: 'I have tried a few approaches but nothing has stuck', code: '' },
    { text: 'I have invested significant time and money trying to figure this out and still feel stuck', code: 'H' },
    { text: 'I know what I should do but something keeps getting in the way', code: 'H' }
  ]},
  { id: 'q19', text: 'How would you describe your typical physical output or training volume?', options: [
    { text: 'High intensity or long duration \u2014 four or more days a week', code: 'HO' },
    { text: 'Consistent and moderate \u2014 when life allows', code: 'T' },
    { text: 'I mostly move when it is social or done with others', code: 'G' },
    { text: 'Light or recreational movement as it fits into my day', code: '' },
    { text: 'I am currently not very physically active', code: '' }
  ]},
  { id: 'q20', text: 'What is your primary focus for food after a high-effort day or workout?', options: [
    { text: 'I prioritize a specific refuel to recover my energy', code: 'HO' },
    { text: 'I stick to my next scheduled meal to keep my rhythm', code: 'T' },
    { text: 'I enjoy a reward meal \u2014 often sharing it with others', code: 'G' },
    { text: 'My eating stays consistent regardless of activity level', code: '' },
    { text: 'I do not eat, or eat very little, to preserve the calorie deficit from the workout', code: 'RC' }
  ]},
  { id: 'q21', text: 'What do you think would make the biggest difference to how you eat?', options: [
    { text: 'Eating more consistently', code: 'F' },
    { text: 'Better options available', code: 'S' },
    { text: 'Paying more attention', code: 'D' },
    { text: 'Managing stress better', code: 'O' },
    { text: 'My eating already works well for me', code: '' }
  ]},
  { id: 'q22', text: 'Sometimes eating more than planned is because:', options: [
    { text: 'I did not eat enough earlier', code: 'F' },
    { text: 'It tasted good', code: 'S' },
    { text: 'I am not sure — it happens before I decide', code: 'D' },
    { text: 'Everyone around me was eating and it felt normal', code: 'G' },
    { text: 'My eating stays close to what I planned', code: '' }
  ]},
  { id: 'q23', text: 'When your day is structured:', options: [
    { text: 'Food is less interesting', code: 'S' },
    { text: 'I stay more aware', code: 'D' },
    { text: 'My meals are on my own terms', code: 'G' },
    { text: 'Eating feels easier', code: 'T' },
    { text: 'My eating stays consistent regardless of structure', code: '' }
  ]},
  { id: 'q24', text: 'If food is entirely up to you — nothing prepared, no occasion, no one else involved — what usually happens?', options: [
    { text: 'I eat when I feel hungry', code: '' },
    { text: 'I often forget to eat or realize later I never did', code: 'G' },
    { text: 'I eat out of habit or on a regular schedule regardless', code: 'T' },
    { text: 'I graze without really deciding to', code: 'D' },
    { text: 'I look for something interesting or satisfying', code: 'S' }
  ]},
  { id: 'q25', text: 'When someone you care about offers you food outside your usual plan, you:', options: [
    { text: 'Often eat it because refusing feels unkind or awkward', code: 'G' },
    { text: 'Eat it if it looks good regardless of who offered', code: 'S' },
    { text: 'Eat it automatically without really deciding', code: 'D' },
    { text: 'Eat it and feel guilty or conflicted afterward', code: 'C' },
    { text: 'Food offers are usually easy to navigate', code: '' }
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
  { id: 'q28', text: 'If you were focused on eating carefully at a social event, what usually happens when you get home?', options: [
    { text: 'Nothing much \u2014 I move on as normal', code: '' },
    { text: 'I often eat more than I planned once I am back', code: 'G' },
    { text: 'I feel relieved and eat something comforting', code: 'O' },
    { text: 'I feel good about how the event went and stick to my plan', code: 'T' },
    { text: 'I rarely eat carefully at social events in the first place', code: 'G' },
    { text: 'I focus on friends and family at social events \u2014 food is rarely my concern', code: '' }
  ]},
  { id: 'q29', text: 'When a meal gets delayed or pushed back, what usually happens?', options: [
    { text: 'I eat more than usual at the next opportunity', code: 'T' },
    { text: 'I get irritable or distracted until I eat', code: 'O' },
    { text: 'I do not notice much', code: 'D' },
    { text: 'I look for something to tide me over', code: 'S' },
    { text: 'Delays sort themselves out — my eating adjusts', code: '' }
  ]},
  { id: 'q30', text: 'When does eating feel most manageable, if there is a difference?', options: [
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
    { text: 'My eating stays pretty steady regardless', code: '' }
  ]},
  { id: 'q32', text: 'The last time your eating felt off, what was different about that day?', options: [
    { text: 'I was in a different place or situation', code: 'D' },
    { text: 'My routine had broken down', code: 'T' },
    { text: 'Something was emotionally harder', code: 'O' },
    { text: 'I was with others or at an event', code: 'G' },
    { text: 'My eating feels reliable most days', code: '' }
  ]},
  { id: 'q33', text: 'How do your eating intentions at the start of the day usually compare to how the day ends?', options: [
    { text: 'They are roughly consistent', code: '' },
    { text: 'I set a plan and mostly follow it', code: 'T' },
    { text: 'I start well but the evening pulls me off course', code: 'F' },
    { text: 'I intend to eat very little and then lose control later', code: 'RC' },
    { text: 'I do not usually set intentions around eating', code: 'D' },
    { text: 'It depends entirely on what the day brings', code: '' }
  ]},
  { id: 'q34', text: 'Before you eat, what is most true?', options: [
    { text: 'I was hungry and it was time to eat', code: '' },
    { text: 'I grabbed something and ate it', code: '' },
    { text: 'I thought about what would feel good before I started', code: 'O' },
    { text: 'I set everything out in advance \u2014 I wanted to eat efficiently without having to stop', code: 'RC' },
    { text: 'My main thought is how little I can get away with eating', code: 'RC' },
    { text: 'I have a menu or schedule \u2014 I eat what is planned', code: 'T' }
  ]},
  { id: 'q35', text: 'When eating feels out of control:', options: [
    { text: 'It passes', code: '' },
    { text: 'I feel unsettled but it resolves', code: '' },
    { text: 'I feel guilt or pressure', code: 'C' },
    { text: 'I do not realize it until afterward — it felt good in the moment', code: 'O' },
    { text: 'I feel I need to fix it', code: 'RC' }
  ]},
  { id: 'q36', text: 'When you feel like you have eaten too much, what usually follows?', options: [
    { text: 'I move on without much thought', code: '' },
    { text: 'I return to my usual structure or timing', code: 'T' },
    { text: 'I compensate — eating less, exercising more, or both', code: 'RC' },
    { text: 'I find ways to get rid of it \u2014 including making myself sick', code: 'C' },
    { text: 'I feel I have failed and it affects how I eat for the rest of the day', code: 'C' },
    { text: 'I feel low and disconnected for a while afterward', code: '' }
  ]}
];

// DOM references — declared here, assigned in DOMContentLoaded
let container, seeResultsBtn, clearBtn, formMessage;


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
  // Collect Layer 1 answers anonymously — codes only, no text, no session ID
  const layer1Codes = [0, 1, 2].map(i => {
    const q = questions[i];
    const sel = document.querySelector(`input[name="${q.id}"]:checked`);
    return sel ? sel.value : null;
  });

  const exitPayload = {
    completedAt: new Date().toISOString(),
    prescreenExit: type,
    weekOfYear: Math.ceil((new Date() - new Date(new Date().getFullYear(), 0, 1)) / 604800000),
    scores: getScores(),
    types: {
      primaryCode: type === 'seeker' ? 'S' : 'NP',
      secondaryCode: type === 'seeker' ? 'O' : 'NP'
    },
    flags: { fueling: false, highOutput: false, clinical: false, perimenopause: false },
    investmentLevel: 'lower',
    layer1Answers: layer1Codes,
    npReturnFromFull: false,
    answers: collectSelectedAnswers()
  };

  // Show inline exit message with choice — do not hard redirect
  const exitMsg      = document.getElementById('prescreenExitMsg');
  const exitText     = document.getElementById('prescreenExitText');
  const exitContBtn  = document.getElementById('prescreenContinueBtn');
  const exitResBtn   = document.getElementById('prescreenResultBtn');

  if (exitMsg && exitText) {
    if (type === 'seeker') {
      exitText.innerHTML =
        '<strong>Based on your first six answers, a Seeker pattern is very likely.</strong> ' +
        'You can view your preliminary result now, or continue the full assessment for a more complete picture.';
    } else {
      exitText.innerHTML =
        '<strong>Based on your first three answers, no strong eating pattern emerged.</strong> ' +
        'This may reflect where you are right now. You can view this as your result, ' +
        'or continue the full assessment to see if a more specific pattern emerges.';
    }
    // Move exit message to appear directly after Q6 in the DOM
    const allBlocks = document.querySelectorAll('.question-block');
    const q6Block = allBlocks[5]; // Q6 is index 5
    if (q6Block && q6Block.parentNode) {
      q6Block.parentNode.insertBefore(exitMsg, q6Block.nextSibling);
    }
    exitMsg.style.display = 'block';
    setTimeout(() => {
      exitMsg.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    if (exitResBtn) {
      exitResBtn.onclick = () => {
        localStorage.setItem('lainiAssessmentResult', JSON.stringify(exitPayload));
        window.location.href = 'results.html';
      };
    }
    if (exitContBtn) {
      exitContBtn.onclick = () => {
        exitMsg.style.display = 'none';
        if (type === 'seeker') {
          // Continue from Seeker exit — go to full assessment, scroll to Q7
          currentLayer = 3;
          prescreenComplete = true;
          showAllQuestions();
          updatePrescreenProgress(3);
          setTimeout(() => {
            const allBlocks = document.querySelectorAll('.question-block');
            const q7 = allBlocks[6];
            if (q7) q7.scrollIntoView({ behavior: 'smooth', block: 'start' });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100);
        } else {
          // Continue from NP exit — go to Layer 2, scroll to Q4
          currentLayer = 2;
          showLayer(LAYER2);
          updatePrescreenProgress(2);
          setTimeout(() => {
            const allBlocks = document.querySelectorAll('.question-block');
            const q4 = allBlocks[3];
            if (q4) q4.scrollIntoView({ behavior: 'smooth', block: 'start' });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 100);
        }
      };
    }
  } else {
    // Fallback if exit elements missing
    localStorage.setItem('lainiAssessmentResult', JSON.stringify(exitPayload));
    window.location.href = 'results.html';
  }
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
    // Insert into form-actions div, before the submit button
    const formActions = document.getElementById('seeResultsBtn').parentNode;
    formActions.insertBefore(btn, document.getElementById('seeResultsBtn'));
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
    // Move to Layer 2 — disable button briefly to prevent double-fire
    currentLayer = 2;
    formMessage.textContent = '';
    const continueBtn = document.getElementById('continueBtn');
    if (continueBtn) {
      continueBtn.disabled = true;
      continueBtn.style.opacity = '0.5';
    }
    showLayer(LAYER2);
    updatePrescreenProgress(2);
    setTimeout(() => {
      const firstVisible = document.querySelector('.question-block[style*="block"]');
      if (firstVisible) firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      if (continueBtn) {
        continueBtn.disabled = false;
        continueBtn.style.opacity = '1';
      }
    }, 100);
  } else if (currentLayer === 2) {
    // Check Layer 2 — count S answers across ALL of Q1-6 combined
    // Q1-3 already have S options — a strong Seeker should get credit
    if (!allAnswered(LAYER2)) {
      formMessage.textContent = 'Please answer all three questions to continue.';
      return;
    }
    const seekerCountL1 = countCodeAnswers(LAYER1, 'S');
    const seekerCountL2 = countCodeAnswers(LAYER2, 'S');
    const totalSeekerCount = seekerCountL1 + seekerCountL2;
    // Exit only if 4+ S answers across Q1-6 combined — strong signal required
    if (totalSeekerCount >= 4) {
      showPrescreenExit('seeker');
      return;
    }
    // Move to Layer 3 — full assessment
    currentLayer = 3;
    prescreenComplete = true;
    formMessage.textContent = '';
    showAllQuestions();
    updatePrescreenProgress(3);
    // Scroll to Q7 — first question of full assessment, not Q1
    setTimeout(() => {
      const allBlocks = document.querySelectorAll('.question-block');
      const q7 = allBlocks[6];
      if (q7) q7.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }
}

function updatePrescreenProgress(layer) {
  // Progress bar always shows full question count so respondent
  // understands the scope — layer transitions are transparent
  const totalEl = document.getElementById('totalCount');
  if (totalEl) totalEl.textContent = questions.length;

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

// ── TEXT-TO-SPEECH ────────────────────────────────────────────────────────────
// Session-only. No persistence. Tap the speaker icon to read a question or answer.
// Uses Web Speech API — built into all modern mobile browsers, no library needed.

function speakText(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.rate = 0.95;
  utt.lang = 'en-US';
  window.speechSynthesis.speak(utt);
}

function injectTTSStyles() {
  if (document.getElementById('tts-styles')) return;
  const style = document.createElement('style');
  style.id = 'tts-styles';
  style.textContent = `
    .tts-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 0 0 0.4em;
      vertical-align: middle;
      opacity: 0.4;
      transition: opacity 0.15s;
      flex-shrink: 0;
      line-height: 1;
    }
    .tts-btn:hover, .tts-btn:focus { opacity: 0.8; outline: none; }
    .tts-btn svg { display: block; }
    .question-text-wrap {
      display: flex;
      align-items: flex-start;
      gap: 0;
    }
    .question-text-wrap .question-text {
      margin: 0;
      flex: 1;
    }
    .option-row {
      display: flex;
      align-items: center;
    }
    .option-label-text {
      flex: 1;
    }
  `;
  document.head.appendChild(style);
}

function speakerSVG(size) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 7.5H5.5L10 3.5V16.5L5.5 12.5H3C2.72 12.5 2.5 12.28 2.5 12V8C2.5 7.72 2.72 7.5 3 7.5Z" fill="currentColor"/>
    <path d="M13 7C13.83 7.93 14.33 9.13 14.33 10.5C14.33 11.07 13.83 13.07 13 14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M15.5 5C16.9 6.5 17.75 8.42 17.75 10.5C17.75 12.58 16.9 14.5 15.5 16" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  </svg>`;
}

function renderQuestions() {
  injectTTSStyles();

  questions.forEach((question, index) => {
    const block = document.createElement('div');
    block.className = 'question-block';

    block.innerHTML = `
      <span class="question-number">Question ${index + 1}</span>
      <div class="question-text-wrap">
        <p class="question-text">${question.text}</p>
        <button type="button" class="tts-btn" aria-label="Read question aloud" data-speak="${question.text.replace(/"/g, '&quot;')}">${speakerSVG(17)}</button>
      </div>
      <div class="option-list">
        ${question.options.map((option, optionIndex) => `
          <label class="option-row" for="${question.id}_${optionIndex}">
            <input type="radio" id="${question.id}_${optionIndex}" name="${question.id}" value="${option.code}" data-text="${option.text.replace(/"/g, '&quot;')}" />
            <span class="option-label-text">${option.text}</span>
            <button type="button" class="tts-btn" aria-label="Read option aloud" data-speak="${option.text.replace(/"/g, '&quot;')}">${speakerSVG(14)}</button>
          </label>
        `).join('')}
      </div>
    `;

    container.appendChild(block);
  });

  // Single delegated listener on container — prevents event bubbling into radio inputs
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.tts-btn');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    speakText(btn.dataset.speak);
  });
}

function answeredCount() {
  return questions.reduce((total, question) => total + (document.querySelector(`input[name="${question.id}"]:checked`) ? 1 : 0), 0);
}

function getScores() {
  const scores = { S: 0, O: 0, D: 0, T: 0, F: 0, G: 0, C: 0, RC: 0, P: 0, BF: 0, H: 0, HO: 0, PURGE: 0, NEUTRAL: 0 };

  // Purging answer text — exact match to Q36 option
  const PURGE_TEXT = 'I find ways to get rid of it — including making myself sick';

  questions.forEach((question) => {
    const selected = document.querySelector(`input[name="${question.id}"]`+':checked');
    if (!selected) return;
    const code = selected.value;
    if (code && Object.prototype.hasOwnProperty.call(scores, code)) {
      scores[code] += 1;
    }
    // Count neutral answers (empty code) across all questions
    if (code === '') {
      scores.NEUTRAL += 1;
    }
    // Detect purging answer specifically — hard clinical trigger
    const label = selected.closest('label');
    if (label && label.textContent.trim().includes('making myself sick')) {
      scores.PURGE += 1;
    }
  });

  return scores;
}

function getTopTypes(scores) {
  // Normalize by number of questions each code appears in
  // O reduced from 21 to 19 — two O answers recoded to neutral (Q35 opt4, Q36 opt6)
  const questionCounts = { S: 19, O: 19, D: 21, T: 19, G: 19 };

  const ranked = ['S', 'O', 'D', 'T', 'G']
    .map((key) => [key, scores[key] / questionCounts[key]])
    .sort((a, b) => b[1] - a[1]);

  const primaryScore  = ranked[0][1];
  const secondaryScore = ranked[1][1];

  // Secondary only counts if it scores at least 60% of the primary normalized score
  // AND at least 0.15 normalized — prevents noise from being named a pattern
  const secondaryCode = (secondaryScore >= primaryScore * 0.6 && secondaryScore >= 0.15)
    ? ranked[1][0]
    : null;

  return { primaryCode: ranked[0][0], secondaryCode };
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

  const questionCounts = { S: 19, O: 19, D: 21, T: 19, G: 19 };
  const primaryNormalized = scores[primaryCode] / (questionCounts[primaryCode] || 1);
  const neutralRatio = scores.NEUTRAL / 36;
  // noPattern: fires when neutral ratio exceeds primary normalized score
  // No multiplier — if you answered neutrally more often than your strongest pattern,
  // the pattern is signaling but not driving. That's Oriented.
  // Calibrate against real population data as testing expands.
  const NP_MULTIPLIER = 1.0;

  const payload = {
    completedAt: new Date().toISOString(),
    scores,
    types: {
      primaryCode,
      secondaryCode
    },
    flags: {
      fueling:         scores.F >= 3,
      highOutput:      scores.F >= 3 && scores.HO >= 2,
      // RC contributes to clinical flag total — restriction cycling is a clinical signal
      // RC also stored separately so content layer can use it distinctly
      clinical:        (scores.C + scores.RC) >= 2,
      clinicalWarning: ((scores.C + scores.RC) >= 3 && (scores.C + scores.RC) <= 4) && scores.PURGE === 0,
      clinicalHigh:    (scores.C + scores.RC) >= 5 || scores.PURGE >= 1,
      restrictionCycling: scores.RC >= 2,
      perimenopause:   scores.BF >= 1 && scores.P >= 2,
      noPattern:       neutralRatio > primaryNormalized * NP_MULTIPLIER
    },
    investmentLevel: scores.H >= 2 ? 'higher' : scores.H === 1 ? 'moderate' : 'lower',
    answers: collectSelectedAnswers()
  };

  localStorage.setItem('lainiAssessmentResult', JSON.stringify(payload));
}

function handleSubmit() {
  // Safety net: if user is on layer 3 but prescreenComplete was lost, set it now
  if (!prescreenComplete && currentLayer === 3) {
    prescreenComplete = true;
  }
  if (!prescreenComplete) {
    handleContinue();
    return;
  }
  const count = answeredCount();
  if (count !== questions.length) {
    formMessage.textContent = `Please answer all ${questions.length} questions before viewing your results. You have completed ${count}.`;

    // Highlight unanswered visible blocks and scroll to the first one
    const allBlocks = document.querySelectorAll('.question-block');
    let firstUnanswered = null;

    allBlocks.forEach((block, i) => {
      const q = questions[i];
      if (!q) return;
      const answered = document.querySelector(`input[name="${q.id}"]:checked`);
      if (!answered && block.style.display !== 'none') {
        block.classList.add('unanswered-flag');
        if (!firstUnanswered) firstUnanswered = block;
      } else {
        block.classList.remove('unanswered-flag');
      }
    });

    if (firstUnanswered) {
      firstUnanswered.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  // Clear highlights on successful submit
  document.querySelectorAll('.unanswered-flag').forEach(b => b.classList.remove('unanswered-flag'));
  formMessage.textContent = '';
  buildPayload();
  window.location.href = 'results.html';
}

function handleClear() {
  // Uncheck all answers
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.checked = false;
  });
  formMessage.textContent = '';

  // Reset prescreen state back to Layer 1
  currentLayer = 1;
  prescreenComplete = false;

  // Hide exit message if showing
  const exitMsg = document.getElementById('prescreenExitMsg');
  if (exitMsg) exitMsg.style.display = 'none';

  // Reset answered count display
  const answeredEl = document.getElementById('answeredCount');
  if (answeredEl) answeredEl.textContent = '0';

  // Remove answered styling from all blocks
  document.querySelectorAll('.question-block').forEach(b => {
    b.classList.remove('answered');
  });

  // Show Layer 1 only and reset progress
  showLayer(LAYER1);
  updatePrescreenProgress(1);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Wait for DOM to be ready before rendering and initialising
document.addEventListener('DOMContentLoaded', () => {
  // Assign DOM references
  container     = document.getElementById('questionContainer');
  seeResultsBtn = document.getElementById('seeResultsBtn');
  clearBtn      = document.getElementById('clearBtn');
  formMessage   = document.getElementById('formMessage');

  // Ensure exit message is hidden on fresh load
  const exitMsgInit = document.getElementById('prescreenExitMsg');
  if (exitMsgInit) exitMsgInit.style.display = 'none';

  // Prior code handling
  const priorCodeInput  = document.getElementById('priorCodeInput');
  const priorCodeClear  = document.getElementById('priorCodeClear');
  const priorCodeSaved  = document.getElementById('priorCodeSaved');

  // Clear any stale state on page load
  if (priorCodeInput) priorCodeInput.value = '';
  if (priorCodeSaved) priorCodeSaved.classList.add('hidden-input');
  if (priorCodeClear) priorCodeClear.classList.add('hidden-input');

  if (priorCodeInput) {
    priorCodeInput.addEventListener('input', (e) => {
      if (!e.isTrusted) return;
      const val = priorCodeInput.value.trim().toUpperCase();
      if (!val) {
        sessionStorage.removeItem('lainiPriorCode');
        priorCodeSaved.classList.add('hidden-input');
        priorCodeClear.classList.add('hidden-input');
        return;
      }
      const isValidCode = /^[A-Z]{2,4}-\d+-\d+-\d+-\d+-\d+-\d{4}$/.test(val);
      if (isValidCode) {
        sessionStorage.setItem('lainiPriorCode', val);
        priorCodeSaved.classList.remove('hidden-input');
        priorCodeClear.classList.remove('hidden-input');
      } else {
        sessionStorage.removeItem('lainiPriorCode');
        priorCodeSaved.classList.add('hidden-input');
        priorCodeClear.classList.remove('hidden-input');
      }
    });

    priorCodeClear.addEventListener('click', () => {
      priorCodeInput.value = '';
      sessionStorage.removeItem('lainiPriorCode');
      priorCodeSaved.classList.add('hidden-input');
      priorCodeClear.classList.add('hidden-input');
    });
  }

  // Live progress fill
  const fill      = document.getElementById('progressFill');
  const answeredEl = document.getElementById('answeredCount');
  const totalEl   = document.getElementById('totalCount');

  if (container) {
    container.addEventListener('change', (event) => {
      const answered = document.querySelectorAll('input[type="radio"]:checked').length;
      const total = questions ? questions.length : 36;
      const pct = (answered / total) * 100;
      if (fill) fill.style.width = pct + '%';
      if (answeredEl) answeredEl.textContent = answered;
      if (totalEl && prescreenComplete) totalEl.textContent = total;
      const changed = event.target;
      if (changed) {
        const block = changed.closest('.question-block');
        if (block) block.classList.add('answered');
      }
    });
  }

  // Render and initialise
  renderQuestions();
  initPrescreen();
  seeResultsBtn.addEventListener('click', handleSubmit);
  clearBtn.addEventListener('click', handleClear);
});
