const typeLabels = {
  S: 'Seeker',
  O: 'Soother',
  D: 'Drifter',
  T: 'Stabilizer'
};

const resultCopy = {
  S: {
    title: 'Your results suggest a Seeker pattern.',
    subtitle: 'You may be eating when your brain wants stimulation, not just when your body wants food.',
    happening: 'There are moments in your day where things feel flat, repetitive, or underwhelming. Food becomes a quick way to change your state. It gives you texture, novelty, and a fast shift.',
    strength: 'You are responsive, alert, and quick to notice when something feels off. You are not ignoring your needs; you are trying to meet them quickly.',
    offTrack: 'Food becomes the easiest form of stimulation, especially when nothing else is immediately available or satisfying enough to compete with it.',
    toolsTitle: 'When you want something interesting or satisfying:',
    tools: [
      'Do a 5–10 minute intensity shift; stairs, brisk walk, or a short flow',
      'Change tasks completely; not just location'
    ],
    decide: 'Was I looking for stimulation or actually hungry?',
    eat: 'If you still want food, eat something with texture and substance; not something you will keep chasing.'
  },
  O: {
    title: 'Your results suggest a Soother pattern.',
    subtitle: 'You may be eating when your system needs relief, not just when you are hungry.',
    happening: 'Your day builds pressure. Food becomes the moment where things soften. It helps take the edge off, slow things down, or create a small sense of comfort.',
    strength: 'You are emotionally responsive and aware. You recognize when something feels heavy, and you naturally look for ways to settle yourself.',
    offTrack: 'Food becomes the fastest and most reliable form of comfort, so it gets used even when the real need is rest, relief, or decompression.',
    toolsTitle: 'When the day feels heavy and you want comfort:',
    tools: [
      'Take a 5-minute reset before eating; sit, breathe, or step outside',
      'Drink something warm first; tea, broth, or coffee, and then decide'
    ],
    decide: 'Do I need relief or food?',
    eat: 'If you still want food after you settle, have a warm, intentional meal; not a snack eaten standing up.'
  },
  D: {
    title: 'Your results suggest a Drifter pattern.',
    subtitle: 'You may be eating when your attention is somewhere else.',
    happening: 'Eating often happens during transitions, screens, work, errands, or low-awareness moments. You may not be chasing food; it just keeps getting folded into the background.',
    strength: 'You can stay focused and move through your day efficiently. You are capable of getting things done without overthinking every step.',
    offTrack: 'Food gets absorbed into that same automatic flow, so it happens without much intention.',
    toolsTitle: 'When you catch yourself reaching for food without thinking:',
    tools: [
      'Pause before the first bite',
      'Plate it or leave the room'
    ],
    decide: 'Did I plan to eat, or did I just arrive here?',
    eat: 'If you still want it, sit and eat it intentionally; not while doing something else.'
  },
  T: {
    title: 'Your results suggest a Stabilizer pattern.',
    subtitle: 'Your eating may be strongly tied to timing, rhythm, and structure.',
    happening: 'You tend to do better when your day has rhythm. When that rhythm breaks, your eating often follows. Food becomes part of the way you restore order or fill gaps.',
    strength: 'You respond well to structure, patterns, and predictability. When your environment is aligned, things tend to feel easier.',
    offTrack: 'When your day gets disrupted, eating can become reactive, scattered, or more frequent without you fully noticing why.',
    toolsTitle: 'When your day gets off track:',
    tools: [
      'Eat a default meal you do not have to think about',
      'Reset with your next planned eating time; not “later”'
    ],
    decide: 'Am I off schedule or actually hungry?',
    eat: 'If you still want food, eat at your next anchor time; not continuously throughout the gap.'
  },
  FUELING: {
    title: 'Your results suggest a Fueling Pattern.',
    subtitle: 'Your eating appears to be influenced by inconsistent fueling, not just behavior.',
    happening: 'Some of what feels like overeating may actually be your body catching up. Delayed meals, light intake, or uneven eating earlier in the day can create stronger hunger later.',
    strength: 'You may be very capable of pushing through your day and putting your needs second. That can work for a while, but your body eventually asks to be repaid.',
    offTrack: 'By the time hunger shows up clearly, it is often stronger than expected, which can make later eating feel hard to manage.',
    toolsTitle: 'When you feel very hungry later in the day:',
    tools: [
      'Eat earlier than you think you need to',
      'Do not go more than 4–5 hours without eating'
    ],
    decide: 'Am I trying to control intake earlier and paying for it now?',
    eat: 'If you are hungry, eat a balanced meal; not a quick snack to hold you over.'
  },
  CLINICAL: {
    title: 'Your responses suggest a different starting point.',
    subtitle: 'Some of your answers point to patterns that may be better supported by a clinician who specializes in eating behaviors.',
    happening: 'This does not mean something is wrong with you. It means your next step may need more specialized support than a general coaching process alone.',
    strength: 'You are aware enough to notice that something feels off, and that awareness matters.',
    offTrack: 'Coaching may still help with structure and consistency, but it may not be the only support you need.',
    toolsTitle: 'A grounded next step:',
    tools: [
      'Consider speaking with a licensed provider who works specifically with eating behaviors',
      'Use this result as information, not as a reason to shame yourself'
    ],
    decide: 'What kind of support would actually meet the full picture here?',
    eat: 'You may still benefit from coaching later, but this pattern may deserve more specialized care first.'
  }
};

