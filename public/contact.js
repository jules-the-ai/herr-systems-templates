(() => {
  const form = document.querySelector('#inquiry-form');
  if (!form) return;
  const fields = Object.fromEntries(['name','email','business','website','message'].map(key => [key, document.querySelector(`#inquiry-${key}`)]));
  const errors = document.querySelector('#form-errors');
  const panel = document.querySelector('#draft-panel');
  const draft = document.querySelector('#draft-text');
  const status = document.querySelector('#draft-status');
  const openLink = document.querySelector('#open-draft');
  form.noValidate = true;
  document.querySelector('#prepare-draft').disabled = false;
  fields.message.addEventListener('input', () => {
    document.querySelector('#message-count').textContent = `${fields.message.value.length.toLocaleString('en-US')} / 3,000`;
  });
  // Editing invalidates the prepared draft so outdated details cannot be sent.
  form.addEventListener('input', () => { panel.hidden = true; openLink.href = 'mailto:hello@herrsystems.com'; });
  form.addEventListener('submit', event => {
    event.preventDefault();
    errors.querySelector('ul').replaceChildren();
    const problems = [];
    for (const [key, field] of Object.entries(fields)) {
      field.removeAttribute('aria-invalid');
      let problem = '';
      if (field.required && !field.value.trim()) problem = key === 'message' ? 'Tell us a little about your project or question.' : `Enter your ${key === 'name' ? 'name' : 'email address'}.`;
      else if (key === 'email' && field.validity.typeMismatch) problem = 'Enter a valid email address.';
      else if (field.value.length > field.maxLength) problem = `Shorten the ${key} field to ${field.maxLength} characters.`;
      const inline = document.querySelector(`#${key}-error`);
      if (inline) { inline.textContent = problem; field.setAttribute('aria-describedby', key === 'message' ? 'message-hint message-error' : `${key}-error`); }
      if (problem) { field.setAttribute('aria-invalid','true'); problems.push({ field, problem }); }
    }
    errors.hidden = !problems.length;
    if (problems.length) {
      panel.hidden = true;
      for (const { field, problem } of problems) {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${field.id}`; link.textContent = problem;
        link.addEventListener('click', event => { event.preventDefault(); field.focus(); });
        li.append(link); errors.querySelector('ul').append(li);
      }
      errors.focus(); return;
    }
    const topic = new FormData(form).get('topic') || 'General inquiry';
    const subject = `Herr Systems inquiry: ${topic}`;
    const body = [`Name: ${fields.name.value.trim()}`, `Reply email: ${fields.email.value.trim()}`, `Business: ${fields.business.value.trim() || 'Not supplied'}`, `Current website: ${fields.website.value.trim() || 'Not supplied'}`, `Topic: ${topic}`, '', fields.message.value.trim()].join('\n');
    draft.value = `To: hello@herrsystems.com\nSubject: ${subject}\n\n${body}`;
    openLink.href = `mailto:hello@herrsystems.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = '';
    panel.hidden = false;
    document.querySelector('#draft-title').focus();
  });
  document.querySelector('#edit-draft').addEventListener('click', () => { panel.hidden = true; fields.message.focus(); });
  document.querySelector('#copy-draft').addEventListener('click', async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(draft.value);
      status.textContent = 'Message copied. Paste it into an email to hello@herrsystems.com.';
    } catch {
      draft.focus(); draft.select();
      status.textContent = 'Automatic copying is unavailable. Your draft is selected—press Ctrl+C or Command+C to copy it.';
    }
  });
  openLink.addEventListener('click', () => { status.textContent = 'Your email app has been requested. Send the draft there when you’re ready. If nothing opens, use Copy message instead.'; });
})();
