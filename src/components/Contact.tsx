import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Clock, HelpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
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

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mt-8 text-3xl md:text-4xl font-bold text-center">{t('contact')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('letsStart')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">{t('getInTouch')}</h3>
            
            <form action="https://formsubmit.co/k.sheenan@gmail.com" method="POST">
              {/* Hidden fields for customization */}
              <input type="hidden" name="_subject" value="New Contact Submission from Affarah" />
              <input type="hidden" name="_next" value="https://affarah.com/thanks" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Your Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name <span className="text-xs text-gray-400 block">「田中ジェーン」</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                    placeholder="Jane Tanaka"
                  />
                </div>
                {/* 2. Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address <span className="text-xs text-gray-400 block">「name@example.com」</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              {/* 3. Preferred Contact Method */}
              <div className="mt-6">
                <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Preferred Contact Method <span className="text-xs text-gray-400 block">「メール / 電話 / LINE / WhatsApp」</span>
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy appearance-none dark:bg-gray-700 dark:text-white"
                  value={contactMethod}
                  onChange={e => {
                    setContactMethod(e.target.value);
                    setShowContactId(["Phone", "LINE", "WhatsApp"].includes(e.target.value));
                  }}
                >
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="LINE">LINE</option>
                  <option value="WhatsApp">WhatsApp</option>
                </select>
              </div>
              {/* 4. Phone / Messaging ID (conditional) */}
              {showContactId && (
                <div className="mt-6">
                  <label htmlFor="contactId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone / Messaging ID <span className="text-xs text-gray-400 block">「+81 90‑… / @yourline」</span>
                  </label>
                  <input
                    type="text"
                    id="contactId"
                    name="contactId"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                    placeholder="+81 90‑… / @yourline"
                  />
                </div>
              )}
              {/* 5. Move-in Window */}
              <div className="mt-6">
                <label htmlFor="moveWindow" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Move-in Window <span className="text-xs text-gray-400 block">「30日以内 / 1‑3か月 / 3‑6か月 / まだ調査中」</span>
                </label>
                <select
                  id="moveWindow"
                  name="moveWindow"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy appearance-none dark:bg-gray-700 dark:text-white"
                  defaultValue=""
                >
                  <option value="">Select</option>
                  <option value="Next 30 days">Next 30 days</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="Just researching">Just researching</option>
                </select>
              </div>
              {/* 6. Monthly Budget */}
              <div className="mt-6">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Monthly Budget <span className="text-xs text-gray-400 block">「家賃予算」</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy appearance-none dark:bg-gray-700 dark:text-white"
                  defaultValue=""
                >
                  {currentBudgetOptions.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                  ))}
                </select>
                <div className="flex items-center mt-1">
                  <HelpCircle className="w-4 h-4 text-navy dark:text-gold mr-1" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Helps us filter listings. / 物件を絞り込むのに役立ちます。
                  </span>
                </div>
              </div>
              {/* 7. Preferred Area(s) */}
              <div className="mt-6">
                <label htmlFor="areas" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Preferred Area(s) <span className="text-xs text-gray-400 block">「千葉、横浜、23区など」</span>
                </label>
                <input
                  type="text"
                  id="areas"
                  name="areas"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                  placeholder="Chiba, Yokohama, open to 23-wards"
                />
              </div>
              {/* 8. Question or Requirement */}
              <div className="mt-6">
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Question or Requirement <span className="text-xs text-gray-400 block">「ペット可、保証人なし希望など…」</span>
                </label>
                <textarea
                  id="question"
                  name="question"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                  placeholder="Tell us about pets, guarantor, etc."
                />
              </div>
              {/* Submit Button */}
              <Button
                type="submit"
                className="mt-8 w-full bg-gold text-navy hover:bg-gold-dark font-semibold rounded-md py-3 px-4 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
              >
                Send My Request → / お問い合わせを送信 →
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-navy rounded-2xl p-8 text-white shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">{t('contactInfo')}</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold">{t('addressText')}</h4>
                    <p className="text-white/80">{t('chibaAddress')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold">{t('emailText')}</h4>
                    <a href="mailto:contact@affarah.com" className="text-white/80 hover:text-white transition-colors">
                      contact@affarah.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold">{t('phoneText')}</h4>
                    <a href="tel:+81-XX-XXXX-XXXX" className="text-white/80 hover:text-white transition-colors">
                      +81-XX-XXXX-XXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gold">{t('hoursText')}</h4>
                    <p className="text-white/80">{t('mondayFriday')}</p>
                    <p className="text-white/80">{t('saturday')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold/10 dark:bg-gold/5 rounded-2xl p-8 border border-gold/30">
  <h3 className="text-xl font-bold text-navy dark:text-white mb-4">
    {language === 'en' ? 'Need Help Getting Started?' : '🏠 最初の一歩を踏み出そう'}
  </h3>
  <p className="text-gray-600 dark:text-gray-300 mb-6">
    {language === 'en' 
      ? "Answer a few quick questions and we’ll guide you toward the right rental options."
      : "どこから始めればいいか分からない？"}
  </p>
  <a
    href="https://app.youform.com/forms/1taqrobw"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gold text-navy hover:bg-gold-dark w-full flex items-center justify-center rounded-md py-3 px-4 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold mb-8"
  >
    {language === 'en' ? 'Start the Quiz' : 'クイック診断を始める'}
  </a>
  {/* Decorative property types image for desktop only, inside the card below the button */}
  <img
    src="/renter-quiz-helper-ibuki-style.png"
    alt="Quiz Helper Illustration"
    className="hidden lg:block mx-auto mt-8 max-w-xs rounded-xl shadow-lg border border-navy/10 bg-white/70"
    style={{ objectFit: 'contain' }}
  />
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