function createBox(title, bodyHtml, extraClass = '') {
  return `
    <div class="result-box ${extraClass}">
      <span class="result-kicker">${title}</span>
      ${bodyHtml}
    </div>
  `;
}

function renderPrimaryBlock(copy, secondaryLabel) {
  return `
    <div class="result-box">
      <span class="result-kicker">Primary result</span>
      <h2 class="result-title">${copy.title}</h2>
      <p class="result-subtitle">${copy.subtitle}</p>
      ${secondaryLabel ? `<div class="badge-line"><span class="badge">Secondary pattern: ${secondaryLabel}</span></div>` : ''}
    </div>

    ${createBox('What is happening', `<p>${copy.happening}</p>`)}
    ${createBox('What this says about you', `<p>${copy.strength}</p>`)}
    ${createBox('Where things get off track', `<p>${copy.offTrack}</p>`)}
    ${createBox(copy.toolsTitle, `
      <ul class="result-points">
        ${copy.tools.map((tool) => `<li>${tool}</li>`).join('')}
      </ul>
      <p><strong>Then decide:</strong> ${copy.decide}</p>
      <p><strong>If you still want food,</strong> ${copy.eat}</p>
    `)}
  `;
}

function renderPerimenopauseBox() {
  return createBox('Additional context', `
    <p>Some of your responses suggest hormonal changes may also be affecting appetite, energy, and weight patterns.</p>
    <p>This can look like increased hunger, less predictable appetite, or less margin for inconsistency. This does not replace your main pattern; it adds context to it.</p>
    <ul class="result-points">
      <li>Keep meals intentional, not reactive</li>
      <li>Watch for small calorie creep over time</li>
      <li>Prioritize protein and structure, especially earlier in the day</li>
    </ul>
  `);
}

function renderFuelingAddOn() {
  return createBox('There may also be a fueling issue here', `
    <p>Some of your responses suggest your body may be catching up after inconsistent intake earlier in the day.</p>
    <p>Before trying to control evening eating, it may help to stabilize what happens earlier.</p>
  `);
}

function renderCTA() {
  return `
    <div class="result-box cta-box">
      <span class="result-kicker">If this feels accurate</span>
      <h2 class="result-title">You do not need more discipline.</h2>
      <p class="result-subtitle">You need a strategy that fits your pattern.</p>
      <p>If you want support, you can choose to send your results and request a call.</p>
      <div class="result-actions">
        <a class="btn-primary no-animation" id="sendResultsLink" href="#">Submit my results and receive a call</a>
        <a class="btn-secondary" href="assessment.html">Retake the assessment</a>
      </div>
      <p class="helper-text">Your quiz is anonymous unless you choose to share your results.</p>
    </div>
  `;
}

function renderSummaryCard(payload, primaryLabel, secondaryLabel) {
  return `
    <div class="summary-card">
      <span class="card-kicker">Quick summary</span>
      <h3>${payload.flags.clinical ? 'Different starting point' : payload.flags.fueling ? 'Fueling Pattern' : primaryLabel}</h3>
      <div class="metric"><span class="metric-label">Primary</span><span class="metric-value">${payload.flags.clinical ? 'Clinical caution' : payload.flags.fueling ? 'Fueling' : primaryLabel}</span></div>
      <div class="metric"><span class="metric-label">Secondary</span><span class="metric-value">${payload.flags.clinical || payload.flags.fueling ? '—' : secondaryLabel}</span></div>
      <div class="metric"><span class="metric-label">Fueling signal</span><span class="metric-value">${payload.flags.fueling ? 'Strong' : 'Checked'}</span></div>
      <div class="metric"><span class="metric-label">Perimenopause overlay</span><span class="metric-value">${payload.flags.perimenopause ? 'Present' : 'Not triggered'}</span></div>
      <div class="metric"><span class="metric-label">Investment flag</span><span class="metric-value">${payload.investmentLevel}</span></div>
    </div>
  `;
}

