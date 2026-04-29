const typeLabels = {
  S: 'Seeker',
  O: 'Soother',
  D: 'Drifter',
  T: 'Stabilizer',
  G: 'Social'
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
      'Do a 5\u201310 minute intensity shift before opening the fridge \u2014 stairs, a brisk walk, or anything that moves your body and genuinely changes your physical state. The goal is to give your brain the input it is actually looking for, not substitute food for it.',
      'Change tasks completely, not just location \u2014 move from screen to something hands-on, go outside briefly, or pick up something that requires actual focus. Novelty is what your brain wants. A different room with the same phone in your hand is not novelty.'
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
      'Take a 5-minute reset before eating — sit down, breathe, or step outside briefly. Not as a technique, but as a pause long enough to notice whether you are actually hungry or just needing the day to slow down.',
      'Drink something warm first — tea, broth, or coffee — then decide. Warmth does some of the same regulating work that food does. If you still want to eat after finishing it, eat. If the edge is off, you have your answer.'
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
      'Before the first bite, stop and plate it — even if it is just a handful of something. Eating while standing at the counter or walking through a room is the pattern in action. Sitting down with a plate is the interruption.',
      'If you catch yourself already eating, set it down and decide whether to continue. You do not have to stop — but the decision should be a decision, not just the continuation of something that started automatically.'
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
      'Eat a default meal you do not have to think about — something you can prepare without decisions, like the same breakfast you always make or a meal you keep on rotation. The goal is to remove choice from a moment when choice is the problem.',
      'Reset with your next planned eating time, not “later” — pick a specific time, not a vague intention. If dinner is at 7, eat at 7. The structure you already have is the tool.'
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
      'Eat earlier than you think you need to — not when you feel hungry, but on a schedule that prevents the deficit from building. By the time strong hunger shows up, you are already behind.',
      'Do not go more than 4 to 5 hours without eating. Set a timer if you have to. The goal is to make catching up unnecessary, not to manage it better once it happens.'
    ],
    decide: 'Am I trying to control intake earlier and paying for it now?',
    eat: 'If you are hungry, eat a balanced meal; not a quick snack to hold you over.'
  },
  FUELING_HIGH_OUTPUT: {
    title: 'Your results suggest a High-Output Fueling Pattern.',
    subtitle: 'The amount you burn may be outpacing what you are taking in — and your body is collecting the difference.',
    happening: 'High-intensity or high-volume exercise creates a significant caloric demand. When intake does not match output, the body compensates — often with urgent, high-volume, or hard-to-stop eating that feels disconnected from the workout that caused it. The drive home snack, the evening catch-up, the inability to stop once you start — these are not lapses. They are the bill coming due.',
    strength: 'You are disciplined, structured, and willing to put in the work. The output side of your system is well-developed. The intake side may just need the same level of attention.',
    offTrack: 'When output drops — injury, travel, schedule — the eating pattern does not automatically adjust. The behavior is established independently of the burn, which means slowing down tends to feel like losing control.',
    toolsTitle: 'What tends to help:',
    tools: [
      'Eat in proportion to output — on hard training days, eat more. Not as a reward, but because the math requires it. Waiting until you feel hungry after a high-output morning is waiting too long.',
      'Front-load intake earlier in the day, especially before or after intense sessions. If your hardest eating challenge happens at night, it is almost always a morning problem.',
      'When eating feels urgent or hard to stop, pause and ask whether you fueled adequately that day before assuming it is a discipline problem. Nine times out of ten it is not.'
    ],
    decide: 'Did I fuel enough for what I asked my body to do today?',
    eat: 'If you are hungry after a hard day, eat a full meal. Your body is not confused — it is doing the math.'
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
      'Use this result as information, not as a reason to shame yourself',
      'If you are currently working with a physician on weight management, this result is worth sharing with them directly'
    ],
    decide: 'What kind of support would actually meet the full picture here?',
    eat: 'You may still benefit from coaching later, but this pattern may deserve more specialized care first.',
    resources: [
      { name: 'Alliance for Eating Disorders Awareness', url: 'https://www.allianceforeatingdisorders.com', phone: '1-866-662-1235', note: 'Helpline staffed by real people' },
      { name: 'Find a therapist who specializes in eating behaviors', url: 'https://www.psychologytoday.com/us/therapists', phone: null, note: 'Filter by eating disorders, insurance, and location' }
    ]
  },

  G: {
    title: 'Your results suggest a Social pattern.',
    subtitle: 'Your eating may be most influenced by the people around you.',
    happening: 'Your eating at home is likely more controlled than your eating out or at social events. Food at a table with others carries a different weight — it is participation, belonging, and connection as much as it is nourishment. Saying no can feel like opting out of the moment.',
    strength: 'You are present, engaged, and attuned to the people around you. You show up fully. That attentiveness is a genuine strength — it is also what makes the table a high-risk environment for eating past your intention.',
    offTrack: 'The food almost does not matter. What matters is being part of what everyone else is doing. When the table is full and the food keeps coming, eating is the medium of connection — and stopping feels like withdrawing.',
    toolsTitle: 'When you are heading into a social eating situation:',
    tools: [
      'Decide before you arrive — not what you will eat exactly, but what you will not do. One decision made in advance is worth ten decisions made at the table when the food is already in front of you.',
      'Order first when you can. Hearing what everyone else orders before you decide is the single most reliable way to get pulled toward someone else's choice. Order early and the decision is done.',
      'Design the environment when it is yours to design. If you are hosting, the food you serve is the food available. A table full of things you feel good about removes the negotiation entirely.',
      'Use substitution without explanation. Seltzer in a wine glass. A smaller plate. A pause before second helpings. None of these require announcement or justification.'
    ],
    decide: 'Am I eating because I am hungry, or because everyone else is?',
    eat: 'If you are genuinely hungry, eat. If you are eating to participate, find another way to be present at the table.'
  },
  LOW: {
    title: 'Based on your answers, eating patterns are not a major concern for you right now.',
    subtitle: 'Based on your answers, unplanned or emotionally driven eating does not appear to be a significant concern right now.',
    happening: 'That is genuinely useful information. Not everyone has a complicated relationship with food, and this assessment is designed to reflect that honestly.',
    strength: 'You appear to have a relatively stable relationship with eating — consistent, intentional, and not heavily driven by stress or habit.',
    offTrack: 'Patterns can shift with life changes, stress, or routine disruptions. If something changes down the road, this assessment will still be here.',
    toolsTitle: 'If you are curious about eating patterns in general:',
    tools: [
      'The patterns identified here — stress-driven, routine-based, sensory, and structural — are common and worth understanding even if they do not apply to you now',
      'Sharing this with someone who might find it useful is welcome'
    ],
    decide: 'Is there something specific that prompted you to take this assessment?',
    eat: 'If eating is not currently a concern, trust that. You do not need a strategy for something that is not a problem.'
  }
};

