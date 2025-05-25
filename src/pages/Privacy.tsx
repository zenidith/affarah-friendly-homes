import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

interface PrivacyProps {
  lang: "en" | "ja";
}

const Privacy = ({ lang }: PrivacyProps) => {
  const { language, setLanguageFromUrl } = useLanguage();
  const isJapanese = language === 'ja';

  // Scroll to top when page loads and set language from URL
  useEffect(() => {
    window.scrollTo(0, 0);
    setLanguageFromUrl(lang);
  }, [lang, setLanguageFromUrl]);

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
              {isJapanese ? 'プライバシーポリシー' : 'Privacy Policy'}
            </h1>
            
            {isJapanese ? (
              // Japanese Privacy Policy
              <div className="space-y-6 text-gray-800 dark:text-white/90">
                <section>
                  <p>本プライバシーポリシーは、当社サービスご利用時における情報の収集・利用・開示に関する方針および手続きについて説明し、利用者のプライバシー権利や法的保護についてご案内するものです。</p>
                  <p className="mt-4">当社は、お客様の個人情報をサービスの提供および改善のために利用します。本サービスをご利用いただくことで、本プライバシーポリシーに従った情報の収集および利用に同意したものとみなされます。</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">用語の解釈および定義</h2>
                  <h3 className="text-lg font-medium mb-2 text-navy dark:text-gold/90">解釈</h3>
                  <p>本ポリシーで冒頭が大文字の単語は、以下の定義に従います。単数・複数を問わず同一の意味を持ちます。</p>
                  
                  <h3 className="text-lg font-medium mt-4 mb-2 text-navy dark:text-gold/90">定義</h3>
                  <p><span className="font-semibold">アカウント</span>：お客様が当社サービスまたはその一部にアクセスするために作成された固有のアカウント。</p>
                  <p className="mt-2"><span className="font-semibold">当社</span>（「Affarah」、「当社」、「私たち」）：Affarah（千葉県千葉市緑区大膳野町1056-30、日本）を指します。</p>
                  <p className="mt-2"><span className="font-semibold">クッキー（Cookies）</span>：ウェブサイトによってお客様のコンピューターやモバイル端末等に保存される小さなファイルで、閲覧履歴等を含みます。</p>
                  <p className="mt-2"><span className="font-semibold">国</span>：日本</p>
                  <p className="mt-2"><span className="font-semibold">端末</span>：コンピューター、携帯電話、タブレット等サービスにアクセスできるあらゆる端末。</p>
                  <p className="mt-2"><span className="font-semibold">個人情報</span>：識別された、または識別可能な個人に関連するあらゆる情報。</p>
                  <p className="mt-2"><span className="font-semibold">サービス</span>：Affarahウェブサイト（https://affarah.co.jp）および関連サービスを指します。</p>
                  <p className="mt-2"><span className="font-semibold">サービスプロバイダー</span>：Affarahのためにデータ処理を行う第三者（個人・法人）。</p>
                  <p className="mt-2"><span className="font-semibold">第三者ソーシャルメディアサービス</span>：GoogleやFacebookなど、ユーザーがアカウント登録やログインに利用できる外部サービス。</p>
                  <p className="mt-2"><span className="font-semibold">利用データ</span>：サービスの利用またはインフラストラクチャから自動的に生成・収集されるデータ（例：ページ滞在時間）。</p>
                  <p className="mt-2"><span className="font-semibold">お客様（あなた）</span>：サービスを利用・アクセスする個人、または該当する場合はその代理で利用・アクセスする法人・その他団体。</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">個人情報の収集と利用</h2>
                  <h3 className="text-lg font-medium mb-2 text-navy dark:text-gold/90">収集するデータの種類</h3>
                  <h4 className="font-medium mb-1 text-navy dark:text-gold/80">個人情報</h4>
                  <p>サービスのご利用にあたり、氏名、メールアドレス、電話番号などの個人情報の提供をお願いする場合があります。</p>
                  
                  <h4 className="font-medium mt-3 mb-1 text-navy dark:text-gold/80">利用データ</h4>
                  <p>サービス利用時には、IPアドレス、ブラウザ種類・バージョン、アクセス日時、滞在時間、端末識別情報等を自動的に収集します。</p>
                  
                  <h4 className="font-medium mt-3 mb-1 text-navy dark:text-gold/80">第三者ソーシャルメディアサービスからの情報</h4>
                  <p>GoogleやFacebook等のアカウントで当社サービスにログイン・登録する場合、当該アカウントに関連する情報（氏名、メールアドレス等）を取得することがあります。</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">クッキーや追跡技術について</h2>
                  <p>クッキーや類似技術を使用して利用状況の分析や利便性向上を行います。お使いのブラウザでクッキーの拒否や通知設定が可能ですが、一部サービスが利用できなくなる場合があります。</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">個人情報の利用目的</h2>
                  <p>Affarahは以下の目的でお客様の個人情報を利用します。</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>サービス提供および利用状況の把握</li>
                    <li>アカウント登録・管理</li>
                    <li>契約の履行、取引処理、ご要望への対応</li>
                    <li>ご連絡（メール、電話等）やお知らせの送信</li>
                    <li>サービス内容や関連情報のお知らせ（ご希望されない場合は配信停止可）</li>
                    <li>事業譲渡や統合等に伴うデータ移転</li>
                    <li>法令順守</li>
                    <li>利用データ分析・サービス改善</li>
                    <li>その他、ご本人の同意を得た場合</li>
                  </ul>
                  <p className="mt-4">必要に応じて、上記の目的のために第三者サービスプロバイダーや提携先と情報を共有する場合があります。</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">個人情報の保管期間</h2>
                  <p>個人情報は、本ポリシーに記載の利用目的に必要な期間のみ保管します。利用データもサービス改善のために一定期間保管します。</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">個人情報の移転</h2>
                  <p>お客様の情報は、日本国内外のサーバーで処理・保管される場合があります。適切なセキュリティ対策を講じ、個人情報の保護に努めます。</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">個人情報の開示</h2>
                  <p>事業譲渡や法的要請等があった場合、またはお客様や第三者の権利・安全保護のため、個人情報を開示することがあります。</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">セキュリティ</h2>
                  <p>お客様の個人情報保護のため合理的な手段を講じますが、インターネット上の完全な安全性は保証できません。</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">13歳未満のお客様について</h2>
                  <p>本サービスは13歳未満の方を対象としていません。13歳未満の方から個人情報を取得したことが判明した場合は速やかに削除します。</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">外部サイトへのリンク</h2>
                  <p>本サービスには、当社以外が運営するウェブサイトへのリンクが含まれる場合があります。他サイトのプライバシーポリシーもご確認ください。</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">プライバシーポリシーの変更</h2>
                  <p>当社はプライバシーポリシーを適宜更新することがあります。最新の内容は本ページに掲載し、日付を更新します。</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">お問い合わせ</h2>
                  <p>プライバシーポリシーに関するご質問は下記までご連絡ください。</p>
                  <p className="mt-2">メールアドレス: info@affarah.co.jp</p>
                  <p className="mt-1">住所: 千葉県千葉市緑区大膳野町1056-30</p>
                </section>
                
                <p className="text-sm text-gray-600 dark:text-gold/70 mt-8 text-right">最終更新日：2025年5月20日</p>
              </div>
            ) : (
              // English Privacy Policy
              <div className="space-y-6 text-gray-800 dark:text-white/90">
                <section>
                  <p>This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of your information when you use our services and tells you about your privacy rights and how the law protects you.</p>
                  <p className="mt-4">We use your personal data to provide and improve our services. By using our services, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Interpretation and Definitions</h2>
                  <h3 className="text-lg font-medium mb-2 text-navy dark:text-gold/90">Interpretation</h3>
                  <p>The words in which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning whether they appear in singular or plural.</p>
                  
                  <h3 className="text-lg font-medium mt-4 mb-2 text-navy dark:text-gold/90">Definitions</h3>
                  <p>For the purposes of this Privacy Policy:</p>
                  <p className="mt-2"><span className="font-semibold">Account</span> means a unique account created for you to access our service or parts of our service.</p>
                  <p className="mt-2"><span className="font-semibold">Company</span> (referred to as "Affarah", "we", "us" or "our" in this Agreement) refers to Affarah, 千葉県千葉市緑区大膳野町1056-30, Japan.</p>
                  <p className="mt-2"><span className="font-semibold">Cookies</span> are small files placed on your computer, mobile device, or any other device by a website, containing details of your browsing history on that website among its many uses.</p>
                  <p className="mt-2"><span className="font-semibold">Country</span> refers to: Japan</p>
                  <p className="mt-2"><span className="font-semibold">Device</span> means any device that can access the Service such as a computer, cellphone, or digital tablet.</p>
                  <p className="mt-2"><span className="font-semibold">Personal Data</span> is any information that relates to an identified or identifiable individual.</p>
                  <p className="mt-2"><span className="font-semibold">Service</span> refers to the Affarah website (https://affarah.co.jp) and any related services.</p>
                  <p className="mt-2"><span className="font-semibold">Service Provider</span> means any natural or legal person who processes the data on behalf of Affarah. It refers to third-party companies or individuals employed to facilitate our service, provide service on our behalf, perform service-related tasks, or assist us in analyzing how our service is used.</p>
                  <p className="mt-2"><span className="font-semibold">Third-party Social Media Service</span> refers to any website or social network service through which a user can log in or create an account to use our service.</p>
                  <p className="mt-2"><span className="font-semibold">Usage Data</span> refers to data collected automatically, either generated by the use of the service or from the service infrastructure itself (for example, the duration of a page visit).</p>
                  <p className="mt-2"><span className="font-semibold">You</span> means the individual accessing or using the service, or the company, or other legal entity on behalf of which such individual is accessing or using the service, as applicable.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Collecting and Using Your Personal Data</h2>
                  <h3 className="text-lg font-medium mb-2 text-navy dark:text-gold/90">Types of Data Collected</h3>
                  <h4 className="font-medium mb-1 text-navy dark:text-gold/80">Personal Data</h4>
                  <p>While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Usage Data</li>
                  </ul>
                  
                  <h4 className="font-medium mt-3 mb-1 text-navy dark:text-gold/80">Usage Data</h4>
                  <p>Usage Data is collected automatically when using our service. Usage Data may include information such as your device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</p>
                  <p className="mt-2">If you access our service through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</p>
                  
                  <h4 className="font-medium mt-3 mb-1 text-navy dark:text-gold/80">Information from Third-Party Social Media Services</h4>
                  <p>You may be able to create an account and log in to use our service through Third-party Social Media Services (such as Google, Facebook, etc.). If you do so, we may collect personal data already associated with your third-party account, such as your name, email address, and contact list.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Tracking Technologies and Cookies</h2>
                  <p>We use cookies and similar tracking technologies to track activity on our service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, you may not be able to use some parts of our service.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Use of Your Personal Data</h2>
                  <p>Affarah may use your Personal Data for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>To provide and maintain our service, including to monitor usage.</li>
                    <li>To manage your account and registration.</li>
                    <li>To fulfill contracts, process transactions, or manage your requests.</li>
                    <li>To contact you by email, phone, or other means regarding updates or information.</li>
                    <li>To provide you with news, special offers, or general information about our services (unless you opt out).</li>
                    <li>For business transfers (such as mergers, acquisitions, or asset sales).</li>
                    <li>To comply with legal obligations.</li>
                    <li>For data analysis and service improvement.</li>
                    <li>For any other purpose with your consent.</li>
                  </ul>
                  
                  <p className="mt-4">We may share your personal information in the following situations:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>With service providers for analytics, contact, or business purposes.</li>
                    <li>For business transfers.</li>
                    <li>With affiliates, business partners, or other users (as applicable).</li>
                    <li>With your consent.</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Retention of Your Personal Data</h2>
                  <p>Affarah will retain your personal data only as long as necessary for the purposes set out in this Privacy Policy. We may also retain usage data for internal analysis purposes.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Transfer of Your Personal Data</h2>
                  <p>Your information may be transferred to and maintained on computers located outside your jurisdiction where the data protection laws may differ. We will take reasonable steps to ensure your data is treated securely.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Disclosure of Your Personal Data</h2>
                  <p>We may disclose your personal data for business transactions, legal requirements, or to protect the rights, safety, or property of Affarah, our users, or the public.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Security of Your Personal Data</h2>
                  <p>We strive to use commercially acceptable means to protect your personal data but cannot guarantee its absolute security.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Children's Privacy</h2>
                  <p>Our service does not address anyone under the age of 13. We do not knowingly collect personal information from children under 13.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Links to Other Websites</h2>
                  <p>Our service may contain links to other websites not operated by us. We strongly advise you to review the privacy policy of every site you visit.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Changes to This Privacy Policy</h2>
                  <p>We may update our Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-3 text-navy dark:text-gold">Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, you can contact us:</p>
                  <p className="mt-2">By email: info@affarah.co.jp</p>
                  <p className="mt-1">Address: 千葉県千葉市緑区大膳野町1056-30</p>
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

export default Privacy;
