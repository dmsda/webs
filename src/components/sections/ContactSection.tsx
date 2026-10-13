import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Mail, User, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    discipline: 'Editorial Design',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email address.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="landing-section contact-section" aria-labelledby="contact-title">
      <div className="section-header">
        <span className="section-eyebrow">Connect & Apply</span>
        <h2 id="contact-title" className="section-title">
          Submit Work for the Winter 2024 Showcase
        </h2>
        <p className="section-subtitle">
          Our curatorial jury actively reviews applications from painters, graphic designers, cinema art directors, and 3D sculptors worldwide.
        </p>
      </div>

      <div className="contact-card-container">
        {submitted ? (
          <div className="submission-success-banner" role="status">
            <CheckCircle2 size={48} color="var(--accent-green)" />
            <h3 className="success-title">Application Successfully Submitted</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.name}</strong>. Our lead curatorial director (@Johnson) and acquisitions team will review your portfolio and get back to you at <strong>{formData.email}</strong> within 3 business days.
            </p>
            <button
              className="secondary-action-btn"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', portfolio: '', discipline: 'Editorial Design', message: '' });
              }}
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name-input" className="form-label">
                  <User size={14} />
                  <span>Full Name or Studio Name</span>
                </label>
                <input
                  id="name-input"
                  type="text"
                  required
                  placeholder="e.g. Tyler Okonma / Studio Fur"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email-input" className="form-label">
                  <Mail size={14} />
                  <span>Email Address</span>
                </label>
                <input
                  id="email-input"
                  type="email"
                  required
                  placeholder="creator@studio.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="portfolio-input" className="form-label">
                  <Globe size={14} />
                  <span>Portfolio URL or Behance / ReadCV</span>
                </label>
                <input
                  id="portfolio-input"
                  type="url"
                  placeholder="https://yourportfolio.art"
                  className="form-input"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="discipline-select" className="form-label">
                  <Sparkles size={14} />
                  <span>Creative Discipline</span>
                </label>
                <select
                  id="discipline-select"
                  className="form-input select-input"
                  value={formData.discipline}
                  onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                >
                  <option value="Editorial Design">Editorial Design & Swiss Typography</option>
                  <option value="Collectible Art">Collectible Art & Toy Sculpture</option>
                  <option value="Campaign Photography">Campaign & Lifestyle Photography</option>
                  <option value="Film Poster">Indie Cinema & Film Poster</option>
                  <option value="Music Periodical">Music Periodical & Culture</option>
                  <option value="3D Digital Sculpture">3D Tactile Sculpture & Generative</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message-input" className="form-label">
                <span>Artist Statement & Showcase Intent</span>
              </label>
              <textarea
                id="message-input"
                rows={4}
                placeholder="Briefly describe the series or bodies of work you wish to debut on Pallet Ross..."
                className="form-input textarea-input"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="primary-action-btn submit-btn">
              <span>Submit Portfolio to Jury</span>
              <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