function isLowScore(scores) {
  return (scores.S + scores.O + scores.D + scores.T + (scores.G || 0)) <= 8;
}

function createBox(title, bodyHtml, extraClass = '') {
  return `
    <div class="result-box ${extraClass}">
      <span class="result-kicker">${title}</span>
      ${bodyHtml}
    </div>
  `;
}


const secondaryNotes = {
  'S+O': 'Seeker patterns with Soother tendencies often show up as eating that starts with boredom or restlessness but intensifies when stress is present. The two reinforce each other — understimulation creates the opening, and emotional pressure turns it into something harder to stop.',
  'S+D': 'Seeker patterns with Drifter tendencies often look like eating that starts as a conscious search for something interesting and then continues automatically. You may start with intention and lose track of how much or how long.',
  'S+T': 'Seeker patterns with Stabilizer tendencies can create a push-pull dynamic — the routine provides some structure, but when that structure breaks, the pull toward stimulation through food becomes stronger. Disrupted days tend to be higher-risk.',
  'O+S': 'Soother patterns with Seeker tendencies often show up as eating that is emotionally driven but also sensory -- comfort food that has to be the right texture or taste, not just any food. The emotional need and the sensory need overlap.',
  'O+D': 'Soother patterns with Drifter tendencies often look like emotional eating that happens without a clear moment of decision. You may reach for food when stressed without fully noticing you did it until afterward.',
  'O+T': 'Soother patterns with Stabilizer tendencies can mean that routine is being used as emotional regulation -- eating at the same time, the same foods, as a way of managing feelings rather than hunger. Disruptions to the routine can feel disproportionately stressful.',
  'D+S': 'Drifter patterns with Seeker tendencies often show up as mindless eating that gravitates toward more stimulating or flavorful options. It is not just that eating happens automatically -- it tends toward specific textures or tastes once it starts.',
  'D+O': 'Drifter patterns with Soother tendencies often look like eating that starts without awareness and then continues because it provides comfort. The automatic start and the emotional reinforcement make it harder to interrupt once it is underway.',
  'D+T': 'Drifter patterns with Stabilizer tendencies often show up most clearly when routine breaks. When the day is structured, eating is more automatic but contained. When structure goes, awareness drops further and eating becomes more scattered.',
  'T+S': 'Stabilizer patterns with Seeker tendencies can create a cycle where structure works well until boredom sets in -- then the routine itself becomes the thing being eaten around. Predictable days can paradoxically increase the pull toward food as stimulation.',
  'T+O': 'Stabilizer patterns with Soother tendencies often show up as eating that is tied to emotional rhythm as much as time. Meals may feel like emotional anchors -- comforting as much as nutritional -- which makes disruption to the schedule feel more unsettling than it should.',
  'T+D': 'Stabilizer patterns with Drifter tendencies often look like eating that follows a schedule but happens without much awareness within that schedule. Timing is consistent but mindfulness is low -- meals happen on time but often automatically.',


  // Social as secondary for primary patterns
  'S+G': 'Seeker patterns with Social tendencies mean stimulation-seeking is amplified in social contexts. The food at a gathering is more interesting, more varied, and harder to stop eating than what you would choose alone. The Seeker brain and the social permission reinforce each other.',

  'O+G': 'Soother patterns with Social tendencies can mean emotional eating that is specifically activated by social dynamics — family tension, performance anxiety, the pressure to be on. The table provides both the trigger and the remedy.',

  'D+G': 'Drifter patterns with Social tendencies mean automatic eating is most pronounced in social settings. The conversation, the noise, the movement of food around the table — eating happens in the background of all of it without a clear decision point.',

  'T+G': 'Stabilizer patterns with Social tendencies mean the structure that usually protects eating disappears entirely in social contexts. The schedule, the portions, the familiar routine — none of it travels to someone else's table.',

  // Social as primary with secondaries
  'G+S': 'Social patterns with Seeker tendencies mean the most challenging social environments are ones with highly stimulating food — tasting menus, shared plates, food that is genuinely exciting. The social permission and the sensory pull work together.',

  'G+O': 'Social patterns with Soother tendencies mean social eating is particularly vulnerable when the gathering itself is emotionally charged. Family events, celebrations with complicated history, meals where the emotional stakes are high.',

  'G+D': 'Social patterns with Drifter tendencies mean social eating often happens without awareness — the conversation takes over, the food keeps appearing, and there is no clear moment of decision. It is over before it registered.',

  'G+T': 'Social patterns with Stabilizer tendencies mean the structure that usually works completely disappears at a social table. The plan that holds at home has no foothold when the environment is someone else's.',

  // Fueling + Social
  'FU+G': 'The deficit builds during the day and the social context is where it gets collected. By the time dinner with friends arrives, the hunger is real and the social permission to eat freely makes it hard to stop at adequate. Both problems land at the same table at the same time.'

  // Fueling secondary combinations -- results page explanations
  'FU+S': 'The deficit creates real hunger and the Seeker pattern shapes what fills it. By the time hunger arrives it is strong enough that only something stimulating works -- crunchy, layered, highly palatable foods that are also engineered to keep you eating past full. The hunger was legitimate. The food choice turns catch-up eating into overcompensation. Getting ahead of the deficit is not about discipline -- it is about making sure the Seeker pattern never gets a genuinely hungry brain to work with.',

  'FU+O': 'The deficit builds physical pressure and the Soother pattern adds emotional weight on top of it. Late-day hunger does not arrive as simple hunger -- it arrives as a need to decompress and settle. Some comfort foods are benign -- like tea. The ones that compound the problem are heavy and calorie-dense, chosen when the need is strongest and awareness is lowest. The awareness is the intervention. Noticing that you are reaching for comfort rather than fuel -- even once -- changes what you reach for.',

  'FU+D': 'The deficit builds without much awareness and the catch-up eating happens the same way -- automatically, past the point of need, without a clear decision point. A handful becomes a bag. A snack becomes an unplanned meal. The Drifter pattern on a depleted brain does not stop on its own. The interruption has to be physical -- stop, plate it, sit down. A full intentional meal addresses the deficit. The plate addresses the pattern.'
};