function buildGoogleFormUrl(payload, primaryLabel, secondaryLabel) {
  const base = 'YOUR_GOOGLE_FORM_BASE_URL';
  const resultLabel = payload.flags.clinical
    ? 'Different starting point'
    : payload.flags.fueling
      ? 'Fueling Pattern'
      : primaryLabel;

  const params = new URLSearchParams({
    'entry.ENTRY_ID_RESULT_TYPE': resultLabel,
    'entry.ENTRY_ID_SECONDARY_TYPE': payload.flags.clinical || payload.flags.fueling ? '' : secondaryLabel,
    'entry.ENTRY_ID_RESULT_SUMMARY': payload.flags.clinical
      ? 'Some responses suggest a pattern that may need specialized support alongside or before coaching.'
      : payload.flags.fueling
        ? 'Eating appears influenced by inconsistent fueling, not just behavior.'
        : `${primaryLabel} pattern with ${secondaryLabel} tendencies.`,
    'entry.ENTRY_ID_FUELING_FLAG': payload.flags.fueling ? 'Yes' : 'No',
    'entry.ENTRY_ID_CLINICAL_FLAG': payload.flags.clinical ? 'Yes' : 'No',
    'entry.ENTRY_ID_PERIMENOPAUSE_FLAG': payload.flags.perimenopause ? 'Yes' : 'No',
    'entry.ENTRY_ID_INVESTMENT_LEVEL': payload.investmentLevel
  });

  return `${base}?usp=pp_url&${params.toString()}`;
}

function initResults() {
  const raw = localStorage.getItem('lainiAssessmentResult');
  const noState = document.getElementById('noResultState');
  const resultSection = document.getElementById('resultSection');
  const resultMain = document.getElementById('resultMain');
  const resultSide = document.getElementById('resultSide');
  const pageTitle = document.getElementById('pageTitle');
  const pageIntro = document.getElementById('pageIntro');

  if (!raw) {
    noState.classList.remove('hidden-input');
    return;
  }

  const payload = JSON.parse(raw);
  const primaryLabel = typeLabels[payload.types.primaryCode];
  const secondaryLabel = typeLabels[payload.types.secondaryCode];

  noState.classList.add('hidden-input');
  resultSection.classList.remove('hidden-input');

  let html = '';

  if (payload.flags.clinical) {
    const copy = resultCopy.CLINICAL;
    pageTitle.innerHTML = 'Your responses suggest a <em>different starting point</em>.';
    pageIntro.textContent = 'This result does not mean something is wrong with you. It means your next step may need more specialized support.';
    html += renderPrimaryBlock(copy, '');
  } else if (payload.flags.fueling) {
    const copy = resultCopy.FUELING;
    pageTitle.innerHTML = 'Your results suggest a <em>Fueling Pattern</em>.';
    pageIntro.textContent = 'Some patterns look behavioral at first, but the body may simply be catching up after inconsistent intake.';
    html += renderPrimaryBlock(copy, '');
  } else {
    const copy = resultCopy[payload.types.primaryCode];
    pageTitle.innerHTML = `Your results suggest a <em>${primaryLabel}</em> pattern.`;
    pageIntro.textContent = 'The point is not to judge the pattern. The point is to understand it well enough to respond differently.';
    html += renderPrimaryBlock(copy, secondaryLabel);
    if (payload.scores.F >= 2) {
      html += renderFuelingAddOn();
    }
  }

  if (payload.flags.perimenopause) {
    html += renderPerimenopauseBox();
  }

  html += renderCTA();
  resultMain.innerHTML = html;
  resultSide.innerHTML = renderSummaryCard(payload, primaryLabel, secondaryLabel);

  const sendResultsLink = document.getElementById('sendResultsLink');
  if (sendResultsLink) {
    sendResultsLink.addEventListener('click', (event) => {
      const url = buildGoogleFormUrl(payload, primaryLabel, secondaryLabel);
      if (url.includes('YOUR_GOOGLE_FORM_BASE_URL') || url.includes('ENTRY_ID_')) {
        event.preventDefault();
        alert('Add your Google Form URL and entry IDs in assets/js/results.js before using this button.');
        return;
      }
      sendResultsLink.href = url;
      sendResultsLink.target = '_blank';
      sendResultsLink.rel = 'noopener noreferrer';
    });
  }
}

initResults();
