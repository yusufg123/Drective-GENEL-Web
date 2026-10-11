import type { Metadata } from 'next'
import LegalDocument, { type LegalSection } from '@/components/LegalDocument'
import { getLocale } from '@/lib/i18n-server'

const address = 'Halkalı Merkez Mah. Halkalı Cad No:281/23 Ofis No:34, 34303 Küçükçekmece/İstanbul'

const content = {
  tr: {
    metaTitle: 'Gizlilik Politikası',
    metaDescription: 'Drective gizlilik politikası ve kişisel verilerin korunması.',
    title: 'Gizlilik Politikası',
    updated: 'Son Güncellenme Tarihi: 23 Eylül 2025',
    sections: [
      {
        title: '1. Giriş',
        blocks: [
          {
            type: 'p',
            text: 'Drective olarak, ziyaretçilerimizin ve kullanıcılarımızın kişisel verilerinin güvenliğine büyük önem vermekteyiz. 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, kişisel verilerinizin işlenmesi, saklanması ve paylaşılmasına ilişkin usul ve esaslar aşağıda detaylı bir şekilde açıklanmıştır.',
          },
        ],
      },
      {
        title: '2. Veri Sorumlusu',
        blocks: [
          {
            type: 'fields',
            items: [
              ['Şirket Ünvanı', 'D-RECTIVE YAZILIM VE DANIŞMANLIK LİMİTED ŞİRKETİ'],
              ['Adres', address],
              ['E-posta', 'drectivegames@gmail.com'],
            ],
          },
        ],
      },
      {
        title: '3. Hangi Kişisel Verileriniz İşlenmektedir?',
        blocks: [
          { type: 'p', text: 'Tarafımızca işlenen kişisel verileriniz şunlardır:' },
          {
            type: 'ul',
            items: [
              'Kimlik bilgileriniz (ad, soyad, doğum tarihi vb.)',
              'İletişim bilgileriniz (adres, e-posta, telefon numarası vb.)',
              'Müşteri işlem bilgileriniz (sipariş bilgileri, fatura bilgileri vb.)',
              'İşlem güvenliği bilgileriniz (IP adresi, çerez bilgileri, konum bilgileri vb.)',
              'Pazarlama bilgileriniz (tercihler, beğeniler, kullanım alışkanlıkları vb.)',
            ],
          },
        ],
      },
      {
        title: '4. Kişisel Verilerinizin İşlenme Amaçları',
        blocks: [
          { type: 'p', text: 'Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:' },
          {
            type: 'ul',
            items: [
              'Sözleşmelerin kurulması ve ifası',
              'Kanunlardan kaynaklanan yükümlülüklerin yerine getirilmesi',
              'Müşteri ilişkileri yönetimi',
              'Ürün ve hizmetlerimizin geliştirilmesi',
              'Pazarlama faaliyetlerinin yürütülmesi',
              'Hukuki ve ticari güvenliğin temini',
            ],
          },
        ],
      },
      {
        title: '5. Kişisel Verilerin Aktarılması',
        blocks: [
          { type: 'p', text: 'Kişisel verileriniz, kanunlarda öngörülen sınırlar çerçevesinde ve yasalara uygun olarak;' },
          {
            type: 'ul',
            items: [
              'İş ortaklarımıza',
              'Tedarikçilerimize',
              'Kanunen yetkili kamu kurumlarına',
              'Kanunen yetkili özel kişilere',
              'Yurtdışına (gerekli güvenlik önlemleri alınarak)',
            ],
          },
          { type: 'p', text: 'aktarılabilmektedir.' },
        ],
      },
      {
        title: '6. Kişisel Veri Sahibinin Hakları',
        blocks: [
          {
            type: 'p',
            text: "KVKK'nın 11. maddesi uyarınca herkes, veri sorumlusuna başvurarak aşağıdaki haklarını kullanabilir:",
          },
          {
            type: 'ol',
            items: [
              'Kişisel veri işlenip işlenmediğini öğrenme,',
              'Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,',
              'Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,',
              'Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,',
              'Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,',
              "KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,",
              'Düzeltme, silme veya yok edilme işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,',
              'İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,',
              'Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme haklarına sahiptir.',
            ],
          },
        ],
      },
      {
        title: '7. Değişiklik Hakkı',
        blocks: [
          {
            type: 'p',
            text: 'Şirketimiz, işbu gizlilik politikasında değişiklik yapma hakkını saklı tutar. Yapılan değişiklikler, ilgili mevzuata uygun olarak yayınlandıktan hemen sonra yürürlüğe girer.',
          },
        ],
      },
    ] satisfies LegalSection[],
  },
  en: {
    metaTitle: 'Privacy Policy',
    metaDescription: 'Drective privacy policy and protection of personal data.',
    title: 'Privacy Policy',
    updated: 'Last updated: September 23, 2025',
    sections: [
      {
        title: '1. Introduction',
        blocks: [
          {
            type: 'p',
            text: 'At Drective, we take the security of our visitors’ and users’ personal data seriously. The procedures and principles for processing, storing and sharing your personal data under the Turkish Personal Data Protection Law No. 6698 ("KVKK") are explained in detail below.',
          },
        ],
      },
      {
        title: '2. Data Controller',
        blocks: [
          {
            type: 'fields',
            items: [
              ['Company name', 'D-RECTIVE YAZILIM VE DANIŞMANLIK LİMİTED ŞİRKETİ'],
              ['Address', `${address}, Turkey`],
              ['Email', 'drectivegames@gmail.com'],
            ],
          },
        ],
      },
      {
        title: '3. What Personal Data Do We Process?',
        blocks: [
          { type: 'p', text: 'We process the following personal data:' },
          {
            type: 'ul',
            items: [
              'Identity information (name, surname, date of birth, etc.)',
              'Contact information (address, email, phone number, etc.)',
              'Customer transaction information (order details, billing details, etc.)',
              'Transaction security information (IP address, cookie data, location data, etc.)',
              'Marketing information (preferences, interests, usage habits, etc.)',
            ],
          },
        ],
      },
      {
        title: '4. Purposes of Processing',
        blocks: [
          { type: 'p', text: 'Your personal data is processed for the following purposes:' },
          {
            type: 'ul',
            items: [
              'Concluding and performing contracts',
              'Fulfilling legal obligations',
              'Managing customer relationships',
              'Improving our products and services',
              'Carrying out marketing activities',
              'Ensuring legal and commercial security',
            ],
          },
        ],
      },
      {
        title: '5. Transfer of Personal Data',
        blocks: [
          { type: 'p', text: 'Within the limits set by law and in compliance with applicable legislation, your personal data may be transferred to:' },
          {
            type: 'ul',
            items: [
              'Our business partners',
              'Our suppliers',
              'Legally authorized public institutions',
              'Legally authorized private persons',
              'Recipients abroad (with the necessary security measures in place)',
            ],
          },
        ],
      },
      {
        title: '6. Rights of the Data Subject',
        blocks: [
          {
            type: 'p',
            text: 'Under Article 11 of the KVKK, anyone may apply to the data controller to exercise the following rights:',
          },
          {
            type: 'ol',
            items: [
              'To learn whether personal data is being processed,',
              'To request information if personal data has been processed,',
              'To learn the purpose of processing and whether the data is used in line with that purpose,',
              'To know the third parties, in Turkey or abroad, to whom personal data is transferred,',
              'To request correction of incomplete or inaccurately processed personal data,',
              'To request deletion or destruction of personal data under the conditions set out in Article 7 of the KVKK,',
              'To request that third parties to whom the data was transferred be notified of any correction, deletion or destruction,',
              'To object to an outcome against them arising from analysis of the processed data exclusively through automated systems,',
              'To claim compensation for damages arising from unlawful processing of personal data.',
            ],
          },
        ],
      },
      {
        title: '7. Right to Amend',
        blocks: [
          {
            type: 'p',
            text: 'Our company reserves the right to amend this privacy policy. Changes take effect immediately after they are published in accordance with the relevant legislation.',
          },
        ],
      },
    ] satisfies LegalSection[],
  },
}

export function generateMetadata(): Metadata {
  const c = content[getLocale()]
  return { title: c.metaTitle, description: c.metaDescription }
}

export default function PrivacyPolicyPage() {
  const c = content[getLocale()]
  return <LegalDocument title={c.title} updated={c.updated} sections={c.sections} />
}