function getSecondaryNote(primaryCode, secondaryCode) {
  // For Fueling results, use FU prefix for combination lookup
  const fueling_primary = primaryCode === null || primaryCode === undefined;
  const key = primaryCode + '+' + secondaryCode;
  return secondaryNotes[key] || null;
}

function getSecondaryNoteForFueling(secondaryCode) {

  // Social as secondary for primary patterns
  'S+G': 'Seeker patterns with Social tendencies mean stimulation-seeking is amplified in social contexts. The food at a gathering is more interesting, more varied, and harder to stop eating than what you would choose alone. The Seeker brain and the social permission reinforce each other.',

  'O+G': 'Soother patterns with Social tendencies can mean emotional eating that is specifically activated by social dynamics — family tension, performance anxiety, the pressure to be on. The table provides both the trigger and the remedy.',

  'D+G': 'Drifter patterns with Social tendencies mean automatic eating is most pronounced in social settings. The conversation, the noise, the movement of food around the table — eating happens in the background of all of it without a clear decision point.',

  'T+G': 'Stabilizer patterns with Social tendencies mean the structure that usually protects eating disappears entirely in social contexts. The schedule, the portions, the familiar routine — none of it travels to someone else's table.',

  // Social as primary with secondaries
  'G+S': 'Social patterns with Seeker tendencies mean the most challenging social environments are ones with highly stimulating food — tasting menus, shared plates, food that is genuinely exciting. The social permission and the sensory pull work together.',

  'G+O': 'Social patterns with Soother tendencies mean social eating is particularly vulnerable when the gathering itself is emotionally charged. Family events, celebrations with complicated history, meals where the emotional stakes are high.',

  'G+D': 'Social patterns with Drifter tendencies mean social eating often happens without awareness — the conversation takes over, the food keeps appearing, and there is no clear moment of decision. It is over before it registered.',

  'G+T': 'Social patterns with Stabilizer tendencies mean the structure that usually works completely disappears at a social table. The plan that holds at home has no foothold when the environment is someone else's.',

  // Fueling + Social
  'FU+G': 'The deficit builds during the day and the social context is where it gets collected. By the time dinner with friends arrives, the hunger is real and the social permission to eat freely makes it hard to stop at adequate. Both problems land at the same table at the same time.'

  // Fueling secondary combinations use FU+ prefix
  const key = 'FU+' + secondaryCode;
  return secondaryNotes[key] || null;
}

const patternDescriptions = {
  'S': 'A Seeker pattern means food has become your most reliable source of stimulation \u2014 a quick way to change your state when things feel flat or repetitive.',
  'O': 'A Soother pattern means food has become your most reliable way to regulate emotional pressure \u2014 the thing you reach for when the day needs to soften.',
  'D': 'A Drifter pattern means eating happens in the background of your day \u2014 folded into other activities without a clear moment of decision.',
  'T': 'A Stabilizer pattern means your eating is strongly tied to the rhythm of your day \u2014 when structure holds, eating feels manageable; when it breaks, eating often follows.',
  'G': 'A Social pattern means eating changes significantly in the presence of others \u2014 the table, the gathering, the shared meal becomes the context where intention gives way to participation.'
};

