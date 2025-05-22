import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Terms = () => {
  const { language } = useLanguage();
  const isJapanese = language === 'ja';

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <main className="pt-24 pb-16 min-h-screen relative overflow-hidden">
        {/* Background elements using the new gradient */}
        <div className="wave-background" />
        <div className="wave-pattern" />
        <div className="wave-green" />
        <div className="wave-dots" />
        
        {/* Content container with solid background for better readability */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white dark:bg-navy-dark rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-navy-light">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-navy dark:text-gold text-center">
              {isJapanese ? '利用規約' : 'Terms and Conditions'}
            </h1>
            
            {isJapanese ? (
              // Japanese Terms
              <div className="space-y-6 text-gray-800 dark:text-white/90">
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">規約への同意</h2>
                  <p>Affarahウェブサイト（以下「本サイト」といいます）へアクセスし、利用することにより、これらの利用規約に同意したものとみなされます。これらの規約に同意いただけない場合は、本サイトのご利用をお控えください。</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">サイトの利用について</h2>
                  <p>本サイトは、法令に従い、第三者の権利を侵害したり、本サイトの利用や享受を妨げたりすることのない方法でのみご利用いただけます。</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">物件情報について</h2>
                  <p>本サイト上の物件情報は、情報提供のみを目的としています。</p>
                  <p className="mt-2">Affarahは、掲載されている物件情報の正確性、完全性、または在庫状況について保証いたしません。</p>
                  <p className="mt-2">物件の価格や空き状況は、予告なく変更される場合があります。</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">知的財産権</h2>
                  <p>本サイトに掲載されているテキスト、グラフィック、ロゴ、画像など全てのコンテンツは、Affarahに帰属し、日本および国際著作権法によって保護されています。</p>
                  <p className="mt-2">弊社の書面による事前の許可なく、本サイトのコンテンツを複製、配布、利用することはできません。</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">プライバシー</h2>
                  <p>本サイトの利用には、当社のプライバシーポリシーも適用されます。プライバシーポリシーは、本利用規約の一部を構成します。</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">免責事項</h2>
                  <p>Affarahは、本サイトまたは本サイトに含まれる情報の利用により発生した損害について、一切の責任を負いません。</p>
                  <p className="mt-2">本サイトやリンク先の第三者サイトに掲載されている情報の正確性、完全性、有用性について、保証するものではありません。</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">準拠法および管轄裁判所</h2>
                  <p>本利用規約は、日本法に準拠し解釈されます。また、本利用規約に関連して生じる紛争は、東京地方裁判所を専属的な管轄裁判所とします。</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">利用規約の変更</h2>
                  <p>Affarahは、いつでも本利用規約を変更する権利を有します。変更後の規約は本サイト上に掲載いたします。変更後も本サイトを利用された場合、変更後の利用規約に同意したものとみなされます。</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">お問い合わせ先</h2>
                  <p>本利用規約についてご質問がある場合は、以下までご連絡ください。</p>
                  <p className="mt-2">メールアドレス： info@affarah.co.jp</p>
                  <p className="mt-1">住所： 千葉県千葉市緑区大膳野町1056-30</p>
                </section>
                
                <p className="text-sm text-gray-600 dark:text-gold/70 mt-8 text-right">最終更新日：2025年5月20日</p>
              </div>
            ) : (
              // English Terms
              <div className="space-y-6 text-gray-800 dark:text-white/90">
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Acceptance of Terms</h2>
                  <p>By accessing and using the Affarah website (the "Site"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Site.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Use of the Site</h2>
                  <p>You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this Site by any third party.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Property Listings</h2>
                  <p>All property listings on this Site are provided for informational purposes only.</p>
                  <p className="mt-2">Affarah does not guarantee the accuracy, completeness, or availability of any listed properties.</p>
                  <p className="mt-2">Prices and availability of properties are subject to change without notice.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Intellectual Property</h2>
                  <p>All content on this Site, including but not limited to text, graphics, logos, and images, is the property of Affarah and is protected by Japanese and international copyright laws.</p>
                  <p className="mt-2">You may not reproduce, distribute, or use any content from this Site without our express written permission.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Privacy</h2>
                  <p>Your use of this Site is also governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Limitation of Liability</h2>
                  <p>Affarah is not liable for any damages arising from the use of this Site or the information contained herein.</p>
                  <p className="mt-2">We do not guarantee the accuracy, completeness, or usefulness of any information on the Site or any linked third-party site.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Governing Law</h2>
                  <p>These Terms and Conditions are governed by and construed in accordance with the laws of Japan. Any disputes arising under or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of Tokyo, Japan.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Changes to Terms</h2>
                  <p>Affarah reserves the right to modify these Terms and Conditions at any time. We will post the modified terms on this Site. Your continued use of the Site after any changes indicates your acceptance of the modified Terms and Conditions.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Contact Information</h2>
                  <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                  <p className="mt-2">Email: info@affarah.co.jp</p>
                  <p className="mt-1">Address: 1056-30 Daizenno-cho, Midori-ku, Chiba-shi, Chiba, Japan</p>
                </section>
                
                <p className="text-sm text-gray-600 dark:text-gold/70 mt-8 text-right">Last updated: May 20, 2025</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
