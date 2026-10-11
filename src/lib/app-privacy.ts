import type { LegalBlock } from '@/components/LegalDocument'
import type { Locale } from './i18n'

export type PolicySection = {
  id: string
  title: string
  blocks: LegalBlock[]
}

type PolicyContent = {
  eyebrow: string
  title: string
  appTitle: (name: string) => string
  effective: string
  intro: string
  appIntro: (name: string) => string
  dedicatedPolicy: (name: string) => string
  dedicatedPolicyLink: string
  summaryTitle: string
  summary: { title: string; text: string }[]
  tocTitle: string
  productsTitle: string
  productsText: string
  kind: { game: string; app: string }
  status: { live: string; soon: string }
  viewPolicy: string
  allProducts: string
  contactTitle: string
  contactText: string
  sections: PolicySection[]
}

const controller = 'D-RECTIVE YAZILIM VE DANIŞMANLIK LİMİTED ŞİRKETİ'
const address = 'Halkalı Merkez Mah. Halkalı Cad No:281/23 Ofis No:34, 34303 Küçükçekmece/İstanbul'
export const privacyEmail = 'drectivegames@gmail.com'

export const appPrivacy: Record<Locale, PolicyContent> = {
  tr: {
    eyebrow: 'Oyun ve uygulamalar',
    title: 'Gizlilik Politikası',
    appTitle: (name) => `${name} Gizlilik Politikası`,
    effective: 'Yürürlük tarihi: 11 Ekim 2026',
    intro:
      'Bu politika, Drective markasıyla App Store, Google Play, Steam ve diğer platformlarda yayınlanan tüm oyun ve uygulamalarımızda kişisel verilerin nasıl işlendiğini açıklar.',
    appIntro: (name) =>
      `Bu sayfa, ${name} dahil Drective markasıyla yayınlanan tüm oyun ve uygulamalar için geçerli olan genel gizlilik politikamızdır.`,
    dedicatedPolicy: (name) =>
      `${name} için ürüne özel ek bir gizlilik metni de bulunuyor. Ürüne özel metin, bu genel politikayla çelişen konularda önceliklidir.`,
    dedicatedPolicyLink: 'Ürüne özel politikayı aç',
    summaryTitle: 'Kısaca',
    summary: [
      { title: 'Verinizi satmayız', text: 'Kişisel verilerinizi satmaz, kiralamaz veya reklam amacıyla takas etmeyiz.' },
      { title: 'Çoğu oyun hesap istemez', text: 'Oyun ilerlemesi ve ayarlar genellikle yalnızca cihazınızda saklanır.' },
      { title: 'İzinler isteğe bağlı', text: 'Kamera, konum veya bildirim gibi izinleri yalnızca ilgili özellik için isteriz.' },
      { title: 'Kontrol sizde', text: 'Verilerinize erişmek veya sildirmek için bize her zaman yazabilirsiniz.' },
    ],
    tocTitle: 'İçindekiler',
    productsTitle: 'Kapsanan ürünler',
    productsText: 'Aşağıdaki ürünlerin tamamı bu politikaya tabidir. Yeni ürünlerimiz yayınlandıkça listeye eklenir.',
    kind: { game: 'Oyun', app: 'Uygulama' },
    status: { live: 'Yayında', soon: 'Yakında' },
    viewPolicy: 'Bu ürünün politika sayfası',
    allProducts: 'Tüm ürünler için genel politika',
    contactTitle: 'Sorunuz mu var?',
    contactText: 'Gizlilikle ilgili her türlü soru ve talebiniz için bize e-posta gönderin. Genellikle 30 gün içinde yanıt veririz.',
    sections: [
      {
        id: 'kapsam',
        title: '1. Kapsam ve veri sorumlusu',
        blocks: [
          {
            type: 'p',
            text: 'Bu politika; mobil oyunlarımız, mobil uygulamalarımız, bilgisayar oyunlarımız ve bunlarla ilgili destek hizmetlerimiz için geçerlidir. Drective web sitesinin kullanımı ayrıca site gizlilik politikamızla düzenlenir.',
          },
          {
            type: 'fields',
            items: [
              ['Veri sorumlusu', controller],
              ['Marka', 'Drective'],
              ['Adres', address],
              ['E-posta', privacyEmail],
            ],
          },
          {
            type: 'p',
            text: 'Bazı ürünlerimiz mağazalarda ekip üyelerimizin geliştirici hesapları üzerinden yayınlanabilir. Bu durumda da bu politika geçerlidir ve tüm talepleriniz için yukarıdaki iletişim bilgilerini kullanabilirsiniz.',
          },
        ],
      },
      {
        id: 'toplanan-veriler',
        title: '2. İşlediğimiz bilgiler',
        blocks: [
          {
            type: 'p',
            text: 'İşlenen bilgiler ürüne ve kullandığınız özelliklere göre değişir. Her ürün yalnızca çalışması için gereken bilgileri işler. Mağaza sayfasındaki gizlilik etiketleri (App Store “Uygulama Gizliliği”, Google Play “Veri güvenliği”) ilgili ürünün kullandığı kategorileri gösterir.',
          },
          {
            type: 'ul',
            items: [
              'Cihazda saklanan veriler: oyun ilerlemesi, skorlar, satın alınan oyun içi öğeler, ses ve titreşim ayarları gibi tercihler. Bu veriler genellikle sunucularımıza gönderilmez.',
              'Hesap bilgileri (yalnızca hesap gerektiren ürünlerde): e-posta adresi, kullanıcı adı, profil bilgileri ve Apple ile Giriş veya Google ile Giriş kullanırsanız bu sağlayıcıların paylaştığı kimlik bilgileri.',
              'Oluşturduğunuz içerikler: notlar, planlar, mesajlar, yorumlar, fotoğraf, ses veya video gibi ürün içinde paylaştığınız ya da kaydettiğiniz içerikler.',
              'Cihaz ve teknik bilgiler: IP adresi, cihaz modeli, işletim sistemi sürümü, dil, uygulama sürümü, reklam tanımlayıcısı veya uygulama tanımlayıcıları, hata ve performans kayıtları.',
              'Kullanım bilgileri: hangi ekranların açıldığı, bölüm ilerlemesi ve özellik kullanımı gibi ürünü geliştirmek için kullanılan bilgiler.',
              'Satın alma bilgileri: uygulama içi satın almalar ve abonelikler Apple, Google veya Valve (Steam) tarafından işlenir. Ödeme kartı bilgileriniz bize ulaşmaz; yalnızca satın alma doğrulaması için gerekli işlem bilgilerini alabiliriz.',
              'Destek yazışmaları: bize e-posta gönderdiğinizde e-posta adresiniz ve mesajınızda paylaştığınız bilgiler.',
            ],
          },
        ],
      },
      {
        id: 'izinler',
        title: '3. Cihaz izinleri',
        blocks: [
          {
            type: 'p',
            text: 'Bazı özellikler cihaz izni gerektirebilir. İzinleri yalnızca ilgili özelliği kullandığınızda isteriz ve reddetmeniz durumunda ürünün geri kalanını kullanmaya devam edebilirsiniz.',
          },
          {
            type: 'ul',
            items: [
              'Kamera ve fotoğraflar: belge tarama, profil fotoğrafı veya içerik paylaşımı için.',
              'Mikrofon: sesli not veya video kaydı gibi ses özellikleri için.',
              'Konum: yakındaki etkinlik, maç veya içerikleri göstermek için. Konum vermeden de ürünü kullanabilirsiniz.',
              'Bildirimler: hatırlatmalar, mesajlar ve önemli güncellemeler için.',
            ],
          },
          { type: 'p', text: 'Verdiğiniz izinleri istediğiniz zaman cihazınızın ayarlarından kapatabilirsiniz.' },
        ],
      },
      {
        id: 'amaclar',
        title: '4. Bilgileri neden kullanıyoruz',
        blocks: [
          {
            type: 'ul',
            items: [
              'Oyun ve uygulamaları çalıştırmak, ilerlemenizi ve tercihlerinizi saklamak',
              'Hesabınızı oluşturmak, giriş yapmanızı sağlamak ve içeriklerinizi senkronize etmek',
              'Satın almaları doğrulamak ve satın aldığınız içerikleri sunmak',
              'Hataları tespit etmek, performansı ölçmek ve ürünlerimizi geliştirmek',
              'Reklam içeren ücretsiz ürünlerde reklam göstermek ve reklam performansını ölçmek',
              'Destek taleplerinizi yanıtlamak ve sizinle iletişim kurmak',
              'Dolandırıcılığı, kötüye kullanımı ve güvenlik ihlallerini önlemek',
              'Yasal yükümlülüklerimizi yerine getirmek',
            ],
          },
          {
            type: 'p',
            text: 'Bu bilgileri KVKK’nın 5. maddesinde ve geçerli olduğu yerlerde GDPR’ın 6. maddesinde yer alan hukuki sebeplere dayanarak işleriz: sözleşmenin ifası, meşru menfaat, hukuki yükümlülük ve gerektiğinde açık rızanız.',
          },
        ],
      },
      {
        id: 'ucuncu-taraflar',
        title: '5. Üçüncü taraf hizmetler',
        blocks: [
          {
            type: 'p',
            text: 'Ürünlerimiz, aşağıdaki hizmet sağlayıcılardan yalnızca ihtiyaç duyduklarını kullanır. Bu sağlayıcılar bilgileri kendi gizlilik politikalarına göre işler.',
          },
          {
            type: 'ul',
            items: [
              'Google AdMob ve Google Mobile Ads SDK: reklam içeren ürünlerde reklam gösterimi ve ölçümü (policies.google.com/privacy)',
              'Google Firebase (Analytics, Crashlytics, Cloud Messaging): kullanım analizi, hata raporlama ve bildirimler',
              'Unity: oyun motoru ve ilgili çalışma zamanı hizmetleri',
              'Supabase: hesap, veritabanı ve dosya saklama hizmetleri',
              'Apple, Google ve Valve (Steam): dağıtım, giriş, satın alma ve abonelik işlemleri',
              'Yapay zekâ hizmet sağlayıcıları: yapay zekâ özelliği bulunan ürünlerde, yalnızca sizin işlenmesini istediğiniz içerik özelliği sunmak için gönderilir ve modellerin eğitiminde kullanılmasına izin verilmez',
            ],
          },
        ],
      },
      {
        id: 'reklam',
        title: '6. Reklam ve takip',
        blocks: [
          {
            type: 'p',
            text: 'Ücretsiz ürünlerimizin bazıları reklam gösterir. Reklam ortaklarımız, reklam sunmak ve ölçmek için cihaz tanımlayıcıları, IP adresi ve reklam etkileşimleri gibi bilgileri işleyebilir.',
          },
          {
            type: 'ul',
            items: [
              'iOS’ta, başka şirketlerin uygulama ve sitelerinde takip yapılmadan önce Apple’ın Uygulama Takip Şeffaflığı izni istenir. Reddederseniz ürünü kullanmaya devam edebilirsiniz.',
              'Avrupa Ekonomik Alanı, Birleşik Krallık ve İsviçre gibi rıza gerektiren bölgelerde Google’ın rıza mesajı gösterilir ve tercihlerinizi oyun ayarlarından değiştirebilirsiniz.',
              'Ödüllü reklamlar her zaman isteğe bağlıdır.',
              'Kişiselleştirilmiş reklamları cihaz ayarlarınızdan (iOS: Ayarlar → Gizlilik ve Güvenlik → Takip; Android: Ayarlar → Google → Reklamlar) sınırlandırabilirsiniz.',
            ],
          },
        ],
      },
      {
        id: 'paylasim',
        title: '7. Bilgilerin paylaşılması',
        blocks: [
          {
            type: 'p',
            text: 'Kişisel verilerinizi satmayız. Bilgilerinizi yalnızca şu durumlarda paylaşırız:',
          },
          {
            type: 'ul',
            items: [
              'Yukarıda belirtilen hizmet sağlayıcılarla, ürünü sunmak için gereken ölçüde',
              'Ürün içinde herkese açık olarak paylaşmayı seçtiğiniz içeriklerde, diğer kullanıcılarla',
              'Kanunen yetkili kurum ve kuruluşların talebi üzerine veya haklarımızı korumak için',
              'Bir birleşme, devir veya varlık satışı durumunda, bu politikadaki korumalar sürdürülerek',
            ],
          },
        ],
      },
      {
        id: 'saklama',
        title: '8. Saklama ve silme',
        blocks: [
          {
            type: 'p',
            text: 'Bilgileri yalnızca toplandıkları amaç için gerektiği süre boyunca saklarız. Cihazda saklanan veriler, uygulamayı sildiğinizde genellikle cihazınızdan da silinir.',
          },
          {
            type: 'p',
            text: 'Hesap gerektiren ürünlerde hesabınızı uygulama içindeki ayarlardan silebilir ya da drectivegames@gmail.com adresine yazarak silinmesini isteyebilirsiniz. Hesap silindiğinde ilgili kişisel veriler, yasal saklama yükümlülükleri saklı kalmak kaydıyla makul süre içinde silinir veya anonim hale getirilir.',
          },
        ],
      },
      {
        id: 'guvenlik',
        title: '9. Güvenlik ve yurt dışı aktarım',
        blocks: [
          {
            type: 'p',
            text: 'Bilgilerinizi korumak için şifreli bağlantı (HTTPS), erişim kontrolü ve en az yetki ilkesi gibi makul teknik ve idari önlemler alırız. Hiçbir sistem tamamen güvenli değildir; bir ihlal durumunda yasaların gerektirdiği bildirimleri yaparız.',
          },
          {
            type: 'p',
            text: 'Hizmet sağlayıcılarımızın sunucuları Türkiye dışında bulunabilir. Bu aktarımlar KVKK’nın 9. maddesi ve geçerli olduğu yerlerde GDPR’daki aktarım kurallarına uygun şekilde yapılır.',
          },
        ],
      },
      {
        id: 'cocuklar',
        title: '10. Çocukların gizliliği',
        blocks: [
          {
            type: 'p',
            text: 'Ürünlerimiz özellikle 13 yaşın (bulunduğunuz ülkede daha yüksekse o yaşın) altındaki çocuklara yönelik değildir ve bu yaştaki çocuklardan bilerek kişisel veri toplamayız. Bir çocuğun bize kişisel veri sağladığını düşünüyorsanız bize yazın; bu bilgileri sileriz.',
          },
        ],
      },
      {
        id: 'haklariniz',
        title: '11. Haklarınız',
        blocks: [
          {
            type: 'p',
            text: 'KVKK’nın 11. maddesi, GDPR ve bulunduğunuz yerdeki diğer mevzuat kapsamında şu haklara sahip olabilirsiniz:',
          },
          {
            type: 'ul',
            items: [
              'Verilerinizin işlenip işlenmediğini öğrenme ve bir kopyasını isteme',
              'Eksik veya yanlış verilerin düzeltilmesini isteme',
              'Verilerinizin silinmesini veya yok edilmesini isteme',
              'İşlemenin kısıtlanmasını isteme ve işlemeye itiraz etme',
              'Verilerinizin taşınmasını isteme',
              'Verdiğiniz rızayı istediğiniz zaman geri alma',
              'Kişisel Verileri Koruma Kurumu’na veya bulunduğunuz ülkedeki veri koruma otoritesine şikâyette bulunma',
            ],
          },
          {
            type: 'p',
            text: 'Taleplerinizi drectivegames@gmail.com adresine, ilgili ürünün adını belirterek gönderebilirsiniz. Kimliğinizi doğrulamak için ek bilgi isteyebiliriz.',
          },
        ],
      },
      {
        id: 'degisiklikler',
        title: '12. Değişiklikler',
        blocks: [
          {
            type: 'p',
            text: 'Bu politikayı zaman zaman güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yayınlanır ve yürürlük tarihi güncellenir. Önemli değişiklikleri ayrıca ürün içinde veya mağaza sayfası üzerinden duyururuz.',
          },
        ],
      },
    ],
  },
  en: {
    eyebrow: 'Games and apps',
    title: 'Privacy Policy',
    appTitle: (name) => `${name} Privacy Policy`,
    effective: 'Effective date: October 11, 2026',
    intro:
      'This policy explains how personal data is handled in all games and apps published under the Drective brand on the App Store, Google Play, Steam and other platforms.',
    appIntro: (name) =>
      `This is our general privacy policy, which applies to all games and apps published under the Drective brand, including ${name}.`,
    dedicatedPolicy: (name) =>
      `${name} also has an additional product-specific privacy notice. Where it differs from this general policy, the product-specific notice takes precedence.`,
    dedicatedPolicyLink: 'Open the product-specific policy',
    summaryTitle: 'At a glance',
    summary: [
      { title: 'We don’t sell your data', text: 'We never sell, rent or trade your personal data for advertising.' },
      { title: 'Most games need no account', text: 'Game progress and settings are usually stored only on your device.' },
      { title: 'Permissions are optional', text: 'We only ask for camera, location or notification access for the feature that needs it.' },
      { title: 'You’re in control', text: 'You can always write to us to access or delete your data.' },
    ],
    tocTitle: 'Contents',
    productsTitle: 'Covered products',
    productsText: 'All of the products below are covered by this policy. New products are added to the list as they launch.',
    kind: { game: 'Game', app: 'App' },
    status: { live: 'Live', soon: 'Coming soon' },
    viewPolicy: 'Policy page for this product',
    allProducts: 'General policy for all products',
    contactTitle: 'Questions?',
    contactText: 'Email us with any privacy question or request. We usually respond within 30 days.',
    sections: [
      {
        id: 'kapsam',
        title: '1. Scope and data controller',
        blocks: [
          {
            type: 'p',
            text: 'This policy applies to our mobile games, mobile apps, PC games and the related support services. Use of the Drective website is covered separately by our website privacy policy.',
          },
          {
            type: 'fields',
            items: [
              ['Data controller', controller],
              ['Brand', 'Drective'],
              ['Address', `${address}, Turkey`],
              ['Email', privacyEmail],
            ],
          },
          {
            type: 'p',
            text: 'Some of our products may be published in the stores through the developer accounts of our team members. This policy still applies, and you can use the contact details above for any request.',
          },
        ],
      },
      {
        id: 'toplanan-veriler',
        title: '2. Information we process',
        blocks: [
          {
            type: 'p',
            text: 'The information processed depends on the product and the features you use. Each product only processes what it needs to work. The privacy labels on each store page (App Store “App Privacy”, Google Play “Data safety”) show the categories a specific product uses.',
          },
          {
            type: 'ul',
            items: [
              'Data stored on your device: game progress, scores, purchased in-game items and preferences such as sound and vibration settings. This data is usually not sent to our servers.',
              'Account information (only in products that require an account): email address, username, profile details and, if you use Sign in with Apple or Google Sign-In, the identity information those providers share.',
              'Content you create: notes, plans, messages, comments, photos, audio or video that you share or save in the product.',
              'Device and technical information: IP address, device model, operating system version, language, app version, advertising or app identifiers, crash and performance logs.',
              'Usage information: such as screens opened, level progress and feature usage, used to improve the product.',
              'Purchase information: in-app purchases and subscriptions are processed by Apple, Google or Valve (Steam). Your payment card details never reach us; we may only receive the transaction details needed to verify a purchase.',
              'Support communications: your email address and the information you include when you email us.',
            ],
          },
        ],
      },
      {
        id: 'izinler',
        title: '3. Device permissions',
        blocks: [
          {
            type: 'p',
            text: 'Some features may require a device permission. We only ask when you use the related feature, and you can keep using the rest of the product if you decline.',
          },
          {
            type: 'ul',
            items: [
              'Camera and photos: for document scanning, profile pictures or sharing content.',
              'Microphone: for audio features such as voice notes or video recording.',
              'Location: to show nearby events, matches or content. You can use the product without sharing your location.',
              'Notifications: for reminders, messages and important updates.',
            ],
          },
          { type: 'p', text: 'You can turn off any permission at any time in your device settings.' },
        ],
      },
      {
        id: 'amaclar',
        title: '4. Why we use information',
        blocks: [
          {
            type: 'ul',
            items: [
              'To run our games and apps and save your progress and preferences',
              'To create your account, let you sign in and sync your content',
              'To verify purchases and deliver the content you bought',
              'To detect bugs, measure performance and improve our products',
              'To show ads and measure ad performance in free, ad-supported products',
              'To answer your support requests and communicate with you',
              'To prevent fraud, abuse and security incidents',
              'To comply with our legal obligations',
            ],
          },
          {
            type: 'p',
            text: 'We rely on the legal bases in Article 5 of the Turkish KVKK and, where applicable, Article 6 of the GDPR: performance of a contract, legitimate interests, legal obligations and, where required, your consent.',
          },
        ],
      },
      {
        id: 'ucuncu-taraflar',
        title: '5. Third-party services',
        blocks: [
          {
            type: 'p',
            text: 'Each product uses only the providers it needs from the list below. These providers process information under their own privacy policies.',
          },
          {
            type: 'ul',
            items: [
              'Google AdMob and the Google Mobile Ads SDK: showing and measuring ads in ad-supported products (policies.google.com/privacy)',
              'Google Firebase (Analytics, Crashlytics, Cloud Messaging): usage analytics, crash reporting and notifications',
              'Unity: game engine and related runtime services',
              'Supabase: account, database and file storage services',
              'Apple, Google and Valve (Steam): distribution, sign-in, purchases and subscriptions',
              'AI service providers: in products with AI features, only the content you ask us to process is sent to provide that feature, and it may not be used to train their models',
            ],
          },
        ],
      },
      {
        id: 'reklam',
        title: '6. Advertising and tracking',
        blocks: [
          {
            type: 'p',
            text: 'Some of our free products show ads. Our advertising partners may process device identifiers, IP address and ad interactions to deliver and measure ads.',
          },
          {
            type: 'ul',
            items: [
              'On iOS, Apple’s App Tracking Transparency permission is requested before any tracking across other companies’ apps and websites. You can decline and keep using the product.',
              'In regions that require consent, such as the EEA, the UK and Switzerland, Google’s consent message is shown, and you can change your choices in the game settings.',
              'Rewarded ads are always optional.',
              'You can limit personalised ads in your device settings (iOS: Settings → Privacy & Security → Tracking; Android: Settings → Google → Ads).',
            ],
          },
        ],
      },
      {
        id: 'paylasim',
        title: '7. Sharing information',
        blocks: [
          { type: 'p', text: 'We do not sell your personal data. We only share information:' },
          {
            type: 'ul',
            items: [
              'With the service providers listed above, as far as needed to provide the product',
              'With other users, for content you choose to share publicly in the product',
              'With legally authorised authorities upon request, or to protect our rights',
              'In a merger, acquisition or asset sale, with the protections in this policy maintained',
            ],
          },
        ],
      },
      {
        id: 'saklama',
        title: '8. Retention and deletion',
        blocks: [
          {
            type: 'p',
            text: 'We keep information only for as long as needed for the purpose it was collected for. Data stored on your device is usually removed when you delete the app.',
          },
          {
            type: 'p',
            text: 'In products that require an account, you can delete your account from the in-app settings or request deletion by emailing drectivegames@gmail.com. When an account is deleted, the related personal data is deleted or anonymised within a reasonable time, subject to legal retention obligations.',
          },
        ],
      },
      {
        id: 'guvenlik',
        title: '9. Security and international transfers',
        blocks: [
          {
            type: 'p',
            text: 'We use reasonable technical and organisational measures such as encrypted connections (HTTPS), access controls and least-privilege access to protect your information. No system is completely secure; in the event of a breach we will make the notifications required by law.',
          },
          {
            type: 'p',
            text: 'Our service providers’ servers may be located outside Turkey. These transfers are made in line with Article 9 of the KVKK and, where applicable, the GDPR transfer rules.',
          },
        ],
      },
      {
        id: 'cocuklar',
        title: '10. Children’s privacy',
        blocks: [
          {
            type: 'p',
            text: 'Our products are not specifically directed at children under 13 (or a higher age where required in your country), and we do not knowingly collect personal data from them. If you believe a child has provided us with personal data, contact us and we will delete it.',
          },
        ],
      },
      {
        id: 'haklariniz',
        title: '11. Your rights',
        blocks: [
          {
            type: 'p',
            text: 'Under Article 11 of the KVKK, the GDPR and other laws where you live, you may have the right to:',
          },
          {
            type: 'ul',
            items: [
              'Know whether your data is processed and request a copy',
              'Request correction of incomplete or inaccurate data',
              'Request deletion or destruction of your data',
              'Request restriction of, or object to, processing',
              'Request data portability',
              'Withdraw your consent at any time',
              'Complain to the Turkish Personal Data Protection Authority or the data protection authority in your country',
            ],
          },
          {
            type: 'p',
            text: 'Send your request to drectivegames@gmail.com and include the name of the product. We may ask for additional information to verify your identity.',
          },
        ],
      },
      {
        id: 'degisiklikler',
        title: '12. Changes',
        blocks: [
          {
            type: 'p',
            text: 'We may update this policy from time to time. The current version is always published on this page with an updated effective date. We will also announce significant changes in the product or on its store page.',
          },
        ],
      },
    ],
  },
}