function renderPrimaryBlock(copy, secondaryLabel, payload, isFueling) {
  const primaryCode = payload ? payload.types.primaryCode : '';
  const patternDesc = patternDescriptions[primaryCode] || '';
  const resourcesHtml = copy.resources ? `
    <div class="result-box resources-box">
      <span class="result-kicker">Where to go next</span>
      ${copy.resources.map(r => `
        <div class="resource-item">
          <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="resource-link">${r.name}</a>
          ${r.phone ? `<span class="resource-phone">${r.phone} &mdash; ${r.note}</span>` : `<span class="resource-note">${r.note}</span>`}
        </div>
      `).join('')}
    </div>
  ` : '';

  const secondaryNote = secondaryLabel && payload
    ? isFueling
      ? getSecondaryNoteForFueling(payload.types.secondaryCode)
      : getSecondaryNote(payload.types.primaryCode, payload.types.secondaryCode)
    : null;

  const secondaryBlock = secondaryNote ? `
    <div class="result-box secondary-pattern-callout">
      <span class="result-kicker secondary-kicker">Your result identified a second pattern.</span>
      <p class="secondary-pattern-name">${secondaryLabel}</p>
      <p class="secondary-pattern-body">${secondaryNote}</p>
      <p class="secondary-pattern-note">Most patterns have a secondary layer. This one shapes how your primary pattern shows up \u2014 and often explains why it is harder to interrupt than expected.</p>
    </div>
  ` : '';

  return `
    <div class="result-box">
      <span class="result-kicker">Primary result</span>
      ${patternDesc ? `<p class="result-description">${patternDesc}</p>` : ''}
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
    ${secondaryBlock}
    ${resourcesHtml}
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
    <p class="result-note">If you have not already spoken with your doctor about these changes, it is worth doing. Hormonal shifts during this stage are treatable and manageable — and understanding what is happening physiologically makes the behavioral strategies here more effective, not less necessary.</p>
  `);
}

function renderFuelingAddOn() {
  return createBox('There may also be a fueling issue here', `
    <p>Some of your responses suggest your body may be catching up after inconsistent intake earlier in the day.</p>
    <p>Before trying to control evening eating, it may help to stabilize what happens earlier.</p>
  `);
}

function renderCTA(payload) {
  return `
    <div class="result-box cta-box">
      <span class="result-kicker">If this feels accurate</span>
      <h2 class="result-title">You do not need more discipline.</h2>
      <p class="result-subtitle">You need a strategy that fits your pattern.</p>
      <p>If you want support, you can choose to send your results and request a call.</p>
      <div class="result-actions">
        <a class="btn-primary no-animation" id="sendResultsLink" href="#">Submit my results and request a call</a>
        <a class="btn-secondary" href="assessment.html">Retake the assessment</a>
      </div>
      <p class="helper-text"><a href="index.html" style="color: var(--muted); font-size: 0.78rem; font-family: 'DM Mono', monospace; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none;">Return to lainibyfield.com</a></p>
      <p class="helper-text">Your results are anonymous unless you choose to share them.</p>
    </div>
  `;
}



