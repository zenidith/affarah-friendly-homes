import { useLanguage } from '@/context/LanguageContext';

const Team = () => {
  const { t, language } = useLanguage();
  const isJapanese = language === 'ja';

  return (
    <section 
      id="team"
      className="relative py-20 bg-slate-50 dark:bg-navy-dark overflow-hidden"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-2xl md:text-3xl font-bold mb-4">
            {isJapanese ? 'チーム紹介' : 'Our Team'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {isJapanese 
              ? 'Affarahは、お客様の生活に寄り添う不動産サービスです。代表のIbukiをご紹介します。' 
              : 'Affarah is a real estate service that walks with you through life. Meet Ibuki, our founder and representative.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
          {/* Image Column */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-gold max-w-xs h-auto lg:h-[600px]">
              <img 
                src="/images/Ibuki.png" 
                alt="Ibuki - Affarah Founder" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-center">
                <h4 className="text-white font-bold">Ibuki</h4>
                <p className="text-white/80 text-sm">Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* Content Column - Single Card */}
          <div className="lg:col-span-3 h-full">
            <div className="bg-white dark:bg-navy-light rounded-lg shadow-md p-6 border-l-4 border-gold h-auto lg:h-[600px] flex flex-col relative">
              <div className="space-y-6 overflow-y-auto pr-2 max-h-full">
                <div>
                  <h3 className="font-bold text-xl mb-2 flex items-center text-navy dark:text-gold">
                    <span className="mr-2 text-2xl">💬</span> 
                    {isJapanese ? 'ただの不動産屋ではなく、友だちのように' : 'A Friend, Not Just an Agent'}
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100">
                    {isJapanese 
                      ? 'Affarahは「家を借りることに詳しい友だち」という意味。気軽に、なんでも相談できる存在です。' 
                      : 'Affarah stands for "A Friend Familiar About Renting A House." You can ask us anything — no stress, no pressure.'}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2 flex items-center text-navy dark:text-gold">
                    <span className="mr-2 text-2xl">🌍</span> 
                    {isJapanese ? '多言語・多文化に対応' : 'Multilingual & Culturally Aware'}
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100">
                    {isJapanese 
                      ? '代表のIbukiをはじめ、海外経験のあるスタッフが、日本人にも外国人にも寄り添って丁寧にサポートします。' 
                      : 'With international experience, we support Japanese and foreign clients with empathy and clarity.'}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2 flex items-center text-navy dark:text-gold">
                    <span className="mr-2 text-2xl">👟</span> 
                    {isJapanese ? '信頼から始まったブランド' : 'Built on Real Trust'}
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100">
                    {isJapanese 
                      ? '最初のお客様は、ダンス仲間。Affarahはコミュニティから生まれ、信頼関係を大切にしています。' 
                      : 'The first client came from Ibuki\'s dance circle. Affarah grew from community, not commissions.'}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2 flex items-center text-navy dark:text-gold">
                    <span className="mr-2 text-2xl">🏠</span> 
                    {isJapanese ? '家は、人生の土台' : 'Homes Shape Lives'}
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100">
                    {isJapanese 
                      ? '家選びは、出会い・生活・お金・価値観すべてに影響する大切な決断。私たちは一緒に「納得できる選択」を目指します。' 
                      : 'We believe renting isn\'t just paperwork — it shapes who you meet, how you live, and where you grow.'}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-2 flex items-center text-navy dark:text-gold">
                    <span className="mr-2 text-2xl">🧭</span> 
                    {isJapanese ? '未来志向 × 地域密着' : 'Looking Forward'}
                  </h3>
                  <p className="text-gray-900 dark:text-gray-100">
                    {isJapanese 
                      ? '千葉を拠点に、関東全域でオンライン対応。賃貸だけでなく、売買・民泊・空き家活用にも力を入れています。' 
                      : 'From Chiba to all of Kanto, we\'re expanding into sales, minpaku, and akiya to build better futures.'}
                  </p>
                </div>
              </div>
              {/* === POSTCARD IMAGE IN TEXT AREA START === */}
              <img
                src="/images/ibuki_real.jpg"
                alt="Ibuki - Real Photo (Postcard in text area)"
                className="absolute bottom-4 right-4 w-72 h-auto p-1 bg-white border-2 border-gold shadow-xl transform rotate-[6deg] transition-all duration-300 ease-in-out z-10 opacity-50"
              />
              {/* === POSTCARD IMAGE IN TEXT AREA END === */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
