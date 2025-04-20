import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ja';

// Define translation types
type TranslationKey = 
  | 'services' 
  | 'about' 
  | 'testimonials' 
  | 'contact'
  | 'getStarted'
  | 'startYourSearch'
  | 'learnMore'
  | 'languageSupport'
  | 'noHiddenFees'
  | 'realPersonGuidance'
  | 'fullEnglishSupport'
  | 'transparentPricing'
  | 'dedicatedAgent'
  | 'findHome'
  | 'nextHome'
  | 'aboutAffarah'
  | 'aboutDescription1'
  | 'aboutDescription2'
  | 'aboutDescription3'
  | 'ourStory'
  | 'meetTheTeam'
  | 'helpingYou'
  | 'yearsExperience'
  | 'englishSupport'
  | 'happyClients'
  | 'clientSupport'
  | 'testimonialsTitle'
  | 'testimonialsDescription'
  | 'readyToFind'
  | 'letsStart'
  | 'getInTouch'
  | 'yourName'
  | 'emailAddress'
  | 'phoneNumber'
  | 'movingDate'
  | 'approxDate'
  | 'monthlyBudget'
  | 'selectRange'
  | 'preferredLocation'
  | 'helpsBudget'
  | 'yourMessage'
  | 'sendMessage'
  | 'contactInfo'
  | 'addressText'
  | 'emailText'
  | 'phoneText'
  | 'hoursText'
  | 'mondayFriday'
  | 'saturday'
  | 'scheduleConsultation'
  | 'notSureStart'
  | 'bookConsultation'
  | 'footerDescription'
  | 'propertySearch'
  | 'applicationSupport'
  | 'moveInAssistance'
  | 'rentalConsultations'
  | 'neighborhoodGuides'
  | 'aboutUs'
  | 'ourTeam'
  | 'testimonials'
  | 'blog'
  | 'careers'
  | 'termsService'
  | 'privacyPolicy'
  | 'cookiePolicy'
  | 'allRightsReserved'
  | 'affarahMeaning'
  | 'chibaAddress';

