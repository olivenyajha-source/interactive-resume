document.addEventListener('DOMContentLoaded', function(){
  // Contact form demo handler (shows a message; integrate Formspree/Netlify for real submissions)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      document.getElementById('form-msg').textContent = 'Thanks — message recorded (demo). Please email directly at Olivenyajha@gmail.com to ensure delivery.';
      form.reset();
    });
  }

  // Expanded rule-based chatbot FAQ
  const faq = [
    // --- Existing ---
    {q: 'what skills do you have', a: 'I have Security+, Python, Java, Power BI, Active Directory, networking fundamentals, and Linux/Windows experience.'},
    {q: 'what projects have you built', a: 'I built a Power BI Dashboard, ACS Data Analytics project, and network utilities. Their are more details on my Projects page.'},
    {q: 'are you available for work', a: 'Yes—open to internships & part-time roles. Contact me through the site or by email.'},
    {q: 'how can i contact you', a: 'Email me at: Olivenyajha@gmail.com or use the contact form.'},
    {q: 'where did you study', a: 'I study Computer Technology at Bowie State University with a concentration in Network Enterprise Infrastructure.'},

    // --- School Questions ---
    {q: 'what year of school are you', a: 'I am currently in college working toward my Bachelor’s degree (Expected graduation: May 2026).'},
    {q: 'what is your major', a: 'My major is Computer Technology with a concentration in Network Enterprise Infrastructure.'},
    {q: 'what classes are you taking', a: 'I take courses in cybersecurity, networks, operating systems, cloud computing, and data analytics.'},
    {q: 'what is your schedule', a: 'I have classes on Tuesdays and Thursdays from 11:00 AM–2:40 PM, and evening classes on Monday and Wednesday (7PM–9:50PM).'},
    {q: 'what is your gpa ', a: 'My gpa right now is a 3.5 currently.'},

    // --- Career Questions ---
    {q: 'what job do you want', a: 'I am aiming for roles in cybersecurity, data analyst, IT support, or security operations.'},
    {q: 'what certifications do you have', a: 'I have Security+ and am actively building more skills in cloud and cybersecurity.'},
    {q: 'what experience do you have', a: 'I have hands-on experience across government, healthcare, and financial sectors in IT, security, and analytics.'},
    
    // --- Fitness/Lifestyle Questions ---
    {q: 'what are your fitness goals', a: 'My goals include body recomp, losing 20–25 lbs, improving endurance/flexibility, and working out 4–5 times a week.'},
    {q: 'are you meal prepping', a: 'Yes — I prefer meal prepping to stay consistent with my fitness goals.'},

    // --- Personal / Fun ---
    {q: 'what music do you like', a: 'I enjoy a mix of R&B, hip-hop, pop, and chill music.'},
    {q: 'what do you like to do for fun', a: 'I like tech projects, fitness, traveling, and spending time with people I care about.'},
  ];

  function createChatWidget(){
    const root = document.getElementById('chatbot-root');
    const widget = document.createElement('div'); widget.className = 'chat-widget';
    widget.innerHTML = `
      <div class="chat-header">Ask Nyajha</div>
      <div class="chat-body" id="chat-body"></div>
      <div class="chat-footer">
        <input id="chat-input" placeholder="Ask a question..." aria-label="chat input">
        <button id="chat-send">Send</button>
      </div>
    `;
    root.appendChild(widget);

    const body = widget.querySelector('#chat-body');
    const input = widget.querySelector('#chat-input');
    const send = widget.querySelector('#chat-send');

    function appendMessage(text, who){
      const div = document.createElement('div');
      div.className = 'chat-message ' + (who === 'user' ? 'user' : 'bot');
      div.textContent = text;
      body.appendChild(div);
      body.scrollTop = body.scrollHeight;
    }

    send.addEventListener('click', ()=> handle(input.value));
    input.addEventListener('keydown', (e)=> { if(e.key === 'Enter') handle(input.value); });

    function handle(text){
      if(!text.trim()) return;
      appendMessage(text, 'user');
      input.value = '';
      const normalized = text.toLowerCase();

      // Find exact or partial match
      let found = faq.find(f => normalized.includes(f.q));

      // Keyword fallback logic
      if(!found){
        if(normalized.includes('skill')) found = faq.find(f => f.q.includes('what skills'));
        if(normalized.includes('project')) found = faq.find(f => f.q.includes('projects'));
        if(normalized.includes('contact')) found = faq.find(f => f.q.includes('contact'));
        if(normalized.includes('school') || normalized.includes('year') || normalized.includes('college')) 
            found = faq.find(f => f.q.includes('year of school'));
        if(normalized.includes('major')) found = faq.find(f => f.q.includes('major'));
        if(normalized.includes('class')) found = faq.find(f => f.q.includes('classes'));
        if(normalized.includes('job')) found = faq.find(f => f.q.includes('job do you want'));
        if(normalized.includes('fitness')) found = faq.find(f => f.q.includes('fitness goals'));
      }

      setTimeout(()=> {
        if(found) appendMessage(found.a, 'bot');
        else appendMessage('Sorry — I do not know that yet. Try asking about my skills, projects, school, schedule, or career goals.', 'bot');
      }, 600);
    }
  }

  createChatWidget();
});

