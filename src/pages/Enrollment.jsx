import { useState } from 'react';
import { useContentstackGlobal } from '../hooks/useContentstack';
import { CONTENT_TYPES } from '../config/contentTypes';
import { getFieldValue } from '../utils/contentHelpers';
import './Enrollment.css';

const Enrollment = () => {
  // Fetch enrollment page content from Contentstack
  const { data: enrollmentData, loading, error } = useContentstackGlobal(CONTENT_TYPES.ENROLLMENT_PAGE);

  // Default values
  const defaultBenefits = [
    { text: 'Expert instructors with industry experience', benefit_text: 'Expert instructors with industry experience' },
    { text: 'Comprehensive curriculum covering all aspects', benefit_text: 'Comprehensive curriculum covering all aspects' },
    { text: 'Hands-on practice with real-world projects', benefit_text: 'Hands-on practice with real-world projects' },
    { text: 'Flexible learning with recorded sessions', benefit_text: 'Flexible learning with recorded sessions' },
    { text: 'Certificate of completion', benefit_text: 'Certificate of completion' },
    { text: 'Lifetime access to course materials', benefit_text: 'Lifetime access to course materials' },
    { text: 'Support from instructors and community', benefit_text: 'Support from instructors and community' },
    { text: 'Career guidance and placement assistance', benefit_text: 'Career guidance and placement assistance' },
  ];

  const defaultHighlights = [
    { number: '10+', label: 'Modules', text: 'Modules' },
    { number: '40+', label: 'Hours', text: 'Hours' },
    { number: '100+', label: 'Assignments', text: 'Assignments' },
    { number: '24/7', label: 'Support', text: 'Support' },
  ];

  const defaultBatchDates = [
    { date_value: '2025-02-04', date_label: '04-Feb-2025' },
    { date_value: '2025-03-04', date_label: '04-Mar-2025' },
    { date_value: '2025-04-04', date_label: '04-Apr-2025' },
  ];

  // Get values from Contentstack or use defaults
  const pageTitle = enrollmentData ? getFieldValue(enrollmentData, 'page_title') : 'Enroll in Selenium Training';
  const pageSubtitle = enrollmentData ? getFieldValue(enrollmentData, 'page_subtitle') : 'Join our next batch starting from 04-Feb-2025';
  const benefitsTitle = enrollmentData ? getFieldValue(enrollmentData, 'benefits_title') : 'Why Enroll with Us?';
  const benefits = enrollmentData ? (getFieldValue(enrollmentData, 'benefits') || defaultBenefits) : defaultBenefits;
  const highlightsTitle = enrollmentData ? getFieldValue(enrollmentData, 'highlights_title') : 'Course Highlights';
  const courseHighlights = enrollmentData ? (getFieldValue(enrollmentData, 'course_highlights') || defaultHighlights) : defaultHighlights;
  const formTitle = enrollmentData ? getFieldValue(enrollmentData, 'form_title') : 'Fill in Your Details';
  const batchDates = enrollmentData ? (getFieldValue(enrollmentData, 'batch_dates') || defaultBatchDates) : defaultBatchDates;
  const submitBtnText = enrollmentData ? getFieldValue(enrollmentData, 'submit_btn_text') : 'Submit Enrollment';
  const successTitle = enrollmentData ? getFieldValue(enrollmentData, 'success_title') : 'Enrollment Submitted Successfully!';
  const successMessage = enrollmentData ? getFieldValue(enrollmentData, 'success_message') : 'Thank you for your interest. We will contact you shortly with further details.';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    trainingType: 'individual',
    batchDate: batchDates[0]?.date_value || '2025-02-04',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enrollment data:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        experience: '',
        trainingType: 'individual',
        batchDate: batchDates[0]?.date_value || '2025-02-04',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="enrollment-page">
        <div className="container">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>{successTitle}</h2>
            <p>{successMessage}</p>
            <p className="success-note">You will receive a confirmation email at {formData.email}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="enrollment-page">
      <div className="page-header">
        <div className="container">
          <h1>{pageTitle}</h1>
          <p>{pageSubtitle}</p>
        </div>
      </div>

      <div className="container">
        <div className="enrollment-content">
          <div className="enrollment-info">
            <h2>{benefitsTitle}</h2>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index}>✓ {benefit.benefit_text || benefit.text}</li>
              ))}
            </ul>

            <div className="course-highlights">
              <h3>{highlightsTitle}</h3>
              <div className="highlights-grid">
                {courseHighlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <span className="highlight-number">{highlight.number}</span>
                    <span className="highlight-text">{highlight.text || highlight.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="enrollment-form-container">
            <h2>{formTitle}</h2>
            <form className="enrollment-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div className="form-group">
                <label htmlFor="experience">Years of Experience *</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your experience</option>
                  <option value="0-1">0-1 years (Fresher)</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-8">5-8 years</option>
                  <option value="8+">8+ years</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="trainingType">Training Type *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="trainingType"
                      value="individual"
                      checked={formData.trainingType === 'individual'}
                      onChange={handleChange}
                      required
                    />
                    <span>Individual</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="trainingType"
                      value="corporate"
                      checked={formData.trainingType === 'corporate'}
                      onChange={handleChange}
                      required
                    />
                    <span>Corporate</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="batchDate">Preferred Batch Date *</label>
                <select
                  id="batchDate"
                  name="batchDate"
                  value={formData.batchDate}
                  onChange={handleChange}
                  required
                >
                  {batchDates.map((batch, index) => (
                    <option key={index} value={batch.date_value}>{batch.date_label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your goals or any questions..."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-large btn-submit">
                {submitBtnText}
              </button>

              <p className="form-note">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