function renderClinicalResult(payload) {
  const hasProvider = payload.flags.hasProvider;
  const severityHigh = payload.flags.severityHigh;
  const primaryLabel = typeLabels[payload.types.primaryCode];
  const secondaryLabel = typeLabels[payload.types.secondaryCode];

  const primaryBox = `
    <div class="result-box">
      <span class="result-kicker">Primary result</span>
      <p class="result-subtitle">Some of your responses point to patterns that involve loss of control, distress, or significant mental load around food — patterns that respond best to more than one kind of support.</p>
    </div>
  `;

  const sharedBoxes = `
    ${createBox('What this means', `<p>This does not mean something is wrong with you. It means the behavioral strategies in this program work best when there is also clinical support alongside them — not instead of them.</p>
    <p>Coaching addresses the day-to-day behavioral piece: timing, structure, response strategies, and consistency. That work is more effective, not less, when it is part of a broader support picture.</p>`)}
    ${createBox('What this says about you', '<p>You are self-aware enough to recognize that something is happening. That awareness is not a small thing. It is often what makes the difference between staying stuck and actually moving forward.</p>')}
  `;

  const nav = `
    <p class="helper-text"><a href="index.html" style="color: var(--muted); font-size: 0.78rem; font-family: 'DM Mono', monospace; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none;">Return to lainibyfield.com</a></p>
  `;

  if (hasProvider) {
    const primaryDesc = patternDescriptions[payload.types.primaryCode] || '';
    const secKey = payload.types.primaryCode + '+' + payload.types.secondaryCode;
    const secondaryDesc = secondaryNotes[secKey] || '';
    const patternContextHtml = `<p>${primaryDesc}</p>${secondaryDesc ? `<p style="margin-top:8px">${secondaryDesc}</p>` : ''}<p style="margin-top:10px">Some of the strategies in this program may already feel familiar — you may have tried versions of them on your own or alongside other support. What guided coaching adds is not new information. It is structure, accountability, and a process tailored specifically to your pattern over time. That is often what makes the difference between knowing something and actually being able to use it consistently.</p>`;
    const patternContextBox = createBox('Your pattern context', patternContextHtml);

    return primaryBox + sharedBoxes + patternContextBox + `
      ${createBox('You are already working with someone', `<p>That matters. Coaching can work alongside your current support — not to replace it, but to address the behavioral layer that clinical work often does not cover in detail.</p>
      <p>If your provider is aware of your eating patterns, that conversation is already open. If not, sharing your results with them is a reasonable next step.</p>`)}

      <div class="result-box cta-box">
        <span class="result-kicker">If this feels accurate</span>
        <h2 class="result-title">Coaching can work alongside the support you already have.</h2>
        <p class="result-subtitle">You are not starting from zero.</p>
        <p>If you want to explore what that looks like, you can request a call. We can talk through whether this is the right fit right now.</p>
        <div class="result-actions">
          <a class="btn-primary no-animation" id="sendResultsLink" href="#">Submit my results and request a call</a>
          <a class="btn-secondary" href="assessment.html">Retake the assessment</a>
        </div>
        ${nav}
        <p class="helper-text">Your results are anonymous unless you choose to share them.</p>
      </div>
    \`;
  } else {
    const urgencyNote = severityHigh
      ? '<p>Based on your responses, the frequency and impact of what you are experiencing suggests that connecting with a specialist sooner rather than later would be worth prioritizing.</p>'
      : '<p>There is no urgency — but having that support in place before starting a coaching program tends to produce better outcomes.</p>';

    return primaryBox + sharedBoxes + `
      ${createBox('A grounded next step', `<p>Before starting a self-guided or coaching-based program, it may help to connect with someone who specializes in eating behaviors. This does not need to be a long-term commitment — even a few sessions can clarify what kind of support fits best.</p>
      ${urgencyNote}`)}

      <div class="result-box resources-box">
        <span class="result-kicker">Where to go next</span>
        <div class="resource-item">
          <a href="https://www.allianceforeatingdisorders.com" target="_blank" rel="noopener noreferrer" class="resource-link">Alliance for Eating Disorders Awareness</a>
          <span class="resource-phone">1-866-662-1235 &mdash; Helpline staffed by real people</span>
        </div>
        <div class="resource-item">
          <a href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener noreferrer" class="resource-link">Find a therapist who specializes in eating behaviors</a>
          <span class="resource-note">Filter by eating disorders, insurance, and location</span>
        </div>
        <div class="resource-item">
          <span class="resource-link" style="color: var(--ink-light); cursor: default;">If you are working with a physician on weight management</span>
          <span class="resource-note">This result is worth sharing with them directly</span>
        </div>
      </div>

      <div class="result-box cta-box">
        <span class="result-kicker">When you are ready</span>
        <h2 class="result-title">Coaching will still be here.</h2>
        <p class="result-subtitle">Once you have some support in place, the behavioral work becomes more effective — not less relevant.</p>
        <p>If you want to talk through what that could look like, you are welcome to request a call at any point.</p>
        <div class="result-actions">
          <a class="btn-primary no-animation" id="sendResultsLink" href="#">Request a call</a>
          <a class="btn-secondary" href="assessment.html">Retake the assessment</a>
        </div>
        ${nav}
        <p class="helper-text">Your results are anonymous unless you choose to share them.</p>
      </div>
    `;
  }
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
    'entry.ENTRY_ID_SECONDARY_TYPE': payload.flags.clinical ? '' : secondaryLabel,
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


function generatePatternCode(payload, primaryLabel) {
  // Code format: [Primary][Secondary]-[S][O][D][T]-W[week]
  // Example: SO-18-12-8-6-W14
  // Human readable, copyable, encodes enough to match longitudinally
  const p = payload.types.primaryCode || 'X';
  const s = payload.types.secondaryCode || 'X';
  const scores = payload.scores;
  const S = scores.S || 0;
  const O = scores.O || 0;
  const D = scores.D || 0;
  const T = scores.T || 0;
  const G = scores.G || 0;

  // YYWW format — last two digits of year + zero-padded week number
  // Crosses year boundaries correctly. Anonymous — no exact date stored.
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const week = Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
  const yy = String(now.getFullYear()).slice(-2);
  const ww = String(week).padStart(2, '0');
  const yyWW = yy + ww;

  // For low score / no pattern use NN
  const primary = payload.flags.clinical ? 'CL'
    : payload.flags.fueling && payload.flags.highOutput ? 'HO'
    : payload.flags.fueling ? 'FU'
    : (scores.S + scores.O + scores.D + scores.T + (scores.G || 0)) <= 8 ? 'NN'
    : p;

  const secondary = payload.flags.clinical || payload.flags.fueling
    || (scores.S + scores.O + scores.D + scores.T + (scores.G || 0)) <= 8 ? 'X' : s;

  return `${primary}${secondary}-${S}-${O}-${D}-${T}-${G}-${yyWW}`;
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA DESTINATION CONFIGURATION
// Activate ONE or MORE of the three options below.
// All three can run simultaneously — they are independent.
// ─────────────────────────────────────────────────────────────────────────────

// OPTION A — Airtable
// 1. Create a free account at airtable.com
// 2. Create a Base called "Assessment Results"
// 3. Add these fields: Timestamp, PatternCode, Primary, Secondary,
//    S, O, D, T, Fueling, Clinical, Perimenopause, Investment, SubmissionType
// 4. Go to airtable.com/create/tokens → create a Personal Access Token
//    with scopes: data.records:write, schema.bases:read
// 5. Find your Base ID in the URL: airtable.com/[BASE_ID]/...
// 6. Replace the placeholder values below
const AIRTABLE_TOKEN   = 'YOUR_AIRTABLE_PERSONAL_ACCESS_TOKEN';
const AIRTABLE_BASE_ID = 'YOUR_AIRTABLE_BASE_ID';
const AIRTABLE_TABLE   = 'Assessment Results'; // must match your table name exactly

// OPTION B — Google Sheets via Apps Script
// 1. Create a Google Sheet with columns matching the Airtable fields above
// 2. In the sheet: Extensions → Apps Script → paste the script from the
//    comment block at the bottom of this file
// 3. Deploy as web app: Execute as Me, Anyone can access
// 4. Copy the web app URL and paste below
const APPS_SCRIPT_URL  = 'YOUR_APPS_SCRIPT_WEB_APP_URL';

// OPTION C — EmailJS to dedicated data inbox
// Uses the same EmailJS account as the coaching request
// Create a second template for anonymous data — no personal info, just scores
// Route it to a dedicated address like data@lainibyfield.com
const EMAILJS_DATA_SERVICE_ID  = 'service_cx3vbrj';     // same as coaching
const EMAILJS_DATA_TEMPLATE_ID = 'YOUR_EMAILJS_DATA_TEMPLATE_ID'; // activate when upgrading
const EMAILJS_COACHING_TEMPLATE_ID = 'template_6964man'; // coaching request to Laini // separate template
const EMAILJS_PUBLIC_KEY       = 'ja72ibtYoc-e1mSZ1';      // same as coaching

// ─────────────────────────────────────────────────────────────────────────────

function buildAnonymousRecord(payload, primaryLabel, secondaryLabel, code) {
  // Shared data structure used by all three destinations
  const resultLabel = payload.flags.clinical
    ? 'Different starting point'
    : payload.flags.highOutput ? 'High-Output Fueling'
    : payload.flags.fueling    ? 'Fueling Pattern'
    : (payload.scores.S + payload.scores.O + payload.scores.D + payload.scores.T) <= 8
      ? 'No Strong Pattern'
      : primaryLabel;

  return {
    Timestamp:      new Date().toISOString(),
    PatternCode:    code,
    Primary:        resultLabel,
    Secondary:      payload.flags.clinical ? '' : secondaryLabel,
    S:              payload.scores.S,
    O:              payload.scores.O,
    D:              payload.scores.D,
    T:              payload.scores.T,
    G:              payload.scores.G || 0,
    prescreenExit:  payload.prescreenExit || null,
    layer1Answers:  payload.layer1Answers || null,
    Fueling:        payload.flags.fueling        ? 'Yes' : 'No',
    Clinical:       payload.flags.clinical       ? 'Yes' : 'No',
    Perimenopause:  payload.flags.perimenopause  ? 'Yes' : 'No',
    Investment:     payload.investmentLevel || '',
    SubmissionType: 'auto_result'
  };
}

function submitToAirtable(record) {
  // OPTION A — only runs if token is configured
  if (AIRTABLE_TOKEN.includes('YOUR_')) return;

  fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type':  'application/json'
    },
    body: JSON.stringify({ fields: record })
  }).catch(() => {}); // silent — never interrupts the user
}

function submitToGoogleSheet(record) {
  // OPTION B — only runs if Apps Script URL is configured
  if (APPS_SCRIPT_URL.includes('YOUR_')) return;

  fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    mode:   'no-cors', // Apps Script requires no-cors from external origins
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record)
  }).catch(() => {});
}

function submitToEmailJSData(record) {
  // OPTION C — only runs if EmailJS data template is configured
  if (EMAILJS_DATA_TEMPLATE_ID.includes('YOUR_')) return;
  if (typeof emailjs === 'undefined') return;

  emailjs.send(
    EMAILJS_DATA_SERVICE_ID,
    EMAILJS_DATA_TEMPLATE_ID,
    {
      pattern_code:   record.PatternCode,
      primary:        record.Primary,
      secondary:      record.Secondary,
      score_s:        record.S,
      score_o:        record.O,
      score_d:        record.D,
      score_t:        record.T,
      score_g:        record.G || 0,
      prescreen_exit:   record.prescreenExit || null,
      np_layer1:        record.layer1Answers ? record.layer1Answers.join(',') : null,
      fueling:        record.Fueling,
      clinical:       record.Clinical,
      perimenopause:  record.Perimenopause,
      investment:     record.Investment,
      timestamp:      record.Timestamp
    },
    EMAILJS_PUBLIC_KEY
  ).catch(() => {});
}

function silentAnonymousSubmit(payload, primaryLabel, secondaryLabel) {
  // Fires once when result renders — silent, no user action required
  // Routes to whichever destinations are configured above
  const code   = generatePatternCode(payload, primaryLabel);
  const record = buildAnonymousRecord(payload, primaryLabel, secondaryLabel, code);

  // Activate whichever destinations are configured above
  // by uncommenting the corresponding line:
  // submitToAirtable(record);      // Option A — uncomment when Airtable is configured
  // submitToGoogleSheet(record);   // Option B — uncomment when Apps Script is deployed
  // submitToEmailJSData(record);   // Option C — uncomment when EmailJS data template is ready
}

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * OPTION B — GOOGLE APPS SCRIPT
 * Copy everything between the dashes and paste into your Apps Script editor.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * function doPost(e) {
 *   try {
 *     const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     const data  = JSON.parse(e.postData.contents);
 *
 *     // Add header row if sheet is empty
 *     if (sheet.getLastRow() === 0) {
 *       sheet.appendRow([
 *         'Timestamp','PatternCode','Primary','Secondary',
 *         'S','O','D','T','Fueling','Clinical','Perimenopause',
 *         'Investment','SubmissionType'
 *       ]);
 *     }
 *
 *     sheet.appendRow([
 *       data.Timestamp, data.PatternCode, data.Primary, data.Secondary,
 *       data.S, data.O, data.D, data.T, data.Fueling, data.Clinical,
 *       data.Perimenopause, data.Investment, data.SubmissionType
 *     ]);
 *
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ status: 'ok' }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } catch(err) {
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 * ─────────────────────────────────────────────────────────────────────────────
 */




function sendResultsEmail(email, payload, primaryLabel, secondaryLabel, patternCode) {
  // EmailJS — configure YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY
  // Template variables: to_email, pattern_name, pattern_code,
  //                     pattern_description, secondary_name, scores_summary
  // Uses the EmailJS constants defined at the top of this file
  // YOUR_EMAILJS_SERVICE_ID and YOUR_EMAILJS_PUBLIC_KEY are shared
  // YOUR_EMAILJS_TEMPLATE_ID is the coaching/results template (different from data template)
  const serviceId   = 'service_cx3vbrj';
  const templateId  = 'template_eglunlh';   // template for sending results TO the user
  const publicKey   = EMAILJS_PUBLIC_KEY;            // shared with data submission

  if (serviceId.includes('YOUR_')) {
    return Promise.reject('EmailJS not configured yet');
  }

  const patternDesc = {
    'Seeker':    'Food has become your most reliable source of stimulation — a quick way to change your state when things feel flat or repetitive.',
    'Soother':   'Food has become your most reliable way to regulate emotional pressure — the thing you reach for when the day needs to soften.',
    'Drifter':   'Eating happens in the background of your day — folded into other activities without a clear moment of decision.',
    'Stabilizer':'Your eating is strongly tied to the rhythm of your day — when structure holds, eating feels manageable; when it breaks, eating often follows.',
    'Fueling':   'Your body is catching up from a deficit that built earlier in the day — not a lack of discipline, a matter of timing.',
  };

  const resultName = payload.flags.clinical ? 'A different starting point'
    : payload.flags.highOutput ? 'High-Output Fueling Pattern'
    : payload.flags.fueling    ? 'Fueling Pattern'
    : (payload.scores.S + payload.scores.O + payload.scores.D + payload.scores.T) <= 8
      ? 'No strong pattern identified'
      : primaryLabel + ' Pattern';

  const templateParams = {
    to_email:            email,
    pattern_name:        resultName,
    pattern_code:        patternCode,
    pattern_description: patternDesc[primaryLabel] || 'See your full results at lainibyfield.com.',
    secondary_name:      secondaryLabel || '',
    scores_summary:      `Seeker: ${payload.scores.S} | Soother: ${payload.scores.O} | Drifter: ${payload.scores.D} | Stabilizer: ${payload.scores.T} | Social: ${payload.scores.G || 0}`,
    retake_instruction:  'When you retake the assessment at day 21, enter your pattern code to see what changed.',
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
}

function initResults() {
  const raw = localStorage.getItem('lainiAssessmentResult');
  const noState = document.getElementById('noResultState');
  const resultSection = document.getElementById('resultSection');
  const resultMain = document.getElementById('resultMain');
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

  // ── PRESCREEN EXITS ───────────────────────────────────────────────────────
  if (payload.prescreenExit === 'noPattern' || payload.types.primaryCode === 'NP') {
    // NP result — no products, no CTA to purchase
    // Only next step: take the full assessment
    pageTitle.innerHTML = 'Based on your first three answers, <em>no strong pattern</em> emerged.';
    pageIntro.textContent = 'That is a meaningful result. Not everyone who takes this assessment has a significant eating pattern. This may reflect where you are right now.';
    html += `
      <div class="result-block" style="background:#f5f0e8;border-left:3px solid #7a5c3e;padding:1.5rem;margin:1rem 0;border-radius:4px;">
        <h3 style="color:#7a5c3e;margin-top:0;">What this means</h3>
        <p>The first three questions screen for whether eating patterns are a significant concern. Your answers suggest they are not — at least not in an obvious way right now.</p>
        <p>This could mean eating is genuinely not complicated for you. It could also mean the pattern is subtle, situational, or not active during the period these questions were asking about.</p>
        <h3 style="color:#7a5c3e;">Your next step</h3>
        <p>If you want a fuller picture, take the complete assessment. It takes about ten minutes and asks more specific questions across six behavioral patterns.</p>
        <p style="margin-bottom:0;"><a href="assessment.html" style="color:#7a5c3e;font-weight:bold;">Take the full assessment &rarr;</a></p>
      </div>`;
    // Track NP result in anonymous data — no products shown
    resultContainer.innerHTML = html;
    return;
  }

  if (payload.prescreenExit === 'seeker') {
    // Early Seeker exit — show Seeker result normally
    // Falls through to normal rendering below with primaryCode S
  }

  if (isLowScore(payload.scores)) {
    const copy = resultCopy.LOW;
    pageTitle.innerHTML = 'Based on your answers, eating patterns are <em>not a major concern</em> for you right now.';
    pageIntro.textContent = 'Not everyone has a complicated relationship with food. This assessment is designed to reflect that honestly.';
    html += renderPrimaryBlock(copy, '', payload);
  } else if (payload.flags.highOutput) {
    const copy = resultCopy.FUELING_HIGH_OUTPUT;
    pageTitle.innerHTML = 'Your results suggest a <em>High-Output Fueling Pattern</em>.';
    pageIntro.textContent = 'The amount you burn may be outpacing what you are taking in. That gap has downstream consequences that can feel like a discipline problem but are not.';
    html += renderPrimaryBlock(copy, '', payload);
  } else if (payload.flags.clinical) {
    pageTitle.innerHTML = 'Your responses suggest a <em>different starting point</em>.';
    pageIntro.textContent = payload.flags.hasProvider
      ? 'You are already working with someone. This result is about what coaching can add — not replace.'
      : 'This result does not mean something is wrong with you. It means your next step may benefit from more than one kind of support.';
    html += renderClinicalResult(payload);
  } else if (payload.flags.fueling) {
    const copy = resultCopy.FUELING;
    pageTitle.innerHTML = 'Your results suggest a <em>Fueling Pattern</em>.';
    pageIntro.textContent = 'Some patterns look behavioral at first, but the body may simply be catching up after inconsistent intake.';
    // Pass secondary for Fueling — suppressed only for Stabilizer secondary
    const fuelingSecondary = payload.types.secondaryCode === 'T' ? '' : secondaryLabel;
    html += renderPrimaryBlock(copy, fuelingSecondary, payload, true);
  } else if (payload.types.primaryCode === 'G') {
    const copy = resultCopy.G;
    pageTitle.innerHTML = 'Your results suggest a <em>Social</em> pattern.';
    pageIntro.textContent = 'Your eating changes significantly when other people are involved. The food is almost beside the point — it is the table that is doing the work.';
    html += renderPrimaryBlock(copy, secondaryLabel, payload);
  } else {
    const copy = resultCopy[payload.types.primaryCode];
    pageTitle.innerHTML = `Your results suggest a <em>${primaryLabel}</em> pattern.`;
    pageIntro.textContent = 'The point is not to judge the pattern. The point is to understand it well enough to respond differently.';
    html += renderPrimaryBlock(copy, secondaryLabel, payload);
    if (payload.scores.F >= 2) {
      html += renderFuelingAddOn();
    }
  }

  if (payload.flags.perimenopause) {
    html += renderPerimenopauseBox();
  }

  html += renderCTA(payload);

  // Append pattern code block after CTA
  const patternCode = generatePatternCode(payload, primaryLabel);
  const priorCode = sessionStorage.getItem('lainiPriorCode') || null;

  let comparisonHtml = '';
  if (priorCode && priorCode !== patternCode) {
    // Parse prior code — format: PP-S-O-D-T-Wnn
    const parts = priorCode.split('-');
    if (parts.length >= 6) {
      const priorPattern = parts[0];
      const priorS = parseInt(parts[1]) || 0;
      const priorO = parseInt(parts[2]) || 0;
      const priorD = parseInt(parts[3]) || 0;
      const priorT = parseInt(parts[4]) || 0;
      const curS = payload.scores.S || 0;
      const curO = payload.scores.O || 0;
      const curD = payload.scores.D || 0;
      const curT = payload.scores.T || 0;
      const patternChanged = priorPattern !== (payload.types.primaryCode || 'NN');
      comparisonHtml = `
        <div class="comparison-block">
          <p class="pattern-code-label">WHAT CHANGED SINCE YOUR FIRST RESULT</p>
          <p class="comparison-prior-code">First code: <span>${priorCode}</span></p>
          ${patternChanged
            ? `<p class="comparison-pattern-shift">Your primary pattern shifted from <strong>${priorPattern}</strong> to <strong>${payload.types.primaryCode || 'NN'}</strong>.</p>`
            : `<p class="comparison-pattern-same">Your primary pattern is consistent — <strong>${primaryLabel}</strong> both times.</p>`
          }
          <div class="comparison-scores">
            <div class="score-row ${curS < priorS ? 'score-down' : curS > priorS ? 'score-up' : ''}">
              <span class="score-label">Seeker</span>
              <span class="score-before">${priorS}</span>
              <span class="score-arrow">${curS < priorS ? '↓' : curS > priorS ? '↑' : '→'}</span>
              <span class="score-after">${curS}</span>
            </div>
            <div class="score-row ${curO < priorO ? 'score-down' : curO > priorO ? 'score-up' : ''}">
              <span class="score-label">Soother</span>
              <span class="score-before">${priorO}</span>
              <span class="score-arrow">${curO < priorO ? '↓' : curO > priorO ? '↑' : '→'}</span>
              <span class="score-after">${curO}</span>
            </div>
            <div class="score-row ${curD < priorD ? 'score-down' : curD > priorD ? 'score-up' : ''}">
              <span class="score-label">Drifter</span>
              <span class="score-before">${priorD}</span>
              <span class="score-arrow">${curD < priorD ? '↓' : curD > priorD ? '↑' : '→'}</span>
              <span class="score-after">${curD}</span>
            </div>
            <div class="score-row ${curT < priorT ? 'score-down' : curT > priorT ? 'score-up' : ''}">
              <span class="score-label">Stabilizer</span>
              <span class="score-before">${priorT}</span>
              <span class="score-arrow">${curT < priorT ? '↓' : curT > priorT ? '↑' : '→'}</span>
              <span class="score-after">${curT}</span>
            </div>
          </div>
        </div>
      `;
    }
  }

  html += `
    <div class="pattern-code-block">
      <p class="pattern-code-label">YOUR PATTERN CODE</p>
      <p class="pattern-code-value">${patternCode}</p>
      <p class="pattern-code-instructions">Save this code. If you complete the 21-day protocol and want to see what changed, enter it when you retake the assessment at day 21.</p>
      <div class="email-send-row" id="emailSendRow">
        <input type="email" id="resultEmailInput" class="result-email-input"
               placeholder="Send these results to your email"
               autocomplete="email" />
        <button type="button" id="resultEmailBtn" class="result-email-btn">Send</button>
      </div>
      <p class="email-privacy-note">Your email is used only to send this message. It is not stored, shared, or added to any list.</p>
      <p class="email-send-status hidden-input" id="emailSendStatus"></p>
    </div>
    ${comparisonHtml}
  `;

  resultMain.innerHTML = html;

  // Email send button
  const emailBtn   = document.getElementById('resultEmailBtn');
  const emailInput = document.getElementById('resultEmailInput');
  const emailStatus = document.getElementById('emailSendStatus');

  if (emailBtn && emailInput) {
    emailBtn.addEventListener('click', () => {
      const email = emailInput.value.trim();
      if (!email || !email.includes('@')) {
        emailStatus.textContent = 'Please enter a valid email address.';
        emailStatus.className = 'email-send-status email-error';
        return;
      }
      emailBtn.disabled = true;
      emailBtn.textContent = 'Sending…';
      emailStatus.classList.remove('hidden-input');
      emailStatus.textContent = '';

      sendResultsEmail(email, payload, primaryLabel, secondaryLabel, patternCode)
        .then(() => {
          emailStatus.textContent = 'Sent. Check your inbox.';
          emailStatus.className = 'email-send-status email-success';
          emailInput.value = '';
          emailBtn.textContent = 'Sent';
        })
        .catch((err) => {
          if (String(err).includes('not configured')) {
            emailStatus.textContent = 'Email sending is not configured yet.';
          } else {
            emailStatus.textContent = 'Something went wrong. Try screenshotting for now.';
          }
          emailStatus.className = 'email-send-status email-error';
          emailBtn.disabled = false;
          emailBtn.textContent = 'Send';
        });
    });
  }

  // Silent anonymous submission — fires once on result render
  silentAnonymousSubmit(payload, primaryLabel, secondaryLabel);

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
