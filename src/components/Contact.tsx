
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Clock, HelpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: language === 'en' ? "Message sent!" : "メッセージが送信されました！",
        description: language === 'en' 
          ? "Thank you for contacting Affarah. We'll get back to you shortly."
          : "アファラーにお問い合わせいただきありがとうございます。まもなくご連絡いたします。",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        moveDate: '',
        budget: '',
        location: '',
        message: ''
      });
    }, 1500);
  };

  // Budget options based on language
  const budgetOptions = {
    en: [
      { value: "", label: "Select a range" },
      { value: "Under ¥70,000", label: "Under ¥70,000" },
      { value: "¥70,000 - ¥100,000", label: "¥70,000 - ¥100,000" },
      { value: "¥100,000 - ¥150,000", label: "¥100,000 - ¥150,000" },
      { value: "¥150,000 - ¥200,000", label: "¥150,000 - ¥200,000" },
      { value: "Above ¥200,000", label: "Above ¥200,000" }
    ],
    ja: [
      { value: "", label: "範囲を選択" },
      { value: "¥70,000以下", label: "¥70,000以下" },
      { value: "¥70,000 - ¥100,000", label: "¥70,000 - ¥100,000" },
      { value: "¥100,000 - ¥150,000", label: "¥100,000 - ¥150,000" },
      { value: "¥150,000 - ¥200,000", label: "¥150,000 - ¥200,000" },
      { value: "¥200,000以上", label: "¥200,000以上" }
    ]
  };

  const currentBudgetOptions = language === 'en' ? budgetOptions.en : budgetOptions.ja;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">{t('contact')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('letsStart')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-6">{t('getInTouch')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('yourName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                    placeholder={language === 'en' ? "John Smith" : "山田太郎"}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('emailAddress')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                    placeholder={language === 'en' ? "john@example.com" : "taro@example.com"}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                    placeholder="+81 90 1234 5678"
                  />
                </div>
                <div>
                  <label htmlFor="moveDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('movingDate')}
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">{t('approxDate')}</span>
                  </label>
                  <input
                    type="date"
                    id="moveDate"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('monthlyBudget')}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy appearance-none dark:bg-gray-700 dark:text-white"
                  >
                    {currentBudgetOptions.map((option, index) => (
                      <option key={index} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                  <div className="flex items-center mt-1">
                    <HelpCircle className="w-4 h-4 text-navy dark:text-gold mr-1" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {t('helpsBudget')}
                    </span>
                  </div>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('preferredLocation')}
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                    placeholder={language === 'en' ? "Tokyo, Chiba, etc." : "東京、千葉など"}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('yourMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy focus:border-navy dark:bg-gray-700 dark:text-white"
                  placeholder={language === 'en' 
                    ? "Tell us about your requirements, questions, or anything else we should know..."
                    : "ご要件、ご質問、または他に知っておくべきことについて教えてください..."}
                ></textarea>
              </div>

              <Button 
                type="submit" 
                className="btn-primary w-full"
                disabled={loading}
              >
                {loading 
                  ? (language === 'en' ? 'Sending...' : '送信中...') 
                  : t('sendMessage')}
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
                    <p className="text-white/80">Chiba City, Chiba Prefecture, Japan</p>
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
              <h3 className="text-xl font-bold text-navy dark:text-white mb-4">{t('scheduleConsultation')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('notSureStart')}
              </p>
              <Button className="bg-gold text-navy hover:bg-gold-dark w-full">
                {t('bookConsultation')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