// Define translations
const translations: Partial<Record<TranslationKey, { en: string; ja: string }>> = {
  services: {
    en: 'Services',
    ja: 'サービス'
  },
  about: {
    en: 'About',
    ja: '会社概要'
  },
  testimonials: {
    en: 'Testimonials',
    ja: 'お客様の声'
  },
  contact: {
    en: 'Contact',
    ja: 'お問い合わせ'
  },
  getStarted: {
    en: 'Get Started',
    ja: '始めましょう'
  },
  startYourSearch: {
    en: 'Start Your Search',
    ja: '検索を開始'
  },
  learnMore: {
    en: 'Learn More',
    ja: '詳細を見る'
  },
  languageSupport: {
    en: 'Language Support',
    ja: '言語サポート'
  },
  noHiddenFees: {
    en: 'No Hidden Fees',
    ja: '追加料金なし'
  },
  realPersonGuidance: {
    en: 'Real-Person Guidance',
    ja: '専任サポート'
  },
  fullEnglishSupport: {
    en: 'Full English and Japanese support throughout the entire rental process.',
    ja: '賃貸プロセス全体を通して、英語と日本語の完全サポートを提供します。'
  },
  transparentPricing: {
    en: 'Transparent pricing with no surprises or additional charges.',
    ja: '透明な料金設定で、予想外の追加料金はありません。'
  },
  dedicatedAgent: {
    en: 'A dedicated agent guiding you through every step of the process.',
    ja: 'プロセスの各ステップをサポートする専任エージェント。'
  },
  findHome: {
    en: "Let's find your next home in Japan",
    ja: '日本であなたの次の家を見つけましょう'
  },
  nextHome: {
    en: 'Affarah is your friendly guide to renting in Tokyo and Chiba. We speak your language and make finding a home in Japan simple and stress-free.',
    ja: 'アファラーは東京と千葉での賃貸のフレンドリーなガイドです。あなたの言語を話し、日本での家探しをシンプルでストレスフリーにします。'
  },
  aboutAffarah: {
    en: 'About Affarah',
    ja: 'アファラーについて'
  },
  aboutDescription1: {
    en: 'Affarah stands for "A Friend who is Familiar About Renting A House" because that\'s exactly what we are - your friendly guide to finding a home in Japan.',
    ja: 'アファラーは「家を借りることに詳しい友人」を意味します。なぜなら、それが私たちそのものだからです - 日本で家を見つけるためのフレンドリーなガイドです。'
  },
  aboutDescription2: {
    en: 'Founded by Ibuki, a bilingual real estate agent who understands the challenges that non-Japanese speakers face in the Tokyo and Chiba rental markets, we bridge the gap between foreign renters and Japanese property owners.',
    ja: '東京と千葉の賃貸市場で日本語を話さない方々が直面する課題を理解するバイリンガルの不動産エージェントであるイブキによって設立され、外国人の借り手と日本の物件所有者の間のギャップを埋めています。'
  },
  aboutDescription3: {
    en: 'Our mission is simple: make the rental process transparent, stress-free, and even enjoyable for English speakers in Japan.',
    ja: '私たちの使命はシンプルです：日本での英語話者のために、賃貸プロセスを透明で、ストレスフリーで、さらには楽しいものにすることです。'
  },
  ourStory: {
    en: 'Our Story',
    ja: '私たちのストーリー'
  },
  meetTheTeam: {
    en: 'Meet the Team',
    ja: 'チームを紹介'
  },
  helpingYou: {
    en: 'Helping you find your new home',
    ja: 'あなたの新しい家探しをサポート'
  },
  yearsExperience: {
    en: 'Years of Experience',
    ja: '経験年数'
  },
  englishSupport: {
    en: 'English Support',
    ja: '英語サポート'
  },
  happyClients: {
    en: 'Happy Clients',
    ja: '満足したお客様'
  },
  clientSupport: {
    en: 'Client Support',
    ja: 'クライアントサポート'
  },
  testimonialsTitle: {
    en: 'What Our Clients Say',
    ja: 'お客様の声'
  },
  testimonialsDescription: {
    en: 'Don\'t just take our word for it. Hear from expats who found their perfect home with Affarah\'s help.',
    ja: '私たちの言葉だけを信じないでください。アファラーの助けを借りて理想の家を見つけた外国人居住者の声をお聞きください。'
  },
  readyToFind: {
    en: 'Ready to find your perfect home in Japan?',
    ja: '日本で理想の住まいを見つける準備はできていますか？'
  },
  letsStart: {
    en: 'Let\'s start the conversation.',
    ja: '会話を始めましょう。'
  },
  getInTouch: {
    en: 'Get in Touch',
    ja: 'お問い合わせ'
  },
  yourName: {
    en: 'Your Name*',
    ja: 'お名前*'
  },
  emailAddress: {
    en: 'Email Address*',
    ja: 'メールアドレス*'
  },
  phoneNumber: {
    en: 'Phone Number',
    ja: '電話番号'
  },
  movingDate: {
    en: 'Moving Date',
    ja: '引越し予定日'
  },
  approxDate: {
    en: '(approximate date OK!)',
    ja: '（おおよその日付でOK！）'
  },
  monthlyBudget: {
    en: 'Monthly Budget Range',
    ja: '月間予算範囲'
  },
  selectRange: {
    en: 'Select a range',
    ja: '範囲を選択'
  },
  preferredLocation: {
    en: 'Preferred Location',
    ja: '希望エリア'
  },
  helpsBudget: {
    en: 'Helps us find options within your budget',
    ja: '予算内のオプションを見つけるのに役立ちます'
  },
  yourMessage: {
    en: 'Your Message',
    ja: 'メッセージ'
  },
  sendMessage: {
    en: 'Send Message',
    ja: 'メッセージを送信'
  },
  contactInfo: {
    en: 'Contact Information',
    ja: '連絡先情報'
  },
  addressText: {
    en: 'Address',
    ja: '住所'
  },
  emailText: {
    en: 'Email',
    ja: 'メール'
  },
  phoneText: {
    en: 'Phone',
    ja: '電話'
  },
  hoursText: {
    en: 'Hours',
    ja: '営業時間'
  },
  mondayFriday: {
    en: 'Monday - Friday: 9:00 AM - 6:00 PM',
    ja: '月曜 - 金曜: 9:00 - 18:00'
  },
  saturday: {
    en: 'Saturday: 10:00 AM - 4:00 PM',
    ja: '土曜: 10:00 - 16:00'
  },
  scheduleConsultation: {
    en: 'Schedule a Free Consultation',
    ja: '無料相談を予約'
  },
  notSureStart: {
    en: 'Not sure where to start? Book a free 30-minute consultation to discuss your housing needs.',
    ja: '何から始めればよいかわからない？無料の30分相談であなたの住宅ニーズについて話し合いましょう。'
  },
  bookConsultation: {
    en: 'Book Consultation',
    ja: '相談を予約'
  },
  footerDescription: {
    en: 'Your friendly guide to renting a home in Japan. We make the process simple and stress-free for English speakers.',
    ja: '日本での住居賃貸のためのフレンドリーなガイド。英語話者のためにプロセスをシンプルでストレスフリーにします。'
  },
  propertySearch: {
    en: 'Property Search',
    ja: '物件検索'
  },
  applicationSupport: {
    en: 'Application Support',
    ja: '申込サポート'
  },
  moveInAssistance: {
    en: 'Move-in Assistance',
    ja: '入居サポート'
  },
  rentalConsultations: {
    en: 'Rental Consultations',
    ja: '賃貸相談'
  },
  neighborhoodGuides: {
    en: 'Neighborhood Guides',
    ja: '近隣ガイド'
  },
  aboutUs: {
    en: 'About Us',
    ja: '会社概要'
  },
  ourTeam: {
    en: 'Our Team',
    ja: 'チーム紹介'
  },
  blog: {
    en: 'Blog',
    ja: 'ブログ'
  },
  careers: {
    en: 'Careers',
    ja: '採用情報'
  },
  termsService: {
    en: 'Terms of Service',
    ja: '利用規約'
  },
  privacyPolicy: {
    en: 'Privacy Policy',
    ja: 'プライバシーポリシー'
  },
  cookiePolicy: {
    en: 'Cookie Policy',
    ja: 'クッキーポリシー'
  },
  allRightsReserved: {
    en: 'All rights reserved.',
    ja: '全著作権所有。'
  },
  affarahMeaning: {
    en: 'A Friend who is Familiar About Renting A House',
    ja: '家を借りることに詳しい友人'
  },
  chibaAddress: {
    en: 'Chiba City, Chiba Prefecture, Japan',
    ja: '千葉県千葉市'
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: () => '',
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Check for stored preference
  const getInitialLanguage = (): Language => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return (savedLanguage === 'ja' || savedLanguage === 'en') ? savedLanguage : 'en';
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const toggleLanguage = () => {
    setLanguage(prevLang => {
      const newLang = prevLang === 'en' ? 'ja' : 'en';
      localStorage.setItem('preferredLanguage', newLang);
      return newLang;
    });
  };

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[key]?.[language] || key;
  };

  // Update document language attribute when language changes
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    
    // Force a re-render by updating a data attribute on the body
    document.body.setAttribute('data-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
