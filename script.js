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

  // Simple rule-based chatbot
  const faq = [
    {q: 'what skills do you have', a: 'I have Security+, Python, Java, Power BI, Active Directory, networking fundamentals, and Linux/Windows experience.'},
    {q: 'what projects have you built', a: 'I have built Power BI dashboards and network utilities. See Projects for repository links.'},
    {q: 'are you available for work', a: 'I am open to internships & part-time roles — please contact me via the Contact page.'},
    {q: 'how can i contact you', a: 'Email: Olivenyajha@gmail.com or use the contact form on the site.'},
    {q: 'where did you study', a: 'I study Computer Technology at Bowie State University (Network Enterprise Infrastructure).'}
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
      let found = faq.find(f => normalized.includes(f.q));
      if(!found){
        // keyword fallback
        if(normalized.includes('skill')) found = faq[0];
        if(normalized.includes('project')) found = faq[1];
        if(normalized.includes('available') || normalized.includes('work')) found = faq[2];
        if(normalized.includes('contact')) found = faq[3];
      }
      setTimeout(()=> {
        if(found) appendMessage(found.a, 'bot');
        else appendMessage('Sorry — I do not know that yet. Try: "what skills do you have", "what projects have you built", or "how can i contact you".', 'bot');
      }, 600);
    }
  }

  createChatWidget();
});
