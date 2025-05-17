import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Clock, HelpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  // Reference to measure and maintain consistent heights
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const { t, language } = useLanguage();
  
  // Track preferred contact method and whether to show the ID field
  const [contactMethod, setContactMethod] = useState('Email');
  const [showContactId, setShowContactId] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveDate: '',
    budget: '',
    location: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  

  // Budget options based on language
  const budgetOptions = {
    en: [
      { value: "", label: "Select a range" },
      { value: "Under ¥50,000", label: "Under ¥50,000" },
      { value: "¥50,000 - ¥80,000", label: "¥50,000 - ¥80,000" },
      { value: "¥80,000 - ¥120,000", label: "¥80,000 - ¥120,000" },
      { value: "¥120,000 - ¥150,000", label: "¥120,000 - ¥150,000" },
      { value: "Above ¥150,000", label: "Above ¥150,000" }
    ],
    ja: [
      { value: "", label: "範囲を選択" },
      { value: "¥50,000未満", label: "¥50,000未満" },
      { value: "¥50,000 - ¥80,000", label: "¥50,000 - ¥80,000" },
      { value: "¥80,000 - ¥120,000", label: "¥80,000 - ¥120,000" },
      { value: "¥120,000 - ¥150,000", label: "¥120,000 - ¥150,000" },
      { value: "¥150,000以上", label: "¥150,000以上" }
    ]
  };

  const currentBudgetOptions = language === 'en' ? budgetOptions.en : budgetOptions.ja;

  // Effect to maintain consistent heights during language transitions
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    // Store initial height
    const updateHeight = () => {
      const height = section.offsetHeight;
      section.style.setProperty('--section-min-height', `${height}px`);
    };
    
    // Update height on mount and window resize
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-8 md:py-12 bg-white dark:bg-gray-900 fixed-height-section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="section-title text-2xl md:text-3xl font-bold text-center">{t('contact')}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 h-full">
            <h3 className="text-lg font-bold text-navy dark:text-white mb-3">{t('getInTouch')}</h3>
            
            <form action="https://formsubmit.co/k.sheenan@gmail.com" method="POST">
              {/* Hidden fields for customization */}
              <input type="hidden" name="_subject" value="New Contact Submission from Affarah" />
              <input type="hidden" name="_next" value="https://affarah.com/thanks" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* 1. Your Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('formNameLabel')} <span className="text-xs text-gray-400 inline-block ml-1">「田中ジェーン」</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                    placeholder={t('formNamePlaceholder')}
                  />
                </div>
                {/* 2. Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('formEmailLabel')} <span className="text-xs text-gray-400 inline-block ml-1">「name@example.com」</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                    placeholder={t('formEmailPlaceholder')}
                  />
                </div>
              </div>
              {/* 3. Preferred Contact Method */}
              <div className="mt-3">
                <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('formContactMethodLabel')} <span className="text-xs text-gray-400 inline-block ml-1">「メール / 電話 / LINE / WhatsApp」</span>
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy appearance-none dark:bg-gray-700 dark:text-white"
                  value={contactMethod}
                  onChange={e => {
                    setContactMethod(e.target.value);
                    setShowContactId(["Phone", "LINE", "WhatsApp"].includes(e.target.value));
                  }}
                >
                  <option value="Email">{language === 'en' ? 'Email' : 'メール'}</option>
                  <option value="Phone">{language === 'en' ? 'Phone' : '電話'}</option>
                  <option value="LINE">LINE</option>
                  <option value="WhatsApp">WhatsApp</option>
                </select>
              </div>
              {/* 4. Phone / Messaging ID (conditional) */}
              {showContactId && (
                <div className="mt-3">
                  <label htmlFor="contactId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('formPhoneIdLabel')} <span className="text-xs text-gray-400 inline-block ml-1">「+81 90‑… / @yourline」</span>
                  </label>
                  <input
                    type="text"
                    id="contactId"
                    name="contactId"
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                    placeholder={t('formPhoneIdPlaceholder')}
                  />
                </div>
              )}
              {/* 5. Move-in Window */}
              <div className="mt-3">
                <label htmlFor="moveWindow" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('formMoveInLabel')} <span className="text-xs text-gray-400 inline-block ml-1">「30日以内 / 1‑か月 / 3‑6か月 / まだ調査中」</span>
                </label>
                <select
                  id="moveWindow"
                  name="moveWindow"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy appearance-none dark:bg-gray-700 dark:text-white"
                  defaultValue=""
                >
                  <option value="">{t('formMoveInSelect')}</option>
                  <option value="Next 30 days">{t('formMoveInOption1')}</option>
                  <option value="1-3 months">{t('formMoveInOption2')}</option>
                  <option value="3-6 months">{t('formMoveInOption3')}</option>
                  <option value="Just researching">{t('formMoveInOption4')}</option>
                </select>
              </div>
              {/* 6. Monthly Budget */}
              <div className="mt-3">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('formBudgetLabel')} <span className="text-xs text-gray-400 inline-block ml-1">「家賃予算」</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy appearance-none dark:bg-gray-700 dark:text-white"
                  defaultValue=""
                >
                  {currentBudgetOptions.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <div className="flex items-center mt-1">
                  <HelpCircle className="w-3 h-3 text-navy dark:text-gold mr-1" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {t('formBudgetHelp')}
                  </span>
                </div>
              </div>
              {/* 7. Preferred Area(s) */}
              <div className="mt-3">
                <label htmlFor="areas" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('formAreaLabel')} <span className="text-xs text-gray-400 inline-block ml-1">「千葉、横浜、23区など」</span>
                </label>
                <input
                  type="text"
                  id="areas"
                  name="areas"
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                  placeholder={t('formAreaPlaceholder')}
                />
              </div>
              {/* 8. Question or Requirement */}
              <div className="mt-3">
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('formQuestionLabel')} <span className="text-xs text-gray-400 inline-block ml-1">「ペット可、保証人なし希望など…」</span>
                </label>
                <textarea
                  id="question"
                  name="question"
                  rows={2}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                  placeholder={t('formQuestionPlaceholder')}
                />
              </div>
              {/* Submit Button */}
              <Button
                type="submit"
                className="mt-3 w-full bg-gold text-navy hover:bg-gold-dark font-semibold rounded-md py-1.5 px-4 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
              >
                {t('formSubmitButton')}
              </Button>
            </form>
          </div>

          <div className="grid grid-rows-2 h-full gap-3">
            <div className="bg-navy rounded-2xl p-4 text-white shadow-lg">
              <h3 className="text-lg font-bold mb-2">{t('contactInfo')}</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold text-sm">{t('addressLabel')}</h4>
                    <p className="text-white/80 text-sm">
                      {t('addressText')}{' '}
                      <a 
                        href="https://maps.app.goo.gl/UmtHAbAzg3dqSCYp6" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gold hover:text-gold-light underline transition-colors"
                      >
                        [{t('googleMapsLink')}]
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold text-sm">{t('hoursText')}</h4>
                    <p className="text-white/80 text-sm">{t('mondayFriday')}</p>
                    <p className="text-white/80 text-sm">{t('saturday')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold/10 dark:bg-gold/5 rounded-2xl p-4 border border-gold/30">
  <h3 className="text-base font-bold text-navy dark:text-white mb-1">
    {language === 'en' ? 'Need Help Getting Started?' : '🏠 最初の一歩を踏み出そう'}
  </h3>
  <p className="text-gray-600 dark:text-gray-300 mb-2 text-xs">
    {language === 'en' 
      ? "Answer a few quick questions and we'll guide you toward the right rental options."
      : "どこから始めればいいか分からない？"}
  </p>
  <a
    href="https://app.youform.com/forms/1taqrobw"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gold text-navy hover:bg-gold-dark w-full flex items-center justify-center rounded-md py-1.5 px-3 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold mb-2"
  >
    {language === 'en' ? 'Start the Quiz' : 'クイック診断を始める'}
  </a>
  {/* Decorative property types image for desktop only, inside the card below the button */}
  <img
    src="/renter-quiz-helper-ibuki-style.png"
    alt="Quiz Helper Illustration"
    className="hidden lg:block mx-auto mt-2 max-w-[150px] rounded-xl shadow-lg border border-navy/10 bg-white/70"
    style={{ objectFit: 'contain', height: '100px' }}
  />
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


