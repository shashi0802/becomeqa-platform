import { useState } from 'react';
import './Enrollment.css';

const Enrollment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    trainingType: 'individual',
    batchDate: '2025-02-04',
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
    // Here you would typically send the data to a backend
    console.log('Enrollment data:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        experience: '',
        trainingType: 'individual',
        batchDate: '2025-02-04',
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
            <h2>Enrollment Submitted Successfully!</h2>
            <p>Thank you for your interest. We will contact you shortly with further details.</p>
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
          <h1>Enroll in Selenium Training</h1>
          <p>Join our next batch starting from 04-Feb-2025</p>
        </div>
      </div>

      <div className="container">
        <div className="enrollment-content">
          <div className="enrollment-info">
            <h2>Why Enroll with Us?</h2>
            <ul className="benefits-list">
              <li>✓ Expert instructors with industry experience</li>
              <li>✓ Comprehensive curriculum covering all aspects</li>
              <li>✓ Hands-on practice with real-world projects</li>
              <li>✓ Flexible learning with recorded sessions</li>
              <li>✓ Certificate of completion</li>
              <li>✓ Lifetime access to course materials</li>
              <li>✓ Support from instructors and community</li>
              <li>✓ Career guidance and placement assistance</li>
            </ul>

            <div className="course-highlights">
              <h3>Course Highlights</h3>
              <div className="highlights-grid">
                <div className="highlight-item">
                  <span className="highlight-number">10+</span>
                  <span className="highlight-text">Modules</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">40+</span>
                  <span className="highlight-text">Hours</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">100+</span>
                  <span className="highlight-text">Assignments</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number">24/7</span>
                  <span className="highlight-text">Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="enrollment-form-container">
            <h2>Fill in Your Details</h2>
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
                  <option value="2025-02-04">04-Feb-2025</option>
                  <option value="2025-03-04">04-Mar-2025</option>
                  <option value="2025-04-04">04-Apr-2025</option>
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
                Submit Enrollment
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


